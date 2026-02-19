'use client';
import { useState } from 'react';
import { sendContactMessage } from '@/actions/contact-actions';
import Image from 'next/image';
import contactUs1Image from '/public/images/contact-us1.png';
import contactUs2Image from "/public/images/contact-us2.png";
import styles from './page.module.scss';
import { FaUser, FaDumbbell, FaCommentDots, FaPhoneSquare, FaAt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      const result = await sendContactMessage(
        formData.name,
        formData.email,
        formData.message
      );
  
      if (result?.success) {
        setSuccess('Successfully sent message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Invalid input or submission failed.');
      }
    } catch (err) {
      console.error(err);
      setError('Saving message failed! Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div>
                <span><FaUser /></span>
                <input 
                  autoComplete="off" 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span><FaDumbbell /></span>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="E-mail" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <span><FaCommentDots /></span>
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Let us know'}
              </button>
              {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
              {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}
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
                <div className={styles.ourContactIcon}><FaPhoneSquare /></div>
                <div>
                  <h3><span>Telephone</span></h3>
                  <h4>+34 600 000 000</h4>
                </div>
              </div>
              <div className={styles.ourContactAddressLine}>
                <div className={styles.ourContactIcon}><FaAt /></div>
                <div>
                  <h3><span>E-mail</span></h3>
                  <h4>info@sculptedgoddess.com</h4>
                </div>
              </div>
              <div className={styles.ourContactAddressLine}>
                <div className={styles.ourContactIcon}><FaMapMarkerAlt /></div>
                <div>
                  <h3><span>Address</span></h3>
                  <h4>Sculpted Goddess</h4>  
                  <h4>Online Wellness Platform</h4>
                  <h4>Based in Barcelona, Spain</h4>
                  <h4>Serving women worldwide</h4>
                </div>
              </div>
            </div>
            <div className={styles.contactUsMap}>
              <iframe
                src="https://www.google.com/maps?q=Barcelona&output=embed"
                width="100%"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;
