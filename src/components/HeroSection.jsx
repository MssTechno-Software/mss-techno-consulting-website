import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import DotField from "./DotField";
import Navbar from "./Navbar";

/* =========================================================
   HERO SLIDES
========================================================= */

const SLIDES = [
  {
    id: 1,
    eyebrow: "IT JOB SEARCH",
    title: "Applying to IT Jobs But Not Getting Calls?",
    highlight: "Turn Applications Into Interview Opportunities",
    description:
      "If your applications are not converting into interviews, your resume positioning, ATS alignment, or keyword targeting could be holding you back. MSS Techno Consulting helps you identify the gaps and present your profile more effectively.",
    primary: "Book Free Consultation",
    secondary: "Learn More",
  },

  {
    id: 2,
    eyebrow: "CAREER TRANSITION",
    title: "Switching From Non IT to IT?",
    highlight: "Don't Start Blindly.",
    description:
      "Moving into IT can be confusing when you don't know which skills to build, which roles to target, or where to begin. Our consulting and mentoring approach helps you create a practical path toward your IT career goals.",
    primary: "Book a Consultation",
    secondary: "Learn More",
  },

  {
    id: 3,
    eyebrow: "RESUME & PROFILE CONSULTING",
    title: "Sending Resumes But Getting Rejected?",
    highlight: "Build a Profile That Gets Recruiter Attention",
    description:
      "Your technical skills are only part of the equation. We help you identify resume gaps, improve positioning, align relevant keywords, and create a stronger professional profile for the roles you're targeting.",
    primary: "Book Free Consultation",
    secondary: "Learn More",
  },

  {
    id: 4,
    eyebrow: "IT CAREER GUIDANCE",
    title: "Confused About Which IT Career Path To Choose?",
    highlight:
      "Find the Right Direction Before You Invest Your Time",
    description:
      "Choosing between development, data, cloud, QA, cybersecurity, and other technology paths can be difficult. MSS Techno Consulting helps you understand your options and create a structured direction based on your goals.",
    primary: "Talk to a Consultant",
    secondary: "Explore Career Paths",
  },
];

/* =========================================================
   HERO SECTION
========================================================= */

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = SLIDES[activeIndex];
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev + 1) % SLIDES.length
    );
  }, []);

  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + SLIDES.length) %
        SLIDES.length
    );
  }, []);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(
      nextSlide,
      6500
    );

    return () => clearInterval(timer);
  }, [nextSlide]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#F8F6F2] text-[#263026]"
    >

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F8F6F2]"
      >

        {/* DotField */}

        <div
          className="absolute inset-0 opacity-100"
        >
          <DotField
            dotRadius={2}
            dotSpacing={16}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly={true}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(107, 45, 26, 0.46)"
            gradientTo="rgba(77, 139, 79, 0.34)"
            glowColor="#6B2D1A"
            className="h-full w-full"
          />
        </div>

        {/* Very subtle readability vignette */}

        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,rgba(248,246,242,0.38)_100%)]"
        />

        {/* Very subtle top fade */}

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F8F6F2]/55 to-transparent"
        />

      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-50">
        <Navbar />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="relative z-10 flex min-h-screen items-center px-5 pb-28 pt-32 sm:px-8 lg:px-12"
      >

        <div
          className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.42fr)] lg:gap-20"
        >

          {/* =================================================
              MAIN EDITORIAL CONTENT
          ================================================== */}

          <div className="relative max-w-[920px]">

            {/* Soft glass backing */}

            <div
              className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 rounded-[42px] bg-white/10 blur-2xl lg:-inset-x-12 lg:-inset-y-12"
            />

            <AnimatePresence mode="wait">

              <motion.div
                key={currentSlide.id}
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.62,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                {/* =================================================
                    EYEBROW
                ================================================== */}

                <div
                  className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#4D8B4F]/20 bg-white/65 px-4 py-2 shadow-[0_8px_30px_rgba(77,139,79,0.06)] backdrop-blur-xl"
                >

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#4D8B4F] shadow-[0_0_10px_rgba(77,139,79,0.55)]"
                  />

                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6B2D1A]/85 sm:text-[11px]"
                  >
                    {currentSlide.eyebrow}
                  </span>

                </div>

                {/* =================================================
                    MAIN HEADLINE
                ================================================== */}

                <h1
                  className="relative max-w-[850px] text-[42px] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#642A17] drop-shadow-[0_2px_3px_rgba(255,255,255,0.8)] sm:text-[52px] md:text-[62px] lg:text-[68px]"
                >
                  {currentSlide.title}
                </h1>

                {/* =================================================
                    HIGHLIGHT HEADLINE
                ================================================== */}

                <div
                  className="mt-5 flex items-start gap-4"
                >
                  <h2
                    className="max-w-2xl text-[23px] font-bold leading-[1.18] tracking-[-0.025em] text-[#4D8B4F] drop-shadow-[0_1px_2px_rgba(255,255,255,0.65)] sm:text-[29px] md:text-[32px]"
                  >
                    {currentSlide.highlight}
                  </h2>

                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="mt-5 max-w-xl text-[15px] font-semibold leading-7 text-[#263026]/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] sm:text-base"
                >
                  {currentSlide.description}
                </p>

                {/* =================================================
                    CTA BUTTONS
                ================================================== */}

                <div
                  className="mt-7 flex flex-wrap items-center gap-3"
                >

                  {/* Primary */}

                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="group inline-flex items-center gap-2.5 cursor-pointer rounded-full border border-[#4D8B4F]/25 bg-[#4D8B4F] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(77,139,79,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#438046] hover:shadow-[0_16px_38px_rgba(77,139,79,0.30)] active:translate-y-0"
                  >
                    {currentSlide.primary}

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  {/* Secondary */}

                  <button
                    type="button"
                    onClick={() => {
                      if (
                        currentSlide.secondary ===
                        "Explore Career Paths"
                      ) {
                        scrollToSection("solutions");
                      } else {
                        scrollToSection("services");
                      }
                    }}
                    className="group inline-flex items-center rounded-full cursor-pointer border border-[#6B2D1A]/15 bg-white/65 px-6 py-3.5 text-sm font-semibold text-[#6B2D1A] shadow-[0_8px_24px_rgba(107,45,26,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-[0_12px_30px_rgba(107,45,26,0.10)]"
                  >
                    {currentSlide.secondary}
                  </button>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* =================================================
              RIGHT CONSULTING CARD
          ================================================== */}

          <div
            className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[360px] w-[370px] -translate-y-1/2 lg:block xl:right-[9%]"
          >
            

            {/* Subtle card atmosphere */}

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.18, 0.28, 0.18],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-10 rounded-full bg-[#EADBC8]/20 blur-[70px]"
            />

            {/* Main card */}

            <motion.div
              key={`card-${currentSlide.id}`}
              initial={{
                opacity: 0,
                x: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 top-[58px] w-[300px] overflow-hidden rounded-[30px] border border-white/85 bg-white/62 p-6 shadow-[0_30px_85px_rgba(107,45,26,0.10)] backdrop-blur-2xl"
            >

              {/* Glass reflection */}

              <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/25 blur-3xl"
              />

              {/* Card number */}

              <div
                className="relative flex items-end justify-between"
              >

                <span
                  className="text-4xl font-semibold tracking-[-0.04em] text-[#6B2D1A]"
                >
                  0{currentSlide.id}
                </span>

                <span
                  className="pb-1 text-xs font-bold tracking-[0.18em] text-[#4D8B4F]/65"
                >
                  / 04
                </span>

              </div>

              {/* Divider */}

              <div
                className="relative mt-5 h-px bg-[#6B2D1A]/10"
              />

              {/* Card description */}

              <p
                className="relative mt-5 text-sm font-medium leading-6 text-[#263026]/68"
              >
                Practical consulting, structured guidance, and
                technology-focused solutions built around your goals.
              </p>

              {/* Card label */}

              <div
                className="relative mt-6 flex items-center gap-2"
              >

                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#4D8B4F] shadow-[0_0_8px_rgba(77,139,79,0.45)]"
                />

                <span
                  className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#4D8B4F]/75"
                >
                  Consulting with clarity
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* =====================================================
          SLIDE CONTROLS
      ====================================================== */}

      <div
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3"
      >

        {/* Previous */}

        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer border border-[#6B2D1A]/10 bg-white/55 text-[#6B2D1A]/75 shadow-[0_6px_20px_rgba(77,139,79,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-[0_10px_25px_rgba(107,45,26,0.10)] active:translate-y-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Slide indicators */}

        <div
          className="flex items-center gap-2 rounded-full border border-[#6B2D1A]/10 bg-white/60 px-4 py-2.5 shadow-[0_8px_25px_rgba(77,139,79,0.07)] backdrop-blur-xl"
        >

          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() =>
                setActiveIndex(index)
              }
              aria-label={`Go to slide ${index + 1
                }`}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${activeIndex === index ? "w-8 bg-[#4D8B4F] shadow-[0_0_8px_rgba(77,139,79,0.35)]" : "w-1.5 bg-[#6B2D1A]/25 hover:bg-[#6B2D1A]/45" }`}
            />
          ))}

        </div>

        {/* Next */}

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#4D8B4F]/20 bg-[#4D8B4F] text-white cursor-pointer shadow-[0_8px_20px_rgba(77,139,79,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#438046] hover:shadow-[0_12px_28px_rgba(77,139,79,0.28)] active:translate-y-0"
        >
          <ChevronRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>

      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-[#4D8B4F]/30 to-transparent"
      />

    </section>
  );
}