import { motion } from "framer-motion";

import tisLogo from "../assets/images/tis-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <motion.div
          className="footer-brand"
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
          <a
            href="#home"
            className="footer-logo"
          >
            <img
              src={tisLogo}
              alt="Tulas International School"
            />
          </a>

          <p>
            Inspiring curiosity, confidence and
            opportunity through meaningful learning
            experiences.
          </p>

          <motion.a
            href="#admission"
            className="footer-cta"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>
              Explore Admissions
            </span>

            <span>↗</span>
          </motion.a>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          className="footer-column"
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
            delay: 0.1,
          }}
        >
          <span className="footer-heading">
            EXPLORE
          </span>

          <nav className="footer-links">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          className="footer-column"
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
          <span className="footer-heading">
            GET IN TOUCH
          </span>

          <div className="footer-contact">
            <a href="tel:+919837983791">
              +91 98379 83791
            </a>

            <a href="mailto:info@tis.edu.in">
              info@tis.edu.in
            </a>

            <p>
              Tulas International School
              <br />
              Dehradun, Uttarakhand
            </p>
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="footer-column"
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
            delay: 0.3,
          }}
        >
          <span className="footer-heading">
            FOLLOW
          </span>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              Facebook ↗
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              YouTube ↗
            </a>
          </div>
        </motion.div>

      </div>

      {/* LARGE BRAND TEXT */}
      <motion.div
        className="footer-big-text"
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
          duration: 1,
        }}
      >
        TULAS
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <span>
          © {currentYear} Tulas International School.
          All rights reserved.
        </span>

        <a href="#home">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;