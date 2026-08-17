import { useEffect, useState } from "react";
import { MeetingModal } from "./MeetingModal";
import {
  Calendar,
  Phone,
  Briefcase,
  Link2,
  Mail,
  Globe,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Loader2,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const CONTACT_ITEMS_LEFT = [
  {
    id: "meeting",
    title: "Schedule Consultation",
    label: "Book a Career Consultation",
    value: "Available 9am - 6pm",
    Icon: Calendar,
    tone: "green",
  },
  {
    id: "call",
    title: "Talk to a Consultant",
    label: "Speak with our team",
    value: "+1 (437) 299-7361",
    Icon: Phone,
    tone: "brown",
  },
  {
    id: "careers",
    title: "Career Guidance",
    label: "Plan your next step",
    value: "Personalized Guidance",
    Icon: Briefcase,
    tone: "green",
  },
];

const CONTACT_ITEMS_RIGHT = [
  {
    id: "email",
    title: "Email Our Team",
    label: "Consultation Support",
    value: "info@msstechno.com",
    Icon: Mail,
    tone: "green",
  },
  {
    id: "website",
    title: "Explore Services",
    label: "View consulting services",
    value: "www.msstechno.com",
    Icon: Globe,
    tone: "brown",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Consultation",
    label: "Quick career support",
    value: "Chat Now",
    Icon: FaWhatsapp,
    tone: "green",
  },
];

function LiquidContactBubble({
  item,
  index,
  onClick,
}) {
  const { Icon } = item;

  const isBrown = item.tone === "brown";

  return (

    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="
        group
        relative
        w-full
        max-w-[310px]
        min-h-[125px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/80
        bg-white/38
        px-6
        py-7
        text-left
        shadow-[0_18px_55px_rgba(46,58,49,0.10)]
        backdrop-blur-[26px]
        backdrop-saturate-[160%]
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-1
        hover:scale-[1.008]
        hover:border-white
        hover:bg-white/48
        hover:shadow-[0_30px_85px_rgba(65,55,40,0.15)]
        cursor-pointer
        will-change-transform
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#4D8B4F]/30
        focus-visible:ring-offset-2
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-y-20
          -left-1/2
          w-1/3
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/75
          to-transparent
          opacity-0
          blur-xl
          transition-all
          duration-1000
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      <div
        className={`
          pointer-events-none
          absolute
          -left-10
          -top-12
          h-36
          w-36
          rounded-full
          blur-[45px]
          ${isBrown
            ? "bg-[#C98361]/18"
            : "bg-[#8ECF77]/20"
          }
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -bottom-16
          -right-12
          h-40
          w-40
          rounded-full
          blur-[55px]
          ${isBrown
            ? "bg-[#6B2D1A]/10"
            : "bg-[#4D8B4F]/12"
          }
        `}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-4
          bottom-0
          h-20
          rounded-b-[30px]
          bg-gradient-to-t
          from-white/18
          to-transparent
          opacity-70
        "
      />

      <div className="relative z-10 flex items-center gap-4">
        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[20px]
            border
            border-white/80
            bg-white/46
            shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_rgba(44,54,46,0.08)]
            backdrop-blur-xl
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110
            group-hover:-rotate-3
            group-hover:shadow-[0_14px_32px_rgba(77,139,79,0.12)]
            ${isBrown
              ? "text-[#6B2D1A]"
              : "text-[#4D8B4F]"
            }
          `}
        >
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h4 className="text-[17px] font-bold text-[#1F2921]">
            {item.title}
          </h4>

          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A827B]">
            {item.label}
          </p>

          <p
            className={`
              mt-1.5
              truncate
              text-sm
              font-bold
              ${isBrown
                ? "text-[#6B2D1A]"
                : "text-[#4D8B4F]"
              }
            `}
          >
            {item.value}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function ContactSection({
  onOpenContact,
  onOpenMeeting,
}) {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Resume & LinkedIn Branding",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const [isMeetingOpen, setIsMeetingOpen] =
    useState(false);

  const openMeetingModal = () => {
    setIsMeetingOpen(true);
    onOpenMeeting?.();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleBubbleClick = (id) => {
    if (id === "meeting") {
      openMeetingModal();
      return;
    }

    if (id === "call") {
      window.location.href = "tel:+14372997361";
      return;
    }

    if (id === "careers") {
      scrollToSection("careers-section");
      return;
    }

    if (id === "email") {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@msstechno.com",
        "_blank"
      );
      return;
    }

    if (id === "website") {
      scrollToSection("case-studies");
      return;
    }

    if (id === "whatsapp") {
      if (id === "whatsapp") {
        window.open(
          "https://wa.me/14372997361?text=Hello%20MSS%20Techno,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
          "_blank"
        );
      }
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formState.name ||
    !formState.email ||
    !formState.message
  ) {
    alert("Please fill all required fields");
    return;
  }

  try {
    setIsSubmitting(true);
    const response = await fetch(
      "https://websiteapi-backend-git-642918032467.asia-south1.run.app/contact/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formState.name,
          company_name: formState.company,
          business_email: formState.email,
          phone_number: formState.phone,
          service_interested: formState.service,
          message: formState.message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed");
    }

    setIsSubmitted(true);

    setFormState({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "Career Mentoring & Guidance",
      message: "",
    });
  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  } finally {
    setIsSubmitting(false);
  }
};
  const inputClass = `
    w-full
    rounded-[18px]
    border
    border-white/80
    bg-white/46
    px-5
    py-3.5
    text-[15px]
    font-semibold
    text-[#2E302D]
    placeholder:text-[#9AA19B]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_25px_rgba(55,65,57,0.04)]
    backdrop-blur-xl
    outline-none
    transition-all
    duration-300
    focus:border-[#4D8B4F]/55
    focus:bg-white/62
    focus:ring-4
    focus:ring-[#4D8B4F]/8
  `;

  return (

    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F2]
        py-24
      "
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(115deg,#F4F7F1_0%,#F8F6F2_36%,#FBF9F5_66%,#F3E8DD_100%)]
          "
        />

        <div
          className="
            absolute
            -left-[12%]
            top-[8%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#A7D98E]/16
            blur-[150px]
            animate-[contactAmbientFloat_14s_ease-in-out_infinite]
          "
        />
        <div
          className="
            absolute
            -right-[10%]
            top-[16%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#EADBC8]/24
            blur-[160px]
            animate-[contactAmbientFloatReverse_17s_ease-in-out_infinite]
          "
        />
        <div
          className="
            absolute
            bottom-[-25%]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/70
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-6
          lg:px-10
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/42
              px-5
              py-2
              shadow-[inset_0_1px_0_white,0_10px_35px_rgba(52,65,54,0.07)]
              backdrop-blur-2xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#4D8B4F] shadow-[0_0_14px_rgba(127,203,104,0.75)]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D8B4F]">
              Contact Us
            </span>
          </div>

          <h2
            className="
              font-serif
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.045em]
              text-[#6B2D1A]
              drop-shadow-[0_3px_14px_rgba(107,45,26,0.08)]
              md:text-5xl
              lg:text-[60px]
              lg:leading-[1.02]
            "
          >
            Let's Build{" "}
            <span className="italic text-[#4D8B4F]">
              Your Career
            </span>{" "}
            <span className="text-[#6B2D1A]">
              With Confidence
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#59615B]
            "
          >
            Tell us about your project, schedule a
            consultation, or connect directly with our
            technology team.
          </p>
        </motion.div>

        {/* CONTACT GRID */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            xl:grid-cols-[280px_minmax(0,1fr)_280px]
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              xl:flex-col
              xl:items-end
            "
          >
            {CONTACT_ITEMS_LEFT.map((item, index) => (
              <LiquidContactBubble
                key={item.id}
                item={item}
                index={index}
                onClick={() =>
                  handleBubbleClick(item.id)
                }
              />
            ))}

          </div>

          {/* MAIN LIQUID GLASS FORM */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/85
              bg-white/38
              p-7
              shadow-[0_30px_90px_rgba(65,55,40,0.11),inset_0_1px_0_rgba(255,255,255,0.9)]
              backdrop-blur-[34px]
              before:pointer-events-none
              before:absolute
              before:inset-0
              before:rounded-[32px]
              before:bg-[linear-gradient(120deg,rgba(255,255,255,0.38),transparent_42%,rgba(234,219,200,0.12))]
              before:opacity-70
              backdrop-saturate-[175%]
              md:p-10
              lg:p-12
            "
          >
            {/* GLASS REFLECTION */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-12
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-[#A7D98E]/12
                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-36
                -right-28
                h-96
                w-96
                rounded-full
                bg-[#EADBC8]/22
                blur-[100px]
              "
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-3xl font-black text-[#2E302D]">
                  Start Your Consultation
                </h3>

                <p className="mt-2 text-sm text-[#5F665F]">
                  Share your vision. Our team will get back
                  to you shortly.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      flex
                      min-h-[450px]
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/50
                        text-[#4D8B4F]
                        shadow-[0_20px_50px_rgba(77,139,79,0.16)]
                        backdrop-blur-2xl
                      "
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <h4 className="mt-6 font-serif text-2xl font-black text-[#2E302D]">
                      Consultation Request Sent
                    </h4>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#6A746C]">
                      Thank you for reaching out to MSS
                      Techno Consulting. Our team will contact you
                      within 24 hours.
                    </p>

                    <button
                      onClick={() =>
                        setIsSubmitted(false)
                      }
                      className="
                        mt-7
                        rounded-full
                        border
                        border-white/80
                        bg-white/48
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-[#4F5751]
                        shadow-[inset_0_1px_0_white]
                        backdrop-blur-xl
                        transition-all
                        hover:bg-white/75
                      "
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      grid
                      grid-cols-1
                      gap-5
                      md:grid-cols-2
                    "
                  >
                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Full Name *
                      </label>

                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Current Role / Organization
                      </label>

                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="Your current role or organization"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Email Address *
                      </label>

                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            phone: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Consultation Area
                      </label>

                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            service: e.target.value,
                          })
                        }
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option>Career Mentoring & Guidance</option>

                        <option>Resume & LinkedIn Branding</option>

                        <option>Interview Preparation</option>

                        <option>Global Job Assistance</option>

                        <option>Placement Support</option>

                        <option>Career Strategy</option>

                        <option>Professional Training</option>

                        <option>Certification Guidance</option>

                        <option>Career Switch Guidance</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#4F5751]">
                        Message *
                      </label>

                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className={`${inputClass} resize-none rounded-[24px]`}
                        placeholder="Tell us about your career goals, experience, and what you want to achieve..."
                      />
                    </div>

                    <div
                      className="
                        mt-3
                        flex
                        flex-col
                        items-center
                        md:col-span-2
                      "
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-[#4D8B4F]/60
                          bg-gradient-to-r
                          from-[#3F7D43]
                          to-[#6B2D1A]
                          px-9
                          py-3.5
                          font-semibold
                          text-white
                          shadow-[0_16px_38px_rgba(77,139,79,0.25)]
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          hover:-translate-y-1
                          hover:scale-[1.015]
                          hover:shadow-[0_22px_55px_rgba(77,139,79,0.28)]
                          disabled:opacity-60
                        "
                      >
                        {isSubmitting ? (
                          <>
                            Sending
                            <Loader2 className="h-5 w-5 animate-spin" />
                          </>
                        ) : (
                          <>
                            Request Consultation

                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <div className="mt-5 flex flex-wrap justify-center gap-3">
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/80
                            bg-white/40
                            px-4
                            py-2
                            backdrop-blur-xl
                          "
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#4D8B4F]" />

                          <span className="text-[11px] font-medium text-[#59615B]">
                            Free Career Consultation
                          </span>
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/80
                            bg-white/40
                            px-4
                            py-2
                            backdrop-blur-xl
                          "
                        >
                          <ShieldCheck className="h-3.5 w-3.5 text-[#6B2D1A]" />

                          <span className="text-[11px] font-medium text-[#59615B]">
                            Confidential Guidance
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              xl:flex-col
              xl:items-start
            "
          >
            {CONTACT_ITEMS_RIGHT.map((item, index) => (
              <LiquidContactBubble
                key={item.id}
                item={item}
                index={index + 3}
                onClick={() =>
                  handleBubbleClick(item.id)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          MEETING MODAL
          Rendered from the separate MeetingModal component
      ========================================================= */}

      <MeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />

      <style>{`
        .contact-consulting-bubble:nth-child(3n) {
          box-shadow:
            0 18px 55px rgba(65,55,40,0.055),
            inset 0 1px 0 rgba(255,255,255,0.88);
        }

        .contact-consulting-bubble:nth-child(3n) .contact-bubble-icon {
          background: rgba(234,219,200,0.42);
          color: #6B2D1A;
        }

        .contact-consulting-bubble:nth-child(3n + 2) .contact-bubble-icon {
          background: rgba(234,219,200,0.28);
          color: #8A674D;
        }

        @keyframes contactAmbientFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -16px, 0) scale(1.055);
          }
        }

        @keyframes contactAmbientFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1.02);
          }
          50% {
            transform: translate3d(-16px, 14px, 0) scale(1);
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
export default ContactSection;