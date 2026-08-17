import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  FileText,
  MessageSquare,
  UsersRound,
  Target,
  Megaphone,
  Globe2,
  Briefcase,
  BadgeCheck,
  Wrench,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   WHAT WE OFFER — DATA
========================================================= */

const OFFERS = [
  {
    title: "Career Mentoring",
    description:
      "Personalized one-on-one guidance to accelerate your professional growth.",
    icon: GraduationCap,
    accent: "green",
  },
  {
    title: "Resume Preparation",
    description:
      "ATS-friendly resume creation tailored for your target role.",
    icon: FileText,
    accent: "blue",
  },
 {
  title: "LinkedIn Optimization",
  description:
    "Build a professional profile that attracts recruiters.",
  icon: Globe2,
  accent: "gold",
},
  {
    title: "Interview Preparation",
    description:
      "Technical and HR interview coaching with mock sessions.",
    icon: MessageSquare,
    accent: "purple",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice real interview scenarios with expert feedback.",
    icon: UsersRound,
    accent: "rose",
  },
  {
    title: "Career Roadmap",
    description:
      "Personalized strategy to achieve your career goals.",
    icon: Target,
    accent: "cyan",
  },
  {
    title: "Resume Marketing",
    description:
      "Increase your visibility with strategic resume distribution.",
    icon: Megaphone,
    accent: "pink",
  },
  {
    title: "Global Career Guidance",
    description:
      "Career consulting for Canada, USA, UK, Australia and Europe.",
    icon: Globe2,
    accent: "indigo",
  },
  {
    title: "Placement Support",
    description:
      "Application tracking, interview scheduling and offer guidance.",
    icon: Briefcase,
    accent: "mint",
  },
  {
    title: "Certification Guidance",
    description:
      "Expert recommendations for globally recognized certifications.",
    icon: BadgeCheck,
    accent: "lavender",
  },
  {
    title: "Hands-on Projects",
    description:
      "Gain practical experience through real-world project work.",
    icon: Wrench,
    accent: "peach",
  },
  {
    title: "Profile Evaluation",
    description:
      "Professional assessment to identify strengths and improvement areas.",
    icon: ClipboardCheck,
    accent: "lime",
  },
];

/* =========================================================
   ACCENT SYSTEM
========================================================= */

const ACCENTS = {
  green: {
    icon: "bg-[#DDF4E4] text-[#36B87A]",
    glow: "rgba(54,184,122,0.18)",
  },

  blue: {
    icon: "bg-[#DCEBFF] text-[#4285F4]",
    glow: "rgba(66,133,244,0.16)",
  },

  gold: {
    icon: "bg-[#FFF0C9] text-[#E7A21A]",
    glow: "rgba(231,162,26,0.16)",
  },

  purple: {
    icon: "bg-[#E9DEFF] text-[#8B4DE8]",
    glow: "rgba(139,77,232,0.16)",
  },

  rose: {
    icon: "bg-[#FFE0E8] text-[#E85A7A]",
    glow: "rgba(232,90,122,0.16)",
  },

  cyan: {
    icon: "bg-[#DDF5F5] text-[#42AEB5]",
    glow: "rgba(66,174,181,0.16)",
  },

  pink: {
    icon: "bg-[#FFE0E8] text-[#E77C91]",
    glow: "rgba(231,124,145,0.15)",
  },

  indigo: {
    icon: "bg-[#E5E1FF] text-[#7771E8]",
    glow: "rgba(119,113,232,0.15)",
  },

  mint: {
    icon: "bg-[#DDF3E8] text-[#4AAE86]",
    glow: "rgba(74,174,134,0.15)",
  },

  lavender: {
    icon: "bg-[#EDE1FF] text-[#9068D8]",
    glow: "rgba(144,104,216,0.15)",
  },

  peach: {
    icon: "bg-[#FFE4D5] text-[#DC8A5A]",
    glow: "rgba(220,138,90,0.15)",
  },

  lime: {
    icon: "bg-[#E4F3D5] text-[#78A84B]",
    glow: "rgba(120,168,75,0.15)",
  },
};

/* =========================================================
   MAIN SECTION
========================================================= */

export default function WhatWeOffer() {
  return (
    <section
      id="services"
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
      {/* =================================================
          LIQUID GLASS BACKGROUND
      ================================================== */}

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
        {/* green */}

        <div
          className="
            absolute
            -left-40
            top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/12
            blur-[150px]
          "
        />

        {/* champagne */}

        <div
          className="
            absolute
            right-[-180px]
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#EADBC8]/18
            blur-[150px]
          "
        />

        {/* soft blue */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[20%]
            h-[420px]
            w-[620px]
            rounded-full
            bg-[#DCECF2]/20
            blur-[150px]
          "
        />

        {/* center white */}

        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/80
            blur-[150px]
          "
        />

        {/* subtle overall wash */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.8),transparent_65%)]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/85
              bg-white/55
              px-4
              py-2
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_10px_30px_rgba(77,139,79,0.06)]
              backdrop-blur-2xl
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
                bg-[#A7D98E]/20
                text-[#4D8B4F]
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.25em]
                text-[#6B2D1A]/75
              "
            >
              What We Offer
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#632816]
              drop-shadow-[0_2px_10px_rgba(107,45,26,0.08)]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Comprehensive Career
            <span
              className="
                block
                font-black
                text-[#4D8B4F]
                drop-shadow-[0_3px_15px_rgba(77,139,79,0.12)]
              "
            >
              Solutions That Move You Forward
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[16px]
              font-semibold
              leading-7
              tracking-[-0.005em]
              text-[#454C47]
              sm:text-[18px]
            "
          >
            Comprehensive career solutions designed to help professionals
            secure better opportunities worldwide.
          </p>
        </Reveal>

        {/* =================================================
            OFFER GRID
        ================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-6xl
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {OFFERS.map((offer, index) => (
            <Reveal
              key={offer.title}
              delay={index * 55}
            >
              <OfferCard
                offer={offer}
                index={index}
              />
            </Reveal>
          ))}
        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <Reveal
          delay={500}
          className="mt-14 flex justify-center"
        >
          <a
            href="#contact"
            className="
              group
              relative
              inline-flex
              items-center
              gap-2.5
              overflow-hidden
              rounded-full
              border
              border-white/85
              bg-white/55
              px-7
              py-3.5
              text-sm
              font-extrabold
              tracking-[-0.005em]
              text-[#6B2D1A]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_12px_35px_rgba(77,139,79,0.08)]
              backdrop-blur-2xl
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:bg-white/75
              hover:text-[#4D8B4F]
              hover:shadow-[0_20px_45px_rgba(77,139,79,0.15)]
            "
          >
            {/* glass sweep */}

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                -left-20
                top-0
                h-full
                w-12
                rotate-[20deg]
                bg-white/70
                blur-md
                transition-transform
                duration-700
                group-hover:translate-x-[280px]
              "
            />

            <span className="relative z-10">
              Explore Our Services
            </span>

            <ArrowRight
              className="
                relative
                z-10
                h-4
                w-4
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   OFFER CARD
========================================================= */

function OfferCard({ offer }) {
  const Icon = offer.icon;
  const accent = ACCENTS[offer.accent];

  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty(
      "--mouse-x",
      `${(x / rect.width) * 100}%`
    );

    card.style.setProperty(
      "--mouse-y",
      `${(y / rect.height) * 100}%`
    );
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        group
        relative
        min-h-[205px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/85
        bg-white/48
        p-5
        shadow-[0_14px_40px_rgba(107,45,26,0.045)]
        backdrop-blur-2xl
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-white/68
        hover:shadow-[0_25px_55px_rgba(107,45,26,0.09)]
      "
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {/* cursor light */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            ${accent.glow},
            transparent 48%
          )`,
        }}
      />

      {/* glass reflection */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-[70%]
          top-[-80%]
          h-[240%]
          w-[35%]
          rotate-[25deg]
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          opacity-0
          blur-md
          transition-all
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      {/* top highlight */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-5
          right-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* icon */}

      <div
        className={`
          relative
          z-10
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/80
          shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
          shadow-[0_7px_20px_rgba(77,139,79,0.08)]
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:scale-110
          ${accent.icon}
        `}
      >
        <Icon
          className="
            h-[19px]
            w-[19px]
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* content */}

      <div className="relative z-10">

        <h3
          className="
            mt-5
            text-[16px]
            font-black
            leading-[1.18]
            tracking-[-0.025em]
            text-[#632816]
            transition-colors
            duration-300
            group-hover:text-[#572317]
          "
        >
          {offer.title}
        </h3>

        <p
          className="
            mt-2.5
            text-[13px]
            font-medium
            leading-[1.65]
            tracking-[-0.005em]
            text-[#4F5751]
          "
        >
          {offer.description}
        </p>
      </div>

      {/* bottom indicator */}

      <div
        className="
          absolute
          bottom-0
          left-5
          h-[2px]
          w-0
          rounded-full
          bg-[#4D8B4F]
          transition-all
          duration-500
          group-hover:w-10
        "
      />
    </article>
  );
}

/* =========================================================
   REVEAL
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
        duration-900
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          shown
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-7 scale-[0.985] opacity-0 blur-[3px]"
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