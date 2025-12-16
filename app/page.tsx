import Image from 'next/image';
import styles from "./page.module.scss";
import sculptedGoddessImage from '/public/images/sculpted-goddess.png';
import trainingPlanImage from '/public/images/training-plan.jpg';
import healthyRecipiesImage from '/public/images/healthy-recipes.jpg';
import manageWeightImage from '/public/images/manage-weight.png';
import contactUsImage from '/public/images/contact-us.jpg';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.main}>
      <header className={[styles.carousel, styles.sharedBox].join(" ")}>
        <div className={[styles.carouselBox, styles.sharedBoxContent].join(" ")}>
          <h1><span>Get in</span> Shape</h1>
          <div className={styles.textBox}>
            <h3>Your Guide to Getting Fit & Toned at Any Age — Let’s Make Healthy Living Easy.</h3>
          </div>
        </div>
        <div className={styles.headerImage}>
          <Image src={sculptedGoddessImage} alt="Sculpted Goddess" priority />
        </div>
      </header>

      <section className={[styles.trainingPlan, styles.sharedBox].join(" ")}>
        <div className={[styles.trainingPlanBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Training</span> Plan</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <Link href="/get_toned"><button>get toned</button></Link>
        </div>
        <div className={[styles.cropped, styles.imagePositionRight].join(" ")}>
          <Image src={trainingPlanImage} alt="dumbells" />
        </div>
        <span className={styles.leftBackgroundBox} />
      </section>

      <section className={[styles.healthyRecipes, styles.sharedBox].join(" ")}>
        <div className={[styles.cropped, styles.imagePositionLeft].join(" ")}>
          <Image src={healthyRecipiesImage} alt="healthy food" />
        </div>
        <div className={[styles.healthyRecipesBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Healthy</span> Recipes</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <Link href="/eat_healthy"><button>eat healthy</button></Link>
        </div>
        <span className={[styles.rightBackgroundBox, styles.sharedBackgroundBox].join(" ")} />
      </section>

      <section className={[styles.weightlossProgram, styles.sharedBox].join(" ")}>
        <div className={styles.weightlossBox}>
          <h1><span>Weightloss</span> Program</h1>
          <div className={styles.textBox}>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
          </div>
          <Link href="/manage_weight"><button>manage weight</button></Link>
        </div>
        <div className={styles.weightlossImage}>
          <Image src={manageWeightImage} alt="Manage weight" />
        </div>
      </section>

      <section className={[styles.contactUs, styles.sharedBox].join(" ")}>
        <div className={[styles.contactUsBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Contact</span> Us</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <Link href="/contact_us"><button>get in contact</button></Link>
        </div>
        <div className={[styles.cropped, styles.imagePositionRight].join(" ")}>
          <Image src={contactUsImage} alt="Girl with phone" />
        </div>
        <span className={[styles.leftBackgroundBox, styles.sharedBackgroundBox].join(" ")} />
      </section>
    </main>
  );
}

export default Home;
