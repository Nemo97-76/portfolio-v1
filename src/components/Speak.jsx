import React, { useState, useEffect, useCallback, useRef } from "react";
import { BsQuote } from "react-icons/bs";
import client1 from "../client-sm-4.jpg";
import client2 from "../client-sm-2.jpg";
import client3 from "../client-sm-3.jpg";

const AUTO_INTERVAL_MS = 3000;

const testimonials = [
  {
    id: "chris",
    quote:
      "I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et.",
    name: "Chris Tom",
    role: "user from UK",
    avatar: client1,
  },
  {
    id: "dennis",
    quote:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.",
    name: "Dennis Jacques",
    role: "noon inc",
    avatar: client2,
  },
  {
    id: "patrick",
    quote:
      "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "Patrick Cary",
    role: "freelancer from USA",
    avatar: client3,
  },
];

function TestimonialSlide({ item, isActive }) {
  return (
    <article
      className="speakSlide"
      role="group"
      aria-roledescription="slide"
      aria-label={`${item.name}, ${item.role}`}
      aria-hidden={!isActive}
    >
      <blockquote className="speakQuoteBlock">
        <BsQuote className="speakQuoteIcon" aria-hidden="true" />
        <p className="speakQuote">{item.quote}</p>
      </blockquote>
      <img
        className="speakAvatar"
        src={item.avatar}
        alt=""
        width={60}
        height={60}
        loading="lazy"
      />
      <footer className="speakAuthorBlock">
        <p className="speakAuthor">{item.name}</p>
        <p className="speakRole">{item.role}</p>
      </footer>
    </article>
  );
}

const Speak = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const goTo = useCallback((index) => {
    const count = testimonials.length;
    setActiveIndex(((index % count) + count) % count);
  }, []);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsPaused(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <section
      id="clientSpeak"
      className="speakSection"
      aria-labelledby="speak-heading"
    >
      <header className="speakHeader" data-aos="fade-up">
        <p className="sectionTitle">CLIENT SPEAK</p>
        <h2 id="speak-heading" className="sectionSubtitle">
          What some of my clients say
        </h2>
        <div className="subtitleLine" aria-hidden="true" />
      </header>

      <div
        className="speakCarousel"
        data-aos="fade-up"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <div className="speakViewport">
          <div
            className="speakTrack"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            aria-live="polite"
          >
            {testimonials.map((item, index) => (
              <TestimonialSlide
                key={item.id}
                item={item}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="speakDots" role="tablist" aria-label="Select testimonial">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`speakDot${index === activeIndex ? " speakDot--active" : ""}`}
              aria-label={`Testimonial ${index + 1}: ${item.name}`}
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speak;
