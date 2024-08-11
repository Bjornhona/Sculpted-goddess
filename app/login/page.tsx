import styles from './page.module.scss';

const Login = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.authContent}>
        <div className={styles.loginLeftContainer}>
          <h2><span>Who&#39;s</span> there?</h2>
          <form action="/login" method="post">
            <div>
              <span><i className="fas fa-envelope"></i></span><input autoComplete="off" autoFocus name="username" placeholder="Username" type="text" />
            </div>
            <div>
              <span><i className="fas fa-lock"></i></span><input name="password" placeholder="Password" type="password" />
            </div>
            <button type="submit">Let me in</button>
          </form>
        </div>
        <div className={styles.loginRightContainer}>
          <h3>Signing in gives you free access to our content:</h3>
          <div><span><i className="fas fa-check"></i></span><p>Healthy recipes adapted to your goals.</p></div>
          <div><span><i className="fas fa-check"></i></span><p>Muscle Mass and Body Index counter.</p></div>
          <div><span><i className="fas fa-check"></i></span><p>Personal training recommendations.</p></div>
        </div>
      </div>
      <h3>Don’t have an account yet? Sign up <a href="/register"><span className="signup-link">here</span></a>.</h3>
    </div>
  )
}

export default Login;
