import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
          strategy="lazyOnload"
        ></Script>
      </head>
      <body className={`${openSans.variable} ${cinzel.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
