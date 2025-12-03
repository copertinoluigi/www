import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luigi Copertino | Consulente AI & Sviluppo Web in Basilicata",
  description: "Aiuto professionisti e PMI a Pisticci, Matera e Potenza a digitalizzarsi con Siti Web, Web App e Automazione AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
