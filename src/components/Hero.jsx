import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import hero from "../assets/images/hero.png";
import Resume from "../assets/resume.pdf";

const specialties = [
  "Paid social campaigns",
  "Content strategy",
  "Creative direction",
];

const performanceMetrics = [
  {
    value: "99+",
    label: "Creative assets",
  },
  {
    value: "30+",
    label: "Paid campaigns",
  },
  {
    value: "100%",
    label: "Purpose-driven",
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

const DownloadIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
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

const HeartIcon = ({ className = "w-4 h-4" }) => (
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
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.75 21v-8h2.75l.42-3.2h-3.17V7.75c0-.93.26-1.56 1.59-1.56H17V3.33c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.46-4.04 4.15V9.8H7.82V13h2.71v8h3.22Z" />
  </svg>
);

const Hero = () => {
  const heroSectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = heroSectionRef.current;

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
            "[data-hero-reveal]",
            ".hero-portrait-shell",
            "[data-float]",
            ".campaign-bar",
          ],
          {
            clearProps: "all",
            autoAlpha: 1,
          },
        );

        return;
      }

      const entranceTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      entranceTimeline
        .from("[data-hero-reveal]", {
          y: 34,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.09,
        })
        .from(
          ".hero-portrait-shell",
          {
            scale: 0.92,
            autoAlpha: 0,
            clipPath: "inset(10% 8% 12% 8% round 2rem)",
            duration: 1.15,
          },
          "-=0.65",
        )
        .from(
          "[data-float]",
          {
            y: 20,
            scale: 0.82,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.65",
        )
        .from(
          ".campaign-bar",
          {
            scaleY: 0,
            transformOrigin: "bottom",
            duration: 0.7,
            stagger: 0.07,
          },
          "-=0.5",
        );

      gsap.utils.toArray("[data-float]").forEach((element, index) => {
        const verticalMovement = index % 2 === 0 ? -11 : 11;
        const rotationMovement = index % 2 === 0 ? -1.2 : 1.2;

        gsap.to(element, {
          y: verticalMovement,
          rotation: rotationMovement,
          duration: 3.4 + index * 0.45,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.18,
        });
      });

      gsap.to(".hero-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-glow", {
        scale: 1.08,
        opacity: 0.9,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const parallaxElements = gsap.utils.toArray("[data-depth]");

      const handlePointerMove = (event) => {
        const bounds = section.getBoundingClientRect();

        const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

        parallaxElements.forEach((element) => {
          const depth = Number(element.dataset.depth || 0);

          gsap.to(element, {
            x: normalizedX * depth,
            y: normalizedY * depth,
            duration: 0.9,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      const resetParallax = () => {
        parallaxElements.forEach((element) => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      if (window.matchMedia("(pointer: fine)").matches) {
        section.addEventListener("pointermove", handlePointerMove);
        section.addEventListener("pointerleave", resetParallax);

        cleanupFunctions.push(() => {
          section.removeEventListener("pointermove", handlePointerMove);
          section.removeEventListener("pointerleave", resetParallax);
        });
      }

      const magneticElements = gsap.utils.toArray(".hero-magnetic");

      magneticElements.forEach((element) => {
        const handleMagneticMove = (event) => {
          const bounds = element.getBoundingClientRect();
          const offsetX = event.clientX - bounds.left - bounds.width / 2;
          const offsetY = event.clientY - bounds.top - bounds.height / 2;

          gsap.to(element, {
            x: offsetX * 0.18,
            y: offsetY * 0.18,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const resetMagneticPosition = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.35)",
            overwrite: "auto",
          });
        };

        element.addEventListener("pointermove", handleMagneticMove);
        element.addEventListener("pointerleave", resetMagneticPosition);

        cleanupFunctions.push(() => {
          element.removeEventListener("pointermove", handleMagneticMove);
          element.removeEventListener("pointerleave", resetMagneticPosition);
        });
      });
    }, section);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden !py-0 bg-[#fff9fb] text-[#2e2028] dark:bg-[#100d13] dark:text-white"
    >
      {/* Ambient background */}
      <div
        className="hero-glow pointer-events-none absolute -left-44 top-10 h-[34rem] w-[34rem] rounded-full bg-[#f2c8d7]/55 blur-[120px] dark:bg-[#9b4d6b]/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#ead7f4]/70 blur-[120px] dark:bg-[#72507f]/20"
        aria-hidden="true"
      />

      <div
        data-depth="28"
        className="pointer-events-none absolute right-[7%] top-[13%] hidden h-20 w-20 rounded-full border border-[#9b4d6b]/20 lg:block dark:border-[#f3c9d8]/15"
        aria-hidden="true"
      />

      <div
        data-depth="-18"
        className="pointer-events-none absolute bottom-[12%] left-[7%] hidden h-4 w-4 rounded-full bg-[#c97898] shadow-[0_0_0_10px_rgba(201,120,152,0.10)] lg:block"
        aria-hidden="true"
      />

      <div
        data-depth="14"
        className="pointer-events-none absolute left-[44%] top-[15%] hidden text-[#b26783]/30 xl:block dark:text-[#f2c8d7]/20"
        aria-hidden="true"
      >
        <SparkleIcon className="w-12 h-12" />
      </div>

      {/* Subtle editorial grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124, 70, 91, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 70, 91, 0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-12 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-16">
          {/* Copy */}
          <div className="relative z-20 w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
            <div
              data-hero-reveal
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c98ca4]/35 bg-white/70 px-4 py-2 shadow-[0_12px_35px_rgba(106,55,76,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ba6688] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#a84f73]" />
              </span>

              <span className="font-Inter text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-[#6f4053] dark:text-[#f2dce5] sm:text-xs">
                Available for select collaborations
              </span>
            </div>

            <p
              data-hero-reveal
              className="mb-4 font-Inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a14e70] dark:text-[#e6a8c0]"
            >
              Digital marketing specialist
            </p>

            <h1
              data-hero-reveal
              className="font-Poppins text-[clamp(2.8rem,7vw,6.7rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#2c1d24] dark:text-[#fff8fb]"
            >
              I make brands
              <span className="relative block mt-1">
                impossible to{" "}
                <span className="relative inline-block font-medium italic text-[#a64f72] dark:text-[#eea9c3]">
                  scroll past.
                  <svg
                    viewBox="0 0 360 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-[#d89ab2]/80"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14C81 3 174 4 356 11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              data-hero-reveal
              className="mx-auto mt-8 max-w-2xl font-Inter text-base font-normal leading-7 text-[#67545d] dark:text-[#c9bdc4] sm:text-lg sm:leading-8 lg:mx-0"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-[#8f4564] dark:text-[#efb4cb]">
                Anna Marie
              </span>
              . I combine creative storytelling, thoughtful design, and data-led
              strategy to build campaigns that feel beautiful, connect with the
              right audience, and create measurable growth.
            </p>

            <div
              data-hero-reveal
              className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
            >
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9b6c4]/60 bg-[#fffdfd]/80 px-3.5 py-2 font-Inter text-xs font-semibold text-[#694253] shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:text-[#eadce2]"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-[#ad5578]" />
                  {specialty}
                </span>
              ))}
            </div>

            <div
              data-hero-reveal
              className="flex flex-col items-center justify-center gap-3 mt-9 sm:flex-row lg:justify-start"
            >
              <a
                href="#contact"
                className="hero-magnetic group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#8d4160] px-7 font-Inter text-sm font-semibold text-white shadow-[0_18px_45px_rgba(122,55,82,0.25)] transition-colors duration-300 hover:bg-[#77344f] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dca9bd]/50 sm:w-auto dark:bg-[#d981a3] dark:text-[#28141c] dark:hover:bg-[#e99ab7]"
              >
                Let&apos;s work together
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45 dark:bg-[#2b1620]/10">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </a>

              <a
                href="#projects"
                className="hero-magnetic group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-[#cbb3bd] bg-white/70 px-7 font-Inter text-sm font-semibold text-[#4f3540] backdrop-blur-lg transition-colors duration-300 hover:border-[#a75b79] hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dca9bd]/40 sm:w-auto dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:bg-white/[0.09]"
              >
                Explore my work
                <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div
              data-hero-reveal
              className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#dfcbd3]/80 pt-7 sm:flex-row dark:border-white/10"
            >
              <div className="grid w-full grid-cols-3 gap-4 sm:w-auto">
                {performanceMetrics.map((metric) => (
                  <div key={metric.label} className="text-center sm:text-left">
                    <p className="font-Poppins text-xl font-semibold tracking-tight text-[#33232a] dark:text-white sm:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-Inter text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[#8b747e] dark:text-[#9f9299]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={Resume}
                  download
                  className="group inline-flex items-center gap-2 font-Inter text-sm font-semibold text-[#6c4455] transition-colors duration-300 hover:text-[#a54f72] dark:text-[#e2c5d1] dark:hover:text-[#f2aeca]"
                >
                  <DownloadIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                  Download CV
                </a>

                <span className="h-5 w-px bg-[#d8c1ca] dark:bg-white/15" />

                <a
                  href="https://www.facebook.com/00annamarie00"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Anna Marie on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7bec8] bg-white/70 text-[#8d4562] transition-all duration-300 hover:-translate-y-1 hover:border-[#a95879] hover:bg-[#a95879] hover:text-white dark:border-white/10 dark:bg-white/[0.05] dark:text-[#efb6cc] dark:hover:bg-[#d77f9f] dark:hover:text-[#29141d]"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative z-10 mx-auto w-full max-w-[610px] lg:mx-0">
            <div className="hero-portrait-shell relative mx-auto w-full max-w-[540px]">
              {/* Decorative orbit */}
              <div
                className="hero-orbit pointer-events-none absolute -inset-5 rounded-[3.25rem] border border-dashed border-[#c98ba4]/35 dark:border-[#efb1ca]/20"
                aria-hidden="true"
              >
                <span className="absolute -top-2 left-[24%] h-4 w-4 rounded-full border-4 border-[#fff9fb] bg-[#b45b7e] dark:border-[#100d13]" />
                <span className="absolute bottom-[12%] right-[-7px] h-3.5 w-3.5 rounded-full border-4 border-[#fff9fb] bg-[#db9db5] dark:border-[#100d13]" />
              </div>

              <div
                data-depth="16"
                className="pointer-events-none absolute -right-9 top-20 h-36 w-36 rounded-full bg-[#f0c7d6]/60 blur-3xl dark:bg-[#aa5575]/25"
                aria-hidden="true"
              />

              <div
                data-depth="-12"
                className="pointer-events-none absolute -bottom-8 -left-10 h-44 w-44 rounded-full bg-[#e5d3ef]/65 blur-3xl dark:bg-[#74517f]/25"
                aria-hidden="true"
              />

              {/* Main portrait */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.7rem] border border-white/80 bg-[linear-gradient(145deg,#f5d9e4_0%,#fff8fb_48%,#e9d8ef_100%)] shadow-[0_40px_90px_rgba(85,43,61,0.20)] dark:border-white/10 dark:bg-[linear-gradient(145deg,#432632_0%,#1e1820_55%,#33243a_100%)] dark:shadow-[0_45px_100px_rgba(0,0,0,0.45)]">
                <div
                  className="absolute inset-0 opacity-65 dark:opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.95) 0 2px, transparent 3px), radial-gradient(circle at 80% 35%, rgba(166,79,114,0.20) 0 2px, transparent 3px)",
                    backgroundSize: "42px 42px, 58px 58px",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-x-[8%] bottom-[8%] h-[58%] rounded-full bg-[#d18ca7]/35 blur-3xl dark:bg-[#cc7194]/20"
                  aria-hidden="true"
                />

                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 w-full h-full pointer-events-none text-white/40 dark:text-white/10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-20 390C70 295 138 332 197 260C259 185 322 215 430 102"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M-10 420C91 330 142 370 220 292C282 230 346 250 420 188"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>

                <img
                  src={hero}
                  alt="Anna Marie, Digital Marketing Specialist"
                  className="absolute bottom-0 left-1/2 h-[96%] w-[96%] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_28px_30px_rgba(64,28,43,0.22)]"
                />

                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-3.5 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
                  <SparkleIcon className="h-4 w-4 text-[#aa5275] dark:text-[#f3b3ca]" />

                  <span className="font-Inter text-[0.67rem] font-semibold uppercase tracking-[0.16em] text-[#674352] dark:text-[#f2dfe6]">
                    Strategy meets creativity
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-[1.35rem] border border-white/70 bg-white/70 p-3.5 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#171218]/65">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-[#f1d5df] shadow-md dark:border-white/10">
                      <img
                        src={hero}
                        alt=""
                        aria-hidden="true"
                        className="object-cover object-top w-full h-full"
                      />
                    </div>

                    <div>
                      <p className="font-Inter text-sm font-semibold text-[#3e2932] dark:text-white">
                        Anna Marie
                      </p>
                      <p className="font-Inter text-[0.69rem] font-medium text-[#8d737e] dark:text-[#b8a8af]">
                        Digital Marketing Specialist
                      </p>
                    </div>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5dce5] text-[#9a4a6a] dark:bg-white/10 dark:text-[#f2b2ca]">
                    <HeartIcon />
                  </span>
                </div>
              </div>

              {/* Floating campaign card */}
              <div
                data-float
                className="absolute -left-3 top-[18%] hidden w-[184px] rounded-[1.4rem] border border-white/80 bg-white/85 p-4 shadow-[0_24px_55px_rgba(82,42,59,0.16)] backdrop-blur-2xl sm:block md:-left-10 dark:border-white/10 dark:bg-[#211820]/85"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#9a7f89] dark:text-[#a99aa0]">
                      Campaign pulse
                    </p>
                    <p className="mt-1 font-Poppins text-xl font-semibold text-[#3e2731] dark:text-white">
                      +42%
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7e1e9] text-[#a55172] dark:bg-[#d67c9d]/15 dark:text-[#eca7c1]">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex items-end h-16 gap-2">
                  {[34, 50, 42, 66, 58, 84, 72].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="campaign-bar flex-1 rounded-full bg-[linear-gradient(to_top,#9c496b,#e4a4bb)] dark:bg-[linear-gradient(to_top,#b85e82,#f1adc7)]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.58 + index * 0.055,
                      }}
                    />
                  ))}
                </div>

                <p className="mt-3 font-Inter text-[0.68rem] font-medium text-[#88717b] dark:text-[#aa9ba2]">
                  Audience engagement
                </p>
              </div>

              {/* Creative library card */}
              <div
                data-float
                className="absolute -right-3 top-[12%] hidden w-[172px] rounded-[1.4rem] border border-white/80 bg-white/85 p-3.5 shadow-[0_24px_55px_rgba(82,42,59,0.14)] backdrop-blur-2xl sm:block md:-right-8 dark:border-white/10 dark:bg-[#211820]/85"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-Inter text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-[#8d7480] dark:text-[#ab9ca3]">
                    Creative library
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#bd6688]" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[linear-gradient(145deg,#8d3e5e,#e79bb7)]">
                    <span className="absolute left-2 top-2 h-1.5 w-7 rounded-full bg-white/70" />
                    <span className="absolute h-6 rounded-md bottom-2 left-2 right-2 bg-white/20 backdrop-blur-sm" />
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[linear-gradient(145deg,#d8c0e7,#8b5b9c)]">
                    <span className="absolute h-8 border rounded-full inset-x-2 top-2 border-white/50" />
                    <span className="absolute w-5 h-5 rounded-full bottom-2 left-2 bg-white/40" />
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[linear-gradient(145deg,#f2d1dc,#c86f91)]">
                    <span className="absolute -right-2 top-2 h-9 w-9 rounded-full border-[6px] border-white/30" />
                    <span className="absolute bottom-2 left-2 right-2 h-1.5 rounded-full bg-white/60" />
                  </div>
                </div>

                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="font-Poppins text-lg font-semibold text-[#412a34] dark:text-white">
                      99+
                    </p>
                    <p className="font-Inter text-[0.65rem] font-medium text-[#88727b] dark:text-[#aa9ca2]">
                      Assets created
                    </p>
                  </div>

                  <SparkleIcon className="h-5 w-5 text-[#c37393]" />
                </div>
              </div>

              {/* Testimonial-style object */}
              <div
                data-float
                className="absolute -bottom-8 left-1/2 w-[88%] max-w-[350px] -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-[#fffdfd]/90 p-4 shadow-[0_25px_60px_rgba(83,43,60,0.18)] backdrop-blur-2xl sm:-bottom-10 sm:left-auto sm:right-5 sm:w-[295px] sm:translate-x-0 dark:border-white/10 dark:bg-[#1e171e]/90"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5dce5] text-[#9e4a6d] dark:bg-[#d87e9f]/15 dark:text-[#efabc4]">
                    <SparkleIcon className="w-5 h-5" />
                  </span>

                  <div>
                    <p className="font-Inter text-xs font-semibold uppercase tracking-[0.13em] text-[#9a687c] dark:text-[#db9fb6]">
                      Creative philosophy
                    </p>

                    <p className="mt-1.5 font-Poppins text-sm font-medium leading-6 text-[#4d3540] dark:text-[#f2e9ed]">
                      Beautiful ideas perform best when every detail has a
                      purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile supporting objects */}
            <div className="grid grid-cols-2 gap-3 mt-14 sm:hidden">
              <div className="rounded-2xl border border-[#dfc7d1] bg-white/75 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
                <p className="font-Poppins text-2xl font-semibold text-[#994969] dark:text-[#efa9c3]">
                  +42%
                </p>
                <p className="mt-1 font-Inter text-xs font-medium text-[#826b75] dark:text-[#ad9fa6]">
                  Campaign engagement
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfc7d1] bg-white/75 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
                <p className="font-Poppins text-2xl font-semibold text-[#994969] dark:text-[#efa9c3]">
                  99+
                </p>
                <p className="mt-1 font-Inter text-xs font-medium text-[#826b75] dark:text-[#ad9fa6]">
                  Creative assets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom editorial label */}
      <div
        data-hero-reveal
        className="absolute items-center hidden gap-3 pointer-events-none bottom-6 left-6 xl:flex"
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-[#b98b9d] dark:bg-[#c593a6]/50" />
        <span className="font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#927884] dark:text-[#887c82]">
          Creative strategy · content · growth
        </span>
      </div>
    </section>
  );
};

export default Hero;
