import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/images/logo.png";

gsap.registerPlugin(ScrollTrigger);

const navigationItems = [
  {
    label: "Home",
    href: "#home",
    number: "01",
  },
  {
    label: "About",
    href: "#about",
    number: "02",
  },
  {
    label: "Projects",
    href: "#projects",
    number: "03",
  },
  {
    label: "Contact",
    href: "#contact",
    number: "04",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/00annamarie00",
    icon: "facebook",
  },
  {
    label: "Email",
    href: "mailto:iamannamarie1998@gmail.com",
    icon: "email",
  },
];

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

const ArrowUpIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
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
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
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

const HeartIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" />
  </svg>
);

const getSocialIcon = (icon) => {
  if (icon === "facebook") {
    return <FacebookIcon className="w-5 h-5" />;
  }

  return <MailIcon className="w-5 h-5" />;
};

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const cleanupFunctions = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          ["[data-footer-reveal]", "[data-footer-link]", "[data-footer-float]"],
          {
            clearProps: "all",
            autoAlpha: 1,
          },
        );

        return;
      }

      gsap.from("[data-footer-reveal]", {
        y: 38,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from("[data-footer-link]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-footer-navigation]",
          start: "top 88%",
          once: true,
        },
      });

      gsap.to("[data-footer-float='one']", {
        y: -10,
        rotation: -2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-footer-float='two']", {
        y: 10,
        rotation: 2,
        duration: 4.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".footer-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".footer-glow", {
        scale: 1.1,
        opacity: 0.95,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const magneticElements = gsap.utils.toArray(".footer-magnetic");

      if (window.matchMedia("(pointer: fine)").matches) {
        magneticElements.forEach((element) => {
          const handlePointerMove = (event) => {
            const bounds = element.getBoundingClientRect();

            const offsetX = event.clientX - bounds.left - bounds.width / 2;

            const offsetY = event.clientY - bounds.top - bounds.height / 2;

            gsap.to(element, {
              x: offsetX * 0.14,
              y: offsetY * 0.14,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const resetPosition = () => {
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "elastic.out(1, 0.4)",
              overwrite: "auto",
            });
          };

          element.addEventListener("pointermove", handlePointerMove);

          element.addEventListener("pointerleave", resetPosition);

          cleanupFunctions.push(() => {
            element.removeEventListener("pointermove", handlePointerMove);

            element.removeEventListener("pointerleave", resetPosition);
          });
        });
      }
    }, footer);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden border-t border-[#dfc6d0]/70 bg-[#fff9fb] text-[#302028] dark:border-white/[0.08] dark:bg-[#100d13] dark:text-white"
    >
      {/* Ambient background */}
      <div
        className="footer-glow pointer-events-none absolute -left-52 top-0 h-[34rem] w-[34rem] rounded-full bg-[#efc8d7]/45 blur-[130px] dark:bg-[#9c4b6a]/16"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#dfd2ee]/60 blur-[135px] dark:bg-[#6c4979]/18"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,70,91,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(124,70,91,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
        aria-hidden="true"
      />

      <div
        data-footer-float="one"
        className="pointer-events-none absolute left-[6%] top-[16%] hidden text-[#bd718e]/25 xl:block dark:text-[#efa9c3]/15"
        aria-hidden="true"
      >
        <SparkleIcon className="h-14 w-14" />
      </div>

      <div
        data-footer-float="two"
        className="pointer-events-none absolute bottom-[18%] right-[6%] hidden h-16 w-16 rounded-full border border-[#be7590]/25 xl:block dark:border-[#eba5be]/15"
        aria-hidden="true"
      />

      <div className="relative w-full px-5 pt-20 pb-6 mx-auto max-w-7xl sm:px-8 sm:pb-8 sm:pt-24 lg:px-10 lg:pt-28">
        {/* Main footer CTA */}
        <div
          data-footer-reveal
          className="relative overflow-hidden rounded-[2.4rem] border border-[#a95776]/55 bg-[#8d4160] px-5 py-10 text-white shadow-[0_35px_90px_rgba(101,39,64,0.24)] sm:px-8 sm:py-12 lg:px-12 lg:py-14 dark:border-[#e08eac]/20 dark:bg-[#75334f]"
        >
          <div
            className="footer-orbit pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border border-dashed border-white/15"
            aria-hidden="true"
          >
            <span className="absolute bottom-[22%] left-[-7px] h-3.5 w-3.5 rounded-full border-[4px] border-[#8d4160] bg-[#f3b1c9] dark:border-[#75334f]" />
          </div>

          <div
            className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/[0.06] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 backdrop-blur-xl">
                <SparkleIcon className="h-4 w-4 text-[#ffd6e5]" />

                <span className="font-Inter text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Let&apos;s create together
                </span>
              </div>

              <h2 className="mt-6 font-Poppins text-[clamp(2.35rem,5.8vw,5.5rem)] font-semibold leading-[1.01] tracking-[-0.065em] text-white">
                Ready to make your brand
                <span className="block font-medium italic text-[#ffd1e2]">
                  impossible to overlook?
                </span>
              </h2>

              <p className="max-w-2xl mt-6 text-sm font-normal leading-7 font-Inter text-white/68 sm:text-base">
                Let&apos;s combine thoughtful strategy, purposeful content, and
                polished creative direction to build something your audience
                will remember.
              </p>
            </div>

            <a
              href="#contact"
              className="footer-magnetic group inline-flex min-h-[4rem] w-full items-center justify-between gap-5 rounded-full bg-white px-5 font-Inter text-sm font-semibold text-[#71384f] shadow-[0_20px_45px_rgba(47,15,29,0.18)] transition-colors duration-300 hover:bg-[#fff4f8] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:w-auto sm:min-w-[230px] sm:px-6 dark:bg-[#f3b3cb] dark:text-[#321722] dark:hover:bg-[#ffc8dd]"
            >
              Start a project
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8d4160] text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-[#321722]">
                <ArrowUpRightIcon className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.1fr_0.8fr_0.75fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div data-footer-reveal>
            <a
              href="#home"
              className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45"
              aria-label="Anna Marie — Back to home"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white/75 shadow-[0_12px_30px_rgba(92,46,64,0.12)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:border-white/10 dark:bg-white/[0.07]">
                <span className="absolute inset-1 rounded-full bg-[linear-gradient(145deg,#f8dbe6,#ead8f2)] dark:bg-[linear-gradient(145deg,#5f3345,#35243d)]" />

                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 object-contain max-h-8 max-w-8"
                />
              </span>

              <span>
                <span className="block font-Poppins text-base font-semibold tracking-[-0.025em] text-[#3c2932] dark:text-white">
                  Anna Marie
                </span>

                <span className="mt-0.5 block font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#9a7282] dark:text-[#bba8b0]">
                  Digital Marketing Specialist
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md font-Inter text-sm font-normal leading-7 text-[#75616a] dark:text-[#b9abb1]">
              Creating polished digital experiences through content strategy,
              paid advertising, visual design, video, and thoughtful brand
              communication.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#dbc1cb] bg-white/60 px-3.5 py-2 font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#785162] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:text-[#cdbcc3]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b75c7e] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a44e70]" />
                </span>
                Available for select work
              </span>

              <span className="rounded-full border border-[#dbc1cb] bg-white/60 px-3.5 py-2 font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#785162] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:text-[#cdbcc3]">
                Baguio City, Philippines
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div data-footer-navigation data-footer-reveal>
            <p className="font-Inter text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#a06b7f] dark:text-[#c798aa]">
              Explore
            </p>

            <nav className="mt-6" aria-label="Footer navigation">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.href} data-footer-link>
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 rounded-[1.1rem] border border-transparent px-3 py-3 transition-all duration-300 hover:translate-x-1 hover:border-[#dfc6d0] hover:bg-white/65 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/35 dark:hover:border-white/10 dark:hover:bg-white/[0.045]"
                    >
                      <span className="font-Inter text-[0.59rem] font-semibold tracking-[0.15em] text-[#b18d9b] dark:text-[#756b70]">
                        {item.number}
                      </span>

                      <span className="flex-1 font-Poppins text-base font-medium tracking-[-0.025em] text-[#4a323d] transition-colors duration-300 group-hover:text-[#9b496a] dark:text-[#eee5e9] dark:group-hover:text-[#efa8c2]">
                        {item.label}
                      </span>

                      <ArrowUpRightIcon className="h-4 w-4 text-[#a45a77] opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100 dark:text-[#d99ab1]" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div data-footer-reveal>
            <p className="font-Inter text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#a06b7f] dark:text-[#c798aa]">
              Connect
            </p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "facebook" ? "_blank" : undefined}
                  rel={social.icon === "facebook" ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-[1.2rem] border border-[#dfc6d0] bg-white/58 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b96887] hover:bg-white hover:shadow-[0_16px_35px_rgba(88,43,60,0.09)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/35 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2dbe4] text-[#9f4c6d] transition-colors duration-300 group-hover:bg-[#9f4c6d] group-hover:text-white dark:bg-[#d77d9e]/13 dark:text-[#eaa5be] dark:group-hover:bg-[#d77d9e] dark:group-hover:text-[#2d151f]">
                    {getSocialIcon(social.icon)}
                  </span>

                  <span className="flex-1 font-Poppins text-sm font-medium text-[#4a323d] dark:text-[#eee5e9]">
                    {social.label}
                  </span>

                  <ArrowUpRightIcon className="h-4 w-4 text-[#9f536f] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-[#dca0b6]" />
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="group mt-5 flex items-center justify-between gap-4 rounded-[1.2rem] border border-dashed border-[#d5b7c3] px-4 py-3.5 font-Inter text-xs font-semibold uppercase tracking-[0.12em] text-[#765161] transition-all duration-300 hover:border-[#a95776] hover:bg-[#f6e5ec] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/35 dark:border-white/10 dark:text-[#cdbcc3] dark:hover:bg-white/[0.045]"
            >
              Back to the top
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8d4160] text-white transition-transform duration-300 group-hover:-translate-y-1 dark:bg-[#d981a3] dark:text-[#2c151f]">
                <ArrowUpIcon className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-footer-reveal
          className="flex flex-col items-center justify-between gap-4 border-t border-[#dfc8d1] py-6 text-center sm:flex-row sm:text-left dark:border-white/10"
        >
          <p className="font-Inter text-xs font-medium text-[#88717b] dark:text-[#93878c]">
            © {currentYear} Anna Marie. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 font-Inter text-xs font-medium text-[#88717b] sm:justify-end dark:text-[#93878c]">
            Made with
            <HeartIcon className="h-3.5 w-3.5 animate-pulse text-[#b45578] dark:text-[#ed9dbb]" />
            by
            <a
              href="https://corneta-dale-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#8f405f] transition-colors duration-300 hover:text-[#b85d80] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#c97898]/50 dark:text-[#efa8c2] dark:hover:text-[#ffc2d8]"
            >
              Dale Corneta
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
