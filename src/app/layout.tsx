import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avant Pharmaceuticals",
  description: "Avant Pharmaceuticals Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/Avant-Website-Photos/avant-logo_title.ico"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
