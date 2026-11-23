import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motion Pub | Vos images en mouvement",
  description:
    "Transformez vos images en vidéos publicitaires professionnelles avec Motion Pub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
