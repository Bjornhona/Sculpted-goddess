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

const title = "Sculpted Goddess - all you need to get in shape";
const description = "We help you create an outstanding lifestyle with tons of tips to healthy habits so that you can become a Sculpted Goddess.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sculpted-goddess.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Sculpted Goddess",
    type: "website",
    images: [
      {
        url: "/images/sculpted-goddess-frontpage.png",
        width: 3364,
        height: 1851,
        alt: "Sculpted Goddess",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${cinzel.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
