'use client';
import Link from 'next/link';
import styles from './logo.module.scss';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
  const path = usePathname();

  return (
    <nav>
      <Link href="/" className={styles.logo}>
        <Image src="/images/logo.png" alt="Sculpted Goddess" width={100} height={100} />
        <span className={`${styles.navbarBrand} ${path === '/' ? styles.active : undefined}`}>Sculpted Goddess</span>
      </Link>
    </nav>
  );
};

export default Logo;
