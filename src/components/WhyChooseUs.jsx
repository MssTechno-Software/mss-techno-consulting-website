import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Target,
  UsersRound,
  Globe2,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   WHY CHOOSE MSS — DATA
========================================================= */

const WHY_CHOOSE = [
  {
    title: "Industry-Aligned Career Roadmaps",
    description:
      "Receive a personalized roadmap aligned with current hiring trends and employer expectations.",
    icon: Target,
    accent: "green",
    points: [
      "Personalized Career Strategy",
      "Role-Based Guidance",
      "Market Insights",
    ],
  },

  {
    title: "Dedicated Mentoring",
    description:
      "Work directly with experienced mentors through regular one-on-one sessions tailored to your career goals.",
    icon: UsersRound,
    accent: "blue",
    points: [
      "Expert Sessions",
      "Weekly Guidance",
      "Interview Coaching",
    ],
  },

  {
    title: "Global Career Support",
    description:
      "From resume preparation to placement guidance, receive complete support for global career opportunities.",
    icon: Globe2,
    accent: "gold",
    points: [
      "ATS Resume",
      "Placement Support",
      "International Guidance",
    ],
  },
];

/* =========================================================
   ACCENTS
========================================================= */

const ACCENTS = {
  green: {
    icon: "bg-[#A7D98E]/20 text-[#4D8B4F]",
    check: "bg-[#A7D98E]/25 text-[#4D8B4F]",
    glow: "bg-[#A7D98E]/20",
    spotlight: "rgba(77,139,79,0.13)",
  },

  blue: {
    icon: "bg-[#DCECF2]/60 text-[#4E91AE]",
    check: "bg-[#DCECF2]/60 text-[#4E91AE]",
    glow: "bg-[#DCECF2]/30",
    spotlight: "rgba(78,145,174,0.11)",
  },

  gold: {
    icon: "bg-[#EADBC8]/60 text-[#A4753E]",
    check: "bg-[#EADBC8]/60 text-[#A4753E]",
    glow: "bg-[#EADBC8]/30",
    spotlight: "rgba(164,117,62,0.11)",
  },
};

/* =========================================================
   SMOOTH SCROLL TO CONTACT
========================================================= */

const scrollToContact = () => {
  const contactSection =
    document.getElementById("contact");

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

/* =========================================================
   MAIN SECTION
========================================================= */

export default function WhyChooseMSS() {
  return (
    <section
      id="why-choose-mss"
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
          AMBIENT LIQUID GLASS BACKGROUND
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
        {/* Top green glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#A7D98E]/14
            blur-[150px]
          "
        />

        {/* Top champagne */}

        <div
          className="
            absolute
            -right-40
            top-[-80px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#EADBC8]/20
            blur-[150px]
          "
        />

        {/* Central white light */}

        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[480px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/75
            blur-[150px]
          "
        />

        {/* Lower soft blue */}

        <div
          className="
            absolute
            bottom-[-100px]
            left-[18%]
            h-[300px]
            w-[500px]
            rounded-full
            bg-[#DCECF2]/20
            blur-[140px]
          "
        />

        {/* Lower green */}

        <div
          className="
            absolute
            bottom-[-120px]
            right-[12%]
            h-[320px]
            w-[480px]
            rounded-full
            bg-[#A7D98E]/10
            blur-[140px]
          "
        />

        {/* Overall white wash */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.75),transparent_58%)]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            HEADER
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
          {/* Badge */}

          <div
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/85
              bg-white/50
              px-4
              py-2
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_10px_30px_rgba(77,139,79,0.06)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:bg-white/70
              hover:shadow-[0_16px_40px_rgba(107,45,26,0.08)]
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
                transition-all
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#6B2D1A]/65
              "
            >
              Why Choose MSS Consulting
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              max-w-3xl
              text-balance
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#6B2D1A]
              drop-shadow-[0_2px_10px_rgba(107,45,26,0.08)]
              sm:text-5xl
              lg:text-[54px]
            "
          >
            Why Professionals Choose

            <span
              className="
                mt-1
                block
                font-black
                text-[#4D8B4F]
                drop-shadow-[0_3px_14px_rgba(77,139,79,0.12)]
              "
            >
              MSS Techno
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-pretty
              text-[16px]
              font-semibold
              leading-7
              tracking-[-0.005em]
              text-[#454C47]
              sm:text-[18px]
            "
          >
            Our consulting approach combines expert mentoring, proven career
            strategies and personalized support to help professionals achieve
            lasting career success.
          </p>
        </Reveal>

        {/* =================================================
            CARDS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-6xl
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {WHY_CHOOSE.map(
            (item, index) => (
              <Reveal
                key={item.title}
                delay={index * 110}
              >
                <WhyCard
                  item={item}
                  index={index}
                />
              </Reveal>
            )
          )}
        </div>

        {/* =================================================
            CTA
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
              relative
              inline-flex
              cursor-pointer
              items-center
              gap-2.5
              overflow-hidden
              rounded-full
              border
              border-white/85
              bg-white/50
              px-7
              py-3.5
              text-sm
              font-bold
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
              hover:shadow-[0_20px_45px_rgba(77,139,79,0.16)]
              active:translate-y-0
            "
          >
            {/* Moving glass reflection */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-20
                w-14
                rotate-[20deg]
                bg-white/70
                blur-md
                transition-transform
                duration-700
                group-hover:translate-x-[280px]
              "
            />

            <span className="relative z-10">
              Contact Us
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
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   WHY CARD
========================================================= */

function WhyCard({
  item,
  index,
}) {
  const Icon = item.icon;
  const accent = ACCENTS[item.accent];

  const cardRef = useRef(null);

  /* =======================================================
     CURSOR SPOTLIGHT
  ======================================================= */

  const handleMouseMove = (
    event
  ) => {
    const card =
      cardRef.current;

    if (!card) return;

    if (
      window.matchMedia(
        "(hover: none)"
      ).matches
    ) {
      return;
    }

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const px =
      (x / rect.width) *
      100;

    const py =
      (y / rect.height) *
      100;

    card.style.setProperty(
      "--mouse-x",
      `${px}%`
    );

    card.style.setProperty(
      "--mouse-y",
      `${py}%`
    );
  };

  const handleMouseLeave =
    () => {
      const card =
        cardRef.current;

      if (!card) return;

      card.style.setProperty(
        "--mouse-x",
        "50%"
      );

      card.style.setProperty(
        "--mouse-y",
        "50%"
      );
    };

  return (
    <article
      ref={cardRef}
      onMouseMove={
        handleMouseMove
      }
      onMouseLeave={
        handleMouseLeave
      }
      className="
        group
        relative
        min-h-[360px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/85
        bg-white/45
        p-7
        shadow-[0_18px_50px_rgba(107,45,26,0.055)]
        backdrop-blur-2xl
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:bg-white/65
        hover:border-white
        hover:shadow-[0_30px_65px_rgba(107,45,26,0.10)]
      "
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {/* =================================================
          CURSOR SPOTLIGHT
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            ${accent.spotlight},
            transparent 40%
          )`,
        }}
      />

      {/* =================================================
          GLASS REFLECTION
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[60%]
          top-[-80%]
          h-[220%]
          w-[45%]
          rotate-[24deg]
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
          opacity-0
          blur-md
          transition-all
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:left-[115%]
          group-hover:opacity-100
        "
      />

      {/* Top highlight */}

      <span
        aria-hidden="true"
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
        "
      />

      {/* Ambient glow */}

      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-50
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:opacity-80
          ${accent.glow}
        `}
      />

      {/* =================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
        "
      >
        {/* Icon */}

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/80
            shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
            shadow-[0_8px_24px_rgba(77,139,79,0.08)]
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:rotate-3
            group-hover:scale-105
            ${accent.icon}
          `}
        >
          <Icon
            className="
              h-5
              w-5
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Title */}

        <h3
          className="
            mt-7
            max-w-[270px]
            text-[21px]
            font-black
            leading-[1.15]
            tracking-[-0.03em]
            text-[#6B2D1A]
            transition-colors
            duration-300
            group-hover:text-[#572317]
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            text-[14px]
            font-medium
            leading-[1.65]
            tracking-[-0.005em]
            text-[#4F5751]
          "
        >
          {item.description}
        </p>

        {/* =================================================
            CHECK LIST
        ================================================== */}

        <div className="mt-6 space-y-3">
          {item.points.map(
            (
              point,
              pointIndex
            ) => (
              <div
                key={point}
                className="
                  flex
                  items-center
                  gap-2.5
                  text-[12px]
                  font-semibold
                  leading-5
                  tracking-[-0.005em]
                  text-[#4F5751]
                  transition-transform
                  duration-500
                  group-hover:translate-x-0.5
                "
                style={{
                  transitionDelay:
                    `${pointIndex * 35}ms`,
                }}
              >
                <span
                  className={`
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${accent.check}
                  `}
                >
                  <Check className="h-2.5 w-2.5" />
                </span>

                <span>
                  {point}
                </span>
              </div>
            )
          )}
        </div>

        {/* =================================================
            LEARN MORE
            SMOOTH SCROLL → CONTACT
        ================================================== */}

        <div className="mt-auto pt-7">
          <button
            type="button"
            onClick={scrollToContact}
            className="
              group/link
              inline-flex
              cursor-pointer
              items-center
              gap-2
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.08em]
              text-[#4D8B4F]
              outline-none
              transition-all
              duration-300
              hover:translate-x-1
              hover:text-[#6B2D1A]
              focus-visible:ring-2
              focus-visible:ring-[#4D8B4F]/30
              focus-visible:ring-offset-2
            "
          >
            <span className="relative">
              Learn More

              <span
                className="
                  absolute
                  -bottom-0.5
                  left-0
                  h-px
                  w-0
                  bg-[#4D8B4F]
                  transition-all
                  duration-300
                  group-hover/link:w-full
                "
              />
            </span>

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-500
                group-hover/link:translate-x-1
              "
            />
          </button>
        </div>
      </div>
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
  const ref =
    useRef(null);

  const [shown, setShown] =
    useState(false);

  useEffect(() => {
    const element =
      ref.current;

    if (!element) return;

    /* Respect reduced motion */

    if (
      window.matchMedia &&
      window
        .matchMedia(
          "(prefers-reduced-motion: reduce)"
        )
        .matches
    ) {
      setShown(true);
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setShown(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -50px 0px",
        }
      );

    observer.observe(
      element
    );

    return () =>
      observer.disconnect();
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
            ? `
              translate-y-0
              scale-100
              opacity-100
              blur-0
            `
            : `
              translate-y-8
              scale-[0.985]
              opacity-0
              blur-[3px]
            `
        }

        ${className}
      `}
      style={{
        transitionDelay:
          `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}