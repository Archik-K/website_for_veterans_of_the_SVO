import styles from "../assets/styles/main.module.css"
import VK from "../assets/icon/vk.png"
import TG from "../assets/icon/tg.png"

const Social = () => {
  return (
      <div className={styles.social}> 
        <a href="https://vk.com/association_svo_vrn">
        <img className={styles.social__img} src={VK} alt="VK" /></a>
        <a href="https://t.me/avsvo36">
        <img className={styles.social__img}  src={TG} alt="TG" /></a>
      </div>
  );
};

export default Social;