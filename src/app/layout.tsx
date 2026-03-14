import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zinan Guo - Full Stack Developer",
  description:
    "Portfolio of Zinan Guo, a Full Stack Developer specializing in building end-to-end web applications with React, Next.js, Go, and Python.",
  keywords: ["web developer", "frontend", "backend", "portfolio", "zinan guo", "full stack developer"],
  authors: [{ name: "Zinan Guo" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://zinanguo.com/",
  },
  openGraph: {
    title: "Zinan Guo - Full Stack Developer",
    description:
      "Portfolio of Zinan Guo, a Full Stack Developer specializing in building end-to-end web applications with React, Next.js, Go, and Python.",
    url: "https://zinanguo.com/",
    siteName: "Zinan Guo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Zinan Guo - Full Stack Developer",
    description:
      "Portfolio of Zinan Guo, a Full Stack Developer specializing in building end-to-end web applications with React, Next.js, Go, and Python.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
