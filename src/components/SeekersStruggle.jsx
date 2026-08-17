"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Target,
  TrendingUp,
  ClipboardList,
  BookOpen,
  UserRound,
  Compass,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   MSS TECHNO — CAREER CHALLENGES
   Premium Liquid Glass / Editorial Section
   ========================================================= */

const CHALLENGES = [
  {
    title: "Targeting the Wrong Roles",
    description:
      "Applying for positions misaligned with current skill sets or lacking a focused niche strategy.",
    icon: Target,
    accent: "green",
  },
  {
    title: "No Skill Growth",
    description:
      "Stagnation in learning new technologies or industry methodologies required by modern employers.",
    icon: TrendingUp,
    accent: "champagne",
  },
  {
    title: "Inconsistent Job Search",
    description:
      "Treating the job hunt as a passive activity rather than a structured, daily operational process.",
    icon: ClipboardList,
    accent: "brown",
  },
  {
    title: "Lack of Practical Experience",
    description:
      "Possessing theoretical knowledge without a portfolio of real-world application or case studies.",
    icon: BookOpen,
    accent: "green",
  },
  {
    title: "Weak Resume & LinkedIn",
    description:
      "Failing to communicate value proposition effectively through poorly optimized professional profiles.",
    icon: UserRound,
    accent: "brown",
  },
  {
    title: "No Career Strategy",
    description:
      "Operating reactively without a long-term roadmap or deliberate networking architecture.",
    icon: Compass,
    accent: "champagne",
  },
];

export default function CareerChallenges() {
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="career-challenges"
      onMouseMove={handleMouseMove}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F8F6F2]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          INTERACTIVE AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          transition-opacity
          duration-500
        "
        style={{
          background: `
            radial-gradient(
              500px circle at ${mouse.x}% ${mouse.y}%,
              rgba(167,217,142,0.13),
              transparent 68%
            )
          `,
        }}
      />

      {/* Green atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-[8%]
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#A7D98E]/14
          blur-[150px]
          animate-[challengeFloat_14s_ease-in-out_infinite]
        "
      />

      {/* Champagne atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-[0]
          -z-10
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#EADBC8]/20
          blur-[160px]
          animate-[challengeFloatReverse_17s_ease-in-out_infinite]
        "
      />

      {/* subtle brown center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[400px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#6B2D1A]/[0.025]
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/90
              bg-white/65
              px-4
              py-2
              shadow-[0_12px_32px_rgba(65,55,40,0.06)]
              backdrop-blur-2xl
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                border
                border-[#4D8B4F]/20
                bg-[#E8F3E5]
              "
            >
              <Sparkles
                className="h-3 w-3 text-[#4D8B4F]"
                strokeWidth={2}
              />
            </span>

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.24em]
                text-[#6B2D1A]/70
              "
            >
              Career Challenges
            </span>
          </div>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-[0.98]
              tracking-[-0.055em]
              text-[#6B2D1A]
              sm:text-5xl
              lg:text-[62px]
            "
          >
            Why Job Seekers{" "}
            <span className="text-[#4D8B4F]">
              Struggle
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[14px]
              font-semibold
              leading-6
              text-[#59615B]
              sm:text-[15px]
            "
          >
            Despite holding qualifications, many professionals face invisible
            barriers that stall their career trajectory.
          </p>
        </Reveal>

        {/* ===================================================
            CHALLENGE GRID
        ==================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-6xl
            sm:mt-16
          "
        >

          {/* Decorative center line */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#6B2D1A]/[0.06]
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {CHALLENGES.map((challenge, index) => (
              <Reveal
                key={challenge.title}
                delay={index * 80}
              >
                <ChallengeCard
                  challenge={challenge}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        ==================================================== */}

        <Reveal
          delay={520}
          className="mt-12 flex justify-center"
        >
          <div
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/90
              bg-white/60
              px-5
              py-3
              shadow-[0_14px_38px_rgba(65,55,40,0.07)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-white/75
              hover:shadow-[0_20px_48px_rgba(77,139,79,0.12)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#4D8B4F]
                shadow-[0_0_12px_rgba(77,139,79,0.5)]
              "
            />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#59615B]
              "
            >
              We turn career obstacles into opportunities
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                text-[#4D8B4F]
                transition-transform
                duration-500
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />

            {/* shine */}
            <span
              className="
                pointer-events-none
                absolute
                -inset-y-full
                -left-1/2
                w-1/3
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent
                opacity-0
                blur-xl
                transition-all
                duration-1000
                group-hover:left-[125%]
                group-hover:opacity-100
              "
            />
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes challengeFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(20px, -16px, 0) scale(1.05);
          }
        }

        @keyframes challengeFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-18px, 15px, 0) scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   CHALLENGE CARD
   ========================================================= */

function ChallengeCard({ challenge, index }) {
  const Icon = challenge.icon;

  const accent =
    challenge.accent === "brown"
      ? {
          iconBg: "bg-[#F3E6DC]",
          iconText: "text-[#6B2D1A]",
          glow: "rgba(107,45,26,0.14)",
          line: "#6B2D1A",
        }
      : challenge.accent === "champagne"
        ? {
            iconBg: "bg-[#F3E8D8]",
            iconText: "text-[#8A674D]",
            glow: "rgba(138,103,77,0.14)",
            line: "#8A674D",
          }
        : {
            iconBg: "bg-[#E8F3E5]",
            iconText: "text-[#4D8B4F]",
            glow: "rgba(77,139,79,0.15)",
            line: "#4D8B4F",
          };

  return (
    <article
      className="
        challenge-card
        group
        relative
        min-h-[245px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/90
        bg-white/58
        p-6
        shadow-[0_15px_45px_rgba(65,55,40,0.055)]
        backdrop-blur-2xl
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-white/76
      "
      style={{
        "--challenge-glow": accent.glow,
        "--challenge-line": accent.line,
      }}
    >
      {/* ================================================
          CARD AMBIENT GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          opacity-0
          blur-3xl
          transition-all
          duration-1000
          group-hover:scale-150
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(circle, ${accent.glow}, transparent 70%)`,
        }}
      />

      {/* ================================================
          TOP GLASS REFLECTION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
          opacity-90
        "
      />

      {/* ================================================
          NUMBER
      ================================================= */}

      <span
        className="
          absolute
          right-5
          top-5
          text-[9px]
          font-black
          tracking-[0.18em]
          text-[#6B2D1A]/15
          transition-all
          duration-500
          group-hover:text-[#6B2D1A]/30
        "
      >
        0{index + 1}
      </span>

      {/* ================================================
          ICON
      ================================================= */}

      <div
        className={`
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-[14px]
          border
          border-white/90
          ${accent.iconBg}
          ${accent.iconText}
          shadow-[0_8px_22px_rgba(65,55,40,0.07)]
          transition-all
          duration-600
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-110
          group-hover:-rotate-3
        `}
      >
        <Icon
          className="h-[18px] w-[18px]"
          strokeWidth={1.9}
        />

        {/* icon ring */}
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[14px]
            ring-1
            ring-white/80
          "
        />
      </div>

      {/* ================================================
          CONTENT
      ================================================= */}

      <div className="relative mt-6">

        <h3
          className="
            max-w-[270px]
            text-[17px]
            font-black
            leading-[1.15]
            tracking-[-0.025em]
            text-[#2E302D]
            transition-all
            duration-400
            group-hover:text-[#6B2D1A]
          "
        >
          {challenge.title}
        </h3>

        <p
          className="
            mt-3
            max-w-[310px]
            text-[12px]
            font-semibold
            leading-[1.7]
            text-[#66706A]
          "
        >
          {challenge.description}
        </p>
      </div>

      {/* ================================================
          BOTTOM INTERACTION LINE
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-6
          right-6
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            h-[2px]
            w-7
            rounded-full
            opacity-30
            transition-all
            duration-600
            group-hover:w-14
            group-hover:opacity-80
          "
          style={{
            backgroundColor: accent.line,
          }}
        />

        <span
          className="
            flex
            h-7
            w-7
            translate-x-2
            items-center
            justify-center
            rounded-full
            border
            border-white/90
            bg-white/55
            text-[#4D8B4F]
            opacity-0
            shadow-[0_8px_20px_rgba(77,139,79,0.08)]
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* ================================================
          MOVING GLASS SHINE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-y-full
          -left-1/2
          w-1/3
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/65
          to-transparent
          opacity-0
          blur-xl
          transition-all
          duration-1000
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />
    </article>
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
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all
        duration-800
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-8 scale-[0.985] opacity-0 blur-[3px]"
        }
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}