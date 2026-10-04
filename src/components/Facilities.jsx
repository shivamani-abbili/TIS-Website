import { motion } from "framer-motion";

import basketballImage from "../assets/images/basketball.png";
import swimmingImage from "../assets/images/swimming.png";
import studentLearningImage from "../assets/images/student-learning.png";

const facilities = [
  {
    number: "01",
    title: "Sports & Fitness",
    description:
      "A vibrant sporting environment where students develop discipline, teamwork, confidence and a healthy competitive spirit.",
    image: basketballImage,
  },
  {
    number: "02",
    title: "Swimming",
    description:
      "Opportunities for students to build fitness, confidence and essential skills through active participation.",
    image: swimmingImage,
  },
  {
    number: "03",
    title: "Learning Spaces",
    description:
      "An engaging learning environment where curiosity, creativity and independent thinking are encouraged.",
    image: studentLearningImage,
  },
];

function Facilities() {
  return (
    <section className="facilities-section" id="facilities">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-eyebrow">
          LIFE AT TULAS
        </span>

        <h2>
          Spaces designed
          <br />
          <span>for growth.</span>
        </h2>

        <p>
          From academics to sports and creative pursuits,
          every part of the Tulas experience is designed
          around student development.
        </p>
      </motion.div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <motion.article
            className="facility-card"
            key={facility.number}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
          >
            <div className="facility-image">
              <img
                src={facility.image}
                alt={facility.title}
              />

              <div className="facility-overlay" />

              <span className="facility-number">
                {facility.number}
              </span>
            </div>

            <div className="facility-content">
              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

              <span className="facility-arrow">
                Explore <span>↗</span>
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Facilities;