import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "File Integrity Checker",
  description: "Verify your files using Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
