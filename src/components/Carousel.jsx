import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/main.module.css";

const Carousel = ({
  slidesData,
  visibleSlides = 3,    // Количество видимых слайдов (по умолчанию 3)
  interval = 3000,
  renderSlideContent,
  persistKey            // Ключ для сохранения текущего индекса в localStorage
}) => {
  // Состояние для количества видимых слайдов (принимается из пропсов)
  const [currentVisibleSlides, setCurrentVisibleSlides] = useState(visibleSlides);
  
  useEffect(() => {
    setCurrentVisibleSlides(visibleSlides);
  }, [visibleSlides]);

  // Вычисляем количество клонов для зацикленного скролла
  const cloneCount = Math.min(currentVisibleSlides, slidesData.length);
  
  // Формируем массив с клонами: [последние клоны, оригинальные слайды, первые клоны]
  const slides = slidesData.length > cloneCount
    ? [
        ...slidesData.slice(-cloneCount),
        ...slidesData,
        ...slidesData.slice(0, cloneCount)
      ]
    : slidesData;

  const totalSlides = slides.length;
  // Начальный индекс равен cloneCount (если используются клоны), чтобы отобразить оригинальные слайды
  const initialIndex = slidesData.length > cloneCount ? cloneCount : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Если задан persistKey, пытаемся загрузить сохранённое значение currentIndex из localStorage
  useEffect(() => {
    if (persistKey) {
      const savedIndex = localStorage.getItem(persistKey);
      if (savedIndex !== null) {
        setCurrentIndex(Number(savedIndex));
      }
    }
  }, [persistKey]);

  // Сохраняем currentIndex в localStorage, если persistKey задан
  useEffect(() => {
    if (persistKey) {
      localStorage.setItem(persistKey, currentIndex);
    }
  }, [currentIndex, persistKey]);

  // Флаг анимации
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  // Флаг для остановки автопрокрутки при наведении
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  // Функция для переключения на определённый слайд
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Автопрокрутка слайдов (если мышь не находится над каруселью)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval, isHovered]);

  // Обработка перехода для зацикленной карусели (бесшовный скролл)
  useEffect(() => {
    if (slidesData.length <= cloneCount) return;
    const handleTransitionEnd = () => {
      if (currentIndex === totalSlides - cloneCount) {
        setTransitionEnabled(false);
        goToSlide(cloneCount);
      } else if (currentIndex === 0) {
        setTransitionEnabled(false);
        goToSlide(totalSlides - cloneCount * 2);
      }
      setTimeout(() => setTransitionEnabled(true), 50);
    };

    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, totalSlides, cloneCount, slidesData.length]);

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

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
            transform: `translateX(-${(currentIndex * 100) / currentVisibleSlides}%)`,
            transition: transitionEnabled ? "transform 0.8s ease-in-out" : "none"
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {renderSlideContent(slide)}
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
