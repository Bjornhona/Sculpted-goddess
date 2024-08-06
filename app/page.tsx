import Image from 'next/image';
import styles from "./page.module.scss";
import sculptedGoddessImage from '/public/images/sculpted-goddess.png';
import trainingPlanImage from '/public/images/training-plan.jpg';
import healthyRecipiesImage from '/public/images/healthy-recipes.jpg';
import manageWeightImage from '/public/images/manage-weight.png';
import contactUsImage from '/public/images/contact-us.jpg';

const Home = () => {
  return (
    <main className={styles.main}>
      <header className={[styles.carousel, styles.sharedBox].join(" ")}>
        <div className={[styles.carouselBox, styles.sharedBoxContent].join(" ")}>
          <h1><span>Get in</span> Shape</h1>
          <div className={styles.textBox}>
            <h3>We help you create an outstanding lifestyle with tons of tips to healthy habits so that you can become a Sculpted Goddess.</h3>
          </div>
        </div>
        <div className={styles.headerImage}>
          {/* <Image src={sculptedGoddessImage} alt="Sculpted Goddess" fill /> */}
        </div>
      </header>

      <section className={[styles.trainingPlan, styles.sharedBox].join(" ")}>
        <div className={[styles.trainingPlanBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Training</span> Plan</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <a href="/get_toned"><button>get toned</button></a>
        </div>
        <div className={[styles.cropped, styles.imagePositionRight].join(" ")}>
          {/* <Image src={trainingPlanImage} alt="dumbells" fill /> */}
        </div>
        <span className={styles.leftBackgroundBox} />
      </section>

      <section className={[styles.healthyRecipes, styles.sharedBox].join(" ")}>
        <div className={[styles.cropped, styles.imagePositionLeft].join(" ")}>
          {/* <Image src={healthyRecipiesImage} alt="healthy food" fill /> */}
        </div>
        <div className={[styles.healthyRecipesBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Healthy</span> Recipes</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <a href="/eat_healthy"><button>eat healthy</button></a>
        </div>
        <span className={[styles.rightBackgroundBox, styles.sharedBackgroundBox].join(" ")} />
      </section>

      <section className={[styles.weightlossProgram, styles.sharedBox].join(" ")}>
        <div className={styles.weightlossBox}>
          <h1><span>Weightloss</span> Program</h1>
          <div className={styles.textBox}>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
          </div>
          <a href="/manage_weight"><button>manage weight</button></a>
        </div>
        <div className={styles.weightlossImage}>
          {/* <Image src={manageWeightImage} alt="Manage weight" fill /> */}
        </div>
      </section>

      <section className={[styles.contactUs, styles.sharedBox].join(" ")}>
        <div className={[styles.contactUsBox, styles.sharedBoxContent].join(" ")}>
            <h1><span>Contact</span> Us</h1>
            <div className={styles.textBox}>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</h3>
            </div>
            <a href="/contact_us"><button>get in contact</button></a>
        </div>
        <div className={[styles.cropped, styles.imagePositionRight].join(" ")}>
          {/* <Image src={contactUsImage} alt="Girl with phone" fill /> */}
        </div>
        <span className={[styles.leftBackgroundBox, styles.sharedBackgroundBox].join(" ")} />
      </section>
    </main>
  );
}

export default Home;
