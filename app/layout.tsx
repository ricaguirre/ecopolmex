import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecopolmex",
  description: "Fabricación de suelas para calzado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/images/logo-32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/images/logo-16.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}