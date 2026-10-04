import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Tulas provides an environment where students are encouraged to learn, participate and become confident individuals.",
    name: "Parent Community",
    role: "Tulas International School",
  },
  {
    id: 2,
    quote:
      "The combination of academics, sports and activities gives students opportunities to discover their interests and strengths.",
    name: "Student Community",
    role: "Tulas International School",
  },
  {
    id: 3,
    quote:
      "A school experience should prepare students not only for examinations, but also for the opportunities and challenges ahead.",
    name: "Tulas Community",
    role: "Tulas International School",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => {
        return (previous + 1) % testimonials.length;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const testimonial = testimonials[current];

  const previousTestimonial = () => {
    setCurrent((previous) => {
      return previous === 0
        ? testimonials.length - 1
        : previous - 1;
    });
  };

  const nextTestimonial = () => {
    setCurrent((previous) => {
      return (previous + 1) % testimonials.length;
    });
  };

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      {/* HEADER */}
      <motion.div
        className="testimonials-header"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="section-eyebrow">
          THE TULAS EXPERIENCE
        </span>

        <h2>
          Voices from our
          <br />
          <span>community.</span>
        </h2>
      </motion.div>

      {/* TESTIMONIAL */}
      <motion.div
        className="testimonial-wrapper"
        initial={{
          opacity: 0,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {/* DECORATIVE QUOTE */}
        <div className="testimonial-quote-mark">
          “
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            className="testimonial-content"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <blockquote>
              {testimonial.quote}
            </blockquote>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <strong>
                  {testimonial.name}
                </strong>

                <span>
                  {testimonial.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS */}
        <div className="testimonial-controls">
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={
                  index === current
                    ? "testimonial-dot active"
                    : "testimonial-dot"
                }
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${
                  index + 1
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </motion.div>

      {/* BOTTOM TEXT */}
      <motion.p
        className="testimonials-bottom-text"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Building confident learners, curious thinkers
        and responsible individuals.
      </motion.p>
    </section>
  );
}

export default Testimonials;