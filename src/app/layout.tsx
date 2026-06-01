import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "../components/Navbar";
import CursorGlow from "@/components/portfolio/CursorGlow";
import SpotlightTracker from "@/components/portfolio/SpotlightTracker";
import StatusBar from "@/components/portfolio/StatusBar";

export const metadata: Metadata = {
  title: "Arya Mehta // Kernel Space",
  description:
    "Portfolio of Arya Mehta, a builder focused on data systems, backend engineering, and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="fixed inset-0 -z-20 circuit-grid opacity-35" />
        <div className="fixed inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_20%_10%,rgba(200,92,45,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(31,92,82,0.16),transparent_24%)]" />
        <Navbar />
        <CursorGlow />
        <SpotlightTracker />
        <main className="overflow-x-hidden" suppressHydrationWarning>
          {children}
        </main>
        <StatusBar />
        <Analytics />
      </body>
    </html>
  );
}
