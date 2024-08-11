import Image from 'next/image';
import styles from './page.module.scss';
import aboutUsImage from '/public/images/about-us.png';
import aboutUs2Image from '/public/images/about-us2.png';

const AboutUs = () => {
  return (
    <>
      <header className={styles.aboutUsHeader}>
        <div className={styles.aboutUsHeaderBox}>
          <h1><span>About</span> Us</h1>
          <div className={styles.textBox}>
            <h3>We help you find your prefered recipes so that you can add them to your meal plans.</h3>
          </div>
        </div>
        <div className={styles.aboutUsHeaderImage}>
          <Image src={aboutUsImage} alt="Healthy sandwitch" />
        </div>
      </header>
      
      <div className={styles.lifestyle}>
        <div className={styles.lifestyleContentBox}>
          <div className={styles.lifestyleTextContainer}>
            <h1><span>Creating</span> your lifestyle</h1>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</h3>
          </div>
          <div className={styles.aboutUsMainImage}>
            <Image src={aboutUs2Image} alt="jumping girl"/>
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <h1><span>Our</span> services</h1>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><i className="fas fa-utensils"></i></div>
            <h3><span>Healthy recipes</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><i className="fas fa-dumbbell"></i></div>
            <h3><span>Fitness program</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><i className="fas fa-weight"></i></div>
            <h3><span>Weightloss program</span></h3>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
