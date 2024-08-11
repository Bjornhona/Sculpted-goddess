import Image from 'next/image';
import contactUs1Image from '/public/images/contact-us1.png';
import contactUs2Image from "/public/images/contact-us2.png";
import mapImage from '/public/images/map.png';
import styles from './page.module.scss';

const ContactUs = () => {
  return (
    <>
      <header className={styles.contactUsHeader}>
        <div className={styles.contactUsHeaderBox}>
          <h1><span>Contact</span> Us</h1>
          <div className={styles.textBox}>
            <h3>We help you find your prefered recipes so that you can add them to your meal plans.</h3>
          </div>
        </div>
        <div className={styles.contactUsHeaderImage}>
          <Image src={contactUs1Image} alt="Running woman" />
        </div>
      </header>

      <div className={styles.contactForm}>
        <div className={styles.contactFormContentBox}>

          <div className={styles.contactFormContainer}>
            <h2><span>Who&#39;s</span> there?</h2>
            <form action="mailto:info@graphicsbyasa.com" method="POST" encType="text/plain">
              <div>
                <span><i className="fas fa-user"></i></span><input autoComplete="off" type="text" name="name" placeholder="Name" required/>
              </div>
              <div>
                <span><i className="fas fa-dumbbell"></i></span><input type="text" name="mail" placeholder="E-mail" required/>
              </div>
              <div>
                <span><i className="fas fa-comment-dots"></i></span><textarea name="comment" placeholder="Message" rows={5} required></textarea>
              </div>
              <button type="submit">Let us know</button>
            </form>
          </div>
          <div className={styles.contactUsMainImage}>
            <Image src={contactUs2Image} alt="calling girl" />
          </div>
        </div>

        <div className={styles.ourContact}>
          <h1><span>Our</span> contact</h1>
          <div className={styles.ourContactContainer}>
            <div className={styles.ourContactTextBox}>
              <div className={styles.ourContactAddressLine}>
                <div className={styles.ourContactIcon}><i className="fas fa-phone-square"></i></div>
                <div>
                  <h3><span>Telephone</span></h3>
                  <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                </div>
              </div>
              <div className={styles.ourContactAddressLine}>
                <div className={styles.ourContactIcon}><i className="fas fa-at"></i></div>
                <div>
                  <h3><span>E-mail</span></h3>
                  <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                </div>
              </div>
              <div className={styles.ourContactAddressLine}>
                <div className={styles.ourContactIcon}><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h3><span>Address</span></h3>
                  <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                </div>
              </div>
            </div>
            <div className={styles.contactUsMap}>
              <Image src={mapImage} alt="map of Barcelona" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;
