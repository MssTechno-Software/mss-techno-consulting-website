import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FOOTER_NAVIGATION = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why Choose Us", href: "#commitment" },
  ],

  Career: [
    { label: "Career Challenges", href: "#career-challenges" },
    { label: "Career Mentoring", href: "#mentoring" },
    { label: "Hiring Partners", href: "#hiring-partners" },
    { label: "Career Strategy", href: "#services" },
  ],

  Resources: [
    { label: "Our Expertise", href: "#services" },
    { label: "Our Commitment", href: "#commitment" },
    { label: "Contact Us", href: "#contact" },
  ],
};

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
];

/* =========================================================
   FOOTER
   ========================================================= */

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F8F6F2]
        sm:pt-10
        lg:pt-12
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Green atmosphere */}
        <div
          className="
            absolute
            -left-56
            bottom-[-180px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#A7D98E]/14
            blur-[150px]
            animate-[footerFloat_14s_ease-in-out_infinite]
          "
        />

        {/* Champagne atmosphere */}
        <div
          className="
            absolute
            -right-52
            top-[12%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#EADBC8]/18
            blur-[150px]
            animate-[footerFloatReverse_17s_ease-in-out_infinite]
          "
        />

        {/* Center soft light */}
        <div
          className="
            absolute
            left-1/2
            bottom-[-250px]
            h-[500px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-white/80
            blur-[140px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===================================================
            TOP CTA
        ==================================================== */}

        <Reveal className="mb-16">
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/90
              bg-white/55
              px-7
              py-9
              shadow-[0_25px_75px_rgba(65,55,40,0.075)]
              backdrop-blur-2xl
              sm:px-10
              sm:py-10
              lg:px-12
            "
          >
            {/* moving reflection */}
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

            {/* soft green glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-[#A7D98E]/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-7
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div className="max-w-2xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/90
                    bg-white/60
                    px-3
                    py-1.5
                    backdrop-blur-xl
                  "
                >
                  <Sparkles
                    className="h-3.5 w-3.5 text-[#4D8B4F]"
                    strokeWidth={2}
                  />

                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.22em]
                      text-[#6B2D1A]/70
                    "
                  >
                    Let's Build Your Next Chapter
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-3xl
                    font-black
                    leading-[1.02]
                    tracking-[-0.045em]
                    text-[#6B2D1A]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Ready to move your career{" "}
                  <span className="text-[#4D8B4F]">
                    forward?
                  </span>
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-[13px]
                    font-semibold
                    leading-6
                    text-[#626A64]
                    sm:text-[14px]
                  "
                >
                  Get personalized guidance, practical strategies, and
                  professional support designed around your goals.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="
                  group/cta
                  inline-flex
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#4D8B4F]
                  px-6
                  py-3.5
                  text-[13px]
                  font-black
                  text-white
                  shadow-[0_15px_35px_rgba(77,139,79,0.22)]
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1
                  hover:bg-[#427844]
                  hover:shadow-[0_22px_45px_rgba(77,139,79,0.28)]
                  active:translate-y-0
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#4D8B4F]/30
                  focus-visible:ring-offset-2
                "
              >
                Start a Conversation

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/cta:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <Reveal delay={100}>
          <div
            className="
              grid
              grid-cols-1
              gap-12
              border-b
              border-[#6B2D1A]/[0.08]
              pb-14
              md:grid-cols-2
              lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]
              lg:gap-10
            "
          >

            {/* =============================================
                BRAND
            ============================================== */}

            <div>
              <a
                href="#home"
                className="group inline-flex items-center gap-3"
              >
                {/* logo mark */}
                <img
  src="/logo.png"
  alt="MSS Techno Software Pvt Ltd"
  className="h-12 w-auto object-contain"
/>

                <div>
                  <div
                    className="
                      text-[20px]
                      font-black
                      leading-none
                      tracking-[-0.035em]
                      text-[#6B2D1A]
                    "
                  >
                    MSS Techno
                  </div>

                  <div
                    className="
                      mt-1
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.19em]
                      text-[#4D8B4F]
                    "
                  >
                  Lets get's started on your journey to success

                  </div>
                </div>
              </a>

              <p
                className="
                  mt-6
                  max-w-sm
                  text-[13px]
                  font-semibold
                  leading-6
                  text-[#68706A]
                "
              >
                Helping professionals build stronger profiles, develop
                practical skills, and navigate meaningful career opportunities
                with confidence.
              </p>

              {/* contact mini cards */}
              <div className="mt-7 space-y-3">

                <a
                  href="mailto:info@msstechno.com"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[12px]
                    font-bold
                    text-[#59615B]
                    transition-colors
                    duration-300
                    hover:text-[#4D8B4F]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/90
                      bg-white/60
                      text-[#4D8B4F]
                      shadow-[0_7px_18px_rgba(65,55,40,0.05)]
                      backdrop-blur-xl
                    "
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </span>

                  info@msstechno.com
                </a>

                <a
                  href="tel:+14372997361"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[12px]
                    font-bold
                    text-[#59615B]
                    transition-colors
                    duration-300
                    hover:text-[#4D8B4F]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/90
                      bg-white/60
                      text-[#6B2D1A]
                      shadow-[0_7px_18px_rgba(65,55,40,0.05)]
                      backdrop-blur-xl
                    "
                  >
                    <Phone className="h-3.5 w-3.5" />
                  </span>

                  +1 (437) 299-7361
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[12px]
                    font-bold
                    text-[#59615B]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/90
                      bg-white/60
                      text-[#8A674D]
                      shadow-[0_7px_18px_rgba(65,55,40,0.05)]
                      backdrop-blur-xl
                    "
                  >
                    <MapPin className="h-3.5 w-3.5" />
                  </span>

                  Global Career Support
                </div>
              </div>
            </div>

            {/* =============================================
                NAVIGATION COLUMNS
            ============================================== */}

            <FooterColumn
              title="Company"
              items={FOOTER_NAVIGATION.Company}
            />

            <FooterColumn
              title="Career"
              items={FOOTER_NAVIGATION.Career}
            />

            <FooterColumn
              title="Resources"
              items={FOOTER_NAVIGATION.Resources}
            />
          </div>
        </Reveal>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <Reveal delay={180}>
          <div
            className="
              flex
              flex-col
              gap-6
              py-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#6A716C]
                "
              >
                © {new Date().getFullYear()} MSS Techno Software Pvt Ltd.
                All rights reserved.
              </p>

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-[#6B2D1A]/45
                "
              >
                <a
                  href="#"
                  className="transition-colors hover:text-[#4D8B4F]"
                >
                  Privacy
                </a>

                <span>•</span>

                <a
                  href="#"
                  className="transition-colors hover:text-[#4D8B4F]"
                >
                  Terms
                </a>

                <span>•</span>

                <a
                  href="#"
                  className="transition-colors hover:text-[#4D8B4F]"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/90
                      bg-white/55
                      text-[#6B2D1A]/60
                      shadow-[0_8px_22px_rgba(65,55,40,0.05)]
                      backdrop-blur-xl
                      transition-all
                      duration-400
                      hover:-translate-y-1
                      hover:bg-white/80
                      hover:text-[#4D8B4F]
                      hover:shadow-[0_14px_28px_rgba(77,139,79,0.10)]
                    "
                  >
                    <Icon
                      className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                );
              })}

              {/* Back to top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`
                  ml-2
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/90
                  bg-[#4D8B4F]
                  text-white
                  shadow-[0_10px_25px_rgba(77,139,79,0.18)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#427844]
                  ${
                    showTop
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-70"
                  }
                `}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ===================================================
            TRUST STRIP
        ==================================================== */}

        <Reveal delay={240}>
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              border-t
              border-[#6B2D1A]/[0.05]
              py-5
              text-center
            "
          >
            <ShieldCheck
              className="h-3.5 w-3.5 text-[#4D8B4F]"
              strokeWidth={1.8}
            />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#6B2D1A]/45
              "
            >
              Built around trust, clarity & measurable growth
            </span>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          LOCAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes footerFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(18px, -14px, 0) scale(1.05);
          }
        }

        @keyframes footerFloatReverse {
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
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
   ========================================================= */

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3
        className="
          text-[11px]
          font-black
          uppercase
          tracking-[0.18em]
          text-[#6B2D1A]
        "
      >
        {title}
      </h3>

      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(event) => {
                if (item.href?.startsWith("#")) {
                  event.preventDefault();

                  const targetId = item.href.slice(1);
                  const target = document.getElementById(targetId);

                  if (!target) return;

                  const navbarOffset = 82;

                  const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarOffset;

                  window.scrollTo({
                    top: Math.max(targetPosition, 0),
                    behavior: "smooth",
                  });
                }
              }}
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                gap-1.5
                text-[12px]
                font-bold
                text-[#69716B]
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#4D8B4F]
              "
            >
              <span>{item.label}</span>

              <ChevronRight
                className="
                  h-3
                  w-3
                  opacity-0
                  -translate-x-1
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </a>
          </li>
        ))}
      </ul>
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
        rootMargin: "0px 0px -40px 0px",
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
            : "translate-y-7 scale-[0.99] opacity-0 blur-[2px]"
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