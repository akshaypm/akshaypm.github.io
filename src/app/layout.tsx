import type { Metadata, Viewport } from "next";
import { Raleway, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Ensures mobile browsers render at device width, not zoomed-out desktop width
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Akshay P M — Staff Software Engineer, IoT Platform",
  description: "Staff Software Engineer with 10+ years designing, securing, and operating edge-to-cloud IoT systems. GE Healthcare · JLL · Deloitte · Samsung · IISc.",
  authors: [{ name: "Akshay P M" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${openSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
