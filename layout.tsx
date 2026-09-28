import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEET 2027 TARGET TRACKER",
  description: "WOULD BE DOCTORS — NEET 2027 student portal"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
