import { motion } from "framer-motion";

const academicCards = [
  {
    number: "01",
    title: "Curiosity",
    text: "Students are encouraged to ask questions, explore ideas and develop a genuine love for learning.",
  },
  {
    number: "02",
    title: "Knowledge",
    text: "A strong academic foundation helps students build the knowledge and understanding they need for the future.",
  },
  {
    number: "03",
    title: "Creativity",
    text: "Learning extends beyond conventional classrooms through projects, activities and creative experiences.",
  },
  {
    number: "04",
    title: "Confidence",
    text: "Students are given opportunities to communicate, collaborate and take ownership of their learning.",
  },
];

function Academics() {
  return (
    <section className="academics-section" id="academics">

      {/* HEADER */}
      <motion.div
        className="academics-header"
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="section-eyebrow">
          ACADEMICS
        </span>

        <h2>
          Learning that goes
          <br />
          <span>beyond the classroom.</span>
        </h2>

        <p>
          At Tulas, education is designed to develop
          curious minds, independent thinkers and
          confident individuals.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="academics-grid">
        {academicCards.map((card, index) => (
          <motion.article
            className="academic-card"
            key={card.number}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="academic-card-top">
              <span className="academic-number">
                {card.number}
              </span>

              <motion.span
                className="academic-arrow"
                whileHover={{
                  rotate: 45,
                }}
              >
                ↗
              </motion.span>
            </div>

            <div className="academic-card-content">
              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* BOTTOM STATEMENT */}
      <motion.div
        className="academics-statement"
        initial={{
          opacity: 0,
          scale: 0.96,
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
        <span>LEARN</span>
        <span>EXPLORE</span>
        <span>CREATE</span>
        <span>GROW</span>
      </motion.div>

    </section>
  );
}

export default Academics;