import React from "react";
import styles from "../assets/styles/main.module.css";
import Carousel from "./Carousel";

// Импорт изображений (или URL)
import photo1 from "../assets/icon/Pussila.jpg";
import photo2 from "../assets/icon/Karzanov.jpg";
import photo3 from "../assets/icon/Glagoleva_E_A.jpg";
import photo4 from "../assets/icon/Glagoleva_V.jpg";
import photo5 from "../assets/icon/Hairulin.jpg";
import photo6 from "../assets/icon/Kostyukov.jpg";

const Contacts = () => {
  const slidesData = [
    {
      photo: photo1,
      captionfio:
        "Пуссила Леонид Викторович",
        jobtitle:  "Зам председателя по работе с ветеранами СВО",
    },
    {
      photo: photo2,
      captionfio:
        "Карзанов Владимир Петрович",
        jobtitle:  "Руководитель проекта, председатель Ассоциации ветеранов СВО по Воронежской области",
    },
    {
      photo: photo3,
      captionfio: "Глаголева Елена Александровна",
      jobtitle:  "Координатор по реализации проектов",
    },
    {
      photo: photo4,
      captionfio: "Глаголева Вероника Сергеевна",
      jobtitle:  "Пресс секретарь",
    },
    {
      photo: photo5,
      captionfio: "Хайрулин Андрей Серажданович",
      jobtitle:  "Сопредседатель",
    },
    {
      photo: photo6,
      captionfio:
        "Костюков Роман Сергеевич",
        jobtitle:  "Зам председателя по поисковой работе пропавших без вести и погибших, гуманитарной помощи",
    },
  ];

  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>НАША КОМАНДА</h2>
      <Carousel slidesData={slidesData} visibleSlides={3} interval={3000} />
    </div>
  );
};

export default Contacts;
