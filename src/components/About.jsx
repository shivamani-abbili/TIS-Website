import { motion } from "framer-motion";

import studentLearningImage from "../assets/images/student-learning.png";

function About() {
  return (
    <section className="about-section" id="about">

      {/* LEFT CONTENT */}
      <motion.div
        className="about-content"
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
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
          ABOUT TULAS
        </span>

        <h2>
          Where curiosity
          <br />
          meets <span>opportunity.</span>
        </h2>

        <p className="about-intro">
          Tulas International School is a learning
          environment where students are encouraged
          to discover their strengths, explore their
          interests and grow with confidence.
        </p>

        <p className="about-text">
          We believe education goes beyond textbooks.
          Through academics, sports, arts, activities
          and meaningful experiences, students are
          given opportunities to develop the skills
          and mindset they need for the future.
        </p>

        <motion.a
          href="#academics"
          className="about-button"
          whileHover={{
            scale: 1.04,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Discover Tulas
          <span>↗</span>
        </motion.a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="about-visual"
        initial={{
          opacity: 0,
          x: 60,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* DECORATIVE CIRCLE */}
        <motion.div
          className="about-circle"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* IMAGE */}
        <div className="about-image-wrapper">
          <img
            src={studentLearningImage}
            alt="Students learning at Tulas International School"
          />
        </div>

        {/* FLOATING STAT */}
        <motion.div
          className="about-stat"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          <strong>22+</strong>
          <span>
            Acres of
            <br />
            campus
          </span>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default About;