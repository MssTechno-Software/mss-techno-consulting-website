import React, { useEffect, useRef, useState } from "react";
import {
  Compass,
  FileText,
  MessageSquareText,
  Globe2,
  Briefcase,
  Route,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    title: "Career Mentoring",
    description:
      "Personalized guidance from industry veterans. We analyze your strengths, identify gaps, and craft a bespoke roadmap to elevate your professional trajectory with actionable insights.",
    icon: Compass,
  },
  {
    title: "Resume & LinkedIn Optimization",
    description:
      "Transform your profiles into powerful personal marketing tools that capture recruiter attention.",
    icon: FileText,
  },
  {
    title: "Interview Excellence",
    description:
      "Master behavioral and technical interviews with mock sessions and expert feedback.",
    icon: MessageSquareText,
  },
  {
    title: "Global Job Assistance",
    description:
      "Navigate international markets with specialized localization strategies.",
    icon: Globe2,
  },
  {
    title: "Career Strategy",
    description:
      "Long-term planning designed to align your skills with market demands and future opportunities.",
    icon: Route,
  },
  {
    title: "Placement Support",
    description:
      "Direct connections to our network of premier employers. We advocate on your behalf to secure the role you deserve.",
    icon: Briefcase,
  },
];

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
   SERVICES
========================================================= */

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative isolate overflow-hidden
        bg-[#F8F6F2]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* =====================================================
          HOME-MATCHING LIGHT LIQUID GLASS BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0 -z-10 overflow-hidden
        "
      >
        <div
          className="
            absolute -left-32 -top-40
            h-[520px] w-[520px]
            rounded-full
            bg-[#A7D98E]/15
            blur-[150px]
          "
        />

        <div
          className="
            absolute -right-32 top-10
            h-[500px] w-[500px]
            rounded-full
            bg-[#EADBC8]/34
            blur-[150px]
          "
        />

        <div
          className="
            absolute left-1/2 top-[18%]
            h-[500px] w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/70
            blur-[135px]
          "
        />

        <div
          className="
            absolute left-[8%] right-[8%] top-[50%]
            h-[130px]
            rounded-full
            bg-[#4D8B4F]/7
            blur-[90px]
          "
        />

        <div
          className="
            absolute bottom-[-190px] left-1/2
            h-[420px] w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#A7D98E]/12
            blur-[145px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
          <div
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white
              ring-1
              ring-inset
              ring-[#6B2D1A]/[0.07]
              bg-white/45
              px-4
              py-2
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_10px_30px_rgba(77,139,79,0.07)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:bg-white/60
              hover:shadow-[0_15px_35px_rgba(77,139,79,0.12)]
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
                border-[#4D8B4F]/20
                bg-[#A7D98E]/20
                text-[#4D8B4F]
                transition-transform
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#4D8B4F]
              "
            >
              Our Services
            </span>
          </div>

          <h2
            className="
              mt-6
              text-balance
              text-4xl
              font-black
              leading-[1.04]
              tracking-[-0.045em]
              text-[#632816]
              drop-shadow-[0_2px_10px_rgba(107,45,26,0.08)]
              sm:text-5xl
            "
          >
            How We Help You Succeed

            <span className="block text-[#4D8B4F]">
              With Practical Career Solutions
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-pretty
              text-base
              font-medium
              leading-7
              text-[#3F4641]
              sm:text-lg
            "
          >
            From your first consultation to your final offer, every service is
            carefully designed to accelerate your career journey.
          </p>
        </Reveal>

        {/* =================================================
            SERVICES GRID
        ================================================== */}

        <div className="mt-16">
          {/* First row */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {SERVICES.slice(0, 3).map(
              (service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 90}
                  className={
                    index === 0
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }
                >
                  <ServiceCard
                    service={service}
                    large={index === 0}
                  />
                </Reveal>
              )
            )}
          </div>

          {/* Second row */}

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-2
            "
          >
            {SERVICES.slice(3).map(
              (service, index) => (
                <Reveal
                  key={service.title}
                  delay={(index + 3) * 90}
                  className="h-full"
                >
                  <ServiceCard
                    service={service}
                    large
                  />
                </Reveal>
              )
            )}
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <Reveal
          delay={180}
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
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white
              ring-1
              ring-inset
              ring-[#6B2D1A]/[0.07]
              bg-white/45
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#4D8B4F]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
              shadow-[0_12px_35px_rgba(77,139,79,0.08)]
              backdrop-blur-2xl
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:bg-white/65
              hover:text-[#6B2D1A]
              hover:shadow-[0_18px_45px_rgba(77,139,79,0.14)]
              active:translate-y-0
            "
          >
            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-16
                w-14
                -skew-x-12
                bg-white/60
                blur-md
                transition-all
                duration-[1100ms]
                group-hover:left-[115%]
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
                group-hover:translate-x-1.5
              "
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  large = false,
}) {
  const Icon = service.icon;

  return (
    <article
      data-large={large ? "true" : "false"}
      className={`
        group
        relative
        flex
        h-full
        min-h-[260px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-white
        ring-1
        ring-inset
        ring-[#6B2D1A]/[0.07]
        bg-gradient-to-br
        from-white/95
        via-[#F8F6F2]/90
        to-[#EADBC8]/38
        p-7
        shadow-[0_18px_42px_rgba(72,48,32,0.11),0_6px_20px_rgba(77,139,79,0.055),inset_0_1px_0_rgba(255,255,255,0.98)]
        backdrop-blur-2xl
        backdrop-saturate-150
        transition-[transform,background-color,box-shadow,border-color]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:scale-[1.012]
        hover:border-[#A7D98E]/45
        hover:from-white
        hover:via-[#F8F6F2]/96
        hover:to-[#EADBC8]/45
        hover:shadow-[0_30px_65px_rgba(72,48,32,0.16),0_12px_34px_rgba(77,139,79,0.12),inset_0_1px_0_rgba(255,255,255,1)]
        ${large ? "lg:min-h-[285px] lg:p-8" : ""}
      `}
    >
      {/* =================================================
          SUBTLE GLASS BODY TINT
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[30px]
          bg-gradient-to-br
          from-white/78
          via-white/18
          to-[#EADBC8]/18
          opacity-85
        "
      />

      {/* =================================================
          SOFT GREEN GLASS REFLECTION
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/4
          h-32
          w-1/2
          rounded-full
          bg-[#A7D98E]/10
          blur-3xl
        "
      />

      {/* =================================================
          SMOOTH GLASS REFLECTION
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-24
          top-0
          h-full
          w-20
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          opacity-0
          blur-md
          transition-all
          duration-[1600ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      {/* =================================================
          SOFT HOVER GLOW
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-[#A7D98E]/10
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-[#A7D98E]/25
        "
      />

      {/* =================================================
          TOP GLASS EDGE
      ================================================== */}

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
          opacity-90
        "
      />

      {/* =================================================
          BOTTOM WARM REFLECTION
      ================================================== */}

      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-16
          h-32
          w-32
          rounded-full
          bg-[#EADBC8]/12
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-125
        "
      />

      {/* =================================================
          ICON
      ================================================== */}

      <div
        className={`
          relative
          z-10
          mb-7
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-[18px]
          border
          border-white/85
          shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
          shadow-[0_8px_24px_rgba(107,45,26,0.075)]
          backdrop-blur-xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-1.5
          group-hover:scale-110
          group-hover:rotate-1
          group-hover:shadow-[0_12px_30px_rgba(77,139,79,0.14)]
          ${
            service.title ===
            "Professional Training"
              ? "bg-[#A7D98E]/18 text-[#4D8B4F] group-hover:bg-[#A7D98E]/28"
              : service.title ===
                  "Career Mentoring"
                ? "bg-[#EADBC8]/28 text-[#8A5A3B] group-hover:bg-[#EADBC8]/40"
                : service.title ===
                    "Resume Marketing"
                  ? "bg-[#6B2D1A]/8 text-[#6B2D1A] group-hover:bg-[#6B2D1A]/14"
                  : service.title ===
                      "Intense Bootcamps"
                    ? "bg-[#D8C6A8]/25 text-[#7A5B3A] group-hover:bg-[#D8C6A8]/38"
                    : "bg-[#A7D98E]/12 text-[#557B50] group-hover:bg-[#A7D98E]/22"
          }
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
          TITLE
      ================================================== */}

      <h3
        className={`
          relative
          z-10
          text-[21px]
          font-extrabold
          leading-[1.16]
          tracking-[-0.025em]
          text-[#6B2D1A]
          transition-[color,transform]
          duration-300
          group-hover:text-[#572317]
          group-hover:translate-x-0.5
          ${large ? "lg:text-2xl" : ""}
        `}
      >
        {service.title}
      </h3>

      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          relative
          z-10
          mt-3
          text-[14px]
          leading-6
          text-[#5F6368]
          transition-[color,transform]
          duration-300
          group-hover:text-[#4F5751]
          group-hover:translate-x-0.5
        "
      >
        {service.description}
      </p>

      {/* =================================================
          LEARN MORE
          
          NOW CLICKABLE → CONTACT
      ================================================== */}

      <div className="relative z-10 mt-auto pt-6">
        <button
          type="button"
          onClick={scrollToContact}
          className="
            group/learn
            inline-flex
            cursor-pointer
            items-center
            gap-2
            rounded-full
            py-1
            text-[13px]
            font-bold
            text-[#5D8059]
            outline-none
            transition-all
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:translate-x-1
            hover:text-[#6B2D1A]
            focus-visible:ring-2
            focus-visible:ring-[#4D8B4F]/30
            focus-visible:ring-offset-2
          "
        >
          <span className="relative">
            Learn more

            {/* Small animated underline */}

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
                group-hover/learn:w-full
              "
            />
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-400
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover/learn:translate-x-1.5
            "
          />
        </button>
      </div>

      {/* =================================================
          BOTTOM ACTIVE LINE
      ================================================== */}

      <span
        aria-hidden
        className="
          absolute
          bottom-0
          left-7
          h-1
          w-0
          rounded-full
          bg-gradient-to-r
          from-[#4D8B4F]
          via-[#A7D98E]
          to-[#4D8B4F]
          opacity-0
          shadow-[0_0_18px_rgba(77,139,79,0.42)]
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:w-16
          group-hover:opacity-100
        "
      />
    </article>
  );
}

/* =========================================================
   SMOOTH SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  const [shown, setShown] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

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

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay:
          `${delay}ms`,
      }}
      className={`
        transition-[transform,opacity,filter]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          shown
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-5 scale-[0.992] opacity-0 blur-[2px]"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}