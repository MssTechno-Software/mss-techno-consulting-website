import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

/* =========================================================
   COMPANY DATA
========================================================= */

const COMPANIES = [
  {
    name: "Google",
    domain: "google.com",
  },
  {
    name: "Apple",
    domain: "apple.com",
  },
  {
    name: "Microsoft",
    domain: "microsoft.com",
  },
  {
    name: "Amazon",
    domain: "amazon.com",
  },
  {
    name: "Netflix",
    domain: "netflix.com",
  },
  {
    name: "Meta",
    domain: "meta.com",
  },
  {
    name: "NVIDIA",
    domain: "nvidia.com",
  },
  {
    name: "Tesla",
    domain: "tesla.com",
  },
  {
    name: "Oracle",
    domain: "oracle.com",
  },
  {
    name: "Salesforce",
    domain: "salesforce.com",
  },
  {
    name: "Adobe",
    domain: "adobe.com",
  },
  {
    name: "IBM",
    domain: "ibm.com",
  },
  {
    name: "SAP",
    domain: "sap.com",
  },
  {
    name: "ServiceNow",
    domain: "servicenow.com",
  },
  {
    name: "Atlassian",
    domain: "atlassian.com",
  },
  {
    name: "JPMorgan Chase",
    domain: "jpmorganchase.com",
  },
  {
    name: "Goldman Sachs",
    domain: "goldmansachs.com",
  },
  {
    name: "Citi",
    domain: "citi.com",
  },
  {
    name: "PepsiCo",
    domain: "pepsico.com",
  },
  {
    name: "Walmart",
    domain: "walmart.com",
  },
  {
    name: "Infosys",
    domain: "infosys.com",
  },
  {
    name: "Accenture",
    domain: "accenture.com",
  },
  {
    name: "Zoho",
    domain: "zoho.com",
  },
  {
    name: "Freshworks",
    domain: "freshworks.com",
  },
  {
    name: "BrowserStack",
    domain: "browserstack.com",
  },
  {
    name: "Paytm",
    domain: "paytm.com",
  },
  {
    name: "Intuit",
    domain: "intuit.com",
  },
  {
    name: "Stripe",
    domain: "stripe.com",
  },
  {
    name: "Airbnb",
    domain: "airbnb.com",
  },
  {
    name: "Uber",
    domain: "uber.com",
  },
  {
    name: "Spotify",
    domain: "spotify.com",
  },
  {
    name: "Dropbox",
    domain: "dropbox.com",
  },
];

/* =========================================================
   PARTICLES
========================================================= */

const PARTICLES = [
  { left: "8%", top: "18%", size: 4 },
  { left: "18%", top: "72%", size: 3 },
  { left: "31%", top: "13%", size: 4 },
  { left: "46%", top: "80%", size: 3 },
  { left: "61%", top: "20%", size: 4 },
  { left: "74%", top: "70%", size: 3 },
  { left: "86%", top: "28%", size: 4 },
  { left: "93%", top: "58%", size: 3 },
];

/* =========================================================
   COMPANY CARD
========================================================= */

function CompanyCard({ company }) {
  const [logoSource, setLogoSource] = useState(
    `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`
  );

  const fallbackSource =
    `https://cdn.simpleicons.org/${company.name
      .toLowerCase()
      .replace(/\s+/g, "")}`;

  const [usingFallback, setUsingFallback] = useState(false);

  const handleLogoError = () => {
    if (!usingFallback) {
      setUsingFallback(true);
      setLogoSource(fallbackSource);
    }
  };

  return (
    <div
      className="
        group
        relative
        flex
        h-[82px]
        w-[190px]
        shrink-0
        items-center
        gap-4
        overflow-hidden
        rounded-[24px]

        border
        border-white/75

        bg-white/35

        backdrop-blur-2xl
        backdrop-saturate-150

        shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
        shadow-[0_10px_30px_rgba(77,139,79,0.06)]

        transition-[transform,background-color,box-shadow,border-color]
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-white/95
        hover:bg-white/55
        hover:shadow-[0_18px_40px_rgba(77,139,79,0.13)]
      "
    >
      {/* Glass reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/55
          via-transparent
          to-[#A7D98E]/10
        "
      />

      {/* Top shine */}

      <div
        className="
          pointer-events-none
          absolute
          left-6
          right-6
          top-0
          h-px
          bg-white
        "
      />

      {/* Logo glass */}

      <div
        className="
          relative
          z-10
          ml-4

          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center

          rounded-2xl

          border
          border-white/85

          bg-white/55

          backdrop-blur-xl

          shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
          shadow-[0_6px_18px_rgba(77,139,79,0.08)]

          transition-transform
          duration-500
          ease-out

          group-hover:scale-105
        "
      >
        <img
          src={logoSource}
          alt={`${company.name} logo`}
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          onError={handleLogoError}
          className="
            h-7
            w-7
            object-contain
            opacity-80
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Name */}

      <span
        className="
          relative
          z-10
          whitespace-nowrap
          pr-4

          text-[13px]
          font-bold
          tracking-[-0.005em]

          text-[#6B2D1A]/85

          transition-colors
          duration-300

          group-hover:text-[#6B2D1A]
        "
      >
        {company.name}
      </span>

      {/* Bottom green reflection */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-8
          right-8
          h-px

          bg-gradient-to-r
          from-transparent
          via-[#4D8B4F]/35
          to-transparent

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />
    </div>
  );
}

/* SMOOTH MARQUEE */

function MarqueeRow({
  companies,
  direction = "left",
  duration = 90,
}) {
  const firstGroupRef = useRef(null);
  const [groupWidth, setGroupWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);

  /* Measure exact first group width */

  useEffect(() => {
    const measure = () => {
      if (firstGroupRef.current) {
        setGroupWidth(
          firstGroupRef.current.offsetWidth
        );
      }
    };

    measure();

    const resizeObserver =
      new ResizeObserver(measure);

    if (firstGroupRef.current) {
      resizeObserver.observe(
        firstGroupRef.current
      );
    }

    window.addEventListener(
      "resize",
      measure
    );

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(
        "resize",
        measure
      );
    };
  }, []);

  /* =====================================================
     TRUE CONTINUOUS MOTION

     No reset.
     No percentage.
     No requestAnimationFrame.
  ====================================================== */

  useAnimationFrame((time, delta) => {
    if (!groupWidth || paused) return;

    const pixelsPerFrame =
      (groupWidth / duration / 60);

    const movement =
      pixelsPerFrame * (delta / 16.67);

    const current =
      x.get();

    if (direction === "left") {
      const next =
        current - movement;

      x.set(
        next <= -groupWidth
          ? next + groupWidth
          : next
      );
    } else {
      const next =
        current + movement;

      x.set(
        next >= 0
          ? next - groupWidth
          : next
      );
    }
  });

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
      "
      onMouseEnter={() =>
        setPaused(true)
      }
      onMouseLeave={() =>
        setPaused(false)
      }
    >
      <motion.div
        style={{
          x,
        }}
        className="
          flex
          w-max
          gap-5
          will-change-transform
        "
      >
        {/* FIRST EXACT GROUP */}

        <div
          ref={firstGroupRef}
          className="
            flex
            shrink-0
            gap-5
          "
        >
          {companies.map(
            (company, index) => (
              <CompanyCard
                key={`${company.name}-first-${index}`}
                company={company}
              />
            )
          )}
        </div>

        {/* SECOND EXACT GROUP */}

        <div
          className="
            flex
            shrink-0
            gap-5
          "
        >
          {companies.map(
            (company, index) => (
              <CompanyCard
                key={`${company.name}-second-${index}`}
                company={company}
              />
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function HiringPartners() {
  const { top, bottom } = useMemo(() => {
    const middle =
      Math.ceil(COMPANIES.length / 2);

    return {
      top: COMPANIES.slice(0, middle),
      bottom: COMPANIES.slice(middle),
    };
  }, []);

  return (
    <section
      id="Partners"
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
          BACKGROUND
      ====================================================== */}

      {/* =====================================================
          HOME-MATCHING LIQUID GLASS BACKGROUND
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
        <div
          className="
            absolute
            left-[-10%]
            top-[-15%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/18
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-8%]
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EADBC8]/25
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[420px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-white/75
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            left-[8%]
            right-[8%]
            top-[48%]
            h-[120px]
            rounded-full
            bg-[#4D8B4F]/8
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[400px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#A7D98E]/14
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[280px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#EADBC8]/18
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {PARTICLES.map(
          (particle, index) => (
            <span
              key={index}
              className="
                absolute
                rounded-full

                bg-[#4D8B4F]/20

                shadow-[0_0_12px_rgba(77,139,79,0.15)]

                animate-hiring-particle
              "
              style={{
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay:
                  `${index * 0.4}s`,
              }}
            />
          )
        )}
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-4xl
          px-6
          text-center
        "
      >
        {/* Badge */}

        <div
          className="
            mx-auto
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-white/75

            bg-white/40

            px-4
            py-2

            shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
            shadow-[0_8px_25px_rgba(77,139,79,0.06)]

            backdrop-blur-xl
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full

              bg-[#4D8B4F]

              shadow-[0_0_10px_rgba(77,139,79,0.4)]
            "
          />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#6B2D1A]/65
            "
          >
            Hiring Partners
          </span>
        </div>

        {/* Heading */}

        <h2
          id="partners-heading"
          className="
            mt-6

            text-balance

            text-4xl
            font-black
            leading-[1.08]

            tracking-[-0.045em]

            text-[#6B2D1A]

            sm:text-5xl
            lg:text-6xl
          "
        >
          Our Candidates Have Reached

          <span
            className="
              block
              font-black
              text-[#3F7541]
              drop-shadow-[0_1px_1px_rgba(77,139,79,0.08)]
            "
          >
            Global Companies
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl

            text-pretty

            text-base
            font-medium
            leading-7

            text-[#3F463F]/85

            sm:text-lg
          "
        >
          From global technology leaders to
          fast-growing companies, we help
          professionals build stronger profiles
          and pursue meaningful career
          opportunities.
        </p>
      </div>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <div
        className="
          relative
          mt-16
          space-y-5
        "
      >
        {/* Left glass fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20

            h-full
            w-20

            bg-gradient-to-r
            from-[#F8F6F2]
            via-[#F8F6F2]/90
            to-transparent

            sm:w-40
          "
        />

        {/* Right glass fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20

            h-full
            w-20

            bg-gradient-to-l
            from-[#F8F6F2]
            via-[#F8F6F2]/90
            to-transparent

            sm:w-40
          "
        />

        {/* Top */}

        <MarqueeRow
          companies={top}
          direction="left"
          duration={75}
        />

        {/* Bottom */}

        <MarqueeRow
          companies={bottom}
          direction="right"
          duration={82}
        />
      </div>

      {/* =====================================================
          BOTTOM TRUST LABEL
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-12

          flex
          w-fit
          items-center
          gap-2

          rounded-full

          border
          border-white/75

          bg-white/35

          px-4
          py-2

          shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
          shadow-[0_8px_25px_rgba(77,139,79,0.06)]

          backdrop-blur-xl
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#4D8B4F]
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#6B2D1A]/50
          "
        >
          Technology • Finance • Retail • Global Services
        </span>
      </div>

      {/* =====================================================
          PARTICLE ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes hiringParticle {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.15;
          }

          50% {
            transform: translate3d(0, -9px, 0);
            opacity: 0.4;
          }
        }

        .animate-hiring-particle {
          animation:
            hiringParticle
            6s
            ease-in-out
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-hiring-particle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}