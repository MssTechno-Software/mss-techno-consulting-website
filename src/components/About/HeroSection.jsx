import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";


const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Career Direction",
    text: "Understand your strengths, goals, and the right career path.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Resume & LinkedIn",
    text: "Build a stronger resume and professional LinkedIn presence.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Interview Preparation",
    text: "Prepare with practical guidance, mock interviews, and feedback.",
    icon: Target,
  },
  {
    number: "04",
    title: "Job Search Support",
    text: "Approach your job search with clarity, confidence, and strategy.",
    icon: Award,
  },
];

const TRUST_POINTS = [
  "Personalized career guidance",
  "ATS-focused resume strategy",
  "Practical interview preparation",
];

export default function AboutHeroSection() {
  return (
    <>
      <section
        id="about-hero"
        aria-labelledby="about-hero-heading"
        className="relative isolate min-h-[760px] overflow-hidden bg-[#F8F6F2] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-[820px] lg:pt-36 lg:pb-28"
      >
        {/* =====================================================
            CLEAN MSS TECHNO BACKGROUND
            No Aurora
            No Prism
            No dots
            No blue / purple
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Soft MSS green atmosphere */}
          <div
            className="absolute -left-[220px] top-[8%] h-[520px] w-[520px] rounded-full bg-[#A7D98E]/20 blur-[140px] animate-[aboutGlow_13s_ease-in-out_infinite]"
          />

          {/* Soft champagne atmosphere */}
          <div
            className="absolute -right-[220px] top-[18%] h-[560px] w-[560px] rounded-full bg-[#EADBC8]/25 blur-[150px] animate-[aboutGlowReverse_16s_ease-in-out_infinite]"
          />

          {/* Very subtle brown atmosphere */}
          <div
            className="absolute bottom-[-280px] left-1/2 h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-[#6B2D1A]/[0.035] blur-[150px]"
          />

          {/* Clean central light */}
          <div
            className="absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/65 blur-[160px]"
          />

          {/* Very subtle horizontal light */}
          <div
            className="absolute left-[8%] right-[8%] top-[52%] h-px bg-gradient-to-r from-transparent via-[#4D8B4F]/10 to-transparent"
          />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16"
          >
            {/* =================================================
                LEFT — HERO CONTENT
            ================================================= */}

            <Reveal>
              <div className="max-w-3xl">
                {/* Eyebrow */}

                <div
                  className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/70 px-4 py-2 shadow-[0_10px_30px_rgba(77,139,79,0.08)] backdrop-blur-2xl"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F3E5] text-[#4D8B4F]"
                  >
                    <Sparkles className="h-3 w-3" />
                  </span>

                  <span
                    className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6B2D1A]/75"
                  >
                    About MSS Techno
                  </span>
                </div>

                {/* =================================================
                    SEO / AEO H1
                ================================================= */}

                <h1
                  id="about-hero-heading"
                  className="mt-7 max-w-4xl text-[46px] font-black leading-[0.98] tracking-[-0.055em] text-[#6B2D1A] sm:text-[58px] lg:text-[68px] xl:text-[76px]"
                >
                  About MSS Techno:
                  <br />

                  <span className="text-[#4D8B4F]">
                    Career Consulting
                  </span>

                  <br />

                  With Purpose.
                </h1>

                {/* =================================================
                    AEO SUPPORTING HEADING
                ================================================= */}

                <div
                  className="mt-7 flex items-start gap-3"
                >

                  <h2
                    className="max-w-2xl text-[18px] font-black leading-7 tracking-[-0.018em] text-[#4D8B4F] sm:text-[21px] sm:leading-8"
                  >
                    Practical career guidance for students,
                    graduates, and professionals.
                  </h2>
                </div>

                {/* =================================================
                    AEO DIRECT ANSWER
                ================================================= */}

                <p
                  className="mt-6 max-w-2xl text-[15px] font-semibold leading-7 text-[#555C57] sm:text-[16px] sm:leading-8"
                >
                  MSS Techno helps job seekers build stronger resumes,
                  optimize LinkedIn profiles, prepare for interviews,
                  understand suitable IT career paths, and approach their
                  job search with greater clarity and confidence.
                </p>

                {/* =================================================
                    GEO CONTEXT
                ================================================= */}

                <p
                  className="mt-3 max-w-2xl text-[12px] font-bold leading-6 text-[#6B2D1A]/65 sm:text-[13px]"
                >
                  Career-focused consulting for professionals and job seekers
                  across India, with practical support for today’s competitive
                  technology job market.
                </p>
                {/* =================================================
                    CTA BUTTONS
                ================================================= */}

                <div
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                >
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                    }
                    className="group inline-flex items-center  cursor-pointer justify-center gap-3 rounded-full bg-[#4D8B4F] px-6 py-3.5 text-[13px] font-black text-white shadow-[0_14px_34px_rgba(77,139,79,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#437A45] hover:shadow-[0_20px_45px_rgba(77,139,79,0.28)] active:scale-95"
                  >
                    Talk to a Consultant

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.setItem("mss-scroll-target", "services");
                      window.location.href = "/";
                    }}
                    className="inline-flex items-center   cursor-pointer justify-center gap-2 rounded-full border border-white bg-white/70 px-6 py-3.5 text-[13px] font-black text-[#6B2D1A] shadow-[0_10px_28px_rgba(65,55,40,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(107,45,26,0.10)]"
                  >
                    Explore Our Services

                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                RIGHT — CAREER FRAMEWORK
            ================================================= */}

            <Reveal
              delay={180}
              className="relative mx-auto w-full max-w-[570px]"
            >
              <div className="relative">
                {/* Background glow */}

                <div
                  className="pointer-events-none absolute -inset-10 rounded-[50px] bg-gradient-to-br from-[#A7D98E]/20 via-transparent to-[#EADBC8]/30 blur-3xl"
                />

                {/* Main glass card */}

                <div
                  className="group relative overflow-hidden rounded-[34px] border border-white/90 bg-white/62 p-6 shadow-[0_30px_90px_rgba(65,55,40,0.10)] backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(77,139,79,0.14)] sm:p-8"
                >
                  {/* Glass reflection */}

                  <div
                    className="pointer-events-none absolute -left-[35%] top-[-40%] h-[180%] w-[35%] rotate-[22deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 blur-xl transition-all duration-[1400ms] group-hover:left-[120%] group-hover:opacity-100"
                  />

                  {/* Card header */}

                  <div
                    className="relative flex items-start justify-between gap-5"
                  >
                    <div>
                      <p
                        className="text-[9px] font-black uppercase tracking-[0.22em] text-[#4D8B4F]"
                      >
                        Our Approach
                      </p>

                      <h2
                        className="mt-2 text-[25px] font-black leading-tight tracking-[-0.04em] text-[#2F332F] sm:text-[29px]"
                      >
                        From Career
                        <br />
                        Direction to Opportunity
                      </h2>
                    </div>

                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white bg-[#E8F3E5] text-[#4D8B4F] shadow-[0_10px_25px_rgba(77,139,79,0.10)]"
                    >
                      <UsersRound
                        className="h-5 w-5"
                        strokeWidth={1.9}
                      />
                    </div>
                  </div>

                  {/* Journey */}

                  <div className="relative mt-7">
                    {/* Connecting line */}

                    <div
                      className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#4D8B4F]/35 via-[#6B2D1A]/15 to-transparent"
                    />

                    <div className="relative space-y-3">
                      {JOURNEY_STEPS.map((step, index) => {
                        const Icon = step.icon;

                        return (
                          <Reveal
                            key={step.number}
                            delay={300 + index * 90}
                          >
                            <div
                              className="group/step relative flex items-center gap-4 rounded-[20px] border border-white/80 bg-white/50 p-3 transition-all duration-500 hover:-translate-x-1 hover:bg-white/80 hover:shadow-[0_14px_35px_rgba(77,139,79,0.08)]"
                            >
                              {/* Icon */}

                              <div
                                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white bg-[#F8F6F2] text-[#4D8B4F] shadow-[0_6px_18px_rgba(65,55,40,0.07)] transition-all duration-500 group-hover/step:scale-105 group-hover/step:bg-[#E8F3E5]"
                              >
                                <Icon
                                  className="h-4 w-4"
                                  strokeWidth={2}
                                />
                              </div>

                              {/* Content */}

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <span
                                    className="text-[9px] font-black tracking-[0.14em] text-[#6B2D1A]/45"
                                  >
                                    {step.number}
                                  </span>

                                  <h3
                                    className="text-[13px] font-black tracking-[-0.015em] text-[#30342F]"
                                  >
                                    {step.title}
                                  </h3>
                                </div>

                                <p
                                  className="mt-1 max-w-[360px] text-[10px] font-semibold leading-5 text-[#656C67]"
                                >
                                  {step.text}
                                </p>
                              </div>
                            </div>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>

                  {/* Metrics */}

                  <div
                    className="relative mt-6 grid grid-cols-3 gap-2"
                  >
                    <Metric
                      value="2500+"
                      label="Professionals Guided"
                    />

                    <Metric
                      value="15+"
                      label="Years Experience"
                    />

                    <Metric
                      value="95%"
                      label="Client Satisfaction"
                    />
                  </div>
                </div>            
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEO / AEO STRUCTURED DATA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About MSS Techno",
            headline:
              "About MSS Techno: Career Consulting & Professional Growth",
            description:
              "Learn about MSS Techno and our career consulting approach for students, graduates, professionals, and job seekers seeking resume building, LinkedIn optimization, interview preparation, career guidance, and job-search support.",
            mainEntity: {
              "@type": "Organization",
              name: "MSS Techno",
              description:
                "Career consulting and professional development services focused on resume building, LinkedIn optimization, interview preparation, career guidance, and job-search support.",
              areaServed: "India",
              knowsAbout: [
                "Career Consulting",
                "Career Guidance",
                "Resume Building",
                "ATS Resume Optimization",
                "LinkedIn Profile Optimization",
                "Interview Preparation",
                "IT Career Guidance",
                "Job Search Support",
              ],
            },
          }),
        }}
      />

      {/* =========================================================
          LOCAL ANIMATIONS
      ========================================================= */}

      <style>{`
        @keyframes aboutGlow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(22px, -18px, 0) scale(1.06);
          }
        }

        @keyframes aboutGlowReverse {
          0%, 100% {
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
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({ value, label }) {
  return (
    <div
      className="rounded-[17px] border border-white/90 bg-[#F8F6F2]/70 px-2 py-3 text-center"
    >
      <div
        className="text-[18px] font-black leading-none tracking-[-0.04em] text-[#4D8B4F]"
      >
        {value}
      </div>

      <div
        className="mt-1.5 text-[7px] font-black uppercase tracking-[0.13em] text-[#6B2D1A]/55"
      >
        {label}
      </div>
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
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-8 scale-[0.985] opacity-0 blur-[3px]" } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}