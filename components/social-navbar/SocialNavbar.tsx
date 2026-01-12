import styles from './socialNavbar.module.scss';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialNavbar = () => {
  return (
    <nav>
      <ul className={styles.socialMedia}>
        <li><FaFacebookSquare /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
    </nav>
  )
}

export default SocialNavbar;