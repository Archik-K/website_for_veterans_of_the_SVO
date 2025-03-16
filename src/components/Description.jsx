import styles from "../assets/styles/main.module.css"
import soldiers from "../assets/icon/soldiers.png"

const Description = () => {
  return (
      <div className={styles.description}>
        <div className={styles.description__container}>
          <h2 className={styles.description__title}>
          АНО "Воронежский Центр поддержки ветеранов СВО" оказывает помощь ветеранам Специальной Военной Операции, содействуя их социальной и трудовой адаптации.</h2>
        <img className={styles.description__img} src={soldiers} alt="Логотип сайта" /></div>
        <div className={styles.description__line}></div>
        </div>
  );
};

export default Description;