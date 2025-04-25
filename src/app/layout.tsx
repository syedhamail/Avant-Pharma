import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avant Pharmaceuticals | Best Pharma in Pakistan",
  description: "Avant Pharma has been operating in Pakistan for more than 11 years. Over this period, the company has successfully developed and strengthened its pharmaceutical ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* OG tags for social and search preview */}
        <meta property="og:title" content="Avant Pharmaceuticals" />
        <meta property="og:description" content="Top pharma company offering healthcare solutions in Pakistan." />
        <meta property="og:image" content="/Avant-Website-Photos/avant-logo.png" />
        <meta property="og:url" content="https://www.avantpharmaceutical.com.pk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="icon"
          href="/Avant-Website-Photos/avant-logo_title.ico"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}