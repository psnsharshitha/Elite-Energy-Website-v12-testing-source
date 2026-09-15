import { getD1 } from "@/db";

const CONTACT_EMAIL = "sales@ei-cs.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (clean(body._honey, 100)) return Response.json({ ok: true });

    const submission = {
      id: crypto.randomUUID(),
      name: clean(body.name, 120),
      email: clean(body.email, 254).toLowerCase(),
      company: clean(body.company, 160),
      phone: clean(body.phone, 60),
      message: clean(body.message, 5000),
      createdAt: new Date().toISOString(),
    };

    if (!submission.name || !EMAIL_PATTERN.test(submission.email) || !submission.message) {
      return Response.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }

    await getD1().prepare(`
      INSERT INTO contact_submissions
        (id, name, email, company, phone, message, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      submission.id,
      submission.name,
      submission.email,
      submission.company || null,
      submission.phone || null,
      submission.message,
      submission.createdAt,
    ).run();

    let emailSent = false;
    try {
      const emailPayload = new FormData();
      emailPayload.set("name", submission.name);
      emailPayload.set("email", submission.email);
      emailPayload.set("company", submission.company);
      emailPayload.set("phone", submission.phone);
      emailPayload.set("message", submission.message);
      emailPayload.set("submitted_at", submission.createdAt);
      emailPayload.set("_subject", "New Elite Energy website enquiry");

      const emailResponse = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: emailPayload,
      });
      emailSent = emailResponse.ok;
    } catch {
      // The enquiry is safely stored even if the email notification is unavailable.
    }

    return Response.json({ ok: true, emailSent });
  } catch (error) {
    console.error("Contact submission failed", error);
    return Response.json({ ok: false, error: "Unable to save the enquiry." }, { status: 500 });
  }
}
