import { SitePage } from "@/components/site-page";

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <SitePage slug={slug.join("/")} />;
}
