import styles from "../assets/styles/main.module.css"


const News = () => {
  return (
      <div className={styles.news}>
          <h1 className={styles.news__title}>
          НОВОСТНАЯ ЛЕНТА</h1>
        <div className={styles.news__container}>
        </div>
        <div className={styles.news__line}></div>
        </div>
  );
};

export default News;