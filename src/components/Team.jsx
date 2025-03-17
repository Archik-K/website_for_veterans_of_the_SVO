import React from "react";
import styles from "../assets/styles/main.module.css";
import Carousel from "./Carousel";

// Импорт изображений (или URL)
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
      captionfio:
        "Карзанов Владимир Петрович",
        jobtitle:  "Руководитель проекта, председатель Ассоциации ветеранов СВО по Воронежской области",
    },
    {
      photo: photo2,
      captionfio: "Хайрулин Андрей Серажданович",
      jobtitle:  "Сопредседатель",
    },
    {
      photo: photo3,
      captionfio:
        "Костюков Роман Сергеевич",
        jobtitle:  "Зам председателя по поисковой работе пропавших без вести и погибших, гуманитарной помощи",
    },
    {
      photo: photo4,
      captionfio:
        "Пуссила Леонид Викторович",
        jobtitle:  "Зам председателя по работе с ветеранами СВО",
    },
    {
      photo: photo5,
      captionfio: "Глаголева Елена Александровна",
      jobtitle:  "Координатор по реализации проектов",
    },
    {
      photo: photo6,
      captionfio: "Глаголева Вероника Сергеевна",
      jobtitle:  "Пресс секретарь",
    },
  ];

  return (
    <div className={styles.team}>
      <h2 className={styles.team__title}>НАША КОМАНДА</h2>
      <Carousel slidesData={slidesData} visibleSlides={3} interval={3000} />
      <div className={styles.directions__line}></div>
    </div>
  );
};

export default Team;
