import styles from './header.module.scss';
import Navbar from "../navbar/Navbar";
import Logo from '../logo/Logo';
import AuthNavbar from '../auth-navbar/AuthNavbar';
import MobileNav from '../mobile-nav/MobileNav';
import { verifyAuth } from '@/lib/auth';

const Header = async () => {
  const result = await verifyAuth();
  const isLoggedIn = !!result.user;

  return (
    <header id={styles.header}>
      <Logo />
      <Navbar />
      <AuthNavbar isLoggedIn={isLoggedIn} />
      <MobileNav isLoggedIn={isLoggedIn} />
    </header>
  )
}

export default Header;
