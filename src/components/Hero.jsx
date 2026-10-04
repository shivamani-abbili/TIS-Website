import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import heroSports from "../assets/images/hero-sports.png";
import heroDance from "../assets/images/hero-dance.png";

const slides = [
  {
    id: 1,
    eyebrow: "TULAS INTERNATIONAL SCHOOL",
    title: "LET'S DO",
    emphasis: "it",
    subtitle: "WITH TULAS",
    description:
      "Where curiosity meets opportunity, and every student is encouraged to discover, learn and grow.",
  },
  {
    id: 2,
    eyebrow: "ADMISSIONS OPEN",
    title: "DISCOVER",
    emphasis: "your",
    subtitle: "POTENTIAL",
    description:
      "A learning environment designed to help students explore their interests and build confidence.",
  },
  {
    id: 3,
    eyebrow: "BEYOND ACADEMICS",
    title: "LEARN",
    emphasis: "through",
    subtitle: "EXPERIENCE",
    description:
      "Sports, arts, activities and experiences that make school life meaningful beyond the classroom.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => {
        return (previous + 1) % slides.length;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((previous) => {
      return previous === 0 ? slides.length - 1 : previous - 1;
    });
  };

  const goToNextSlide = () => {
    setCurrentSlide((previous) => {
      return (previous + 1) % slides.length;
    });
  };

  return (
    <section className="hero" id="home">

      {/* BACKGROUND SHAPES */}
      <div className="hero-circle hero-circle-one" />

      <div className="hero-circle hero-circle-two" />

      <motion.div
        className="hero-glow hero-glow-one"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-glow hero-glow-two"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* DECORATIVE BALL */}
      <motion.div
        className="hero-basketball"
        animate={{
          y: [0, -16, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🏀
      </motion.div>

      {/* SLIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-slide"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >

          {/* LEFT STUDENT IMAGE */}
          <motion.div
            className="hero-student hero-student-left"
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={heroSports}
              alt="Student participating in sports at Tulas International School"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* MAIN CONTENT */}
          <div className="hero-content">

            {/* EYEBROW */}
            <motion.p
              className="hero-eyebrow"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
            >
              {slide.eyebrow}
            </motion.p>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {slide.title}{" "}

              <span>{slide.emphasis}</span>

              <br />

              {slide.subtitle}
            </motion.h1>

            {/* UNDERLINE */}
            <motion.div
              className="hero-underline"
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 260,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: "easeOut",
              }}
            />

            {/* DESCRIPTION */}
            <motion.p
              className="hero-description"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >
              {slide.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="hero-actions"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
            >
              <motion.a
                href="#about"
                className="hero-button hero-button-primary"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Explore TIS</span>
                <span>↗</span>
              </motion.a>

              <motion.a
                href="#admission"
                className="hero-button hero-button-outline"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Apply Now</span>
                <span>↗</span>
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT STUDENT IMAGE */}
          <motion.div
            className="hero-student hero-student-right"
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={heroDance}
              alt="Student participating in activities at Tulas International School"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

        </motion.div>
      </AnimatePresence>

      {/* SLIDER CONTROLS */}
      <div className="hero-controls">

        <button
          type="button"
          className="hero-arrow"
          onClick={goToPreviousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="hero-dots">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={
                index === currentSlide
                  ? "hero-dot active"
                  : "hero-dot"
              }
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="hero-arrow"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          →
        </button>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="hero-scroll"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>SCROLL</span>
        <span className="scroll-arrow">↓</span>
      </motion.div>

      {/* WHATSAPP */}
      <motion.a
        href="https://wa.me/919837983791"
        className="whatsapp-button"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Tulas International School on WhatsApp"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span>◔</span>
      </motion.a>

      {/* EVA */}
      <motion.button
        type="button"
        className="eva-button"
        aria-label="Open virtual assistant"
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <span className="eva-icon">E</span>
        <span className="eva-text">Ask Eva</span>
      </motion.button>

    </section>
  );
}

export default Hero;