import styles from "../assets/styles/main.module.css"
import LogoSVO from "../assets/logo/Logo_SVO_color.svg"
import VK from "../assets/icon/vk.svg"
import TG from "../assets/icon/tg.svg"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}><img src={LogoSVO} alt="Логотип сайта" /></div>
      <nav className={styles.header__nav}>
        <a href="/" className={styles.header__link}>О нас</a>
        <a href="/" className={styles.header__link}>Проекты</a>
        <a href="/" className={styles.header__link}>Контакты</a>
        <a href="/" className={styles.header__link}>Обратная связь</a>
        <a href="https://vk.com/association_svo_vrn" className={styles.header__link}><img src={VK} alt="Ссылка на вконтакте" /></a>
        <a href="https://t.me/avsvo36" className={styles.header__link}><img src={TG} alt="Ссылка на телеграм" /></a>
      </nav>
    </header>
  );
};

export default Header;