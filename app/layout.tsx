import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick | Developer",
  description: "Frontend developer building cool things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}