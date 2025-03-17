import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/main.module.css";

const Carousel = ({ slidesData, visibleSlides = 3, interval = 3000 }) => {
  // Количество клонированных слайдов с начала и конца
  const cloneCount = visibleSlides;
  // Массив с клонами: [конечные клоны, оригинальные слайды, начальные клоны]
  const slides = [
    ...slidesData.slice(-cloneCount),
    ...slidesData,
    ...slidesData.slice(0, cloneCount),
  ];
  const totalSlides = slides.length;
  // Начинаем с оригинальных слайдов (после начальных клонов)
  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  // Флаг для анимации
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  // Флаг для остановки автопрокрутки при наведении
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  // Функция для смены слайда
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Автопрокрутка слайдов (остановка при наведении)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval, isHovered]);

  // Обработчик перехода для корректного перепрыгивания слайдов
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === totalSlides - cloneCount) {
        setTransitionEnabled(false);
        goToSlide(cloneCount);
      } else if (currentIndex === 0) {
        setTransitionEnabled(false);
        goToSlide(totalSlides - cloneCount * 2);
      }
      // Снова включаем анимацию
      setTimeout(() => setTransitionEnabled(true), 50);
    };

    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, totalSlides, cloneCount]);

  // Функции для кнопок управления
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
        &#9665;
      </button>
      <div
        className={styles.carousel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className={styles.slideTrack}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            transition: transitionEnabled
              ? "transform 0.8s ease-in-out"
              : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={slide.photo}
                alt={slide.caption}
                className={styles.team__image}
              />
              <p className={styles.team__captionfio}>{slide.captionfio}</p>
              <p className={styles.team__jobtitle}>{slide.jobtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
        &#9655;
      </button>
    </div>
  );
};

export default Carousel;
