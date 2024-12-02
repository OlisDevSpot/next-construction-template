import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Syne } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Olis Construction Website",
  description: "A smooth website for a smooth company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
