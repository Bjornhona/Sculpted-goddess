import styles from './socialNavbar.module.scss';

const SocialNavbar = () => {
  return (
    <nav>
      <ul className={styles.socialMedia}>
        <li><i className="fab fa-facebook-square"></i></li>
        <li><i className="fab fa-instagram"></i></li>
        <li><i className="fab fa-linkedin"></i></li>
      </ul>
    </nav>
  )
}

export default SocialNavbar;