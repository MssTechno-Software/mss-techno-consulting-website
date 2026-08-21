import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

/* MSS TECHNO — REVIEWS / REAL RESULTS */

const REVIEW_MEDIA = [
   {
    type: "video",
    src: "/review-img-vedios/vedio-1.mp4",
  },
  {
    type: "video",
    src: "/review-img-vedios/vedio-2.mp4",
  },
  {
    type: "image",
    src: "/review-img-vedios/krishna-review-1.png",
  },
  {
    type: "image",
    src: "/Hero-Reviews/W-krishnakumar.png",
  },
  {
    type: "image",
    src: "/review-img-vedios/harikrishna-review-2.png",
  },
  {
    type: "image",
    src: "/Hero-Reviews/W-harikrishna.png",
  },
  {
    type: "image",
    src: "/review-img-vedios/ajay-review-3.png",
  },
  {
    type: "image",
    src: "/Hero-Reviews/W-ajay.png",
  },
  {
    type: "image",
    src: "/review-img-vedios/sohel-review-4.png",
  },
  {
    type: "image",
    src: "/Hero-Reviews/W-sohel.png",
  },
 
];
/* =========================================================\n   MAIN REVIEWS SECTION\n   ========================================================= */

export default function Reviews() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const marqueeX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (paused || !marqueeRef.current) return;

    const loopWidth = marqueeRef.current.scrollWidth / 2;
    if (!loopWidth) return;

    const speed = 0.055;
    const current = marqueeX.get();
    const next = current - delta * speed;

    marqueeX.set(next <= -loopWidth ? next + loopWidth : next);
  });

  /*
     SCROLL REVEA*/

  useEffect(() => {
    const element = sectionRef.current;

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
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedMedia]);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative isolate w-full overflow-hidden bg-[#F8F6F2] py-24 sm:py-28 lg:py-32"
    >
      {/* AMBIENT MSS TECHNO BACKGROUND*/}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Green atmosphere */}
        <motion.div animate={{ x: [0, 22, 0], y: [0, -16, 0], scale: [1, 1.06, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full bg-[#A7D98E]/16 blur-[150px]" />
        {/* Champagne atmosphere */}

        <motion.div animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-48 top-[22%] h-[560px] w-[560px] rounded-full bg-[#EADBC8]/22 blur-[155px]" />

        {/* Brown atmosphere */}

        <div
          className="absolute bottom-[-260px] left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[#6B2D1A]/[0.035] blur-[160px]"
        />

        {/* Soft white center */}

        <div
          className="absolute left-1/2 top-1/2 h-[760px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[150px]"
        />

        {/* Clean ivory wash */}

        <div
          className="absolute inset-0 bg-[radial-gradient( ellipse_at_center, rgba(255,255,255,0.72)_0%, rgba(248,246,242,0.24)_52%, rgba(248,246,242,0.78)_100% )]"
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0" }`}
      >
        {/* Badge */}

        <div
          className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/75 px-4 py-2 shadow-[0_12px_32px_rgba(65,55,40,0.08)] backdrop-blur-2xl"
        >
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full border border-[#4D8B4F]/20 bg-[#E8F3E5]"
          >
            <Sparkles
              className="h-3 w-3 text-[#4D8B4F]"
              strokeWidth={2.2}
            />
          </span>

          <span
            className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6B2D1A]/80"
          >
            Real Career Results
          </span>
        </div>

        {/* Heading */}

        <h2
          className="mt-6 text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#6B2D1A] sm:text-5xl lg:text-[60px]"
        >
          Results That{" "}
          <span className="text-[#4D8B4F]">
            Speak For Themselves
          </span>
        </h2>

        {/* Description */}

        <p
          className="mx-auto mt-5 max-w-2xl text-[14px] font-semibold leading-7 text-[#4F5751] sm:text-[16px]"
        >
          Real responses, interview opportunities, and career
          milestones shared by professionals we've helped move
          forward.
        </p>

        {/* Pause hint */}

        <div
          className="mt-5 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#4D8B4F]/75"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#4D8B4F] shadow-[0_0_12px_rgba(77,139,79,0.45)]"
          />

          Hover over a result to pause
        </div>
      </div>

      {/* =====================================================
          REVIEW IMAGE MARQUEE
      ====================================================== */}

      <div
        className={`relative mt-14 w-full transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0" }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/90 to-transparent sm:w-32 lg:w-48"
        />

        {/* Right fade */}

        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#F8F6F2] via-[#F8F6F2]/90 to-transparent sm:w-32 lg:w-48"
        />

        {/* Top glass line */}

        <div
          className="pointer-events-none absolute left-[8%] right-[8%] top-0 z-30 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />

        {/* Moving track */}

        <div className="w-full overflow-hidden">
          <motion.div ref={marqueeRef} style={{ x: marqueeX }} className="flex w-max gap-5 px-5">
            {/* Original media set */}

            {REVIEW_MEDIA.map((media, index) => (
              <ReviewCard
                key={`review-original-${index}`}
                media={media}
                index={index}
                onMediaClick={setSelectedMedia}
              />
            ))}

            {/* Duplicate media for seamless infinite loop */}
            {REVIEW_MEDIA.map((media, index) => (
              <ReviewCard
                key={`review-copy-${index}`}
                media={media}
                index={index}
                onMediaClick={setSelectedMedia}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TRUST INDICATOR
      ====================================================== */}

      <div
        className={`relative mt-10 flex justify-center px-6 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0" }`}
      >
        <div
          className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white/70 px-4 py-2.5 shadow-[0_10px_28px_rgba(65,55,40,0.06)] backdrop-blur-xl"
        >
          <ShieldCheck
            className="h-4 w-4 text-[#4D8B4F]"
            strokeWidth={2.1}
          />

          <span
            className="text-[9px] font-black uppercase tracking-[0.17em] text-[#6B2D1A]/65"
          >
            Real people · Real progress · Real opportunities
          </span>
        </div>
      </div>

      {/* =====================================================
          CTA
      ====================================================== */}

      <div
        className={`relative mt-8 flex justify-center px-6 transition-all duration-800 ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-[0.98] opacity-0" }`}
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[18px] border border-white bg-[#4D8B4F] px-6 py-3.5 text-[13px] font-black text-white shadow-[0_18px_40px_rgba(77,139,79,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[#5A9658] hover:shadow-[0_25px_55px_rgba(77,139,79,0.28)]"
        >
          {/* Moving reflection */}

          <span
            className="pointer-events-none absolute inset-y-0 -left-20 w-10 rotate-[18deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]"
          />

          {/* Icon */}

          <Sparkles
            className="relative h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
            strokeWidth={2.2}
          />

          <span className="relative">
            See More Career Results
          </span>

          <ArrowRight
            className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </a>
      </div>

      {/* =====================================================
          CENTER VIDEO MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedMedia && selectedMedia.type === "video" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/60 px-4 pb-6 pt-20 backdrop-blur-xl sm:pt-24"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ y: -24, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -18, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[84vh] max-w-[min(92vw,560px)] items-center justify-center overflow-hidden rounded-[26px] border border-white/25 bg-black p-1 shadow-[0_35px_120px_rgba(0,0,0,0.58)] sm:p-1.5"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                aria-label="Close video"
                className="group absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-[0_8px_25px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/70 hover:bg-black/75"
              >
                <X size={19} strokeWidth={1.8} className="transition-transform duration-300 group-hover:rotate-90" />
              </button>
              <video
                key={selectedMedia.src}
                src={selectedMedia.src}
                autoPlay
                controls
                playsInline
                className="block h-auto max-h-[81vh] w-auto max-w-[88vw] rounded-[20px] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   REVIEW CARD
   ========================================================= */

function ReviewCard({ media, index, onMediaClick }) {
  return (
    <motion.article
      onClick={() => {
        if (media.type === "video") {
          onMediaClick(media);
        }
      }}
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative h-[330px] w-[205px] shrink-0 overflow-hidden rounded-[20px] border border-white bg-white/70 p-[3px] shadow-[0_18px_45px_rgba(65,55,40,0.09)] backdrop-blur-xl ${media.type === "video" ? "cursor-pointer" : ""} sm:h-[390px] sm:w-[235px] lg:h-[415px] lg:w-[250px]`}
    >
      {/* Media frame — image/video lives here */}

      <div
        className="relative h-full w-full overflow-hidden rounded-[17px] bg-[#EEEDE8]"
      >
        {media.type === "video" ? (
          <>
            <video
              src={media.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full select-none object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
            />

            {/* Premium play button — neutral glass, MSS brown icon */}

            <div
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            >
              <div
                className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/90 bg-white/88 shadow-[0_14px_38px_rgba(44,35,27,0.24)] backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:bg-white group-hover:shadow-[0_18px_45px_rgba(44,35,27,0.30)]"
              >
                <span
                  className="relative ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-[#6B2D1A]"
                />
              </div>
            </div>

            {/* High-contrast watch badge */}

            <div
              className="pointer-events-none absolute left-3 top-3 z-20 inline-flex items-center rounded-full border border-white/70 bg-[#6B2D1A]/82 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(45,28,20,0.22)] backdrop-blur-md"
            >
              WATCH
            </div>
          </>
        ) : (
          <img
            src={media.src}
            alt={`MSS Techno career result ${index + 1}`}
            loading="lazy"
            draggable="false"
            className="h-full w-full select-none object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />
        )}

        {/* Subtle MSS brand tint */}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#6B2D1A]/[0.035]"
        />

        {/* Premium glass reflection */}

        <div
          className="pointer-events-none absolute inset-y-0 -left-[120%] w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-md transition-all duration-1000 group-hover:left-[140%]"
        />

        {/* Fine glass highlight */}

        <div
          className="pointer-events-none absolute left-5 right-5 top-0 h-px bg-white/90"
        />

        {/* Hover result indicator */}

        <div
          className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/75 px-2.5 py-1.5 opacity-0 shadow-[0_8px_20px_rgba(65,55,40,0.08)] backdrop-blur-xl transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Star
            className="h-3 w-3 text-[#6B2D1A]"
            fill="currentColor"
            strokeWidth={1.5}
          />

          <span
            className="text-[8px] font-black uppercase tracking-[0.12em] text-[#6B2D1A]/75"
          >
            Career Result
          </span>
        </div>
      </div>
    </motion.article>
  );
}