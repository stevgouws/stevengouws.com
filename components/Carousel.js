import { useRef, useState } from "react";

export default function Carousel({ children, className = "" }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const containerRef = useRef();

  function scrollToSlide(index) {
    if (!containerRef.current) return;
    containerRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setCurrentSlideIndex(index);
  }

  function goToNext() {
    scrollToSlide(currentSlideIndex + 1);
  }

  function goToPrevious() {
    scrollToSlide(currentSlideIndex - 1);
  }

  return (
    <div
      className={`carousel-outer flex flex-col gap-6 max-w-full ${className}`}
    >
      <div className="flex items-center md:gap-8">
        <NavButton
          ariaLabel="Previous"
          direction="left"
          onClick={goToPrevious}
          hide={currentSlideIndex === 0}
        >
          &lt;
        </NavButton>
        <div className="carousel-inner" ref={containerRef}>
          {children}
        </div>
        <NavButton
          ariaLabel="Next"
          direction="right"
          onClick={goToNext}
          hide={currentSlideIndex === children.length - 1}
        >
          &gt;
        </NavButton>
      </div>
      <ProgressIndicator
        count={children.length}
        currentSlideIndex={currentSlideIndex}
        scrollToSlide={scrollToSlide}
      />

      <style jsx>
        {`
          .carousel-inner {
            display: flex;
            overflow: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
}

function NavButton({ onClick, hide, ariaLabel, direction }) {
  return (
    <button
      className={`flex items-center hover:opacity-75 justify-center ${
        hide ? "invisible" : ""
      }`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <img src={`./arrow-${direction}.webp`} />
      <style jsx>
        {`
          button {
            padding: 1rem;
            padding-${direction}: 0.75rem;
          }

          img {
            width: 20px;
            max-width: none;
          }
          @media (max-width: 640px) {
            img {
              width: 10px;
            }
          }
        `}
      </style>
    </button>
  );
}

function ProgressIndicator({ count, currentSlideIndex, scrollToSlide }) {
  return (
    <div>
      <div className="progress-indicator flex justify-center items-end h-4">
        {new Array(count).fill().map((_, index) => (
          <div
            key={index}
            className={`bar mx-1 bg-blue-dark ${
              index === currentSlideIndex ? "active" : ""
            }`}
            onClick={() => scrollToSlide(index)}
          ></div>
        ))}
      </div>
      <style jsx>
        {`
          .bar {
            width: 0.75rem;
            height: 0.5rem;
            cursor: pointer;
            transition: height 0.5s ease;
            --radius: 2px;
            border-top-left-radius: var(--radius);
            border-top-right-radius: var(--radius);
          }

          .active {
            height: 1.5rem;
            background-color: var(--teal-highlight);
            border: 3px solid var(--blue-dark);
          }
        `}
      </style>
    </div>
  );
}
