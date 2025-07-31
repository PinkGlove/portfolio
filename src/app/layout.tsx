import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zinan Guo - Portfolio",
  description: "Personal portfolio showcasing web development projects and strong technical skills",
  keywords: ["web developer", "frontend", "backend", "portfolio", "zinan guo"],
  authors: [{ name: "Zinan Guo" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
