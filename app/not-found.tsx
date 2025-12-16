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
      {/* <div className={styles.notFoundHeaderImage}>
        <Image src={notFoundImage} alt="Page not found" />
      </div> */}
    </header>
  )
}

export default NotFound;

// in error.js
// 'use client';

// const FilterError = ({error}) => {
//   return (
//     <div id='error'>
//       <h2>An error has occured!</h2>
//       <p>{error.message}</p>
//     </div>
//   )
// }

// export default FilterError;