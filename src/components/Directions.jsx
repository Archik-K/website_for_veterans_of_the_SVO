import styles from "../assets/styles/main.module.css"

const Directions = () => {
  return (
      <div className={styles.directions}>
      <h2 className={styles.directions__title} id="directions-section">
          ОСНОВНЫЕ НАПРАВЛЕНИЯ РАБОТЫ</h2>
          <ul className={styles.directions__list}>
  <li >Поддержка, защита прав и интересов ветеранов специальной военной операции.
  </li>
  <li>Вовлечение участников специальной военной операции в общественную, спортивную жизнь страны и патриотическое воспитание граждан.
  </li>
  <li>Социальная и трудовая реабилитация ветеранов специальной военной операции.
  </li>
  <li>Формирование положительного образа ветеранов специальной военной операции в обществе, популяризация и увековечивание их подвигов.</li>
</ul>
        <div className={styles.directions__line}></div>
        </div>
  );
};

export default Directions;