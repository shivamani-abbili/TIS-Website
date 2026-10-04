import { motion } from "framer-motion";

function AdmissionsCTA() {
  return (
    <section
      className="admissions-section"
      id="admission"
    >
      {/* DECORATIVE SHAPE */}
      <motion.div
        className="admissions-circle admissions-circle-one"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="admissions-circle admissions-circle-two"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CONTENT */}
      <motion.div
        className="admissions-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="section-eyebrow">
          ADMISSIONS
        </span>

        <h2>
          Your journey
          <br />
          starts <span>here.</span>
        </h2>

        <p>
          Give your child an environment where curiosity,
          confidence and opportunity come together.
        </p>

        <motion.a
          href="#contact"
          className="admissions-button"
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>Explore Admissions</span>
          <span className="admissions-button-arrow">
            ↗
          </span>
        </motion.a>
      </motion.div>

      {/* BOTTOM INFORMATION */}
      <motion.div
        className="admissions-info"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <div>
          <span>01</span>
          <p>Discover Tulas</p>
        </div>

        <div>
          <span>02</span>
          <p>Explore Opportunities</p>
        </div>

        <div>
          <span>03</span>
          <p>Start Your Journey</p>
        </div>
      </motion.div>
    </section>
  );
}

export default AdmissionsCTA;