import styles from "../assets/styles/main.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="header__logo">Логотип</div>
      <nav className="header__nav">
        <a href="/" className="header__link">О нас</a>
        <a href="/about" className="header__link">Проекты</a>
        <a href="/contact" className="header__link">Контакты</a>
        <a href="/contact" className="header__link">Обратная связь</a>
      </nav>
    </header>
  );
};

export default Header;