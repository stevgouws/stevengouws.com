import React, { useRef, useState } from "react";
import useSound from "use-sound";
import swipeMp3 from "../public/sounds/swipe.mp3";
import swipeBackMp3 from "../public/sounds/swipe-back.mp3";
import shrpMp3 from "../public/sounds/shrp.mp3";
import { HasClassName } from "../types";

interface CarouselProps extends HasClassName {
  children: React.ReactNode[];
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playSwipe] = useSound(swipeMp3);
  const [playSwipeBack] = useSound(swipeBackMp3);
  const [playSwipeFast] = useSound(shrpMp3);

  function scrollToSlide(index: number) {
    if (!containerRef.current) return;
    const numberOfSlidesToScroll = Math.abs(index - currentSlideIndex);

    if (numberOfSlidesToScroll > 0) playSwipe();
    else playSwipeBack();
    if (numberOfSlidesToScroll > 2) playSwipeFast();

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
          direction="left"
          onClick={goToPrevious}
          hide={currentSlideIndex === 0}
        />
        <div className="carousel-inner" ref={containerRef}>
          {children}
        </div>
        <NavButton
          direction="right"
          onClick={goToNext}
          hide={currentSlideIndex === children.length - 1}
        />
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

type NavButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  hide: boolean;
  direction: "left" | "right";
};

function NavButton({ onClick, hide, direction }: NavButtonProps) {
  return (
    <button
      className={`flex items-center hover:opacity-75 justify-center ${
        hide ? "invisible" : ""
      }`}
      aria-hidden
      // hide nav buttons from screen readers as they can scroll the carousel without it and
      // then we don't have to track which slide is currently active
      // basically as far as the screen reader is concerned, the carousel is just a list of quotes
      // all shown at once
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

type ProgressIndicatorProps = {
  count: number;
  currentSlideIndex: number;
  scrollToSlide: (index: number) => void;
};

function ProgressIndicator({
  count,
  currentSlideIndex,
  scrollToSlide,
}: ProgressIndicatorProps) {
  return (
    <div>
      <div className="progress-indicator flex justify-center items-end h-4">
        {new Array(count).fill(undefined).map((_, index) => (
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
