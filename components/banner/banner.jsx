import styles from './banner.module.css'

const Banner = ({buttonText, handleOnClick}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>Cafe</span> 
            <span className={styles.title2}>Discovery</span>
        </h1>
        <p className={styles.subtitle}>Discover your local coffee shops!</p>
        <button className={styles.btn}
          onClick={handleOnClick}
        >{buttonText}</button>
    </div>
  )
}

export default Banner