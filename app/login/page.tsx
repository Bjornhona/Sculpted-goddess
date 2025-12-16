'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import {useFormState} from 'react-dom';
import {login} from '@/actions/auth-actions';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const initialState = {};
  const [formState, formAction] = useFormState<any>(login, initialState);
  const router = useRouter();

  useEffect(() => {
    if (formState.success) {
      router.push('/');
    }
  }, [formState.success, router]);

  return (
    <div className={styles.auth}>
      <div className={styles.authContent}>
        <div className={styles.loginLeftContainer}>
          <h2><span>Who&#39;s</span> there?</h2>
          <form id="login-form" action={formAction}>
            <div>
              <span><i className="fas fa-envelope"></i></span><input autoComplete="off" autoFocus name="email" placeholder="Email" type="email" />
            </div>
            <div>
              <span><i className="fas fa-lock"></i></span><input name="password" placeholder="Password" type="password" />
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
        <div className={styles.loginRightContainer}>
          <h3>Signing in gives you free access to our content:</h3>
          <div className={styles.featuresList}>
            <div><span><i className="fas fa-check"></i></span><p>Healthy recipes adapted to your goals.</p></div>
            <div><span><i className="fas fa-check"></i></span><p>Muscle Mass and Body Index counter.</p></div>
            <div><span><i className="fas fa-check"></i></span><p>Personal training recommendations.</p></div>
          </div>
        </div>
      </div>
      <h3>Don’t have an account yet? Sign up <Link href="/register"><span className="signup-link">here</span></Link>.</h3>
    </div>
  )
}

export default Login;
