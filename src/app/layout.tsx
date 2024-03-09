import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Clone of OneDayOnly HomePage",
  description: "Written by FeatureKreachure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
