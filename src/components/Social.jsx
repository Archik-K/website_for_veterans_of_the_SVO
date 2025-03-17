import styles from "../assets/styles/main.module.css"
import VK from "../assets/icon/vk.svg"
import TG from "../assets/icon/tg.svg"

const Social = () => {
  return (
      <div className={styles.social}> 
        <a href="https://vk.com/association_svo_vrn" className={styles.social__link}>
        <img src={VK} alt="VK" /></a>
        <a href="https://t.me/avsvo36" className={styles.social__link}>
        <img src={TG} alt="TG" /></a>
      </div>
  );
};

export default Social;