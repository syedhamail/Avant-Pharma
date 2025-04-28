import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avant Pharmaceuticals | Fast Growing Pharma in Pakistan",
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
        <meta property="og:title" content="Avant Pharmaceuticals | Fast Growing Pharma in Pakistan" />
        <meta property="og:description" content="Top Pharma Company offering Healthcare Solutions in Pakistan." />
        <meta property="og:image" content="https://www.avantpharmaceutical.com.pk/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.avantpharmaceutical.com.pk/" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Favicon (already fixed in previous step) */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}