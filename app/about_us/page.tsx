import Image from 'next/image';
import styles from './page.module.scss';
import aboutUsImage from '/public/images/about-us.png';
import aboutUs2Image from '/public/images/about-us2.png';
import { FaUtensils, FaDumbbell, FaWeight } from "react-icons/fa";

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
            <h3>At Sculpted Goddess, we believe fitness is more than workouts — it’s a lifestyle. Whether you’re just starting out or leveling up your healthy habits, we provide the tools, support, and motivation you need to succeed. Our approach blends simple, science-backed training, delicious healthy eating, and real-world guidance so you can feel stronger, look fitter, and live confidently every day.</h3>
          </div>
          <div className={styles.aboutUsMainImage}>
            <Image src={aboutUs2Image} alt="jumping girl" />
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <h1><span>Our</span> services</h1>
        <div className={styles.serviceContainer}>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><FaUtensils /></div>
            <h3><span>Healthy recipes</span></h3>
            <h3>Discover kitchen-friendly recipes crafted to fuel your workouts, support your goals, and satisfy your cravings. From energizing breakfasts to wholesome dinners and smart snacks, we help you eat in a way that’s balanced, enjoyable and sustainable — even on your busiest days.</h3>
          </div>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><FaDumbbell /></div>
            <h3><span>Workout guides</span></h3>
            <h3>Build strength, tone your body and boost your confidence with simple, effective workouts you can do anywhere. From energizing full-body sessions to focused core and lower-body routines, our guides are designed to help you stay consistent without spending hours in the gym. No extremes — just smart, empowering movement that fits your lifestyle.</h3>
          </div>
          <div className={styles.serviceTextBox}>
            <div className={styles.serviceIcon}><FaWeight /></div>
            <h3><span>Weightloss program</span></h3>
            <h3>Whether you want to drop a few kilos, tone up, or boost overall wellness, our weight-loss guidance is designed to work with your lifestyle. We focus on real strategies that deliver long-term success — like meal planning, effective fat-burn workouts, and mindset practices that keep you motivated week after week. Your transformation starts here.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
