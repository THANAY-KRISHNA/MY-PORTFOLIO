import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap'
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thanay.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thanay Krishna C U (Thanay) | AI & Data Science Engineer Portfolio",
    template: "%s | Thanay Krishna C U"
  },
  description: "Official portfolio of Thanay Krishna C U (Thanay) – BTech Computer Science & Data Science Engineer, AI & IoT Developer specializing in intelligent systems, machine learning, and hardware-software integration.",
  applicationName: "Thanay Krishna C U Portfolio",
  keywords: [
    "THANAY KRISHNA C U",
    "Thanay Krishna C U",
    "THANAY",
    "Thanay",
    "thanay",
    "thanay krishna c u",
    "Thanay Krishna",
    "thanay krishna",
    "Thanay C U",
    "thanay cu",
    "Thanay Portfolio",
    "Thanay Krishna Portfolio",
    "Thanay Website",
    "Thanay Krishna Website",
    "Thanay Engineer",
    "Thanay Data Science",
    "Thanay AI Developer",
    "Thanay IoT",
    "Thanay IES College of Engineering",
    "Thanay Krishna Thrissur",
    "Thanay Kerala",
    "AI Engineer Thrissur",
    "Data Science Engineer Kerala",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Python Developer",
    "Next.js Developer"
  ],
  authors: [{ name: "Thanay Krishna C U", url: siteUrl }],
  creator: "Thanay Krishna C U",
  publisher: "Thanay Krishna C U",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Thanay Krishna C U (Thanay) | AI & Data Science Engineer Portfolio",
    description: "Official portfolio of Thanay Krishna C U (Thanay). Building AI & IoT solutions that create real-world impact. Explore projects, skills, achievements, and experience.",
    url: siteUrl,
    siteName: "Thanay Krishna C U (Thanay)",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanay Krishna C U (Thanay) | AI & Data Science Engineer",
    description: "Official portfolio of Thanay Krishna C U (Thanay) – Building AI & IoT solutions that create real-world impact.",
    creator: "@ThanayKrishna",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Thanay Krishna C U",
      "alternateName": [
        "Thanay",
        "THANAY",
        "thanay",
        "Thanay Krishna",
        "THANAY KRISHNA C U",
        "Thanay C U",
        "thanay krishna"
      ],
      "givenName": "Thanay",
      "additionalName": "Krishna",
      "familyName": "C U",
      "jobTitle": "AI & Data Science Engineer",
      "description": "Thanay Krishna C U (Thanay) is an AI & Data Science Engineer, IoT Developer, and BTech student in Computer Science with Data Science Engineering at IES College of Engineering, Thrissur.",
      "url": siteUrl,
      "sameAs": [
        "https://github.com/THANAY-KRISHNA",
        "https://www.linkedin.com/in/thanay-krishna-c-u-a1b67831b/"
      ],
      "email": "mailto:thanaykrishna2255@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "IES College of Engineering, Thrissur"
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "Data Science",
        "Internet of Things (IoT)",
        "Machine Learning",
        "Full Stack Web Development",
        "Python",
        "React",
        "Next.js"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Thanay Krishna C U Portfolio",
      "alternateName": [
        "Thanay Portfolio",
        "Thanay Krishna Website",
        "THANAY KRISHNA C U",
        "Thanay",
        "THANAY"
      ],
      "description": "Official website and portfolio of Thanay Krishna C U (Thanay).",
      "publisher": {
        "@id": `${siteUrl}/#person`
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      "url": siteUrl,
      "name": "Thanay Krishna C U (Thanay) - Profile & Portfolio",
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "mainEntity": {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
