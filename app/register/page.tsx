import styles from './page.module.scss';

const Register = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.authContent}>
        <div className={styles.signupLeftContainer}>
          <h3>Signing up gives you free access to our content:</h3>
          <div><span><i className="fas fa-check"></i></span><p>Healthy recipes adapted to your goals.</p></div>
          <div><span><i className="fas fa-check"></i></span><p>Muscle Mass and Body Index counter.</p></div>
          <div><span><i className="fas fa-check"></i></span><p>Personal training recommendations.</p></div>
        </div>
        <div className={styles.signupRightContainer}>
          <h2><span>Who&#39;s</span> there?</h2>
          <form action="/register" method="POST">
            <div>
              <span><i className="fas fa-envelope"></i></span><input autoComplete="off" autoFocus type="text" name="username" placeholder="Username"/>
            </div>
            <div>
              <span><i className="fas fa-lock"></i></span><input type="text" name="password" placeholder="Password" />
            </div>
            <div>
              <span><i className="fas fa-lock"></i></span><input type="text" name="confirmation" placeholder="Password (again)" />
            </div>
            <button type="submit">Let me in</button>
          </form>
        </div>
      </div>
      <h3>Already have an account? Log In <a href="/login"><span className="signup-link">here</span></a>.</h3>
    </div>
  )
}

export default Register;
