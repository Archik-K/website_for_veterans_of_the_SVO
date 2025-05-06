import styles from "../assets/styles/main.module.css"
import LogoSVO from "../assets/logo/Logo_SVO_color.svg"
import Social from "./Social"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img className={styles.footer__logo} src={LogoSVO} alt="Логотип сайта" />
        </div>
        <div className={styles.footer__rights}>
					<p>
            <strong>&copy; 2025, АНО "Воронежский Центр поддержки ветеранов СВО"</strong></p>
          <p>Все права защищены</p>
				</div>
      <Social/>
    </footer>
  );
};

export default Footer;