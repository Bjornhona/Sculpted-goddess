'use client';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();

  return (
    <nav>
      <ul id={'navbar'}>
        <li><Link href="/about_us" className={path.startsWith('/about_us') ? styles.active : undefined}>about us</Link></li>
        <li><Link href="/eat_healthy" className={path.startsWith('/eat_healthy') ? styles.active : undefined}>eat healthy</Link></li>
        {/* <Link><a href="/get_toned" className={path.startsWith('/get_toned') ? styles.active : undefined}>get toned</a></Link> */}
        {/* <li><Link href="/health_blog" className={path.startsWith('/health_blog') ? styles.active : undefined}>blog</Link></li> */}
        <li><Link href="/manage_weight" className={path.startsWith('/manage_weight') ? styles.active : undefined}>manage weight</Link></li>
        <li><Link href="/contact_us" className={path.startsWith('/contact_us') ? styles.active : undefined}>contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
