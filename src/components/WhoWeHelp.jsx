import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  RefreshCw,
  Globe2,
  BriefcaseBusiness,
  Compass,
  FileText,
  MessageSquareText,
  Route,
  ArrowRight,
} from "lucide-react";

const AUDIENCES = [
  {
    title: "Recent Graduates",
    description:
      "Launch your career with expert mentoring and a structured roadmap.",
    icon: GraduationCap,
    accent: "green",
    points: [
      { label: "Career Planning", icon: Compass },
      { label: "Resume Building", icon: FileText },
      { label: "Interview Preparation", icon: MessageSquareText },
      { label: "Placement Support", icon: BriefcaseBusiness },
    ],
  },

  {
    title: "Career Switchers",
    description:
      "Move into a new industry with confidence through personalized guidance.",
    icon: RefreshCw,
    accent: "blue",
    points: [
      { label: "Strategy", icon: Route },
      { label: "Skill Gap Analysis", icon: Compass },
      { label: "Resume Upgrade", icon: FileText },
      { label: "Mock Interviews", icon: MessageSquareText },
    ],
  },

  {
    title: "Global Aspirants",
    description:
      "Prepare for international opportunities with country-specific guidance.",
    icon: Globe2,
    accent: "gold",
    points: [
      { label: "Country Selection", icon: Globe2 },
      { label: "ATS Resume", icon: FileText },
      { label: "Interview Coaching", icon: MessageSquareText },
      { label: "Global Guidance", icon: Route },
    ],
  },

  {
    title: "Professionals",
    description:
      "Accelerate your career and unlock leadership opportunities.",
    icon: BriefcaseBusiness,
    accent: "rose",
    points: [
      { label: "Growth Strategy", icon: Route },
      { label: "Executive Resume", icon: FileText },
      { label: "Leadership Navigation", icon: Compass },
      { label: "Leadership Coaching", icon: MessageSquareText },
    ],
  },
];

const ACCENTS = {
  green: {
    icon:
      "bg-[#A7D98E]/18 text-[#4D8B4F] border-[#4D8B4F]/10",
    point: "text-[#4D8B4F]",
    glow: "bg-[#A7D98E]/18",
  },

  blue: {
    icon:
      "bg-[#D8EAF2]/55 text-[#4E91AE] border-[#4E91AE]/10",
    point: "text-[#4E91AE]",
    glow: "bg-[#D8EAF2]/35",
  },

  gold: {
    icon:
      "bg-[#EADBC8]/55 text-[#A4753E] border-[#A4753E]/10",
    point: "text-[#A4753E]",
    glow: "bg-[#EADBC8]/35",
  },

  rose: {
    icon:
      "bg-[#F2DCE0]/55 text-[#D87582] border-[#D87582]/10",
    point: "text-[#D87582]",
    glow: "bg-[#F2DCE0]/30",
  },
};

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

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
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
          MSS TECHNO LIGHT LIQUID-GLASS BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Green ambient glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/14
            blur-[150px]
          "
        />

        {/* Champagne glow */}

        <div
          className="
            absolute
            -right-32
            top-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#EADBC8]/30
            blur-[150px]
          "
        />

        {/* Main white glass glow */}

        <div
          className="
            absolute
            left-1/2
            top-[22%]
            h-[420px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/75
            blur-[135px]
          "
        />

        {/* Lower green glow */}

        <div
          className="
            absolute
            left-[8%]
            right-[8%]
            top-[55%]
            h-[150px]
            rounded-full
            bg-[#A7D98E]/8
            blur-[100px]
          "
        />

        {/* Bottom champagne glow */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[400px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#EADBC8]/22
            blur-[145px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <Reveal
          className="
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          {/* Small glass label */}

          <div
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/48
              px-4
              py-2
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_10px_30px_rgba(77,139,79,0.06)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:bg-white/65
              hover:shadow-[0_15px_35px_rgba(107,45,26,0.08)]
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-[#4D8B4F]/15
                bg-[#A7D98E]/18
                text-[#4D8B4F]
                transition-transform
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              "
            >
              <BriefcaseBusiness className="h-3.5 w-3.5" />
            </span>

            <span
              className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.24em]
                text-[#4D8B4F]
              "
            >
              Who We Help
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              mt-6
              text-balance
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#632816]
              drop-shadow-[0_2px_10px_rgba(107,45,26,0.08)]
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Who We Help
          </h2>

          {/* Supporting text */}

          <p
            className="
              mt-5
              max-w-2xl
              text-pretty
              text-[16px]
              font-semibold
              leading-7
              tracking-[-0.005em]
              text-[#414843]
              sm:text-[18px]
            "
          >
            Tailored consulting programs designed for every stage of your
            professional journey.
          </p>
        </Reveal>

        {/* =================================================
            AUDIENCE CARDS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-6xl
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {AUDIENCES.map((audience, index) => (
            <Reveal
              key={audience.title}
              delay={index * 90}
            >
              <AudienceCard audience={audience} />
            </Reveal>
          ))}
        </div>

        {/* =================================================
            CONTACT BUTTON
        ================================================== */}

        <Reveal
          delay={420}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="
              group
              inline-flex
              cursor-pointer
              items-center
              gap-2.5
              rounded-full
              border
              border-white/80
              bg-white/45
              px-7
              py-3.5
              text-sm
              font-extrabold
              tracking-[-0.005em]
              text-[#6B2D1A]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_12px_35px_rgba(77,139,79,0.10)]
              backdrop-blur-2xl
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:bg-[#4D8B4F]
              hover:text-white
              hover:shadow-[0_18px_45px_rgba(77,139,79,0.22)]
              active:translate-y-0
            "
          >
            Contact Us

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-1
              "
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   AUDIENCE CARD
========================================================= */

function AudienceCard({ audience }) {
  const Icon = audience.icon;
  const accent = ACCENTS[audience.accent];

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[390px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-white/85
        bg-[#FFFDFC]/52
        p-7
        shadow-[0_18px_50px_rgba(107,45,26,0.055)]
        backdrop-blur-2xl
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-[#FFFDFC]/72
        hover:shadow-[0_30px_70px_rgba(107,45,26,0.11)]
      "
    >
      {/* Top glass highlight */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-7
          right-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
          opacity-95
        "
      />

      {/* Ambient card glow */}

      <span
        aria-hidden
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
          ${accent.glow}
        `}
      />

      {/* Icon */}

      <div
        className={`
          relative
          z-10
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-[18px]
          border
          shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
          shadow-[0_10px_25px_rgba(107,45,26,0.06)]
          backdrop-blur-xl
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-1
          group-hover:rotate-2
          group-hover:scale-105
          ${accent.icon}
        `}
      >
        <Icon
          className="
            h-6
            w-6
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative z-10 mt-7">
        <h3
          className="
            text-[22px]
            font-black
            leading-[1.12]
            tracking-[-0.035em]
            text-[#6B2D1A]
            transition-colors
            duration-300
            group-hover:text-[#572317]
          "
        >
          {audience.title}
        </h3>

        <p
          className="
            mt-3
            text-[14px]
            font-medium
            leading-[1.65]
            tracking-[-0.005em]
            text-[#4B514D]
          "
        >
          {audience.description}
        </p>
      </div>

      {/* =================================================
          SERVICES LIST
      ================================================== */}

      <div className="relative z-10 mt-7 space-y-3">
        {audience.points.map((point) => {
          const PointIcon = point.icon;

          return (
            <div
              key={point.label}
              className="
                flex
                items-center
                gap-2.5
                text-[12px]
                font-semibold
                leading-5
                tracking-[-0.005em]
                text-[#4F5751]
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-0.5
              "
            >
              <span
                className={`
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/65
                  ${accent.point}
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                `}
              >
                <PointIcon className="h-3 w-3" />
              </span>

              <span>{point.label}</span>
            </div>
          );
        })}
      </div>

      {/* =================================================
          BOTTOM ACTION
      ================================================== */}

      <div className="relative z-10 mt-auto pt-8">
        <button
          type="button"
          onClick={scrollToContact}
          className="
            group/link
            inline-flex
            cursor-pointer
            items-center
            gap-2
            text-[12px]
            font-extrabold
            tracking-[0.01em]
            text-[#4D8B4F]
            outline-none
            transition-all
            duration-300
            hover:translate-x-0.5
            hover:text-[#6B2D1A]
            focus-visible:ring-2
            focus-visible:ring-[#4D8B4F]/30
            focus-visible:ring-offset-2
          "
        >
          Learn More

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover/link:translate-x-1
            "
          />
        </button>
      </div>

      {/* =================================================
          BOTTOM GLASS REFLECTION
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-16
          left-1/2
          h-28
          w-52
          -translate-x-1/2
          rounded-full
          bg-white/55
          blur-3xl
          opacity-50
          transition-all
          duration-700
          group-hover:opacity-80
        "
      />
    </article>
  );
}

/* =========================================================
   SMOOTH VIEWPORT REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
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
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          shown
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-8 scale-[0.985] opacity-0 blur-[3px]"
        }
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: shown
          ? "auto"
          : "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}