import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  weight: ["100", "200", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
        className={`${archivo.className} antialiased scroll-smooth transition-all duration-300 snap-y snap-mandatory`}
      >
        {children}
      </body>
    </html>
  );
}
