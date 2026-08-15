import styles from './not-found.module.scss';

const NotFound = () => {
  return (
      <header className={styles.notFoundHeader}>
      <div className={styles.notFoundHeaderBox}>
        <h1>Not <span>Found</span></h1>
        <div className={styles.textBox}>
          <h3>The requested resource could not be found.</h3>
        </div>
      </div>
    </header>
  )
}

export default NotFound;
