'use client';
import styles from './footer.module.scss';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import { usePathname } from 'next/navigation';
import SocialNavbar from '../social-navbar/SocialNavbar';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const path = usePathname();

  return (
    !(path.endsWith("/login") || path.endsWith("/register")) &&
      <footer>
        <div className={styles.upperFooter}>
          <Logo />
          <SocialNavbar />
          <Navbar isFooter={true} />
        </div>
        <div className={styles.lowerFooter}>
          <p>MADE WITH <span><FaHeart /></span> BY <a href="https://www.graphicsbyasa.com/" target="_blank">Graphics by Åsa</a></p>
        </div>
      </footer>
  )
}

export default Footer;
