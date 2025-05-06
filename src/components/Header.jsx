import { useState } from "react";
import styles from "../assets/styles/main.module.css";
import LogoSVO from "../assets/logo/Logo_SVO_color.svg";
import Social from "./Social";
import Documents from './Documents'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src={LogoSVO} alt="Логотип сайта" />
      </div>
      <nav className={`${styles.header__nav} ${menuOpen ? styles.nav_open : ""}`}>
        <a href="#directions-section" className={styles.header__link} onClick={closeMenu}>О нас</a>
        <a href="#projects-section" className={styles.header__link} onClick={closeMenu}>Проекты</a>
{/*         <a href="/" className={styles.header__link} onClick={closeMenu}>Новости</a> */}
        <a href="#team-section" className={styles.header__link} onClick={closeMenu}>Команда</a>
        <a href="#grantswon-section" className={styles.header__link} onClick={closeMenu}>Выигранные гранты</a>
        <a href="#biography-section" className={styles.header__link} onClick={closeMenu}>Биография руководителя</a>
        <a href="mailto:voronezh-smo@internet.ru" className={styles.header__link} onClick={closeMenu}>Обратная связь</a>
        <Documents/>
         <Social />
      </nav>
      <button className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? (
          <div className={styles.cross}>
            <span className={styles.crossLine}></span>
            <span className={styles.crossLine}></span>
          </div>
        ) : (
          <>
            <span className={styles.burger_line}></span>
            <span className={styles.burger_line}></span>
            <span className={styles.burger_line}></span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
