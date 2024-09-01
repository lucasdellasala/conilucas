import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coni & Lucas",
  description: "Casamiento de Coni & Lucas",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Casamiento de Coni & Lucas",
    url: "https://conilucas.com",
    title: "Coni & Lucas",
    description: "Casamiento de Coni & Lucas",
    images: [
      {
        url: "https://conilucas.com/background.png",
        width: 1200,
        height: 630,
        alt: "Coni & Lucas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
