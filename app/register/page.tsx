'use client';
import styles from './page.module.scss';
import {useFormState} from 'react-dom';
import {signup} from '@/actions/auth-actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

const Register = () => {
  const initialState = {};
  const [formState, formAction] = useFormState<any>(signup, initialState);
  const router = useRouter();

  useEffect(() => {
    if (formState.success) {
      router.push('/');
    }
  }, [formState.success, router]);

  return (
    <div className={styles.auth}>
      <div id="container" className={styles.authContent}>
        <div className={styles.signupRightContainer}>
          <h2><span>Who&#39;s</span> there?</h2>
          <form id="auth-form" action={formAction}>
            <div className={styles.authFormInput}>
              <span><FaEnvelope /></span>
              <input autoComplete="off" autoFocus type="email" name="email" placeholder="Email" />
            </div>
            <div className={styles.authFormInput}>
              <span><FaLock /></span>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className={styles.authFormInput}>
              <span><FaLock /></span>
              <input type="password" name="confirmation" placeholder="Password (again)" />
            </div>
            {formState.errors && (
              <ul id='form-errors'>{
                Object.keys(formState.errors).map(error => (
                  <li key={error}>{formState.errors[error]}</li>
                ))
              }</ul>
            )}
            <button type="submit">Let me in</button>
          </form>
        </div>
        <div className={styles.signupLeftContainer}>
          <h3>Signing up gives you free access to our content:</h3>
          <div className={styles.featuresList}>
            <div><span><FaCheck /></span><p>Healthy recipes adapted to your goals.</p></div>
            <div><span><FaCheck /></span><p>Muscle Mass and Body Index counter.</p></div>
            <div><span><FaCheck /></span><p>Personal training recommendations.</p></div>
          </div>
        </div>
      </div>
      <h3>Already have an account? Log In <Link href="/login"><span className="signup-link">here</span></Link>.</h3>
    </div>
  )
}

export default Register;
