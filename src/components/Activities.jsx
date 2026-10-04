import { motion } from "framer-motion";

import archeryImage from "../assets/images/archery.png";
import cyclingImage from "../assets/images/cycling.png";
import hockeyImage from "../assets/images/hockey.png";
import cricketImage from "../assets/images/cricket.png";
import swimmingImage from "../assets/images/swimming.png";
import basketballImage from "../assets/images/basketball.png";

const activities = [
  {
    number: "01",
    title: "Archery",
    category: "SPORTS",
    image: archeryImage,
  },
  {
    number: "02",
    title: "Cycling",
    category: "SPORTS",
    image: cyclingImage,
  },
  {
    number: "03",
    title: "Hockey",
    category: "SPORTS",
    image: hockeyImage,
  },
  {
    number: "04",
    title: "Cricket",
    category: "SPORTS",
    image: cricketImage,
  },
  {
    number: "05",
    title: "Swimming",
    category: "SPORTS",
    image: swimmingImage,
  },
  {
    number: "06",
    title: "Basketball",
    category: "SPORTS",
    image: basketballImage,
  },
];

function Activities() {
  return (
    <section className="activities-section" id="activities">

      {/* HEADER */}
      <motion.div
        className="activities-header"
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
        <div>
          <span className="section-eyebrow">
            BEYOND ACADEMICS
          </span>

          <h2>
            Find your
            <br />
            <span>passion.</span>
          </h2>
        </div>

        <p>
          School life at Tulas extends beyond the
          classroom. Students have opportunities to
          participate, compete, create and discover
          activities they enjoy.
        </p>
      </motion.div>

      {/* ACTIVITIES GRID */}
      <div className="activities-grid">

        {activities.map((activity, index) => (
          <motion.article
            className="activity-card"
            key={activity.number}
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
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
          >
            {/* IMAGE */}
            <div className="activity-image">

              <motion.img
                src={activity.image}
                alt={`${activity.title} at Tulas International School`}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              <div className="activity-overlay" />

              {/* NUMBER */}
              <span className="activity-number">
                {activity.number}
              </span>

              {/* CATEGORY */}
              <span className="activity-category">
                {activity.category}
              </span>

              {/* ARROW */}
              <motion.span
                className="activity-arrow"
                whileHover={{
                  rotate: 45,
                  scale: 1.15,
                }}
              >
                ↗
              </motion.span>
            </div>

            {/* TITLE */}
            <div className="activity-content">
              <h3>
                {activity.title}
              </h3>

              <span>
                Explore activity
              </span>
            </div>
          </motion.article>
        ))}

      </div>

      {/* BOTTOM CTA */}
      <motion.div
        className="activities-bottom"
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
        }}
      >
        <p>
          Discover a school experience that goes
          beyond the classroom.
        </p>

        <motion.a
          href="#admission"
          whileHover={{
            scale: 1.04,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Explore Tulas
          <span>↗</span>
        </motion.a>
      </motion.div>

    </section>
  );
}

export default Activities;