import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Kevin — Backend Developer",
  description:
    "Personal website of Alex Morgan, a product designer and developer based in Berlin.",
  openGraph: {
    title: "Alex Morgan — Product Designer & Developer",
    description: "Designing and building thoughtful digital products.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f4eee3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
