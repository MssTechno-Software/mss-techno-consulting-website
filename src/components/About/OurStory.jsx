import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  UsersRound,
  Target,
  CalendarDays,
} from "lucide-react";

/* =========================================================
   MSS TECHNO — OUR STORY
   Premium Editorial / Liquid Glass Section
   ========================================================= */

const STORY_STATS = [
  {
    value: "15+",
    label: "Years Experience",
    icon: CalendarDays,
  },
  {
    value: "2500+",
    label: "Professionals Guided",
    icon: UsersRound,
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    icon: TrendingUp,
  },
  {
    value: "Since 2019",
    label: "Transforming Careers",
    icon: Target,
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
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

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Soft MSS green light */}

        <div
          className="
            absolute
            -left-[220px]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/14
            blur-[150px]
            animate-[storyFloat_15s_ease-in-out_infinite]
          "
        />

        {/* Champagne light */}

        <div
          className="
            absolute
            -right-[220px]
            top-[25%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#EADBC8]/20
            blur-[160px]
            animate-[storyFloatReverse_18s_ease-in-out_infinite]
          "
        />

        {/* Subtle brown atmosphere */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[520px]
            w-[820px]
            -translate-x-1/2
            rounded-full
            bg-[#6B2D1A]/[0.035]
            blur-[160px]
          "
        />

        {/* Central white light */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[1000px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[170px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

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
              Our Story
            </span>
          </div>

          {/* Heading */}

          <h2
            id="story-heading"
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
            Building Careers
            <br />

            <span className="text-[#4D8B4F]">
              With Purpose & Experience
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[15px]
              font-semibold
              leading-7
              text-[#4F5751]
              sm:text-[16px]
            "
          >
            A practical approach to career consulting, professional growth,
            and technology-focused guidance built around real-world goals.
          </p>
        </Reveal>

        {/* =====================================================
            STORY CONTENT
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            items-center
            gap-10
            lg:mt-16
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-16
          "
        >

          {/* =================================================
              LEFT — IMAGE
          ================================================= */}

          <Reveal>

            <div className="relative mx-auto w-full max-w-[650px]">

              {/* Image ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-6
                  rounded-[42px]
                  bg-[#A7D98E]/14
                  blur-3xl
                "
              />

              {/* Main image glass shell */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white
                  bg-white/65
                  p-2
                  shadow-[0_28px_80px_rgba(65,55,40,0.11)]
                  backdrop-blur-2xl
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:shadow-[0_35px_95px_rgba(77,139,79,0.14)]
                "
              >

                <div
                  className="
                    relative
                    aspect-[1.35/1]
                    overflow-hidden
                    rounded-[25px]
                    bg-[#EEEAE1]
                  "
                >

                  {/* Replace this image URL later */}

                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                    alt="MSS Techno career consulting team collaborating"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* Image tint */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-[#6B2D1A]/10
                      via-transparent
                      to-[#A7D98E]/10
                    "
                  />

                  {/* Soft bottom fade */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-1/3
                      bg-gradient-to-t
                      from-[#2E302D]/15
                      to-transparent
                    "
                  />

                  {/* Glass reflection */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white
                      to-transparent
                      opacity-90
                    "
                  />

                  {/* Moving light reflection */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-1/2
                      top-0
                      h-full
                      w-1/3
                      rotate-[12deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/25
                      to-transparent
                      blur-xl
                      opacity-0
                      transition-all
                      duration-[1200ms]
                      group-hover:left-[120%]
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  FLOATING ACHIEVEMENT BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-6
                  right-4
                  z-10
                  rounded-[22px]
                  border
                  border-white
                  bg-[#4D8B4F]
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(77,139,79,0.25)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(77,139,79,0.30)]
                  sm:right-[-18px]
                "
              >
                <p
                  className="
                    text-3xl
                    font-black
                    leading-none
                    tracking-[-0.045em]
                    text-white
                  "
                >
                  2500+
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.13em]
                    text-white/80
                  "
                >
                  Professionals Guided
                </p>
              </div>
            </div>
          </Reveal>

          {/* =================================================
              RIGHT — STORY
          ================================================= */}

          <Reveal delay={120}>

            <div className="max-w-2xl">

              {/* Small label */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#4D8B4F]
                "
              >
                <span
                  className="
                    h-[2px]
                    w-9
                    rounded-full
                    bg-[#4D8B4F]
                  "
                />

                MSS Techno
              </div>

              {/* Heading */}

              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#2E302D]
                  sm:text-4xl
                  lg:text-[44px]
                "
              >
                Our Story
                <br />

                <span className="text-[#6B2D1A]">
                  From Guidance to Growth.
                </span>
              </h3>

              {/* Story paragraphs */}

              <div
                className="
                  mt-6
                  space-y-4
                  text-[14px]
                  font-semibold
                  leading-7
                  text-[#555D57]
                  sm:text-[15px]
                "
              >
                <p>
                  MSS Techno was built around a simple idea: talented
                  professionals deserve clear guidance, practical career
                  strategies, and the right support to move forward.
                </p>

                <p>
                  Our approach combines career consulting, professional
                  profile development, interview preparation, and
                  technology-focused guidance to help individuals make
                  confident career decisions.
                </p>

                <p>
                  Today, our focus remains the same — turning uncertainty
                  into direction and helping professionals build stronger,
                  more sustainable career journeys.
                </p>
              </div>

              {/* =================================================
                  STORY HIGHLIGHTS
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <StoryPoint
                  icon={Target}
                  title="Purpose-Driven Guidance"
                  description="Career direction built around your goals and strengths."
                />

                <StoryPoint
                  icon={UsersRound}
                  title="Human-Centered Consulting"
                  description="Personalized support instead of one-size-fits-all advice."
                />
              </div>

              {/* CTA */}

              <button
                type="button"
                onClick={() => {
                  const contact = document.getElementById("contact");

                  if (contact) {
                    contact.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-2.5
                  cursor-pointer
                  rounded-full
                  border
                  border-[#4D8B4F]/15
                  bg-white/75
                  px-5
                  py-3
                  text-[12px]
                  font-black
                  text-[#4D8B4F]
                  shadow-[0_10px_30px_rgba(77,139,79,0.07)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_18px_40px_rgba(77,139,79,0.13)]
                "
              >
                Learn More About MSS Techno

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            STATS BAR
        ====================================================== */}

        <Reveal delay={220} className="mt-16 lg:mt-20">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white
              bg-white/62
              px-4
              py-6
              shadow-[0_22px_65px_rgba(65,55,40,0.075)]
              backdrop-blur-3xl
              sm:px-6
              lg:px-8
            "
          >

            {/* Top reflection */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-10
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* Moving glass shine */}

            <div
              className="
                pointer-events-none
                absolute
                -left-1/3
                top-0
                h-full
                w-1/4
                rotate-[12deg]
                bg-gradient-to-r
                from-transparent
                via-white/35
                to-transparent
                blur-2xl
                opacity-0
                transition-all
                duration-[1400ms]
                hover:left-[120%]
                hover:opacity-100
              "
            />

            <div
              className="
                relative
                grid
                grid-cols-2
                divide-x
                divide-y
                divide-[#6B2D1A]/10
                lg:grid-cols-4
                lg:divide-y-0
              "
            >
              {STORY_STATS.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  stat={stat}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            BOTTOM MICRO STATEMENT
        ====================================================== */}

        <Reveal delay={350} className="mt-7 flex justify-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white
              bg-white/55
              px-4
              py-2
              text-[9px]
              font-black
              uppercase
              tracking-[0.16em]
              text-[#6B2D1A]/65
              backdrop-blur-xl
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#4D8B4F]" />

            Practical guidance. Meaningful growth. Better careers.
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes storyFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(20px, -16px, 0) scale(1.05);
          }
        }

        @keyframes storyFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-20px, 15px, 0) scale(1.05);
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
   STORY POINT
========================================================= */

function StoryPoint({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-[18px]
        border
        border-white
        bg-white/48
        px-3.5
        py-3
        shadow-[0_8px_25px_rgba(65,55,40,0.035)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-white/75
        hover:shadow-[0_15px_35px_rgba(77,139,79,0.08)]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E8F3E5]
          text-[#4D8B4F]
          transition-transform
          duration-500
          group-hover:scale-110
        "
      >
        <Icon
          className="h-4 w-4"
          strokeWidth={2}
        />
      </div>

      <div>
        <h4
          className="
            text-[11px]
            font-black
            leading-4
            text-[#3A332E]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-0.5
            text-[9px]
            font-semibold
            leading-4
            text-[#697069]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({ stat, index }) {
  const Icon = stat.icon;

  return (
    <div
      className="
        group
        relative
        flex
        min-h-[105px]
        flex-col
        items-center
        justify-center
        px-3
        text-center
        transition-all
        duration-500
        hover:-translate-y-1
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="
          mb-2
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-[#E8F3E5]
          text-[#4D8B4F]
          opacity-80
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:bg-[#4D8B4F]
          group-hover:text-white
        "
      >
        <Icon
          className="h-3.5 w-3.5"
          strokeWidth={2}
        />
      </div>

      <span
        className="
          text-2xl
          font-black
          leading-none
          tracking-[-0.045em]
          text-[#4D8B4F]
          sm:text-3xl
        "
      >
        {stat.value}
      </span>

      <span
        className="
          mt-2
          text-[8px]
          font-black
          uppercase
          tracking-[0.13em]
          text-[#6B2D1A]/55
          sm:text-[9px]
        "
      >
        {stat.label}
      </span>
    </div>
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