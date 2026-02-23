import { Geist, Geist_Mono } from "next/font/google";
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
  title: "pixelDperfect // Creative UI Developer & Interaction Designer",
  description: "Creative UI development, interaction design, and motion-forward interfaces for the modern web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="selection:bg-accent selection:text-white">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
