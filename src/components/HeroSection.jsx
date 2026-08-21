import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Star,
    FileText,
    Gauge,
    UserCheck,
    CheckCircle2,
    BriefcaseBusiness,
    MapPin,
} from "lucide-react";

import Navbar from "./Navbar";

/* =========================================================
   CLIENT SUCCESS STORIES DATA
   ========================================================= */
const STORIES = [
    {
        id: 1,
        eyebrow: "CAREER SUCCESS",
        category: "Career Success Story",
        title: "Krishna Kumar Yedida",
        highlight: "QA Automation",
        description: "Successfully secured the position of QA Automation at L&T Technology Services, Hyderabad with an outstanding annual package of 18 LPA.",
        outcomes: [
            "Strengthened technical knowledge",
            "Improved problem-solving skills",
            "Enhanced interview preparation",
            "Built a clear career direction",
        ],
        clientName: "Krishna Kumar Yedida",
        clientRole: "QA Automation",
        position: "QA Automation",
        company: "L&T Technology Services",
        location: "Hyderabad",
        package: "18 LPA",
        achievementText: "Krishna Kumar Yedida has successfully secured the position of QA Automation at L&T Technology Services, Hyderabad with an outstanding annual package of 18 LPA. MSS Techno played a vital role in sharpening his technical knowledge, strengthening his problem-solving skills, and preparing him for interviews, helping him achieve this remarkable success.",
        profileImage: "/Hero-Reviews/P-krishnakumar.jpeg",
        whatsappImage: "/Hero-Reviews/W-krishnakumar.png",
        badges: [
            { type: "skills", title: "Technical Skills", value: "Strengthened" },
            { type: "problem", title: "Problem Solving", value: "Improved" },
            { type: "interview", title: "Interview Prep", value: "Enhanced" },
            { type: "career", title: "Career Direction", value: "Clear" },
        ],
    },
    {
        id: 2,
        eyebrow: "CAREER TRANSITION",
        category: "Career Success Story",
        title: "Ajay Kumar Raavi",
        highlight: "Azure DevOps Engineer",
        description: "Successfully secured the role of Azure DevOps Engineer at Wipro, Hyderabad with an impressive annual package of 15 LPA.",
        outcomes: [
            "Successfully transitioned career direction",
            "Enhanced professional profile",
            "Improved job search strategy",
            "Secured 3 job offers",
        ],
        clientName: "Ajay Kumar Raavi",
        clientRole: "Azure DevOps Engineer",
        position: "Azure DevOps Engineer",
        company: "Wipro",
        location: "Hyderabad",
        package: "15 LPA",
        achievementText: "Ajay Kumar Raavi successfully secured the role of Azure DevOps Engineer at Wipro, Hyderabad, with an impressive annual salary of 15 LPA. MSS Technologies played a pivotal role in shaping Ajay's successful career transition, enhancing his profile and guiding his job search. He successfully secured 3 offers.",
        profileImage: "/Hero-Reviews/P-ajay.png",
        whatsappImage: "/Hero-Reviews/W-ajay.png",
        badges: [
            { type: "transition", title: "Career Transition", value: "Guided" },
            { type: "profile", title: "Profile Enhancement", value: "Improved" },
            { type: "jobsearch", title: "Job Search", value: "Strategized" },
            { type: "offers", title: "Offers Secured", value: "3 Offers" },
        ],
    },
    {
        id: 3,
        eyebrow: "CAREER TRANSITION",
        category: "Career Success Story",
        title: "Hari Krishna Aldandi",
        highlight: "Java Developer",
        description: "Successfully secured the role of Java Developer at Digit Secure Private Limited, Hyderabad with an annual package of 4.5 LPA.",
        outcomes: [
            "Strengthened Java expertise",
            "Supported career transition",
            "Enhanced professional profile",
            "Guided job search strategy",
        ],
        clientName: "Hari Krishna Aldandi",
        clientRole: "Java Developer",
        position: "Java Developer",
        company: "Digit Secure Private Limited",
        location: "Hyderabad",
        package: "4.5 LPA",
        achievementText: "Hari Krishna Aldandi successfully secured the role of Java Developer at Digit Secure Private Limited, Hyderabad, with an annual salary of 4.5 LPA. MSS Technologies played a pivotal role in shaping his successful career transition, providing valuable assistance in enhancing his profile and guiding his job search.",
        profileImage: "/Hero-Reviews/P-harikrishna.png",
        whatsappImage: "/Hero-Reviews/W-harikrishna.png",
        badges: [
            { type: "expertise", title: "Java Expertise", value: "Strengthened" },
            { type: "transition", title: "Career Transition", value: "Supported" },
            { type: "profile", title: "Profile Enhancement", value: "Improved" },
            { type: "jobsearch", title: "Job Search", value: "Guided" },
        ],
    },
    {
        id: 4,
        eyebrow: "FAST CAREER SUCCESS",
        category: "Career Success Story",
        title: "Sohel Ayyub Bagwan",
        highlight: "ReactJS Developer",
        description: "Successfully secured the role of ReactJS Developer at TLG India Pvt. Ltd. in Pune with an impressive annual salary of 9.50 LPA.",
        outcomes: [
            "Supported a successful career transition",
            "Enhanced professional profile",
            "Guided focused job search",
            "Achieved transition in less than a month",
        ],
        clientName: "Sohel Ayyub Bagwan",
        clientRole: "ReactJS Developer",
        position: "ReactJS Developer",
        company: "TLG India Pvt. Ltd.",
        location: "Pune",
        package: "9.50 LPA",
        achievementText: "Sohel Ayyub Bagwan successfully secured the role of ReactJS Developer at TLG India Pvt. Ltd., a product-based company in Pune, his preferred location, with an impressive annual salary of 9.50 LPA. MSS Technologies played a pivotal role in shaping Sohel's successful career transition in less than a month, providing invaluable assistance in enhancing his profile and guiding his job search.",
        profileImage: "/Hero-Reviews/P-sohel.png",
        whatsappImage: "/Hero-Reviews/W-sohel.png",
        badges: [
            { type: "transition", title: "Career Transition", value: "Less Than 1 Month" },
            { type: "profile", title: "Profile Enhancement", value: "Improved" },
            { type: "jobsearch", title: "Job Search", value: "Guided" },
            { type: "location", title: "Preferred Location", value: "Pune" },
        ],
    },
];
/* =========================================================
   LEFT SECTION VARIANTS DATA
   ========================================================= */
const LEFT_VARIANTS = [
    {
        eyebrow: "CAREER SUPPORT",
        heading: <>100% Job Placement<br />Assistance For Your<br /><span className="text-[#4D8B4F]">IT Career.</span></>,
        description: "Get end-to-end career support designed to make you job-ready, strengthen your professional profile, prepare confidently for interviews, and connect with the right opportunities.",
        quote: "The right guidance can turn uncertainty into a clear path toward your next IT opportunity.",
        features: [
            { icon: BriefcaseBusiness, title: "100% Job Placement", subtitle: "Assistance" },
            { icon: FileText, title: "Resume & Profile", subtitle: "Building" },
            { icon: UserCheck, title: "Interview", subtitle: "Preparation" },
            { icon: CheckCircle2, title: "Job Search &", subtitle: "Opportunity Support" },
        ],
    },
    {
        eyebrow: "CAREER TRANSITION",
        heading: <>Turn Your Skills<br />Into The Right<br /><span className="text-[#4D8B4F]">Opportunity.</span></>,
        description: "Move confidently toward your next role with personalized guidance, stronger positioning, and focused support throughout your career transition.",
        quote: "A focused career plan helps your skills reach the opportunities where they matter most.",
        features: [
            { icon: UserCheck, title: "Personal Career", subtitle: "Guidance" },
            { icon: FileText, title: "Professional", subtitle: "Profile Support" },
            { icon: BriefcaseBusiness, title: "Career", subtitle: "Transition Support" },
            { icon: CheckCircle2, title: "Opportunity", subtitle: "Focused Search" },
        ],
    },
    {
        eyebrow: "INTERVIEW READINESS",
        heading: <>Prepare Better.<br />Interview With<br /><span className="text-[#4D8B4F]">Confidence.</span></>,
        description: "Build interview confidence through practical preparation, profile refinement, and guidance that helps you present your strengths clearly.",
        quote: "Confidence grows when preparation is focused, practical, and aligned with the role you want.",
        features: [
            { icon: UserCheck, title: "Mock Interview", subtitle: "Preparation" },
            { icon: CheckCircle2, title: "Interview", subtitle: "Confidence" },
            { icon: FileText, title: "Resume", subtitle: "Optimization" },
            { icon: BriefcaseBusiness, title: "Role-Based", subtitle: "Preparation" },
        ],
    },
    {
        eyebrow: "JOB SEARCH SUPPORT",
        heading: <>Find The Right<br />Role. Build A<br /><span className="text-[#4D8B4F]">Better Future.</span></>,
        description: "Get structured job-search support that keeps your profile, applications, preparation, and career direction aligned with your goals.",
        quote: "The right opportunity becomes easier to find when your profile and job search strategy work together.",
        features: [
            { icon: BriefcaseBusiness, title: "Focused Job", subtitle: "Search" },
            { icon: FileText, title: "Application", subtitle: "Strategy" },
            { icon: UserCheck, title: "Career", subtitle: "Guidance" },
            { icon: CheckCircle2, title: "Opportunity", subtitle: "Tracking" },
        ],
    },
];

/* =========================================================
   TRUST POINTS LIST
   ========================================================= */
const TRUST_POINTS = [
    "End-to-End Career Support",
    "Personalized Guidance",
    "Placement Assistance",
];

/* =========================================================
   HERO SECTION COMPONENT
   ========================================================= */
export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const timerRef = useRef(null);

    const activeStory = STORIES[activeIndex];

    /* =========================================================
       AUTO ROTATION EFFECT HANDLER
       ========================================================= */
    useEffect(() => {
        if (isPaused) return;

        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % STORIES.length);
        }, 6000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isPaused]);

    /* =========================================================
       STORY SELECTION HANDLER
       ========================================================= */
    const handleSelect = (index) => {
        setActiveIndex(index);

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        setIsPaused(true);

        setTimeout(() => {
            setIsPaused(false);
        }, 6000);
    };

    /* =========================================================
       NAVIGATION ARROW HANDLERS
       ========================================================= */
    const nextStory = () => {
        handleSelect((activeIndex + 1) % STORIES.length);
    };

    const prevStory = () => {
        handleSelect((activeIndex - 1 + STORIES.length) % STORIES.length);
    };

    /* =========================================================
       SMOOTH SCROLL HANDLER
       ========================================================= */
    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#F8F6F2] pt-[88px] text-[#263026]">

            {/* =========================================================
               BACKGROUND EFFECTS CONTAINER
               ========================================================= */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Base background layer */}
                <div className="absolute inset-0 bg-[#F8F6F2]" />

                {/* Radial color gradient layout */}
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 12% 18%, rgba(167,217,142,0.20), transparent 30%), radial-gradient(circle at 88% 12%, rgba(234,219,200,0.34), transparent 28%), radial-gradient(circle at 82% 82%, rgba(77,139,79,0.09), transparent 32%), radial-gradient(circle at 25% 85%, rgba(107,45,26,0.045), transparent 28%)` }} />

                {/* Animated left green ambient glow */}
                <motion.div className="absolute -left-[12%] -top-[18%] h-[650px] w-[650px] rounded-full" style={{ background: "radial-gradient(circle, rgba(167,217,142,0.28) 0%, rgba(167,217,142,0.10) 38%, transparent 72%)", filter: "blur(35px)" }} animate={{ x: [0, 55, 15, 0], y: [0, 35, 75, 0], scale: [1, 1.06, 0.98, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />

                {/* Animated right champagne ambient glow */}
                <motion.div className="absolute -right-[14%] top-[4%] h-[620px] w-[620px] rounded-full" style={{ background: "radial-gradient(circle, rgba(234,219,200,0.40) 0%, rgba(234,219,200,0.15) 40%, transparent 72%)", filter: "blur(40px)" }} animate={{ x: [0, -45, -15, 0], y: [0, 55, 20, 0], scale: [1, 0.96, 1.05, 1] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} />

                {/* Animated center core glow */}
                <motion.div className="absolute left-[42%] top-[32%] h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(77,139,79,0.08) 0%, rgba(167,217,142,0.045) 38%, transparent 70%)", filter: "blur(55px)" }} animate={{ x: [-30, 45, -20, -30], y: [20, -35, 50, 20], scale: [1, 1.08, 0.94, 1] }} transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }} />

                {/* Animated bottom ambient glow */}
                <motion.div className="absolute -bottom-[25%] left-[18%] h-[520px] w-[700px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(107,45,26,0.035) 0%, transparent 68%)", filter: "blur(50px)" }} animate={{ x: [0, 60, -25, 0], scale: [1, 1.04, 0.98, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />

                {/* Decorative left curve element */}
                <motion.div className="absolute -left-[12%] top-[18%] h-[420px] w-[620px] rounded-[50%] border border-[#4D8B4F]/[0.07]" animate={{ rotate: [-18, -13, -18], x: [0, 25, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

                {/* Decorative right curve element */}
                <motion.div className="absolute -right-[15%] top-[48%] h-[430px] w-[650px] rounded-[50%] border border-[#6B2D1A]/[0.045]" animate={{ rotate: [20, 15, 20], x: [0, -25, 0] }} transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }} />

                {/* Floating translucent background orb */}
                <motion.div className="absolute left-[48%] top-[16%] h-[90px] w-[90px] rounded-full border border-white/70 bg-white/20" animate={{ y: [0, -18, 0], x: [0, 12, 0], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

                {/* Background grid matrix pattern */}
                <div className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: `linear-gradient(rgba(107,45,26,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(107,45,26,0.055) 1px, transparent 1px)`, backgroundSize: "80px 80px", maskImage: "linear-gradient(to bottom, black 0%, transparent 82%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 82%)" }} />

                {/* Top smooth gradient overlay */}
                <div className="absolute left-0 right-0 top-0 h-[180px]" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.72), rgba(255,255,255,0))" }} />

                {/* Bottom smooth gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[160px]" style={{ background: "linear-gradient(to top, rgba(248,246,242,0.82), transparent)" }} />

            </div>

            {/* =========================================================
               NAVIGATION BAR COMPONENT WRAPPER
               ========================================================= */}
            <div className="relative z-[100]">
                <Navbar />
            </div>

            {/* =========================================================
               MAIN HERO SECTION CONTENT CONTAINER
               ========================================================= */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-[1600px] items-center px-6 py-8 sm:px-10 lg:px-12 xl:px-16">

                <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(580px,0.95fr)] lg:gap-5 xl:gap-8">

                    {/* =========================================================
                       LEFT CONTENT AREA WITH DYNAMIC ROTATION
                       ========================================================= */}
                    <AnimatePresence mode="wait">
                        <motion.div key={`left-content-${activeStory.id}`} initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 w-full max-w-[680px]">
                            {(() => {
                                const content = LEFT_VARIANTS[activeIndex];

                                return (
                                    <>
                                        {/* Dynamic Eyebrow Badge */}
                                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/95 px-3.5 py-1.5 shadow-[0_10px_25px_rgba(107,45,26,0.04)] backdrop-blur-xl">
                                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4D8B4F]/10">
                                                <Sparkles className="h-2.5 w-2.5 text-[#4D8B4F]" />
                                            </span>
                                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6B2D1A]">
                                                {content.eyebrow}
                                            </span>
                                        </motion.div>

                                        {/* Dynamic Main Heading */}
                                        <h1 className="mt-4 text-[40px] font-black leading-[0.95] tracking-[-0.06em] text-[#6B2D1A] sm:text-[50px] md:text-[58px] xl:text-[64px]">
                                            {content.heading}
                                        </h1>

                                        {/* Dynamic Descriptive Paragraph */}
                                        <p className="mt-4 max-w-[570px] text-[14px] font-medium leading-[1.65] text-[#263026]/85 sm:text-[15px]">
                                            {content.description}
                                        </p>

                                        {/* Dynamic Features List Row */}
                                        <div className="mt-6 w-full max-w-[650px] overflow-hidden">
                                            <div className="flex w-full items-center justify-between gap-3">
                                                {content.features.map((item, index) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <motion.div key={`${activeStory.id}-${item.title}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex min-w-0 flex-1 items-center gap-2">
                                                            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#4D8B4F]/20 bg-white/70 text-[#4D8B4F] shadow-[0_5px_15px_rgba(77,139,79,0.06)]">
                                                                <Icon className="h-[17px] w-[17px] stroke-[1.8]" />
                                                            </span>
                                                            <span className="min-w-0 text-[9px] font-extrabold leading-[1.2] text-[#6B2D1A] sm:text-[10px]">
                                                                {item.title} {item.subtitle}
                                                            </span>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Dynamic Inspirational Quote Box */}
                                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }} className="mt-5 max-w-[590px] rounded-[18px] border border-white/90 bg-white/60 px-5 py-3.5 shadow-[0_10px_28px_rgba(107,45,26,0.045)] backdrop-blur-xl">
                                            <div className="flex gap-3">
                                                <span className="text-[25px] font-black leading-none text-[#4D8B4F]">“</span>
                                                <p className="pt-1 text-[11px] font-bold leading-[1.5] text-[#263026]/80">
                                                    {content.quote}
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Action Buttons Row */}
                                        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                                            <button type="button" onClick={() => scrollToSection("contact")} className="group inline-flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white/80 bg-[#4D8B4F] px-6 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(77,139,79,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#438046]">
                                                Get Placement Assistance
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                                                    <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </button>

                                            <button type="button" onClick={() => scrollToSection("services")} className="group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/90 bg-white/95 px-6 text-[13px] font-bold text-[#6B2D1A] shadow-[0_8px_22px_rgba(107,45,26,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                                                Explore Our Support
                                                <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </AnimatePresence>

                    {/* =========================================================
                       RIGHT SUCCESS COMPOSITION AREA
                       ========================================================= */}
                    <motion.div initial={{ opacity: 0, x: 30, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[650px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

                        {/* Background atmospheric glow blur element */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A7D98E]/20 blur-[80px]" />

                        {/* Background atmospheric ring shape */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[48%] border border-[#4D8B4F]/10 bg-[#A7D98E]/[0.045]" />

                        {/* Main Canvas wrapper for card overlays */}
                        <div className="relative min-h-[610px] w-full">

                            {/* Pulsing ambient backdrop core */}
                            <motion.div className="pointer-events-none absolute left-1/2 top-1/2 h-[490px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A7D98E]/15 blur-[85px]" animate={{ scale: [1, 1.04, 1], opacity: [0.65, 0.95, 0.65] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

                            {/* Full active story composition block */}
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div key={`client-composition-${activeStory.id}`} initial={{ opacity: 0, x: 190, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -190, scale: 0.96 }} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">

                                    {/* Left floating outcome badges wrapper */}
                                    <motion.div className="absolute left-[-20px] top-[132px] z-30 w-[205px]" animate={{ y: [0, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                        <AnimatePresence mode="popLayout" initial={false}>
                                            {activeStory.badges.map((badge, index) => {
                                                const BADGE_ICONS = {
                                                    skills: Gauge,
                                                    problem: Sparkles,
                                                    interview: UserCheck,
                                                    career: BriefcaseBusiness,
                                                    transition: ArrowRight,
                                                    profile: FileText,
                                                    jobsearch: BriefcaseBusiness,
                                                    offers: CheckCircle2,
                                                    expertise: Gauge,
                                                    location: MapPin,
                                                };

                                                const Icon = BADGE_ICONS[badge.type] || UserCheck;

                                                return (
                                                    <motion.div key={`${activeStory.id}-${badge.type}`} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }} transition={{ delay: index * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }} className="relative mb-3 flex h-[78px] w-full items-center rounded-[22px] border border-white bg-white px-[12px] shadow-[0_14px_32px_rgba(107,45,26,0.11)]">
                                                        {/* Soft glass highlight overlay */}
                                                        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-r from-[#A7D98E]/10 via-transparent to-transparent" />

                                                        {/* Badge icon container */}
                                                        <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#4D8B4F]/35 bg-[#F8F6F2] text-[#4D8B4F]">
                                                            <Icon className="h-[22px] w-[22px] stroke-[1.8]" />
                                                        </div>

                                                        {/* Badge text description info */}
                                                        <div className="relative z-10 ml-[11px] min-w-0 flex-1">
                                                            <p className="text-[8px] font-black uppercase tracking-[0.10em] text-[#6B2D1A]/80">
                                                                {badge.title}
                                                            </p>
                                                            <p className={`mt-[5px] truncate font-black uppercase leading-none ${badge.type === "ats" ? "text-[18px] tracking-[-0.02em] text-[#4D8B4F]" : "text-[11px] tracking-[0.01em] text-[#263026]"}`}>
                                                                {badge.value}
                                                            </p>
                                                        </div>

                                                        {/* Verified checkmark badge icon */}
                                                        <div className="relative z-10 flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#4D8B4F] text-white">
                                                            <Check className="h-[11px] w-[11px] stroke-[3]" />
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </AnimatePresence>
                                    </motion.div>
                                    {/* Right WhatsApp chat proof card wrapper */}
                                    <motion.div className="absolute right-[-42px] top-[32px] z-20 w-[235px]" animate={{ y: [0, 5, 0], rotate: [1.4, 0.5, 1.4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                                        <div className="h-[500px] overflow-hidden rounded-[30px] border-[3px] border-white bg-white p-1.5 shadow-[0_30px_70px_rgba(107,45,26,0.15)]">
                                            <div className="h-full overflow-hidden rounded-[22px] bg-[#F8F6F2]">
                                                <img src={activeStory.whatsappImage} alt={`${activeStory.clientName} WhatsApp conversation`} loading="eager" decoding="async" className="h-full w-full object-cover object-top" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Center main success profile highlight card */}
                                    <motion.div className="absolute left-1/2 top-[32px] z-50 w-[300px] -translate-x-1/2" animate={{ y: [0, -5, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}>
                                        <div className="relative flex h-[500px] flex-col overflow-hidden rounded-[32px] border-[3px] border-white bg-white/97 px-4 pb-4 pt-3 shadow-[0_35px_85px_rgba(77,139,79,0.17),0_20px_45px_rgba(107,45,26,0.10)] backdrop-blur-2xl">

                                            {/* Decorative green top-left corner */}
                                            <div className="absolute left-0 top-0 h-[72px] w-[72px] rounded-br-[72px] bg-[#4D8B4F]" />

                                            {/* Decorative brown bottom-right corner */}
                                            <div className="absolute bottom-0 right-0 h-[60px] w-[72px] rounded-tl-[60px] bg-[#6B2D1A]" />

                                            {/* Top soft light reflection */}
                                            <div className="pointer-events-none absolute inset-x-0 top-0 h-[115px] bg-gradient-to-b from-white via-white/70 to-transparent" />

                                            {/* MSS Techno company logo badge */}
                                            <div className="absolute right-[14px] top-[12px] z-30 flex h-[53px] w-[53px] items-center justify-center rounded-full border-[1.5px] border-[#4D8B4F] bg-white shadow-[0_8px_20px_rgba(77,139,79,0.12)]">
                                                <img src="/logo.png" alt="MSS Techno" className="h-[42px] w-[42px] object-contain" />
                                            </div>

                                            {/* Client avatar image block */}
                                            <div className="relative z-10 mx-auto mt-[2px] flex h-[102px] w-[102px] shrink-0 items-center justify-center rounded-full border-[5px] border-[#A7D98E]/45 bg-[#F8F6F2]">
                                                <div className="h-[88px] w-[88px] overflow-hidden rounded-full">
                                                    <img src={activeStory.profileImage} alt={`${activeStory.clientName} profile`} className="h-full w-full object-cover object-center" loading="eager" decoding="async" />
                                                </div>
                                                <span className="absolute bottom-[-2px] right-[-2px] flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-white bg-[#4D8B4F] text-white shadow-md">
                                                    <Check className="h-[12px] w-[12px]" />
                                                </span>
                                            </div>

                                            {/* Five star rating feedback visual */}
                                            <div className="relative z-10 mt-[5px] flex shrink-0 justify-center gap-[3px]">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} className="h-[14px] w-[14px] fill-[#4D8B4F] text-[#4D8B4F]" />
                                                ))}
                                            </div>

                                            {/* Success story title and metadata header */}
                                            <div className="relative z-10 mt-[3px] shrink-0 text-center">
                                                <div className="flex items-center justify-center gap-2.5">
                                                    <span className="h-px w-[27px] bg-[#6B2D1A]/25" />
                                                    <p className="text-[8px] font-black uppercase tracking-[0.04em] text-[#6B2D1A]">
                                                        Career Success Story
                                                    </p>
                                                    <span className="h-px w-[27px] bg-[#6B2D1A]/25" />
                                                </div>
                                                <p className="mt-[2px] text-[20px] font-black leading-none tracking-[-0.04em] text-[#4D8B4F]">
                                                    {activeStory.clientName}
                                                </p>
                                                <p className="mt-[3px] text-[6.5px] font-black uppercase tracking-[0.13em] text-[#6B2D1A]">
                                                    {activeStory.clientRole}
                                                </p>
                                            </div>

                                            {/* Divider line element */}
                                            <div className="relative z-10 my-[7px] h-px shrink-0 bg-[#6B2D1A]/10" />

                                            {/* Position designation row info */}
                                            <div className="relative z-10 flex min-h-[42px] shrink-0 items-center gap-[9px] border-b border-[#6B2D1A]/10 pb-[5px]">
                                                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#6B2D1A] text-white">
                                                    <BriefcaseBusiness className="h-[13px] w-[13px]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[5.5px] font-bold uppercase tracking-[0.07em] text-[#6B2D1A]/65">
                                                        Position
                                                    </p>
                                                    <p className="mt-[2px] truncate text-[8.5px] font-black leading-tight text-[#263026]">
                                                        {activeStory.position}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Employing company information row */}
                                            <div className="relative z-10 flex min-h-[42px] shrink-0 items-center gap-[9px] border-b border-[#6B2D1A]/10 pb-[5px] pt-[5px]">
                                                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#4D8B4F] text-white">
                                                    <BriefcaseBusiness className="h-[13px] w-[13px]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[5.5px] font-bold uppercase tracking-[0.07em] text-[#4D8B4F]">
                                                        Company
                                                    </p>
                                                    <p className="mt-[2px] truncate text-[8.5px] font-black leading-tight text-[#263026]">
                                                        {activeStory.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Job placement location info row */}
                                            <div className="relative z-10 flex min-h-[42px] shrink-0 items-center gap-[9px] border-b border-[#6B2D1A]/10 pb-[5px] pt-[5px]">
                                                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#6B2D1A] text-white">
                                                    <MapPin className="h-[13px] w-[13px]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[5.5px] font-bold uppercase tracking-[0.07em] text-[#6B2D1A]/65">
                                                        Location
                                                    </p>
                                                    <p className="mt-[2px] text-[8.5px] font-black leading-tight text-[#263026]">
                                                        {activeStory.location}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Secured annual package salary info row */}
                                            <div className="relative z-10 flex min-h-[42px] shrink-0 items-center gap-[9px] pb-[4px] pt-[5px]">
                                                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#4D8B4F] text-white">
                                                    <span className="text-[12px] font-black">₹</span>
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[5.5px] font-bold uppercase tracking-[0.07em] text-[#4D8B4F]">
                                                        Annual Package
                                                    </p>
                                                    <p className="mt-[2px] text-[8.5px] font-black leading-tight text-[#263026]">
                                                        {activeStory.package}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Achievement text quote container */}
                                            <div className="relative z-10 mt-[7px] shrink-0 rounded-[14px] bg-[#F8F6F2] px-[10px] py-[8px]">
                                                <span className="absolute left-[6px] top-[-1px] text-[19px] font-black leading-none text-[#4D8B4F]">“</span>
                                                <p className="px-[12px] text-center text-[6.7px] font-bold leading-[1.4] text-[#263026]">
                                                    {activeStory.achievementText}
                                                </p>
                                                <span className="absolute bottom-[-2px] right-[6px] text-[19px] font-black leading-none text-[#4D8B4F]">”</span>
                                            </div>

                                            {/* Verified success status footer banner */}
                                            <div className="relative z-10 mt-[7px] flex shrink-0 items-center justify-between rounded-[9px] bg-[#6B2D1A] px-[9px] py-[6px] text-white">
                                                <div className="flex min-w-0 items-center gap-[5px]">
                                                    <CheckCircle2 className="h-[10px] w-[10px] shrink-0 text-[#A7D98E]" />
                                                    <span className="truncate text-[5.5px] font-black uppercase tracking-[0.06em]">
                                                        Verified Success
                                                    </span>
                                                </div>
                                                <span className="ml-2 shrink-0 text-[5px] font-black uppercase tracking-[0.04em] text-[#A7D98E]">
                                                    {activeStory.category}
                                                </span>
                                            </div>

                                            {/* Bottom micro label line */}
                                            <div className="relative z-10 mt-auto flex items-center justify-center gap-1.5 pt-[7px]">
                                                <span className="h-[4px] w-[4px] rounded-full bg-[#A7D98E]" />
                                                <span className="text-[5.5px] font-bold uppercase tracking-[0.08em] text-[#4D8B4F]">
                                                    Career outcome verified
                                                </span>
                                                <span className="h-[4px] w-[4px] rounded-full bg-[#A7D98E]" />
                                            </div>

                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* =========================================================
               PAGE-CENTERED STORY NAVIGATION BAR
               ========================================================= */}
            <div className="absolute bottom-[22px] left-1/2 z-[120] flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/90 bg-white/92 px-4 py-2.5 shadow-[0_14px_35px_rgba(107,45,26,0.10)] backdrop-blur-2xl">
                <button type="button" onClick={prevStory} aria-label="Previous client story" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#6B2D1A]/10 bg-white text-[#6B2D1A] shadow-sm transition-all duration-300 hover:-translate-x-1 hover:bg-[#F8F6F2]">
                    <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-2">
                    {STORIES.map((story, index) => (
                        <button key={story.id} type="button" onClick={() => handleSelect(index)} aria-label={`Go to client story ${index + 1}`} className={`cursor-pointer rounded-full transition-all duration-300 ${activeIndex === index ? "h-2 w-7 bg-[#4D8B4F]" : "h-2 w-2 bg-[#6B2D1A]/20 hover:bg-[#6B2D1A]/40"}`} />
                    ))}
                </div>

                <div className="min-w-[48px] text-center">
                    <p className="text-[6px] font-extrabold uppercase tracking-widest text-[#263026]/45">
                        Client Story
                    </p>
                    <p className="mt-0.5 text-[9px] font-black text-[#6B2D1A]">
                        {String(activeIndex + 1).padStart(2, "0")} / {String(STORIES.length).padStart(2, "0")}
                    </p>
                </div>

                <button type="button" onClick={nextStory} aria-label="Next client story" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#4D8B4F] text-white shadow-[0_7px_18px_rgba(77,139,79,0.22)] transition-all duration-300 hover:translate-x-1 hover:bg-[#438046]">
                    <ChevronRight className="h-3.5 w-3.5" />
                </button>
            </div>

            {/* BOTTOM SECTION ACCENT BORDER LINE */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4D8B4F]/20 to-transparent" />

        </section>
    );
}