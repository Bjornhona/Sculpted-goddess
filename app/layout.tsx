import type { Metadata } from "next";
import { Open_Sans, Cinzel } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-open-sans",
});

const cinzel = Cinzel({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Scupted Goddess - all you need to get in shape",
  description: "We help you create an outstanding lifestyle with tons of tips to healthy habits so that you can become a Sculpted Goddess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Scupted Goddess - all you need to get in shape" />
        <meta property="og:description" content="We help you create an outstanding lifestyle with tons of tips to healthy habits so that you can become a Sculpted Goddess." />
        <meta property="og:image" content="/images/sculpted-goddess-frontpage.png" />
        <meta property="og:url" content="https://sculptedgoddess.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${openSans.variable} ${cinzel.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
