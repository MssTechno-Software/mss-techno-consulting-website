import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  UsersRound,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

/* =========================================================
   MSS TECHNO — OUR COMMITMENT
   Clean Liquid Glass / Premium Editorial Section
   ========================================================= */

const COMMITMENTS = [
  {
    title: "Uncompromising Security",
    description:
      "Every architecture we deploy is fortified from the ground up, ensuring your digital assets remain protected against evolving threats.",
    icon: ShieldCheck,
    accent: "green",
  },
  {
    title: "Human-Centric Design",
    description:
      "Technology serves people, not the other way around. We turn complex processes into frictionless, intuitive experiences that delight users.",
    icon: UsersRound,
    accent: "brown",
  },
  {
    title: "Data-Driven Growth",
    description:
      "We transform raw metrics into actionable intelligence. Our analytical platforms empower leadership to make decisive, visionary choices.",
    icon: TrendingUp,
    accent: "champagne",
  },
];

const STATS = [
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

export default function OurCommitment() {
  return (
   <section
  id="commitment"
  className="
    relative
    isolate
    overflow-hidden
    bg-[#F8F6F2]
    pt-16
    pb-20
    sm:pt-20
    sm:pb-24
    lg:pt-24
    lg:pb-28
  "
>
      {/* =====================================================
          CLEAN MSS TECHNO BACKGROUND
          No dots / no grid / no texture
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#F8F6F2]" />

        {/* Soft MSS Green glow */}
        <div
          className="
            absolute
            -left-[180px]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/[0.14]
            blur-[140px]
            animate-[commitmentGreen_16s_ease-in-out_infinite]
          "
        />

        {/* Soft Champagne glow */}
        <div
          className="
            absolute
            -right-[180px]
            top-[18%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#EADBC8]/[0.18]
            blur-[150px]
            animate-[commitmentChampagne_19s_ease-in-out_infinite]
          "
        />

        {/* Very subtle green center light */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#A7D98E]/[0.045]
            blur-[150px]
          "
        />

        {/* Soft Brown warmth */}
        <div
          className="
            absolute
            bottom-[-260px]
            left-1/2
            h-[500px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-[#6B2D1A]/[0.025]
            blur-[160px]
          "
        />

        {/* Clean white glass light */}
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[420px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-white/50
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

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
              gap-2.5
              rounded-full
              border
              border-white/90
              bg-white/55
              px-4
              py-2
              shadow-[0_8px_30px_rgba(77,139,79,0.07)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:bg-white/75
              hover:shadow-[0_12px_35px_rgba(77,139,79,0.10)]
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
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.24em]
                text-[#6B2D1A]/75
              "
            >
              Our Promise
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.055em]
              text-[#6B2D1A]
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Our Commitment
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[15px]
              font-semibold
              leading-7
              text-[#505752]
              sm:text-[16px]
            "
          >
            We merge crystalline precision with profound industry expertise,
            ensuring every solution we engineer is secure, scalable, and
            beautifully intuitive. Your success is our baseline.
          </p>
        </Reveal>

        {/* =================================================
            COMMITMENT CARDS
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
            lg:mt-16
            lg:gap-6
          "
        >
          {COMMITMENTS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 100}
            >
              <CommitmentCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* =================================================
            STATS GLASS BAR
        ================================================== */}

        <Reveal
          delay={300}
          className="mt-9 flex justify-center"
        >
          <div
            className="
              group
              relative
              w-full
              max-w-3xl
              overflow-hidden
              rounded-[30px]
              border
              border-white/90
              bg-white/50
              px-5
              py-5
              shadow-[0_18px_55px_rgba(65,55,40,0.07)]
              backdrop-blur-2xl
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1
              hover:bg-white/65
              hover:shadow-[0_25px_65px_rgba(77,139,79,0.11)]
            "
          >
            {/* Glass reflection */}
            <div
              className="
                pointer-events-none
                absolute
                -left-[35%]
                top-[-100%]
                h-[300%]
                w-[25%]
                rotate-[18deg]
                bg-gradient-to-r
                from-transparent
                via-white/55
                to-transparent
                opacity-0
                blur-xl
                transition-all
                duration-[1100ms]
                ease-out
                group-hover:left-[115%]
                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                grid
                grid-cols-3
                divide-x
                divide-[#6B2D1A]/10
              "
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-3
                    text-center
                  "
                >
                  <span
                    className="
                      text-3xl
                      font-black
                      leading-none
                      tracking-[-0.045em]
                      text-[#4D8B4F]
                      sm:text-4xl
                    "
                  >
                    {stat.value}
                  </span>

                  <span
                    className="
                      mt-2
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.16em]
                      text-[#6B2D1A]/55
                      sm:text-[9px]
                    "
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* =================================================
            BOTTOM PROMISE
        ================================================== */}

        <Reveal
          delay={400}
          className="mt-9 flex justify-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/40
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#4D8B4F]/80
              backdrop-blur-xl
              transition-all
              duration-500
              hover:bg-white/60
            "
          >
            <Check className="h-3.5 w-3.5" />

            Built around trust, clarity & measurable growth

            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes commitmentGreen {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(24px, -16px, 0) scale(1.05);
          }
        }

        @keyframes commitmentChampagne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-22px, 18px, 0) scale(1.06);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
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
   PREMIUM COMMITMENT CARD
   ========================================================= */

function CommitmentCard({ item }) {
  const Icon = item.icon;

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const accent =
    item.accent === "brown"
      ? {
          iconBg: "bg-[#F5E9DE]",
          iconText: "text-[#6B2D1A]",
          glow: "rgba(107,45,26,0.16)",
          line: "#6B2D1A",
        }
      : item.accent === "champagne"
        ? {
            iconBg: "bg-[#F3E8D8]",
            iconText: "text-[#8A674D]",
            glow: "rgba(138,103,77,0.15)",
            line: "#8A674D",
        }
        : {
            iconBg: "bg-[#E8F3E5]",
            iconText: "text-[#4D8B4F]",
            glow: "rgba(77,139,79,0.16)",
            line: "#4D8B4F",
        };

  /* Smooth mouse-following spotlight */
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      className="
        group
        relative
        min-h-[310px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/90
        bg-white/48
        p-7
        shadow-[0_16px_45px_rgba(55,48,40,0.055)]
        backdrop-blur-2xl
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
        hover:scale-[1.012]
        hover:bg-white/68
      "
      style={{
        "--card-glow": accent.glow,
      }}
    >
      {/* =================================================
          MOUSE SPOTLIGHT
      ================================================== */}

      <div
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
            260px circle at ${spotlight.x}% ${spotlight.y}%,
            var(--card-glow),
            transparent 68%
          )`,
        }}
      />

      {/* =================================================
          HOVER EDGE GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.95),
            0 22px 65px var(--card-glow)
          `,
        }}
      />

      {/* Top glass shine */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          right-[10%]
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
          ICON
      ================================================== */}

      <div
        className={`
          relative
          flex
          h-13
          w-13
          items-center
          justify-center
          rounded-[17px]
          border
          border-white/90
          ${accent.iconBg}
          ${accent.iconText}
          shadow-[0_8px_22px_rgba(55,48,40,0.07)]
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-110
          group-hover:-rotate-3
          group-hover:shadow-[0_12px_28px_rgba(77,139,79,0.12)]
        `}
      >
        <Icon
          className="h-5 w-5"
          strokeWidth={2}
        />

        {/* Inner glass ring */}
        <span
          className="
            pointer-events-none
            absolute
            inset-[3px]
            rounded-[13px]
            border
            border-white/60
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative mt-7">
        <h3
          className="
            max-w-[330px]
            text-[23px]
            font-black
            leading-[1.12]
            tracking-[-0.04em]
            text-[#572616]
            transition-all
            duration-400
            group-hover:translate-x-0.5
            group-hover:text-[#6B2D1A]
            sm:text-[24px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3.5
            max-w-[350px]
            text-[14px]
            font-medium
            leading-6
            text-[#59615B]
            transition-colors
            duration-300
            group-hover:text-[#4B524D]
          "
        >
          {item.description}
        </p>
      </div>

      {/* =================================================
          BOTTOM INTERACTION
          Learn More -> smooth scroll to Contact
      ================================================== */}

      <div className="absolute bottom-7 left-7 right-7">
        <button
          type="button"
          onClick={scrollToContact}
          aria-label={`Learn more about ${item.title}`}
          className="
            group/learn
            flex
            w-full
            cursor-pointer
            items-center
            justify-between
            rounded-2xl
            text-left
            outline-none
            transition-all
            duration-300
            focus-visible:ring-2
            focus-visible:ring-[#4D8B4F]/30
            focus-visible:ring-offset-2
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                h-[3px]
                w-7
                rounded-full
                opacity-45
                transition-all
                duration-500
                group-hover/learn:w-14
                group-hover/learn:opacity-90
              "
              style={{ backgroundColor: accent.line }}
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-[#6B2D1A]/60
                transition-all
                duration-300
                group-hover/learn:translate-x-0.5
                group-hover/learn:text-[#4D8B4F]
              "
            >
              Learn More
            </span>
          </div>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/90
              bg-white/50
              text-[#4D8B4F]
              opacity-0
              translate-x-2
              backdrop-blur-xl
              shadow-[0_8px_22px_rgba(77,139,79,0.08)]
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover/learn:translate-x-0
              group-hover/learn:opacity-100
              group-hover/learn:bg-white/75
            "
          >
            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/learn:translate-x-0.5
                group-hover/learn:-translate-y-0.5
              "
            />
          </span>
        </button>
      </div>
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
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-7 scale-[0.985] opacity-0 blur-[2px]"
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