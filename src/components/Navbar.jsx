import React, { useCallback, useEffect, useState } from "react";

import { ArrowRight, Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Who We Help",
  "Partners",
  "Reviews",
  "Contact", 
];

const SECTION_IDS = {
  Home: "home",
  Services: "services",
  "Who We Help": "who-we-help",
  Partners:"Partners",
  Reviews: "reviews",
  Contact: "contact"
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(
    window.location.pathname === "/about"
      ? "About"
      : null
  );

  const [scrolled, setScrolled] = useState(false);

  const isAboutPage =
    window.location.pathname === "/about";

  const visibleNavItems =
    window.location.pathname === "/"
      ? NAV_ITEMS.filter(
        (item) => item !== "Home"
      )
      : NAV_ITEMS;

  const scrollToSection = useCallback(
    (item) => {
      if (item === "About") {
        setActiveSection("About");
        setMobileOpen(false);

        if (
          window.location.pathname !==
          "/about"
        ) {
          window.location.href =
            "/about";
        }

        return;
      }

      if (item === "Home") {
        setActiveSection("Home");
        setMobileOpen(false);

        if (
          window.location.pathname !==
          "/"
        ) {
          window.location.href = "/";
          return;
        }

        window.history.replaceState(
          null,
          "",
          window.location.pathname
        );

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      const sectionId =
        SECTION_IDS[item];

      if (!sectionId) return;

      if (
        window.location.pathname !==
        "/"
      ) {
        sessionStorage.setItem(
          "mss-scroll-target",
          sectionId
        );

        window.location.href = "/";
        return;
      }

      const section =
        document.getElementById(
          sectionId
        );

      if (!section) return;

      const navbarOffset = 82;

      const targetPosition =
        section.getBoundingClientRect()
          .top +
        window.scrollY -
        navbarOffset;

      const finalPosition =
        Math.max(
          targetPosition,
          0
        );

      setActiveSection(item);
      setMobileOpen(false);

      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    },
    []
  );

  /* =======================================================
     NAV CLICK
  ======================================================= */

  const handleNavigation = useCallback(
    (item, event) => {
      if (event) {
        event.preventDefault();
      }

      scrollToSection(item);
    },
    [scrollToSection]
  );

  /* =======================================================
     NAVBAR SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     ACTIVE SECTION DETECTION
  ======================================================= */

  useEffect(() => {
    if (
      window.location.pathname ===
      "/about"
    ) {
      setActiveSection("About");
      return;
    }

    if (
      window.location.pathname !==
      "/"
    ) {
      return;
    }

    const pendingTarget =
      sessionStorage.getItem(
        "mss-scroll-target"
      );

    if (pendingTarget) {
      sessionStorage.removeItem(
        "mss-scroll-target"
      );

      window.requestAnimationFrame(
        () => {
          const section =
            document.getElementById(
              pendingTarget
            );

          if (!section) return;

          const navbarOffset = 82;

          const targetPosition =
            section.getBoundingClientRect()
              .top +
            window.scrollY -
            navbarOffset;

          const finalPosition =
            Math.max(
              targetPosition,
              0
            );

          window.history.replaceState(
            null,
            "",
            window.location.pathname
          );

          setTimeout(() => {
            window.scrollTo({
              top: finalPosition,
              behavior: "smooth",
            });
          }, 80);
        }
      );
    }

    let ticking = false;

    const getSections = () => {
      return NAV_ITEMS
        .filter(
          (item) =>
            item !== "Home" &&
            item !== "About"
        )
        .map((item) => ({
          item,
          element:
            document.getElementById(
              SECTION_IDS[item]
            ),
        }))
        .filter(
          ({ element }) => element
        );
    };

    const updateActiveSection = () => {
      const sections =
        getSections();

      if (!sections.length) {
        ticking = false;
        return;
      }

      if (window.scrollY < 80) {
        setActiveSection(null);

        ticking = false;
        return;
      }

      const activationPoint =
        window.scrollY + 110;

      let currentSection =
        sections[0].item;

      let currentSectionTop =
        -Infinity;

      sections.forEach(
        ({ item, element }) => {
          const rect =
            element.getBoundingClientRect();

          const sectionTop =
            rect.top +
            window.scrollY;

          if (
            sectionTop <=
            activationPoint &&
            sectionTop >
            currentSectionTop
          ) {
            currentSectionTop =
              sectionTop;

            currentSection =
              item;
          }
        }
      );

      setActiveSection(
        (previousSection) => {
          if (
            previousSection ===
            currentSection
          ) {
            return previousSection;
          }

          return currentSection;
        }
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(
        updateActiveSection
      );
    };

    const handleResize = () => {
      updateActiveSection();
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    const firstCheck =
      window.setTimeout(() => {
        updateActiveSection();
      }, 300);

    const secondCheck =
      window.setTimeout(() => {
        updateActiveSection();
      }, 1000);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.clearTimeout(
        firstCheck
      );

      window.clearTimeout(
        secondCheck
      );
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown =
      (event) => {
        if (
          event.key === "Escape"
        ) {
          setMobileOpen(false);
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [mobileOpen]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[999] w-full isolation-isolate"
    >

      <motion.div
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        className={`relative w-full border-b transition-all duration-500 ease-out ${scrolled ? "border-white/65 bg-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.18),0_12px_38px_rgba(77,139,79,0.10)]" : "border-white/55 bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(255,255,255,0.12),0_8px_28px_rgba(77,139,79,0.06)]"} backdrop-blur-2xl backdrop-saturate-150`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90"
        />

        <div
          className="pointer-events-none absolute -left-20 top-0 h-full w-[320px] bg-[#EADBC8]/12 blur-3xl"
        />

        <div
          className="pointer-events-none absolute right-[-80px] top-0 h-full w-[320px] bg-[#A7D98E]/10 blur-3xl"
        />

        <div
          className="relative mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 sm:min-h-[78px] sm:px-6 lg:gap-5 lg:px-8 xl:px-12 2xl:px-14"
        >
          {/* LOGO */}

          <button
            type="button"
            onClick={() => scrollToSection("Home")}
            aria-label="Go to homepage"
            className="group relative z-10 flex h-14 w-auto min-w-0 shrink-0 cursor-pointer items-center px-1 py-1 outline-none lg:w-[330px] xl:w-[360px]"
          >
            <motion.div
              whileHover={{ y: -1, scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12 overflow-hidden rounded-full border border-white/75 bg-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_7px_22px_rgba(77,139,79,0.08)] backdrop-blur-2xl"
            >
              <img
                src="../logo.png"
                alt="MSS Techno"
                className="h-full w-full object-contain p-1"
              />
            </motion.div>
            <div
              className="absolute left-[68px] top-1/2 flex -translate-y-1/2 flex-col justify-center text-left"
            >
              <span
                className="font-sans text-[18px] font-extrabold sm:text-[20px] leading-none tracking-[-0.035em] text-[#6B2D1A]"
              >MSS Techno</span>
              <span
                className="mt-2 whitespace-nowrap text-[9px] font-semibold leading-none tracking-[0.08em] text-[#4D8B4F]"
              >Lets get&apos;s started on your journey to success</span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="relative z-10 hidden items-center gap-0.5 rounded-full border border-white/60 bg-white/18 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(107,45,26,0.05)] backdrop-blur-2xl backdrop-saturate-150 lg:flex"
          >
            {visibleNavItems.map(
              (item) => {
                const isActive =
                  activeSection ===
                  item;

                return (
                  <button
                    type="button"
                    key={item}
                    onClick={(event) => handleNavigation(item, event)}
                    className="group relative cursor-pointer rounded-full px-4 py-2.5 text-[13px] font-semibold tracking-[-0.01em] outline-none lg:px-[17px]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mss-navbar-active"
                        transition={{ type: "spring", stiffness: 430, damping: 32, mass: 0.55 }}
                        className="absolute inset-0 rounded-full border border-white/75 bg-white/52 shadow-[0_8px_24px_rgba(107,45,26,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl"
                      />
                    )}

                    {!isActive && (
                      <span
                        className="pointer-events-none absolute inset-0 rounded-full bg-[#A7D98E]/0 opacity-0 transition-all duration-300 ease-out group-hover:bg-[#A7D98E]/10 group-hover:opacity-100"
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-300 ease-out ${isActive ? "text-[#6B2D1A]" : "text-[#263026]/68 group-hover:text-[#6B2D1A]"}`}
                    >
                      {item}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="mss-navbar-line"
                        transition={{ type: "spring", stiffness: 550, damping: 36 }}
                        className="absolute bottom-[4px] left-1/2 z-20 h-[2.5px] w-5 -translate-x-1/2 rounded-full bg-[#4D8B4F]"
                      />
                    )}

                    {!isActive && (
                      <span
                        className="absolute bottom-[4px] left-1/2 z-20 h-[2.5px] w-0 -translate-x-1/2 rounded-full bg-[#4D8B4F] opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:opacity-100"
                      />
                    )}
                  </button>
                );
              }
            )}
          </nav>

          {/* GET STARTED */}

          <motion.button
            type="button"
            onClick={() => scrollToSection("Contact")}
            whileHover={{ y: -1, scale: 1.015 }}
            whileTap={{ scale: 0.975 }}
            transition={{ type: "spring", stiffness: 420, damping: 23 }}
            className="group relative z-10 hidden shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-white/60 bg-[#4D8B4F]/72 px-5 py-3 text-[13px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_30px_rgba(77,139,79,0.22)] backdrop-blur-2xl lg:flex"
          >
            <span
              className="pointer-events-none absolute inset-y-0 -left-12 w-10 rotate-[18deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[125%]"
            />
            <span
              className="relative z-10"
            >Get Started</span>
            <ArrowRight
              className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </motion.button>

          {/* MOBILE MENU BUTTON */}

          <motion.button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            whileTap={{ scale: 0.92 }}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="relative z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/30 text-[#6B2D1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_26px_rgba(77,139,79,0.10)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X
                    className="h-5 w-5"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu
                    className="h-5 w-5"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[-1] bg-[#6B2D1A]/5 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="mx-3 mt-2 rounded-[26px] border border-white/75 bg-white/28 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_65px_rgba(77,139,79,0.14)] backdrop-blur-3xl backdrop-saturate-150 sm:mx-5 lg:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1"
              >
                {visibleNavItems.map(
                  (item, index) => {
                    const isActive =
                      activeSection ===
                      item;

                    return (
                      <motion.button
                        type="button"
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.035, duration: 0.24 }}
                        onClick={(event) => handleNavigation(item, event)}
                        className={`group relative flex w-full cursor-pointer items-center rounded-2xl px-4 py-3 text-left text-sm font-semibold outline-none transition-all duration-300 ${isActive ? "bg-white/48 text-[#6B2D1A] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_18px_rgba(77,139,79,0.08)] backdrop-blur-xl" : "text-[#263026]/70 hover:bg-[#A7D98E]/10 hover:text-[#6B2D1A]"}`}
                      >
                        <span
                          className="relative z-10"
                        >{item}</span>

                        <motion.span
                          animate={{ width: isActive ? 20 : 0, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.28 }}
                          className="absolute bottom-2 left-4 h-[3px] rounded-full bg-[#4D8B4F]"
                        />
                      </motion.button>
                    );
                  }
                )}
              </nav>

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.28 }}
                onClick={() => scrollToSection("Contact")}
                className="group relative mt-3 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-white/70 bg-[#4D8B4F]/82 px-5 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_30px_rgba(77,139,79,0.22)] backdrop-blur-2xl"
              >
                <span
                  className="pointer-events-none absolute inset-y-0 -left-12 w-10 rotate-[18deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[125%]"
                />

                <span
                  className="relative z-10"
                >
                  Get Started
                </span>

                <ArrowRight
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}