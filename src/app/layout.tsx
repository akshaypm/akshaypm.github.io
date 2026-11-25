import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const description =
  "AI engineer building the platform that deploys and evaluates AI agents, on 10+ years of production cloud and edge-to-cloud IoT.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F3EF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaypm.github.io"),
  title: "Akshay P M · Senior AI Engineer",
  description,
  authors: [{ name: "Akshay P M", url: "https://akshaypm.github.io" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Akshay P M · Senior AI Engineer",
    description,
    url: "https://akshaypm.github.io",
    siteName: "Akshay P M",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Akshay P M · Senior AI Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay P M",
  jobTitle: "Senior AI Engineer",
  worksFor: { "@type": "Organization", name: "Norwin" },
  email: "akshaypm90@gmail.com",
  url: "https://akshaypm.github.io",
  sameAs: ["https://www.linkedin.com/in/akshaypm90"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
