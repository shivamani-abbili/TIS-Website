import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Student-Centred Learning",
    description:
      "Students are encouraged to discover their interests, develop independence and take an active role in their learning journey.",
  },
  {
    number: "02",
    title: "Beyond Academics",
    description:
      "Sports, arts, activities and real-world experiences create opportunities for students to develop skills beyond the classroom.",
  },
  {
    number: "03",
    title: "Holistic Development",
    description:
      "The learning experience focuses on developing confident, curious and responsible individuals.",
  },
  {
    number: "04",
    title: "A Vibrant Community",
    description:
      "Students learn through collaboration, participation and meaningful connections with the people around them.",
  },
];

function WhyTIS() {
  return (
    <section className="why-tis-section" id="why-tis">

      {/* TOP CONTENT */}
      <div className="why-tis-top">

        <motion.div
          className="why-tis-heading"
          initial={{
            opacity: 0,
            x: -50,
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
            WHY TULAS
          </span>

          <h2>
            More than a
            <br />
            <span>school.</span>
          </h2>
        </motion.div>

        <motion.div
          className="why-tis-intro"
          initial={{
            opacity: 0,
            x: 50,
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            Tulas creates an environment where students
            can learn, experiment, participate and grow.
            Every experience contributes to preparing
            students for the opportunities ahead.
          </p>
        </motion.div>

      </div>

      {/* REASONS */}
      <div className="why-tis-list">

        {reasons.map((reason, index) => (
          <motion.article
            className="why-tis-item"
            key={reason.number}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              x: 8,
            }}
          >

            <div className="why-tis-number">
              {reason.number}
            </div>

            <div className="why-tis-content">
              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>
            </div>

            <motion.div
              className="why-tis-arrow"
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
            >
              ↗
            </motion.div>

          </motion.article>
        ))}

      </div>

      {/* BOTTOM MARQUEE */}
      <motion.div
        className="why-tis-marquee"
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
          duration: 0.8,
        }}
      >
        <motion.div
          className="why-tis-marquee-track"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>CURIOUS MINDS</span>
          <i>✦</i>
          <span>CONFIDENT STUDENTS</span>
          <i>✦</i>
          <span>CREATIVE THINKERS</span>
          <i>✦</i>
          <span>FUTURE READY</span>
          <i>✦</i>

          <span>CURIOUS MINDS</span>
          <i>✦</i>
          <span>CONFIDENT STUDENTS</span>
          <i>✦</i>
          <span>CREATIVE THINKERS</span>
          <i>✦</i>
          <span>FUTURE READY</span>
          <i>✦</i>
        </motion.div>
      </motion.div>

    </section>
  );
}

export default WhyTIS;