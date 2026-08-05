import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fb from "../assets/platforms/facebook.png";
import meta from "../assets/platforms/meta.jpg";
import insta from "../assets/platforms/instagram.png";
import tiktok from "../assets/platforms/tiktok.png";
import youtube from "../assets/platforms/yt-studio.png";
import google from "../assets/platforms/google.png";
import linkedin from "../assets/platforms/linkedin.png";

import canva from "../assets/platforms/canva.png";
import capcut from "../assets/platforms/capcut.jpg";
import figma from "../assets/platforms/figma.png";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: "Facebook",
    image: fb,
  },
  {
    name: "Meta",
    image: meta,
  },
  {
    name: "Instagram",
    image: insta,
  },
  {
    name: "TikTok",
    image: tiktok,
  },
  {
    name: "YouTube Studio",
    image: youtube,
  },
  {
    name: "Google",
    image: google,
  },
  {
    name: "LinkedIn",
    image: linkedin,
  },
];

const creativeTools = [
  {
    name: "Canva",
    image: canva,
    description: "Brand visuals and social content",
  },
  {
    name: "CapCut",
    image: capcut,
    description: "Short-form video production",
  },
  {
    name: "Figma",
    image: figma,
    description: "Interface and layout design",
  },
];

const campaignFramework = [
  {
    number: "01",
    label: "Define",
    description: "Clarify the campaign goal and desired outcome.",
  },
  {
    number: "02",
    label: "Target",
    description: "Identify the right audience and platform.",
  },
  {
    number: "03",
    label: "Create",
    description: "Develop content that fits the brand and message.",
  },
  {
    number: "04",
    label: "Optimize",
    description: "Refine budget, delivery, and engagement.",
  },
];

const ArrowUpRightIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const SparkleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.65"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3c.45 4.1 2.9 6.55 7 7-4.1.45-6.55 2.9-7 7-.45-4.1-2.9-6.55-7-7 4.1-.45 6.55-2.9 7-7Z" />
    <path d="M19 16c.2 1.8 1.2 2.8 3 3-1.8.2-2.8 1.2-3 3-.2-1.8-1.2-2.8-3-3 1.8-.2 2.8-1.2 3-3Z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const PenIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m16.5 3.5 4 4L8 20H4v-4L16.5 3.5Z" />
    <path d="m14 6 4 4" />
  </svg>
);

const ChartIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-7" />
    <path d="M22 20V7" />
  </svg>
);

const LayersIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 16 9 5 9-5" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

const CursorIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m5 3 14 8-6 2-2 6L5 3Z" />
  </svg>
);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const cleanupFunctions = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            "[data-about-reveal]",
            "[data-about-card]",
            ".about-chart-bar",
            ".about-process-line",
          ],
          {
            clearProps: "all",
            autoAlpha: 1,
          },
        );

        return;
      }

      gsap.from("[data-about-reveal]", {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
        },
      });

      gsap.from("[data-about-card]", {
        y: 50,
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.95,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-about-grid]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".about-chart-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-campaign-card]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".about-process-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.15,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "[data-process-card]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.to("[data-about-float='one']", {
        y: -12,
        rotation: -2,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-about-float='two']", {
        y: 10,
        rotation: 2,
        duration: 4.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-about-float='three']", {
        y: -8,
        rotation: 1.5,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-glow", {
        scale: 1.1,
        opacity: 0.95,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const cards = gsap.utils.toArray("[data-tilt]");

      if (window.matchMedia("(pointer: fine)").matches) {
        cards.forEach((card) => {
          const content = card.querySelector("[data-tilt-content]");

          const handlePointerMove = (event) => {
            const bounds = card.getBoundingClientRect();

            const x = (event.clientX - bounds.left) / bounds.width - 0.5;

            const y = (event.clientY - bounds.top) / bounds.height - 0.5;

            gsap.to(card, {
              rotateY: x * 3.5,
              rotateX: y * -3.5,
              transformPerspective: 1000,
              transformOrigin: "center",
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });

            if (content) {
              gsap.to(content, {
                x: x * 6,
                y: y * 6,
                duration: 0.45,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          };

          const resetCard = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.75,
              ease: "elastic.out(1, 0.45)",
              overwrite: "auto",
            });

            if (content) {
              gsap.to(content, {
                x: 0,
                y: 0,
                duration: 0.75,
                ease: "elastic.out(1, 0.45)",
                overwrite: "auto",
              });
            }
          };

          card.addEventListener("pointermove", handlePointerMove);
          card.addEventListener("pointerleave", resetCard);

          cleanupFunctions.push(() => {
            card.removeEventListener("pointermove", handlePointerMove);

            card.removeEventListener("pointerleave", resetCard);
          });
        });
      }
    }, section);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate overflow-hidden !py-0 bg-[#fffdfd] text-[#302028] dark:bg-[#120f14] dark:text-white"
    >
      {/* Ambient background */}
      <div
        className="about-glow pointer-events-none absolute -left-52 top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#f0cad8]/45 blur-[125px] dark:bg-[#9b4c6b]/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-[8%] h-[32rem] w-[32rem] rounded-full bg-[#dfd2ef]/55 blur-[130px] dark:bg-[#704c7d]/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,70,91,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(124,70,91,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 88%, transparent)",
        }}
        aria-hidden="true"
      />

      <div
        data-about-float="one"
        className="pointer-events-none absolute right-[7%] top-[9%] hidden text-[#bd718e]/25 xl:block dark:text-[#efa9c3]/15"
        aria-hidden="true"
      >
        <SparkleIcon className="h-14 w-14" />
      </div>

      <div
        data-about-float="two"
        className="pointer-events-none absolute bottom-[10%] left-[6%] hidden h-14 w-14 rounded-full border border-[#bc718d]/25 xl:block dark:border-[#eea7c1]/15"
        aria-hidden="true"
      />

      <div className="relative w-full px-5 py-24 mx-auto max-w-7xl sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            data-about-reveal
            className="inline-flex items-center gap-2 rounded-full border border-[#d6b5c2]/60 bg-white/70 px-4 py-2 shadow-[0_12px_34px_rgba(94,46,65,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
          >
            <SparkleIcon className="h-4 w-4 text-[#a75072] dark:text-[#efaac4]" />

            <span className="font-Inter text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#7e5264] dark:text-[#dec3cd]">
              Behind the strategy
            </span>
          </div>

          <h2
            data-about-reveal
            className="mt-6 font-Poppins text-[clamp(2.4rem,5.8vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[#302028] dark:text-[#fff8fb]"
          >
            Creative thinking with a
            <span className="block font-medium italic text-[#a34e70] dark:text-[#eda8c2]">
              performance mindset.
            </span>
          </h2>

          <p
            data-about-reveal
            className="mx-auto mt-6 max-w-2xl font-Inter text-base font-normal leading-7 text-[#705b64] dark:text-[#c6b9bf] sm:text-lg sm:leading-8"
          >
            I connect strategy, content, advertising, and visual design to
            create digital experiences that feel polished, communicate clearly,
            and support meaningful brand growth.
          </p>
        </div>

        {/* Bento grid */}
        <div
          data-about-grid
          className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:auto-rows-[minmax(170px,auto)]"
        >
          {/* Main introduction */}
          <article
            data-about-card
            data-tilt
            className="group relative overflow-hidden rounded-[2rem] border border-[#dfc7d1]/75 bg-[#f8e8ee] p-6 shadow-[0_24px_65px_rgba(96,47,66,0.08)] sm:p-8 lg:col-span-7 lg:row-span-2 lg:p-10 dark:border-white/10 dark:bg-[#231720]"
          >
            <div
              data-tilt-content
              className="relative z-10 flex flex-col h-full"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#c994a8]/35 bg-white/50 px-3 py-2 font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-[#8f4965] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:text-[#e8a9c0]">
                  <LayersIcon className="w-4 h-4" />
                  What I do
                </span>

                <span className="font-Poppins text-xs font-semibold uppercase tracking-[0.18em] text-[#aa8291] dark:text-[#8f7d85]">
                  01 / 06
                </span>
              </div>

              <div className="max-w-2xl mt-12 lg:mt-auto">
                <p className="font-Poppins text-[clamp(1.8rem,3.5vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-[#402a34] dark:text-[#fff8fb]">
                  I turn brand ideas into{" "}
                  <span className="font-medium italic text-[#a44e70] dark:text-[#eca5c0]">
                    thoughtful digital moments
                  </span>{" "}
                  people can notice, understand, and act on.
                </p>

                <p className="mt-6 max-w-xl font-Inter text-sm font-normal leading-7 text-[#745c66] dark:text-[#c5b6bc] sm:text-base">
                  My work covers organic social media content, paid campaign
                  execution, content writing, SEO, visual production, and
                  interface design—bringing strategy and presentation together
                  under one clear direction.
                </p>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    "Social media",
                    "Paid advertising",
                    "Content writing",
                    "SEO",
                    "Visual design",
                    "UI design",
                  ].map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d2aebc]/55 bg-white/55 px-3.5 py-2 font-Inter text-xs font-semibold text-[#674150] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.045] dark:text-[#eadde2]"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-[#ae5678]" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative composition */}
            <div
              className="about-orbit pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-[#b86484]/25 dark:border-[#efabc4]/15"
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-[-7px] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-[#f8e8ee] bg-[#af5577] dark:border-[#231720]" />
            </div>

            <div
              className="pointer-events-none absolute -right-16 bottom-[-5rem] h-64 w-64 rounded-full bg-[#dfa6ba]/30 blur-3xl dark:bg-[#b85e80]/15"
              aria-hidden="true"
            />

            <div
              data-about-float="three"
              className="pointer-events-none absolute right-9 top-24 hidden h-28 w-24 rotate-6 rounded-[1.4rem] border border-white/70 bg-white/45 p-3 shadow-[0_18px_40px_rgba(99,48,67,0.08)] backdrop-blur-lg sm:block dark:border-white/10 dark:bg-white/[0.045]"
              aria-hidden="true"
            >
              <div className="h-3 w-12 rounded-full bg-[#d18ca7]/60" />
              <div className="mt-3 h-2 w-full rounded-full bg-[#d8bdc8]/55 dark:bg-white/10" />
              <div className="mt-2 h-2 w-[74%] rounded-full bg-[#d8bdc8]/55 dark:bg-white/10" />

              <div className="mt-5 flex items-end gap-1.5">
                {[36, 52, 44, 72, 60].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="flex-1 rounded-full bg-[linear-gradient(to_top,#9e4b6d,#e4a5bc)]"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </article>

          {/* Platform ecosystem */}
          <article
            data-about-card
            data-tilt
            className="relative overflow-hidden rounded-[2rem] border border-[#e0cad3]/75 bg-white/72 p-6 shadow-[0_22px_60px_rgba(88,43,60,0.07)] backdrop-blur-xl sm:p-7 lg:col-span-5 dark:border-white/10 dark:bg-white/[0.045]"
          >
            <div data-tilt-content className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#a06b7f] dark:text-[#c798aa]">
                    Platform ecosystem
                  </span>

                  <h3 className="mt-2 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402c35] dark:text-white">
                    Wherever the audience is.
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5dfe7] text-[#a04d6e] dark:bg-[#d77d9e]/15 dark:text-[#eca7c0]">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </div>

              <p className="mt-4 max-w-md font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
                Daily organic content and paid campaigns across the platforms
                most relevant to the brand and its audience.
              </p>

              <div className="mt-6 grid grid-cols-4 gap-2.5 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    data-about-float={
                      index % 3 === 0
                        ? "one"
                        : index % 3 === 1
                          ? "two"
                          : "three"
                    }
                    className="group/logo flex aspect-square items-center justify-center rounded-[1rem] border border-[#e4d2d9] bg-white/80 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c98ba4] hover:shadow-[0_12px_26px_rgba(91,44,62,0.10)] dark:border-white/10 dark:bg-white/[0.06]"
                    title={platform.name}
                  >
                    <img
                      src={platform.image}
                      alt={`${platform.name} logo`}
                      className="object-contain max-w-full transition-transform duration-300 max-h-8 group-hover/logo:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Campaign strategy */}
          <article
            data-about-card
            data-campaign-card
            data-tilt
            className="relative overflow-hidden rounded-[2rem] border border-[#d8b8c5]/65 bg-[#8d4160] p-6 text-white shadow-[0_28px_68px_rgba(111,46,72,0.2)] sm:p-7 lg:col-span-5 dark:border-[#e28dab]/20 dark:bg-[#7e3854]"
          >
            <div data-tilt-content className="relative z-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Campaign direction
                  </span>

                  <h3 className="mt-2 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-white">
                    Strategy before spending.
                  </h3>
                </div>

                <span className="flex items-center justify-center w-10 h-10 text-white rounded-full shrink-0 bg-white/12 backdrop-blur-md">
                  <ChartIcon className="w-4 h-4" />
                </span>
              </div>

              <p className="max-w-md mt-4 text-sm font-normal leading-6 font-Inter text-white/72">
                Every campaign begins by aligning the objective, audience,
                budget, message, and platform before it goes live.
              </p>

              <div className="mt-6 grid grid-cols-[1fr_auto] gap-5 rounded-[1.35rem] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-lg">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "Goal",
                      value: "Clear",
                    },
                    {
                      label: "Audience",
                      value: "Focused",
                    },
                    {
                      label: "Budget",
                      value: "Aligned",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-white/45">
                        {item.label}
                      </p>

                      <p className="mt-1.5 font-Poppins text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex h-16 items-end gap-1.5">
                  {[35, 54, 45, 71, 59, 86].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="about-chart-bar w-2 rounded-full bg-[linear-gradient(to_top,rgba(255,255,255,0.3),rgba(255,255,255,0.95))]"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full border-[38px] border-white/[0.04]"
              aria-hidden="true"
            />
          </article>

          {/* Content and SEO */}
          <article
            data-about-card
            data-tilt
            className="relative overflow-hidden rounded-[2rem] border border-[#dfc7d1]/75 bg-white/72 p-6 shadow-[0_22px_60px_rgba(88,43,60,0.07)] backdrop-blur-xl sm:p-7 lg:col-span-4 dark:border-white/10 dark:bg-white/[0.045]"
          >
            <div
              data-tilt-content
              className="relative z-10 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4dce5] text-[#a24e70] dark:bg-[#d87f9f]/15 dark:text-[#efaac3]">
                  <PenIcon />
                </span>

                <span className="font-Poppins text-xs font-semibold uppercase tracking-[0.18em] text-[#ad8a97] dark:text-[#82757b]">
                  03 / 06
                </span>
              </div>

              <h3 className="mt-7 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402b35] dark:text-white">
                Content that earns attention.
              </h3>

              <p className="mt-3 font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
                SEO-informed articles and brand content designed to improve
                clarity, support discoverability, and encourage website traffic.
              </p>

              {/* Editorial article mockup */}
              <div className="mt-7 rounded-[1.35rem] border border-[#e3ced7] bg-[#fffafb] p-4 shadow-inner dark:border-white/10 dark:bg-[#171218]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#b55a7d]" />
                  <span className="h-2 w-2 rounded-full bg-[#ddb1c1]" />
                  <span className="h-2 w-2 rounded-full bg-[#ead9df]" />
                </div>

                <div className="flex items-start gap-3 mt-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2d9e2] text-[#9e4a6c] dark:bg-white/[0.06] dark:text-[#eaa5be]">
                    <SearchIcon className="w-4 h-4" />
                  </span>

                  <div className="flex-1">
                    <div className="h-2.5 w-[72%] rounded-full bg-[#a95a78]/65" />
                    <div className="mt-3 h-2 w-full rounded-full bg-[#dfccd3] dark:bg-white/10" />
                    <div className="mt-2 h-2 w-[88%] rounded-full bg-[#dfccd3] dark:bg-white/10" />
                    <div className="mt-2 h-2 w-[64%] rounded-full bg-[#dfccd3] dark:bg-white/10" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="rounded-full bg-[#f3dce5] px-3 py-1.5 font-Inter text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-[#94506a] dark:bg-white/[0.06] dark:text-[#dda2b8]">
                    SEO ready
                  </span>

                  <span className="h-2 w-14 rounded-full bg-[#e1cfd6] dark:bg-white/10" />
                </div>
              </div>
            </div>
          </article>

          {/* Creative tools */}
          <article
            data-about-card
            data-tilt
            className="relative overflow-hidden rounded-[2rem] border border-[#dfc7d1]/75 bg-[#f3e3ea] p-6 shadow-[0_22px_60px_rgba(88,43,60,0.07)] sm:p-7 lg:col-span-4 dark:border-white/10 dark:bg-[#211720]"
          >
            <div
              data-tilt-content
              className="relative z-10 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/65 text-[#9f4c6d] shadow-sm dark:bg-white/[0.06] dark:text-[#efa8c2]">
                  <LayersIcon />
                </span>

                <span className="font-Poppins text-xs font-semibold uppercase tracking-[0.18em] text-[#ad8493] dark:text-[#88757d]">
                  04 / 06
                </span>
              </div>

              <h3 className="mt-7 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402b35] dark:text-white">
                My creative toolkit.
              </h3>

              <p className="mt-3 font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
                The tools I use to shape brand-aligned posters, social content,
                videos, and digital interfaces.
              </p>

              <div className="mt-6 space-y-2.5">
                {creativeTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group/tool flex items-center gap-3 rounded-[1.1rem] border border-white/70 bg-white/55 p-3 backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-[#c98ca4] dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <div className="flex items-center justify-center p-2 bg-white shadow-sm h-11 w-14 shrink-0 rounded-xl dark:bg-white/90">
                      <img
                        src={tool.image}
                        alt={`${tool.name} logo`}
                        className="object-contain max-w-full transition-transform duration-300 max-h-7 group-hover/tool:scale-110"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="font-Poppins text-sm font-semibold text-[#4b323d] dark:text-white">
                        {tool.name}
                      </p>

                      <p className="mt-0.5 truncate font-Inter text-[0.68rem] font-medium text-[#88727c] dark:text-[#a99aa1]">
                        {tool.description}
                      </p>
                    </div>

                    <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-[#a85877] transition-transform duration-300 group-hover/tool:rotate-45 dark:text-[#dda0b7]" />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* UI design */}
          <article
            data-about-card
            data-tilt
            className="relative overflow-hidden rounded-[2rem] border border-[#d9bdc8]/70 bg-[#35232d] p-6 text-white shadow-[0_25px_65px_rgba(57,29,42,0.17)] sm:p-7 lg:col-span-4 dark:border-white/10 dark:bg-[#2a1c25]"
          >
            <div
              data-tilt-content
              className="relative z-10 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#f0b0c8] backdrop-blur-md">
                  <CursorIcon />
                </span>

                <span className="font-Poppins text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  05 / 06
                </span>
              </div>

              <h3 className="mt-7 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-white">
                Content meets interface.
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 font-Inter text-white/65">
                With Figma, I can translate content into intuitive, visually
                balanced website interfaces and front-end layouts.
              </p>

              {/* Interface mockup */}
              <div className="mt-7 overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.07] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-lg">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ef9fbd]" />
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-white/15" />

                  <span className="ml-auto h-1.5 w-12 rounded-full bg-white/15" />
                </div>

                <div className="mt-4 grid grid-cols-[0.34fr_1fr] gap-3">
                  <div className="rounded-xl bg-white/[0.06] p-2.5">
                    <div className="h-4 w-4 rounded-md bg-[#d77f9f]" />
                    <div className="mt-4 space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-white/25" />
                      <div className="h-1.5 w-[78%] rounded-full bg-white/12" />
                      <div className="h-1.5 w-[88%] rounded-full bg-white/12" />
                      <div className="h-1.5 w-[64%] rounded-full bg-white/12" />
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#f3dce5] p-3">
                    <div className="h-2 w-[65%] rounded-full bg-[#91415f]/75" />
                    <div className="mt-2 h-1.5 w-[88%] rounded-full bg-[#caa9b6]" />

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-12 rounded-lg bg-[linear-gradient(145deg,#a84e70,#e49eb8)]" />
                      <div className="h-12 rounded-lg bg-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#a54e70]/25 blur-3xl"
              aria-hidden="true"
            />
          </article>

          {/* Process card */}
          <article
            data-about-card
            data-process-card
            className="relative overflow-hidden rounded-[2rem] border border-[#dfc7d1]/75 bg-white/72 p-6 shadow-[0_22px_60px_rgba(88,43,60,0.07)] backdrop-blur-xl sm:p-8 lg:col-span-12 dark:border-white/10 dark:bg-white/[0.045]"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#a06b7f] dark:text-[#c798aa]">
                  My working rhythm
                </span>

                <h3 className="mt-2 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402b35] dark:text-white sm:!text-3xl">
                  A purposeful path from idea to impact.
                </h3>
              </div>

              <p className="max-w-xl font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
                I approach digital work as one connected process rather than a
                collection of disconnected posts, designs, or ads.
              </p>
            </div>

            <div className="relative grid gap-4 mt-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              <div
                className="about-process-line pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-[linear-gradient(90deg,#d9a8ba,#a34f70,#d9a8ba)] lg:block dark:bg-[linear-gradient(90deg,#7c4d60,#e294b1,#7c4d60)]"
                aria-hidden="true"
              />

              {campaignFramework.map((step) => (
                <div
                  key={step.number}
                  className="group relative rounded-[1.35rem] border border-[#e1ccd5] bg-[#fffafb] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c98ba4] hover:shadow-[0_16px_35px_rgba(91,44,62,0.08)] dark:border-white/10 dark:bg-white/[0.035]"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#fffafb] bg-[#9d4a6b] font-Poppins text-[0.68rem] font-semibold text-white shadow-[0_7px_18px_rgba(104,44,68,0.18)] transition-transform duration-300 group-hover:scale-110 dark:border-[#1a151b] dark:bg-[#db83a4] dark:text-[#2c151f]">
                    {step.number}
                  </div>

                  <p className="mt-5 font-Poppins text-lg font-semibold text-[#49313b] dark:text-white">
                    {step.label}
                  </p>

                  <p className="mt-2 font-Inter text-xs font-normal leading-5 text-[#806a73] dark:text-[#aa9ca2]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
