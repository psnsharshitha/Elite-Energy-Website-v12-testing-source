import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Energy | Energy Expertise, Connected",
  description: "Elite Energy connects operational expertise, digital intelligence and engineering assurance for complex energy operations.",
  icons: {
    icon: "/elite-energy-logo.png",
    shortcut: "/elite-energy-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
