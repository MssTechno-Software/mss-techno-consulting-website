import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  Users,
  Target,
  Sparkles,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import ceoImage from "../assets/ceo.png";

/* =========================================================
   MSS TECHNO — INDUSTRY EXPERT
   Premium Founder / Career Mentor Section
   ========================================================= */

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");

  if (!contactSection) return;

  const navbarOffset = 82;

  const targetPosition =
    contactSection.getBoundingClientRect().top +
    window.scrollY -
    navbarOffset;

  window.scrollTo({
    top: Math.max(targetPosition, 0),
    behavior: "smooth",
  });
};

const EXPERT_STATS = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "2500+",
    label: "Professionals Guided",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
];

const EXPERT_POINTS = [
  {
    icon: Target,
    title: "Strategic Career Guidance",
    description:
      "Practical direction aligned with your goals, skills and market opportunities.",
  },
  {
    icon: Users,
    title: "Experienced Mentoring",
    description:
      "Personalized guidance designed around your professional journey.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry-Focused Approach",
    description:
      "Insights shaped by real-world technology and business experience.",
  },
];

export default function IndustryExpert() {
  return (
    <section
      id="expert"
      aria-labelledby="expert-heading"
      className="relative isolate overflow-hidden bg-[#F8F6F2] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          CLEAN BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Green atmosphere */}

        <div
          className="absolute -left-[180px] top-[10%] h-[480px] w-[480px] rounded-full bg-[#A7D98E]/14 blur-[140px] animate-[expertFloat_14s_ease-in-out_infinite]"
        />

        {/* Champagne atmosphere */}

        <div
          className="absolute -right-[180px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#EADBC8]/20 blur-[150px] animate-[expertFloatReverse_17s_ease-in-out_infinite]"
        />

        {/* Very subtle brown atmosphere */}

        <div
          className="absolute bottom-[-260px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6B2D1A]/[0.035] blur-[150px]"
        />

        {/* Central white light */}

        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/65 blur-[160px]"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <Reveal className="text-center">
          <div
            className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/70 px-4 py-2 shadow-[0_10px_30px_rgba(77,139,79,0.07)] backdrop-blur-2xl"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F3E5] text-[#4D8B4F]"
            >
              <Sparkles className="h-3 w-3" />
            </span>

            <span
              className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6B2D1A]/70"
            >
              Industry Experience
            </span>
          </div>

          {/* Main heading */}

          <h2
            id="expert-heading"
            className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-[#6B2D1A] sm:text-5xl lg:text-[52px]"
          >
            Meet{" "}
            <span className="text-[#4D8B4F]">
              Manikanta Vegirothu
            </span>
          </h2>

          <p
            className="mt-3 text-[16px] font-bold tracking-[-0.01em] text-[#4F5751] sm:text-[18px]"
          >
            Your Career Mentor for Success
          </p>
        </Reveal>

        {/* =====================================================
            MAIN EXPERT CARD
        ====================================================== */}

        <Reveal delay={120} className="mt-10 sm:mt-12">
          <div
            className="relative overflow-visible rounded-[30px] border border-white bg-white/68 p-3 shadow-[0_25px_80px_rgba(65,55,40,0.09)] backdrop-blur-3xl sm:p-4 lg:p-5"
          >
            {/* =================================================
                INNER CONTENT
            ================================================= */}

            <div
              className="grid items-center gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10"
            >

              {/* =================================================
                  LEFT — IMAGE
              ================================================= */}

              <Reveal>
                <div className="relative mx-auto w-full max-w-[500px]">

                  {/* Image glow */}

                  <div
                    className="pointer-events-none absolute -inset-5 rounded-[40px] bg-[#A7D98E]/16 blur-3xl"
                  />

                  {/* Image frame */}

                  <div
                    className="group relative overflow-hidden rounded-[25px] border border-white bg-white shadow-[0_18px_55px_rgba(65,55,40,0.12)]"
                  >
                    <div
                      className="relative aspect-[4/4.65] overflow-hidden rounded-[21px] bg-[#EEEAE1]"
                    >
                      <img
                        src={ceoImage}
                        alt="Manikanta Vegirothu — MSS Techno Industry Expert"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                      />

                      {/* subtle image overlay */}

                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#6B2D1A]/10 via-transparent to-white/5"
                      />

                      {/* glass reflection */}

                      <div
                        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      FLOATING EXPERIENCE BADGE
                  ================================================= */}

                  <div
                    className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-[18px] border border-white bg-[#4D8B4F] px-4 py-3 shadow-[0_18px_40px_rgba(77,139,79,0.25)] sm:right-[-12px]"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white"
                    >
                      <Award
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <p
                        className="text-[20px] font-black leading-none tracking-[-0.03em] text-white"
                      >
                        15+
                      </p>

                      <p
                        className="mt-1 text-[8px] font-black uppercase tracking-[0.13em] text-white/75"
                      >
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* =================================================
                  RIGHT — EXPERT INFORMATION
              ================================================= */}

              <Reveal delay={180}>
                <div
                  className="px-2 pb-3 pt-5 sm:px-4 sm:pb-5 lg:px-5 lg:py-6"
                >

                  {/* Role */}

                  <div
                    className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F] px-4 py-2 text-[12px] font-black text-white shadow-[0_10px_25px_rgba(77,139,79,0.18)]"
                  >
                    <Award className="h-3.5 w-3.5" />

                    CEO & Founder
                  </div>

                  {/* Name */}

                  <div
                    className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#4D8B4F]"
                  >
                    Manikanta Vegirothu
                  </div>

                  <h3
                    className="mt-2 text-3xl font-black leading-[1.04] tracking-[-0.045em] text-[#2E302D] sm:text-4xl"
                  >
                    Your Journey.
                    <br />

                    <span className="text-[#6B2D1A]">
                      Guided By Experience.
                    </span>
                  </h3>

                  {/* =================================================
                      STATS
                  ================================================= */}

                  <div
                    className="mt-7 grid grid-cols-3 divide-x divide-[#6B2D1A]/10 rounded-[20px] border border-white bg-white/45 py-4 shadow-[0_10px_30px_rgba(65,55,40,0.04)] backdrop-blur-xl"
                  >
                    {EXPERT_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center justify-center px-2 text-center"
                      >
                        <span
                          className="text-[21px] font-black leading-none tracking-[-0.04em] text-[#4D8B4F] sm:text-[25px]"
                        >
                          {stat.value}
                        </span>

                        <span
                          className="mt-1.5 text-[7px] font-black uppercase tracking-[0.12em] text-[#6B2D1A]/55 sm:text-[8px]"
                        >
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div
                    className="mt-6 space-y-3 text-[14px] font-semibold leading-7 text-[#4F5751] sm:text-[15px]"
                  >
                    <p>
                      At MSS Techno, our consulting approach is shaped by
                      practical industry experience, strategic thinking, and
                      a deep understanding of modern technology careers.
                    </p>

                    <p>
                      We believe great mentoring goes beyond advice. It is
                      about understanding your strengths, identifying the
                      right opportunities, and creating a practical path
                      toward meaningful career growth.
                    </p>
                  </div>

                  {/* =================================================
                      EXPERT HIGHLIGHTS
                  ================================================= */}

                  <div className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {EXPERT_POINTS.map((item, index) => (
                      <ExpertMiniCard
                        key={item.title}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="group mt-7 inline-flex items-center cursor-pointer gap-2.5 rounded-full border border-[#4D8B4F]/15 bg-white/70 px-5 py-3 text-[12px] font-black text-[#4D8B4F] shadow-[0_10px_30px_rgba(77,139,79,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_rgba(77,139,79,0.13)]"
                  >
                    Meet Our Expert

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes expertFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(18px, -14px, 0) scale(1.05);
          }
        }

        @keyframes expertFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-18px, 14px, 0) scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   EXPERT MINI CARD
========================================================= */

function ExpertMiniCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="group flex items-center gap-3 rounded-[17px] border border-white/90 bg-white/48 px-3.5 py-3 shadow-[0_8px_25px_rgba(65,55,40,0.035)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/75 hover:shadow-[0_14px_35px_rgba(77,139,79,0.08)]"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F3E5] text-[#4D8B4F] transition-all duration-400 group-hover:scale-105"
      >
        <Icon
          className="h-4 w-4"
          strokeWidth={2}
        />
      </div>

      <div className="min-w-0">
        <h4
          className="text-[11px] font-black leading-4 text-[#3A332E]"
        >
          {item.title}
        </h4>

        <p
          className="mt-0.5 text-[9px] font-semibold leading-4 text-[#687069]"
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${ visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0" } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}