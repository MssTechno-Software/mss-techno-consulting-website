import React, { useEffect, useRef, useState } from "react";
import {
    Video,
    Clock3,
    TrendingUp,
    Monitor,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import mentoringImage from "../assets/mentoring.png";

/* =========================================================
   MSS TECHNO — PREMIUM CAREER MENTORING
   Editorial Glass / Liquid Glass
   ========================================================= */

const MENTORING_POINTS = [
    {
        title: "Completely Remote",
        description:
            "Access expert mentoring from anywhere in the world, making your professional journey easier to manage.",
        icon: Monitor,
        accent: "green",
    },
    {
        title: "Live 1-on-1 Sessions",
        description:
            "Engage in high-impact, real-time discussions designed to address your specific career challenges.",
        icon: Video,
        accent: "brown",
    },
    {
        title: "Flexible Schedule",
        description:
            "Learn and grow at your own pace with a mentoring cadence that perfectly aligns with your busy lifestyle.",
        icon: Clock3,
        accent: "champagne",
    },
    {
        title: "Growth Focused",
        description:
            "Every session is optimized with actionable insights to accelerate your path to leadership and mastery.",
        icon: TrendingUp,
        accent: "green",
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

export default function PremiumMentoring() {
    return (
        <section id="mentoring" className="relative isolate overflow-hidden bg-[#F8F6F2] py-20 sm:py-24 lg:py-28">
            {/* =====================================================
                AMBIENT BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full bg-[#A7D98E]/16 blur-[150px] animate-[mentorFloat_14s_ease-in-out_infinite]"
                />

                <div
                    className="absolute -right-48 top-[25%] h-[560px] w-[560px] rounded-full bg-[#EADBC8]/22 blur-[160px] animate-[mentorFloatReverse_17s_ease-in-out_infinite]"
                />

                <div
                    className="absolute bottom-[-280px] left-1/2 h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-[#6B2D1A]/[0.035] blur-[160px]"
                />

                <div
                    className="absolute left-1/2 top-[42%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-[150px]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* =================================================
                    CENTERED SECTION HEADER
                ================================================== */}

                <Reveal className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/90 bg-white/65 px-4 py-2 shadow-[0_12px_35px_rgba(65,55,40,0.07)] backdrop-blur-2xl">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#4D8B4F]/15 bg-[#E8F3E5] text-[#4D8B4F]">
                            <Sparkles className="h-3 w-3" />
                        </span>

                        <span className="text-[9px] font-black uppercase tracking-[0.23em] text-[#6B2D1A]/70">
                            Premium Mentoring
                        </span>
                    </div>

                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-[#4D8B4F]">
                        Personalized Career Guidance
                    </p>

                    <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#6B2D1A] sm:text-5xl lg:text-[60px]">
                        Elevate Your Career With
                        <span className="block text-[#4D8B4F]">
                            Expert Mentoring
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-[14px] font-semibold leading-7 text-[#59615B] sm:text-[15px]">
                        From personalized career direction to practical professional
                        guidance, get the clarity, confidence, and strategy needed
                        to move forward.
                    </p>
                </Reveal>

                {/* =================================================
                    MAIN EDITORIAL LAYOUT
                ================================================== */}

                <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
                    {/* =================================================
                        IMAGE
                    ================================================== */}

                    <Reveal className="relative" delay={120}>
                        <div
                            className="group relative mx-auto max-w-[560px] overflow-hidden rounded-[34px] border border-white/90 bg-white/45 p-2 shadow-[0_28px_80px_rgba(65,55,40,0.11)] backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_38px_100px_rgba(77,139,79,0.16)]"
                        >
                            <div className="relative aspect-[0.92/1] overflow-hidden rounded-[27px] bg-[#E8F3E5]">
                                <img
                                    src={mentoringImage}
                                    alt="Career mentoring and professional guidance session"
                                    loading="lazy"
                                    className="relative z-10 h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                                />

                                <div
                                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#2E302D]/15 via-transparent to-white/15"
                                />

                                <div
                                    className="pointer-events-none absolute -inset-y-full -left-1/2 z-30 w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-xl transition-all duration-[1200ms] group-hover:left-[125%] group-hover:opacity-100"
                                />
                            </div>

                            <div
                                className="absolute bottom-6 left-6 z-40 flex items-center gap-2.5 rounded-full border border-white/90 bg-white/70 px-3.5 py-2.5 shadow-[0_14px_35px_rgba(65,55,40,0.12)] backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-1"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D8B4F] text-white shadow-[0_8px_20px_rgba(77,139,79,0.22)]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                </span>

                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#6B2D1A]/60">
                                        MSS Techno
                                    </p>

                                    <p className="mt-0.5 text-[11px] font-black text-[#2E302D]">
                                        Career Mentoring
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================== */}

                    <div className="relative">
                        <Reveal delay={180}>
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#4D8B4F]">
                                Practical Professional Support
                            </p>

                            <p className="mt-4 max-w-2xl text-[14px] font-semibold leading-7 text-[#59615B] sm:text-[15px]">
                                Get practical strategies, focused feedback, and structured mentoring designed around your goals, experience, and professional direction.
                            </p>
                        </Reveal>

                        {/* =================================================
                            MENTORING CARDS
                        ================================================== */}

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {MENTORING_POINTS.map((item, index) => (
                                <Reveal key={item.title} delay={260 + index * 90}>
                                    <MentoringCard item={item} />
                                </Reveal>
                            ))}
                        </div>

                        {/* =================================================
                            CTA
                        ================================================== */}

                        <Reveal delay={620} className="mt-8">
                            <button
                                type="button"
                                onClick={scrollToContact}
                                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white/90 bg-white/70 px-6 py-3 text-[12px] font-black text-[#4D8B4F] shadow-[0_14px_35px_rgba(65,55,40,0.08)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/90 hover:text-[#6B2D1A] hover:shadow-[0_22px_50px_rgba(77,139,79,0.14)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D8B4F]/30 focus-visible:ring-offset-2"
                            >
                                Schedule a Free Consultation

                                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                            </button>
                        </Reveal>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes mentorFloat {
                    0%, 100% {
                        transform: translate3d(0, 0, 0) scale(1);
                    }

                    50% {
                        transform: translate3d(20px, -16px, 0) scale(1.06);
                    }
                }

                @keyframes mentorFloatReverse {
                    0%, 100% {
                        transform: translate3d(0, 0, 0) scale(1.02);
                    }

                    50% {
                        transform: translate3d(-18px, 16px, 0) scale(1);
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
        </section>
    );
}

/* =========================================================
   MENTORING CARD
   ========================================================= */

function MentoringCard({ item }) {
    const Icon = item.icon;

    const accent =
        item.accent === "brown"
            ? {
                iconBg: "bg-[#F3E6DC]",
                iconText: "text-[#6B2D1A]",
                glow: "hover:shadow-[0_25px_65px_rgba(107,45,26,0.13)]",
                orb: "bg-[#EADBC8]/45",
            }
            : item.accent === "champagne"
                ? {
                    iconBg: "bg-[#F2E7D9]",
                    iconText: "text-[#8A674D]",
                    glow: "hover:shadow-[0_25px_65px_rgba(138,103,77,0.13)]",
                    orb: "bg-[#EADBC8]/55",
                }
                : {
                    iconBg: "bg-[#E8F3E5]",
                    iconText: "text-[#4D8B4F]",
                    glow: "hover:shadow-[0_25px_65px_rgba(77,139,79,0.14)]",
                    orb: "bg-[#A7D98E]/25",
                };

    return (
        <article
            className={`group relative min-h-[185px] overflow-hidden rounded-[25px] border border-white/90 bg-white/55 p-5 shadow-[0_15px_45px_rgba(65,55,40,0.055)] backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-white/80 ${accent.glow}`}
        >
            {/* =================================================
                HOVER ORB
            ================================================== */}

            <div
                className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${accent.orb} blur-3xl transition-transform duration-1000 group-hover:scale-[1.7]`}
            />

            {/* =================================================
                TOP GLASS EDGE
            ================================================== */}

            <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
            />

            {/* =================================================
                ICON
            ================================================== */}

            <div
                className={`relative flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/90 ${accent.iconBg} ${accent.iconText} shadow-[0_9px_24px_rgba(65,55,40,0.07)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-rotate-3`}
            >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />

                <span
                    className="pointer-events-none absolute inset-[-4px] rounded-[17px] border border-white/70 opacity-0 transition-all duration-500 group-hover:inset-[-7px] group-hover:opacity-100"
                />
            </div>

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="relative mt-5">
                <h4 className="text-[16px] font-black leading-tight tracking-[-0.025em] text-[#2E302D] transition-colors duration-300 group-hover:text-[#6B2D1A]">
                    {item.title}
                </h4>

                <p className="mt-2.5 text-[11px] font-semibold leading-5 text-[#69716B]">
                    {item.description}
                </p>
            </div>

            {/* =================================================
                GLASS LIGHT SWEEP
            ================================================== */}

            <div
                className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/4 rotate-[16deg] bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-xl transition-all duration-[1200ms] group-hover:left-[125%] group-hover:opacity-100"
            />
        </article>
    );
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function Reveal({ children, className = "", delay = 0 }) {
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
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-8 scale-[0.985] opacity-0 blur-[3px]"} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}