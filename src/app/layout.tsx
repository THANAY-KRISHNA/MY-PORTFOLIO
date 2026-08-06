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

export const metadata: Metadata = {
  metadataBase: new URL("https://thanaykrishna.dev"),
  title: {
    default: "Thanay Krishna C U | AI & Data Science Engineer Portfolio",
    template: "%s | Thanay Krishna C U"
  },
  description: "Official portfolio of Thanay Krishna C U – BTech Computer Science & Data Science Engineer, AI & IoT Developer specializing in intelligent systems, machine learning, and hardware-software integration.",
  keywords: [
    "Thanay Krishna C U",
    "Thanay Krishna",
    "Portfolio",
    "Data Science Engineer",
    "AI Developer",
    "IoT Engineer",
    "Computer Science",
    "IES College of Engineering",
    "Thrissur",
    "Full Stack Developer",
    "Machine Learning",
    "Python",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Thanay Krishna C U", url: "https://github.com/THANAY-KRISHNA" }],
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
    title: "Thanay Krishna C U | AI & Data Science Engineer Portfolio",
    description: "Building AI & IoT solutions that create real-world impact. Explore projects, skills, achievements, and experience.",
    url: "https://thanaykrishna.dev",
    siteName: "Thanay Krishna C U Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanay Krishna C U | AI & Data Science Engineer",
    description: "Building AI & IoT solutions that create real-world impact.",
    creator: "@ThanayKrishna",
  },
  alternates: {
    canonical: "https://thanaykrishna.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://thanaykrishna.dev/#person",
      "name": "Thanay Krishna C U",
      "jobTitle": "AI & Data Science Engineer",
      "description": "BTech student in Computer Science with Data Science Engineering at IES College of Engineering, Thrissur.",
      "url": "https://thanaykrishna.dev",
      "sameAs": [
        "https://github.com/THANAY-KRISHNA",
        "https://www.linkedin.com/in/thanay-krishna-c-u-a1b67831b/"
      ],
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
      "@id": "https://thanaykrishna.dev/#website",
      "url": "https://thanaykrishna.dev",
      "name": "Thanay Krishna C U Portfolio",
      "description": "Portfolio of Thanay Krishna C U",
      "publisher": {
        "@id": "https://thanaykrishna.dev/#person"
      },
      "inLanguage": "en-US"
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
