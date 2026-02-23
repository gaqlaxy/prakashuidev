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
  title: "pixelDperfect // Senior UI Engineer & Interface Architect",
  description: "Senior UI/UX Engineering, Interaction Physics, and Performance Optimization for the modern web.",
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
