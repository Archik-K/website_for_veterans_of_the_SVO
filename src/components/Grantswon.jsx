import styles from "../assets/styles/main.module.css";
import soldiers_and_specialist from "../assets/icon/soldiers-and-specialist.png"

const Grantswon = () => {
  return (
      <div className={styles.grantswon}>
      <h2 className={styles.grantswon__title}>
      ВЫИГРАННЫЕ ГРАНТЫ </h2>
          <div className={styles.grantswon__container} id="grantswon-section">
             <h5 className={styles.grantswon__name}>Трудовая адаптация ветеранов СВО "Ты не один"</h5>
          <img className={styles.grantswon__img} src={soldiers_and_specialist} alt="Логотип гранта трудовой адаптации ветеранов СВО Ты не один"/>
          <p className={styles.grantswon__text}>Проект направлен на поддержку ветеранов СВО, находящихся в процессе реабилитации, включая лиц с инвалидностью, путем оказания помощи в профориентации и трудоустройстве. За 11 месяцев реализации предусмотрены индивидуальное карьерное консультирование, психологические диагностики, тренинги по написанию резюме и прохождению собеседований, а также мотивационные встречи и профориентационные экскурсии. Особое внимание уделяется взаимодействию с работодателями: проводятся семинары по юридическим аспектам трудоустройства ветеранов и встречам для снижения предвзятого отношения к данной категории граждан. Реализация проекта позволит ветеранам СВО повысить уровень знаний, мотивации и профессиональных навыков, что будет способствовать их успешной адаптации и быстрому выходу на открытый рынок труда.</p>
             </div>
        <div className={styles.directions__line}></div>
        </div>
  );
};

export default Grantswon;