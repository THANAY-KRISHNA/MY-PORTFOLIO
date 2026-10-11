import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig, getPersonJsonLd } from "@/lib/seo";

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
  metadataBase: new URL("https://thanay.vercel.app"),
  title: {
    default: "Thanay Krishna C U | Data Science Engineer & Developer",
    template: "%s | Thanay Krishna C U",
  },
  description: siteConfig.description,
  applicationName: "Thanay Krishna C U",
  keywords: siteConfig.keywords,
  authors: [{ name: "Thanay Krishna C U", url: "https://thanay.vercel.app" }],
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
    title: "Thanay Krishna C U | Data Science Engineer & Developer",
    description: siteConfig.description,
    url: "https://thanay.vercel.app",
    siteName: "Thanay Krishna C U",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Thanay Krishna C U | Data Science Engineer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanay Krishna C U | Data Science Engineer & Developer",
    description: siteConfig.description,
    images: ["/opengraph-image"],
    creator: siteConfig.social.twitterHandle,
  },
  alternates: {
    canonical: "https://thanay.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "ZW361SYeC9qaNjvn9U3VQiUf0dazNHX-nBaxfcxOXKc",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
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
