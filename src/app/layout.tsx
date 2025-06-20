import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arya Mehta Portfolio",
  description: "Portfolio of Arya Mehta - Data Engineer, ML Enthusiast, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="fixed top-0 left-0 -z-10 h-full w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
