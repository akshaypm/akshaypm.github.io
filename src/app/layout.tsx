import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["400", "500"],
  variable: "--font-newsreader",
  adjustFontFallback: true,
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-geist",
  preload: false,
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-jetbrains",
  preload: false,
  adjustFontFallback: true,
});

const description =
  "Senior AI Engineer at Norwin in Bengaluru, open to remote. Ten years of production cloud, IoT, and backend. Now building Sherpa-v2 on GCP Cloud Run.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F3EC",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaypm.github.io"),
  title: "Akshay P M — Applied AI Engineer",
  description,
  authors: [{ name: "Akshay P M", url: "https://akshaypm.github.io" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Akshay P M — Applied AI Engineer",
    description,
    url: "https://akshaypm.github.io",
    siteName: "Akshay P M",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Akshay P M — Applied AI Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay P M",
  jobTitle: "Senior AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Norwin",
  },
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
    <html
      lang="en"
      className={`${newsreader.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
