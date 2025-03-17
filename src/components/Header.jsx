import styles from "../assets/styles/main.module.css"
import LogoSVO from "../assets/logo/Logo_SVO_color.svg"
import Social from "./Social"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}><img src={LogoSVO} alt="Логотип сайта" /></div>
      <nav className={styles.header__nav}>
        <a href="/" className={styles.header__link}>О нас</a>
        <a href="/" className={styles.header__link}>Проекты</a>
        <a href="/" className={styles.header__link}>Контакты</a>
        <a href="/" className={styles.header__link}>Обратная связь</a>
      </nav>
      <Social/>
    </header>
  );
};

export default Header;