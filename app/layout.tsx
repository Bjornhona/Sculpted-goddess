import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.scss";
import styles from './layout.module.scss';

const inter = Inter({ subsets: ["latin"] });

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
        <Script src="https://developer.edamam.com/attribution/badge.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></Script>
      </head>
      <body className={inter.className}>
        <nav>
          <a className={styles.navbarBrand} href="/">Sculpted Goddess</a>
            <ul>
              <li><a href="/about_us">about us</a></li>
              <li><a href="/eat_healthy">eat healthy</a></li>
              {/* <li><a href="/get_toned">get toned</a></li> */}
              <li><a href="/manage_weight">manage weight</a></li>
              <li><a href="/contact_us">contact us</a></li>
            </ul>
          {/* {session.user_id ?
            <ul>
              <a href="/logout">Log Out</a>
            </ul>
            : */}
            <ul>
              <li><a href="/register">Signup</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
            {/* } */}
        </nav>

        {/* {get_flashed_messages() &&
        <header>
          <div className="alert alert-primary border text-center" role="alert">
            {get_flashed_messages() | join(" ")}
          </div>
        </header>} */}
        {children}
        {/* {!(request.path.endswith("login") || request.path.endswith("register")) && */}
          <footer>
            <div className={styles.upperFooter}>
              <a className={styles.navbarBrand} href="/">Sculpted Goddess</a>
              <ul className={styles.socialMedia}>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
              </ul>
              <ul>
                <li><a href="/about_us">about us</a></li>
                <li><a href="/eat_healthy">eat healthy</a></li>
                {/* <li><a href="/get_toned">get toned</a></li> */}
                <li><a href="/manage_weight">manage weight</a></li>
                <li><a href="/contact_us">contact us</a></li>
              </ul>
            </div>
            <div className={styles.lowerFooter}>
              <p>MADE WITH <span><i className="fas fa-heart"></i></span> BY <a href="https://www.graphicsbyasa.com/" target="_blank">Graphics by Åsa</a></p>
              <div id="edamam-badge" data-color="badge"></div>
            </div>
          </footer>
          {/* } */}
      </body>
    </html>
  );
}
