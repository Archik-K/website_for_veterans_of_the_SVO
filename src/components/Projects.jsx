import React from "react";
import styles from "../assets/styles/main.module.css";
import Carousel from "./Carousel"; // Импортируем карусель

// Импорт изображений проектов
import veteransVolleyball from "../assets/icon/SVO-veterans-volleyball-team-1.webp";
import soldiersAndSpecialist from "../assets/icon/soldiers-and-specialist.png";

const projectsData = [
  {
    id: 1,
    name: 'Трудовая адаптация ветеранов СВО "Ты не один"',
    image: soldiersAndSpecialist,
    subsections: [
      {
        title: "Цель",
        text: "Повысить знания и мотивацию к выходу на рынок труда ветеранов СВО через профориентацию, тренинги и консультации."
      },
      {
        title: "Задачи",
        text: [
          "Организовать информационную поддержку проекта.",
          "Провести профориентационные мероприятия, тренинги по резюме и собеседованиям.",
          "Провести психологические диагностики с психологом.",
          "Организовать тренинги.",
          "Осуществить индивидуальное карьерное консультирование.",
          "Провести выездные встречи в районных центрах.",
          "Наладить взаимодействие с работодателями через тренинги и консультации.",
          "Создать рабочую группу ветеранов для консультаций и профориентационных экскурсий."
        ]
      },
      {
        title: "Механизм реализации",
        text: "Проект рассчитан на 11 месяцев. Включает индивидуальные консультации, тренинги, выездные мероприятия и взаимодействие с работодателями для снижения предвзятости."
      },
      {
        title: "Социальная значимость",
        text: "В России уже более 300 тысяч ветеранов СВО, в Воронежской области – 299 безработных. Проект поможет ускорить адаптацию и выход на рынок труда."
      }
    ]
  },
  {
    id: 2,
    name: "Команда ветеранов СВО по волейболу сидя",
    image: veteransVolleyball,
    subsections: [
      {
        title: "Ключевые аспекты",
        text: [
          "Реабилитация через спорт – восстановление, уверенность, самооценка.",
          "Командный дух – дружеские связи, взаимоподдержка.",
          "Интеграция с сообществом – поддержка города и фонда.",
          "Расширение направлений – армрестлинг, пауэрлифтинг, стрельба, фехтование.",
          "Адаптация зала – новая разметка, опускание сетки."
        ]
      },
      {
        title: "Социальная значимость",
        text: "Проект показывает, как спорт помогает социальной интеграции, укреплению здоровья и созданию сообщества взаимоподдержки."
      }
    ]
  }
];

const renderSlideContent = (project) => (
  <div className={styles.projects__slide}>
    <img src={project.image} alt={project.name} className={styles.projects__image} />
    <div className={styles.projects__content}>
      <h3 className={styles.projects__name}>{project.name}</h3>
      {project.subsections.map((section, index) => (
        <div key={index} className={styles.projectSection}>
          <h4>{section.title}</h4>
          {Array.isArray(section.text) ? (
            <ul>
              {section.text.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className={styles.projects} id="projects-section">
      <h1 className={styles.projects__title}>НАШИ ПРОЕКТЫ</h1>
      <Carousel 
        slidesData={projectsData} 
        visibleSlides={1} 
        interval={4000} 
        renderSlideContent={renderSlideContent}
        persistKey="projectsCarouselIndex"  // Ключ для сохранения индекса в localStorage
      />
      <div className={styles.directions__line}></div>
    </div>
  );
};

export default Projects;
