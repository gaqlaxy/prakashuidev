import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "./components/ScrollProgress";
import "./site-core.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prakash // Creative UI Developer & Interaction Designer",
  description:
    "Premium UI development, interaction design, and motion-forward interfaces for the modern web. Specializing in Next.js, React, and AWWWARDS-level experiences.",
  keywords: [
    "UI Developer",
    "Interaction Design",
    "Motion Design",
    "Next.js",
    "React",
    "Web Design",
    "Frontend Engineering",
  ],
  authors: [{ name: "Prakash" }],
  creator: "Prakash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prakashuidev.com",
    title: "Prakash // Creative UI Developer & Interaction Designer",
    description:
      "Premium UI development, interaction design, and motion-forward interfaces.",
    images: [
      {
        url: "https://prakashuidev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prakash Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash // Creative UI Developer",
    description: "Premium UI development and interaction design.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="selection:bg-accent selection:text-white"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://prakashuidev.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
