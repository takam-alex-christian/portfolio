import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const PoppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACT PORTFOLIO",
  description: "Personal website of Alex Christian Takam. Act.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont.className} antialiased relative`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
