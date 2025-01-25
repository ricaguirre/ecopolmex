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

interface RootLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" sizes="32x32" href="images/logo-32.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="images/logo-16.svg" />
        <title>{title}</title> {/* Use the title prop */}
        <meta name="description" content={description} /> {/* Use the description prop */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
