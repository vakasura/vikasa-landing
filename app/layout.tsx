import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikasa | Venture Advisory for Canadian Founders",
  description: "Venture advisory and hands-on support for early-stage Canadian founders",
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
