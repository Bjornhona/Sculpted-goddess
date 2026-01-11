"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./mobileNav.module.scss";
import Navbar from "../navbar/Navbar";
import AuthNavbar from "../auth-navbar/AuthNavbar";
import Link from "next/link";

interface MobileNavProps {
  isLoggedIn: boolean;
}

const MobileNav = ({ isLoggedIn }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={styles.mobileNav}>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}
        onClick={closeMenu}
      >
        <div
          className={`${styles.menu} ${isOpen ? styles.open : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav>
            <ul className={styles.desktopNav}>
              <li>
                <Link href="/" className={pathname === "/" ? styles.active : undefined}>Home</Link>
              </li>
            </ul>
          </nav>
          <Navbar />
          <AuthNavbar isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
