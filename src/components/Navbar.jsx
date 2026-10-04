import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tisLogo from "../assets/images/tis-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  return (
    <>
      {/* =========================
          DESKTOP / MAIN NAVBAR
      ========================== */}
      <motion.header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-inner">

          {/* LOGO */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Tulas International School Home"
          >
            <img
              src={tisLogo}
              alt="Tulas International School"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="navbar-links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <span>{item.name}</span>

                <motion.i
                  className="nav-link-line"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* ADMISSIONS CTA */}
          <motion.a
            href="#admission"
            className="navbar-cta"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>Admissions</span>

            <span className="navbar-cta-arrow">
              ↗
            </span>
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? "menu-active" : ""
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </motion.header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
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
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <nav
              className="mobile-menu-links"
              aria-label="Mobile navigation"
            >

              {/* MOBILE NAVIGATION LINKS */}
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.35,
                  }}
                >
                  <span className="mobile-menu-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {item.name}
                  </span>

                  <span className="mobile-menu-arrow">
                    ↗
                  </span>
                </motion.a>
              ))}

              {/* MOBILE ADMISSION BUTTON */}
              <motion.a
                href="#admission"
                className="mobile-admission-button"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                }}
              >
                <span>
                  Apply for Admission
                </span>

                <span>
                  ↗
                </span>
              </motion.a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;