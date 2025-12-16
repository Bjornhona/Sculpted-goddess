'use client';
import styles from './footer.module.scss';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import { usePathname } from 'next/navigation';
import SocialNavbar from '../social-navbar/SocialNavbar';

const Footer = () => {
  const path = usePathname();

  return (
    !(path.endsWith("/login") || path.endsWith("/register")) &&
      <footer>
        <div className={styles.upperFooter}>
          <Logo />
          <SocialNavbar />
          <Navbar />
        </div>
        <div className={styles.lowerFooter}>
          <p>MADE WITH <span><i className="fas fa-heart"></i></span> BY <a href="https://www.graphicsbyasa.com/" target="_blank">Graphics by Åsa</a></p>
        </div>
      </footer>
  )
}

export default Footer;
