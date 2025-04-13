import React, { useRef, useState, useEffect } from "react";
import styles from "../assets/styles/main.module.css";

const ContinuousCarousel = ({
  slidesData,
  visibleSlides = 3,
  speed = 15,
  renderSlideContent,
  persistKey,
}) => {
  const cloneCount = Math.min(visibleSlides, slidesData.length);
  const slides = [
    ...slidesData.slice(-cloneCount),
    ...slidesData,
    ...slidesData.slice(0, cloneCount),
  ];

  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  const animationFrameId = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    if (trackRef.current && trackRef.current.children.length > 0) {
      const firstSlide = trackRef.current.children[0];
      setSlideWidth(firstSlide.offsetWidth);
      setOffset(firstSlide.offsetWidth * cloneCount);
    }
  }, [cloneCount, slidesData.length]);

  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current != null && !isDragging && slideWidth > 0) {
        const deltaTime = (time - lastTimeRef.current) / 1000;
        let newOffset = offset + speed * deltaTime;
        const resetThreshold = slideWidth * (cloneCount + slidesData.length);
        if (newOffset >= resetThreshold) {
          newOffset -= slideWidth * slidesData.length;
        }
        setOffset(newOffset);
      }
      lastTimeRef.current = time;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [offset, speed, slideWidth, isDragging, cloneCount, slidesData.length]);

  const activeIndex = (() => {
    if (slideWidth === 0) return 0;
    const computedIndex = Math.floor((offset - slideWidth * cloneCount + slideWidth / 2) / slideWidth);
    return ((computedIndex % slidesData.length) + slidesData.length) % slidesData.length;
  })();

  const handleDotClick = (index) => {
    if (slideWidth > 0) {
      setOffset(slideWidth * (cloneCount + index));
      lastTimeRef.current = performance.now();
    }
  };

  // Touch + Mouse drag handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragOffset.current = offset;
    lastTimeRef.current = null;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const distance = clientX - dragStartX.current;
    setOffset(dragOffset.current - distance);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

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
            transition: "none",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {renderSlideContent(slide)}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.active : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;
