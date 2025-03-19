import styles from "../assets/styles/main.module.css"

const Projects = () => {
  return (
      <div className={styles.projects}>
            <h1 className={styles.projects__title}>
            НАШИ ПРОЕКТЫ</h1>
        <div className={styles.projects__container}>
        </div>
        <div className={styles.projects__line}></div>
        </div>
  );
};

export default Projects;