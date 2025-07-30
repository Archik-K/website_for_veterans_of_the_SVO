import React, { useRef, useState, useEffect } from "react";
import styles from "../assets/styles/main.module.css";

const ContinuousCarousel = ({
  slidesData,
  visibleSlides = 3,
  speed = 15,
  renderSlideContent,
}) => {
  const cloneCount = Math.min(visibleSlides, slidesData.length);
  const slides = [
    ...slidesData.slice(-cloneCount),
    ...slidesData,
    ...slidesData.slice(0, cloneCount),
  ];

  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [slideFullWidth, setSlideFullWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);
  const lastTimeRef = useRef(null);
  const rafId = useRef(null);

  // 1) измеряем слайд вместе с margin
  useEffect(() => {
    const track = trackRef.current;
    if (track?.children.length) {
      const slideEl = track.children[0];
      const style = window.getComputedStyle(slideEl);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      const full = slideEl.offsetWidth + margin;
      setSlideFullWidth(full);
      setOffset(full * cloneCount);
    }
  }, [cloneCount, slidesData.length]);

  // 2) плавная анимация с модулем по полной ширине
  useEffect(() => {
    const base = slideFullWidth * cloneCount;
    const total = slideFullWidth * slidesData.length;

    const animate = (time) => {
      if (lastTimeRef.current != null && !isDragging && slideFullWidth) {
        const dt = (time - lastTimeRef.current) / 1000;
        setOffset((prev) => {
          const rel = prev + speed * dt - base;
          const wrapped = ((rel % total) + total) % total + base;
          return wrapped;
        });
      }
      lastTimeRef.current = time;
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [speed, slideFullWidth, isDragging, cloneCount, slidesData.length]);

  // 3) dot‑навигация
  const activeIndex = slideFullWidth
    ? ((Math.floor((offset - slideFullWidth * cloneCount + slideFullWidth / 2) / slideFullWidth) % slidesData.length) + slidesData.length) % slidesData.length
    : 0;

  const handleDotClick = (i) => {
    if (slideFullWidth) {
      setOffset(slideFullWidth * (cloneCount + i));
      lastTimeRef.current = performance.now();
    }
  };

  // 4) drag
  const handleStart = (x) => {
    setIsDragging(true);
    dragStartX.current = x;
    dragOffset.current = offset;
    lastTimeRef.current = null;
  };
  const handleMove = (x) => {
    if (isDragging) {
      setOffset(dragOffset.current - (x - dragStartX.current));
    }
  };
  const handleEnd = () => setIsDragging(false);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div
          ref={trackRef}
          className={styles.slideTrack}
          style={{
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className={styles.slide}>
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;