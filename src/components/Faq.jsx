import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What career services does MSS Techno provide?",
    answer:
      "MSS Techno provides career-focused services including professional resume building, ATS resume optimization, LinkedIn profile optimization, interview preparation, career mentoring, and job search guidance.",
  },
  {
    question: "Can MSS Techno help me create an ATS-friendly resume?",
    answer:
      "Yes. Our resume building service focuses on creating clear, professional, ATS-friendly resumes with relevant keywords, strong content structure, and role-focused positioning to improve your chances of getting noticed by recruiters.",
  },
  {
    question: "Can you optimize my LinkedIn profile for recruiters?",
    answer:
      "Yes. We optimize your LinkedIn headline, About section, experience, skills, keywords, and overall profile positioning so your profile communicates your professional value more clearly to recruiters.",
  },
  {
    question: "How does your interview preparation service work?",
    answer:
      "Our interview preparation combines practical guidance, commonly asked questions, role-specific preparation, communication improvement, and mock interview practice to help you approach interviews with greater confidence.",
  },
  {
    question: "Who can use MSS Techno career consulting services?",
    answer:
      "Our services are suitable for students, fresh graduates, early-career professionals, and job seekers who want to improve their resume, LinkedIn presence, interview skills, career direction, or overall job-search strategy.",
  },
  {
    question: "Do you provide career guidance for IT jobs?",
    answer:
      "Yes. We provide structured career guidance for technology-focused roles by helping you understand suitable career paths, identify skill gaps, improve your professional profile, and plan practical next steps.",
  },
  {
    question: "Does MSS Techno provide job placement assistance?",
    answer:
      "We provide job-search and placement-oriented guidance designed to help candidates improve their professional positioning, identify suitable opportunities, prepare for recruitment processes, and approach their job search more strategically.",
  },
  {
    question: "How can I get started with MSS Techno?",
    answer:
      "You can start by booking a consultation with MSS Techno. During the consultation, we understand your career goals and recommend the most relevant service or next step based on your current profile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-[#F8F6F2]
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:py-28
        "
      >
        {/* =====================================================
            CLEAN MSS TECHNO BACKGROUND
        ====================================================== */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Soft green glow */}
          <div
            className="
              absolute
              -left-40
              top-20
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#A7D98E]/10
              blur-[120px]
            "
          />

          {/* Soft champagne glow */}
          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[460px]
              w-[460px]
              rounded-full
              bg-[#EADBC8]/20
              blur-[130px]
            "
          />

          {/* Very subtle center light */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[800px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/60
              blur-[140px]
            "
          />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white
                bg-white/65
                px-4
                py-2
                shadow-[0_8px_28px_rgba(65,55,40,0.06)]
                backdrop-blur-xl
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
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#6B2D1A]/75
                "
              >
                Frequently Asked Questions
              </span>
            </div>

            <h2
              id="faq-heading"
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.04]
                tracking-[-0.045em]
                text-[#6B2D1A]
                sm:text-5xl
                lg:text-[56px]
              "
            >
              Career Questions,
              <br />
              <span className="text-[#4D8B4F]">
                Clear Answers.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-[15px]
                font-semibold
                leading-7
                text-[#535A55]
                sm:text-[16px]
              "
            >
              Find clear answers about our resume building, LinkedIn
              optimization, interview preparation, career guidance, and
              job-search support services.
            </p>
          </div>

          {/* =====================================================
              FAQ LIST
          ====================================================== */}
          <div className="mx-auto mt-12 max-w-4xl space-y-4 sm:mt-14">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    group
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white
                    bg-white/70
                    shadow-[0_12px_38px_rgba(65,55,40,0.055)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-[2px]
                    hover:shadow-[0_18px_48px_rgba(77,139,79,0.09)]
                  "
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-5
                      text-left
                      sm:px-7
                      sm:py-6
                    "
                  >
                    <span
                      className={`
                        text-[15px]
                        font-black
                        leading-6
                        tracking-[-0.015em]
                        transition-colors
                        duration-300
                        sm:text-[16px]
                        ${
                          isOpen
                            ? "text-[#6B2D1A]"
                            : "text-[#292D2A] group-hover:text-[#6B2D1A]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500
                        ${
                          isOpen
                            ? "rotate-180 border-[#4D8B4F]/20 bg-[#E8F3E5] text-[#4D8B4F]"
                            : "border-white bg-[#F8F6F2]/80 text-[#4D8B4F] group-hover:bg-[#E8F3E5]"
                        }
                      `}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-[#6B2D1A]/[0.07] px-6 pb-6 pt-4 sm:px-7">
                        <p
                          className="
                            max-w-3xl
                            text-[13px]
                            font-semibold
                            leading-6
                            text-[#5B625D]
                            sm:text-[14px]
                            sm:leading-7
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              BOTTOM CTA
          ====================================================== */}
          <div className="mt-12 flex justify-center sm:mt-14">
            <div
              className="
                inline-flex
                flex-col
                items-center
                gap-3
                rounded-[20px]
                border
                border-white
                bg-white/55
                px-6
                py-4
                text-center
                shadow-[0_12px_35px_rgba(65,55,40,0.05)]
                backdrop-blur-xl
                sm:flex-row
                sm:gap-5
              "
            >
              <p
                className="
                  text-[12px]
                  font-bold
                  text-[#555C57]
                "
              >
                Still have a career question?
              </p>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="
                  rounded-full
                  bg-[#4D8B4F]
                  px-5
                  py-2.5
                  text-[11px]
                  cursor-pointer
                  font-black
                  text-white
                  shadow-[0_8px_22px_rgba(77,139,79,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#437A45]
                  hover:shadow-[0_12px_28px_rgba(77,139,79,0.28)]
                  active:scale-95
                "
              >
                Talk to a Consultant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AEO / FAQ STRUCTURED DATA
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}