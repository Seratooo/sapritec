import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAPRITEC",
  description: "Empresa de tecnologia e consultoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased scroll-smooth transition-all duration-300 snap-y snap-mandatory`}
      >
        {children}
      </body>
    </html>
  );
}
