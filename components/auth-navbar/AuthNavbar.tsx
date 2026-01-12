'use client';
import styles from './authNavbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/actions/auth-actions';

const AuthNavbar = ({isLoggedIn}: {isLoggedIn: boolean}) => {
  const path = usePathname();

  return (
    <nav id={'authNavbar'} className={styles.desktopNav}>
      {isLoggedIn ?
        <ul id={'login'} className={styles.active} >
          <li><Link href="#" onClick={logout}>Logout</Link></li>
        </ul>
        :
        <ul id={'login'}>
          {/* <li><Link href="/register" className={path.startsWith('/register') ? styles.active : undefined}>Signup</Link></li> */}
          <li><Link href="/login" className={path.startsWith('/login') ? styles.active : undefined}>Login</Link></li>
        </ul>
        }
    </nav>
  )
}

export default AuthNavbar;
