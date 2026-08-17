import React, { useEffect, useRef, useState } from "react";
import {
  Target,
  Eye,
  Award,
  UsersRound,
  TrendingUp,
  Globe2,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

/* =========================================================
   MSS TECHNO
   MISSION • VISION • CORE VALUES

   Premium Liquid Glass / Editorial UI
   SEO + GEO + AEO friendly content structure
   ========================================================= */

/* =========================================================
   MISSION & VISION
========================================================= */

const PURPOSE_CARDS = [
  {
    type: "Mission",
    icon: Target,
    eyebrow: "WHAT WE DO",
    title: "Our Mission",
    description:
      "MSS Techno helps professionals build stronger technology careers through practical career consulting, resume development, interview preparation, LinkedIn optimization, and personalized professional guidance.",
    accent: "green",
  },
  {
    type: "Vision",
    icon: Eye,
    eyebrow: "WHERE WE ARE GOING",
    title: "Our Vision",
    description:
      "Our vision is to make high-quality career guidance accessible to professionals seeking better opportunities in technology, while helping them make confident, informed, and sustainable career decisions.",
    accent: "brown",
  },
];

/* =========================================================
   CORE VALUES
========================================================= */

const CORE_VALUES = [
  {
    title: "Excellence",
    icon: Award,
    description:
      "We maintain high standards across career consulting, professional development, and every service we deliver.",
  },
  {
    title: "Community",
    icon: UsersRound,
    description:
      "We create supportive career journeys where professionals can learn, improve, connect, and grow with confidence.",
  },
  {
    title: "Growth",
    icon: TrendingUp,
    description:
      "We focus on measurable professional growth through practical skills, stronger positioning, and continuous improvement.",
  },
  {
    title: "Accessibility",
    icon: Globe2,
    description:
      "We believe quality career guidance should be approachable and useful for professionals across locations and career stages.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function MissionVisionValues() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F8F6F2]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Green atmosphere */}

        <div
          className="
            absolute
            -left-[220px]
            top-[4%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/14
            blur-[150px]
            animate-[purposeFloat_15s_ease-in-out_infinite]
          "
        />

        {/* Champagne atmosphere */}

        <div
          className="
            absolute
            -right-[220px]
            top-[18%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[#EADBC8]/18
            blur-[155px]
            animate-[purposeFloatReverse_17s_ease-in-out_infinite]
          "
        />

        {/* Brown atmosphere */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[520px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[#6B2D1A]/[0.035]
            blur-[160px]
          "
        />

        {/* Center white light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[1000px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/65
            blur-[170px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-white
              bg-white/70
              px-4
              py-2
              shadow-[0_10px_30px_rgba(77,139,79,0.07)]
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
                border-[#4D8B4F]/15
                bg-[#E8F3E5]
                text-[#4D8B4F]
              "
            >
              <Sparkles className="h-3 w-3" />
            </span>

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.23em]
                text-[#6B2D1A]/70
              "
            >
              What Drives MSS Techno
            </span>
          </div>

          {/* Main heading */}

          <h2
            id="mission-vision-heading"
            className="
              mt-5
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.055em]
              text-[#6B2D1A]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Purpose Behind
            <br />

            <span className="text-[#4D8B4F]">
              Every Career We Shape
            </span>
          </h2>

          {/* Supporting content */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[15px]
              font-semibold
              leading-7
              text-[#505851]
              sm:text-[16px]
            "
          >
            Our mission and vision guide how MSS Techno delivers practical
            career consulting, professional development, and technology career
            guidance for professionals preparing for their next opportunity.
          </p>
        </Reveal>

        {/* ===================================================
            MISSION + VISION
        ==================================================== */}

        <div
          className="
            mt-12
            grid
            gap-6
            lg:mt-16
            lg:grid-cols-2
          "
        >
          {PURPOSE_CARDS.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 120}
            >
              <PurposeCard
                card={card}
                index={index}
              />
            </Reveal>
          ))}
        </div>

        {/* ===================================================
            CORE VALUES HEADER
        ==================================================== */}

        <Reveal
          delay={220}
          className="mx-auto mt-20 max-w-3xl text-center lg:mt-24"
        >
          <div
            className="
              mx-auto
              mb-4
              h-[2px]
              w-10
              rounded-full
              bg-[#4D8B4F]
            "
          />

          <h3
            className="
              text-3xl
              font-black
              leading-tight
              tracking-[-0.045em]
              text-[#2E302D]
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Our Core Values
          </h3>

          <p
            className="
              mt-3
              text-[14px]
              font-semibold
              leading-6
              text-[#687069]
              sm:text-[15px]
            "
          >
            The principles that shape how we support professionals,
            businesses, and technology careers.
          </p>
        </Reveal>

        {/* ===================================================
            CORE VALUES
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {CORE_VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              delay={260 + index * 90}
            >
              <ValueCard
                value={value}
                index={index}
              />
            </Reveal>
          ))}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <Reveal
          delay={600}
          className="mt-12 flex justify-center lg:mt-14"
        >
          <div
            className="
              group
              relative
              inline-flex
              items-center
              gap-2.5
              overflow-hidden
              rounded-full
              border
              border-white
              bg-white/60
              px-5
              py-2.5
              text-[9px]
              font-black
              uppercase
              tracking-[0.16em]
              text-[#4D8B4F]
              shadow-[0_12px_35px_rgba(77,139,79,0.06)]
              backdrop-blur-2xl
            "
          >
            {/* Moving reflection */}

            <span
              className="
                pointer-events-none
                absolute
                -left-1/2
                top-0
                h-full
                w-1/3
                rotate-[15deg]
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
                blur-lg
                transition-all
                duration-1000
                group-hover:left-[120%]
              "
            />

            <Check className="relative h-3.5 w-3.5" />

            <span className="relative">
              Built for clarity, confidence & career growth
            </span>

            <ArrowUpRight className="relative h-3.5 w-3.5" />
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes purposeFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(22px, -16px, 0) scale(1.05);
          }
        }

        @keyframes purposeFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-20px, 18px, 0) scale(1.05);
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
   PURPOSE CARD
========================================================= */

function PurposeCard({ card, index }) {
  const Icon = card.icon;

  const isMission = card.title === "Our Mission";

  return (
    <article
      className="
        group
        relative
        min-h-[330px]
        overflow-hidden
        rounded-[32px]
        border
        border-white
        bg-white/65
        p-7
        shadow-[0_18px_55px_rgba(65,55,40,0.06)]
        backdrop-blur-3xl
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-white/80
        hover:shadow-[0_30px_80px_rgba(65,55,40,0.10)]
        sm:p-8
        lg:min-h-[350px]
        lg:p-9
      "
    >
      {/* =================================================
          SOFT AMBIENT CARD GLOW
      ================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          -top-24
          ${isMission ? "-right-20" : "-left-20"}
          h-64
          w-64
          rounded-full
          blur-[90px]
          opacity-40
          transition-all
          duration-1000
          group-hover:scale-125
          ${
            isMission
              ? "bg-[#A7D98E]/30"
              : "bg-[#EADBC8]/40"
          }
        `}
      />

      {/* =================================================
          TOP ACCENT LINE
      ================================================== */}

      <div
        className={`
          absolute
          left-8
          right-8
          top-0
          h-[3px]
          rounded-full
          opacity-60
          transition-all
          duration-500
          group-hover:left-12
          group-hover:right-12
          group-hover:opacity-100
          ${
            isMission
              ? "bg-[#4D8B4F]"
              : "bg-[#6B2D1A]"
          }
        `}
      />

      {/* =================================================
          LARGE EDITORIAL NUMBER
      ================================================== */}

      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          right-7
          top-4
          select-none
          text-[90px]
          font-black
          leading-none
          tracking-[-0.08em]
          opacity-60
          transition-all
          duration-700
          group-hover:-translate-y-1
          group-hover:opacity-100
          ${
            isMission
              ? "text-[#4D8B4F]/[0.055]"
              : "text-[#6B2D1A]/[0.055]"
          }
        `}
      >
        {index === 0 ? "01" : "02"}
      </span>

      {/* =================================================
          ICON + LABEL
      ================================================== */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
        "
      >
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-[18px]
            border
            border-white
            shadow-[0_10px_30px_rgba(65,55,40,0.07)]
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-[-4deg]
            ${
              isMission
                ? "bg-[#E8F3E5] text-[#4D8B4F]"
                : "bg-[#F5E9DE] text-[#6B2D1A]"
            }
          `}
        >
          <Icon
            className="h-6 w-6"
            strokeWidth={1.8}
          />
        </div>

        <span
          className={`
            rounded-full
            border
            border-white
            px-3
            py-1.5
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]
            shadow-[0_8px_20px_rgba(65,55,40,0.04)]
            backdrop-blur-xl
            ${
              isMission
                ? "bg-[#E8F3E5]/70 text-[#4D8B4F]"
                : "bg-[#F5E9DE]/70 text-[#6B2D1A]"
            }
          `}
        >
          {card.eyebrow}
        </span>
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative mt-8">

        <h3
          className="
            text-3xl
            font-black
            leading-[1.05]
            tracking-[-0.045em]
            text-[#6B2D1A]
            sm:text-[36px]
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-4
            max-w-[560px]
            text-[14px]
            font-semibold
            leading-7
            tracking-[-0.005em]
            text-[#5E665F]
            sm:text-[15px]
          "
        >
          {card.description}
        </p>
      </div>

      
      {/* =================================================
          HOVER LIGHT SWEEP
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          h-full
          w-1/4
          rotate-[16deg]
          bg-gradient-to-r
          from-transparent
          via-white/55
          to-transparent
          blur-xl
          opacity-0
          transition-all
          duration-[1200ms]
          group-hover:left-[120%]
          group-hover:opacity-100
        "
      />
    </article>
  );
}

/* =========================================================
   CORE VALUE CARD
========================================================= */

function ValueCard({ value }) {
  const Icon = value.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-white
        bg-white/58
        p-6
        shadow-[0_15px_45px_rgba(65,55,40,0.055)]
        backdrop-blur-2xl
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-white/75
        hover:shadow-[0_25px_65px_rgba(77,139,79,0.11)]
      "
    >
      {/* =================================================
          SOFT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-[#A7D98E]/10
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-150
        "
      />

      {/* =================================================
          ICON
      ================================================== */}

      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white
          bg-[#E8F3E5]
          text-[#4D8B4F]
          shadow-[0_8px_25px_rgba(77,139,79,0.08)]
          transition-all
          duration-500
          group-hover:scale-110
        "
      >
        <Icon
          className="h-5 w-5"
          strokeWidth={1.9}
        />

        {/* Pulse ring */}

        <span
          className="
            pointer-events-none
            absolute
            inset-[-5px]
            rounded-full
            border
            border-[#4D8B4F]/10
            opacity-0
            transition-all
            duration-500
            group-hover:inset-[-8px]
            group-hover:opacity-100
          "
        />
      </div>

      {/* =================================================
          TITLE
      ================================================== */}

      <h4
        className="
          relative
          mt-6
          text-[20px]
          font-black
          leading-tight
          tracking-[-0.035em]
          text-[#6B2D1A]
        "
      >
        {value.title}
      </h4>

      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          relative
          mt-3
          text-[12px]
          font-semibold
          leading-6
          text-[#606862]
        "
      >
        {value.description}
      </p>

      {/* =================================================
          BOTTOM INTERACTION
      ================================================== */}

      <div
        className="
          relative
          mt-6
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
            bg-[#4D8B4F]/35
            transition-all
            duration-500
            group-hover:w-12
            group-hover:bg-[#4D8B4F]
          "
        />

        <ArrowUpRight
          className="
            h-4
            w-4
            text-[#4D8B4F]/45
            transition-all
            duration-500
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#4D8B4F]
          "
        />
      </div>

      {/* Glass reflection */}

      <div
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          h-full
          w-1/4
          rotate-[15deg]
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          blur-xl
          opacity-0
          transition-all
          duration-[1100ms]
          group-hover:left-[120%]
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
      className={`
        transition-all
        duration-[850ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-8 scale-[0.985] opacity-0 blur-[2px]"
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