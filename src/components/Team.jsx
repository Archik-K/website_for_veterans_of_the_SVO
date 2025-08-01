import React, { useState, useEffect } from "react";
import styles from "../assets/styles/main.module.css";
import Carousel from "./Carousel";

// Импорт изображений
import photo1 from "../assets/icon/Karzanov.jpg";
import photo2 from "../assets/icon/Hairulin.jpg";
import photo3 from "../assets/icon/Kostyukov.jpg";
import photo4 from "../assets/icon/Pussila.jpg";
import photo5 from "../assets/icon/Glagoleva_E_A.jpg";
import photo6 from "../assets/icon/Glagoleva_V.jpg";

const Team = () => {
  const slidesData = [
    {
      photo: photo1,
      captionfio: "Карзанов Владимир Петрович",
      jobtitle: "Руководитель проекта, председатель Ассоциации ветеранов СВО по Воронежской области",
    },
    {
      photo: photo3,
      captionfio: "Костюков Роман Сергеевич",
      jobtitle: "Зам председателя по поисковой работе пропавших без вести и погибших, гуманитарной помощи",
    },
    {
      photo: photo4,
      captionfio: "Пуссила Леонид Викторович",
      jobtitle: "Зам председателя по работе с ветеранами СВО",
    },
    {
      photo: photo5,
      captionfio: "Глаголева Елена Александровна",
      jobtitle: "Координатор по реализации проектов",
    },
    {
      photo: photo6,
      captionfio: "Глаголева Вероника Сергеевна",
      jobtitle: "Пресс-секретарь",
    },
  ];

  // Состояние для количества видимых слайдов
  const [visibleSlides, setVisibleSlides] = useState(3);

  // При ширине экрана меньше 320px показываем 2 слайда
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 380) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Функция рендеринга содержимого слайда
  const renderSlideContent = (slide) => (
    <div className={styles.team__slide}>
      <div className={`${styles.team__contanier} ${styles.team__member}`}>
        <img src={slide.photo} alt={slide.captionfio} className={styles.team__image} />
        <p className={styles.team__captionfio}>{slide.captionfio}</p>
        <p className={styles.team__jobtitle}>{slide.jobtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.team} id="team-section">
      <h2 className={styles.team__title}>НАША КОМАНДА</h2>
      <Carousel 
        slidesData={slidesData} 
        defaultVisibleSlides={visibleSlides} 
        interval={3000} 
        renderSlideContent={renderSlideContent} 
      />
      <div className={styles.directions__line}></div>
    </div>
  );
};

export default Team;
