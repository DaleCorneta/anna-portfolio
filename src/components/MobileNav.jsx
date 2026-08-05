import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import logo from "../assets/images/logo.png";

const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
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

const SunIcon = ({ className = "w-5 h-5" }) => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.42 1.42" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />
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

const MobileNav = ({
  open,
  onClose,
  navigationItems,
  activeSection,
  setActiveSection,
  dark,
  onToggleTheme,
}) => {
  const rootRef = useRef(null);
  const backdropRef = useRef(null);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useLayoutEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;

    if (!backdrop || !panel) {
      return undefined;
    }

    gsap.set(backdrop, {
      autoAlpha: 0,
    });

    gsap.set(panel, {
      autoAlpha: 0,
      yPercent: 105,
      scale: 0.985,
    });

    return () => {
      gsap.killTweensOf([
        backdrop,
        panel,
        panel.querySelectorAll("[data-mobile-item]"),
      ]);
    };
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const backdrop = backdropRef.current;
    const panel = panelRef.current;

    if (!root || !backdrop || !panel) {
      return undefined;
    }

    const menuItems = panel.querySelectorAll("[data-mobile-item]");

    const decorativeItems = panel.querySelectorAll("[data-mobile-decoration]");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.killTweensOf([backdrop, panel, menuItems, decorativeItems]);

    if (prefersReducedMotion) {
      gsap.set(backdrop, {
        autoAlpha: open ? 1 : 0,
      });

      gsap.set(panel, {
        autoAlpha: open ? 1 : 0,
        yPercent: open ? 0 : 105,
        scale: 1,
      });

      gsap.set(menuItems, {
        autoAlpha: open ? 1 : 0,
        y: 0,
      });

      return undefined;
    }

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    if (open) {
      timeline
        .to(backdrop, {
          autoAlpha: 1,
          duration: 0.35,
        })
        .to(
          panel,
          {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.72,
            ease: "power4.out",
          },
          0,
        )
        .fromTo(
          menuItems,
          {
            y: 26,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            stagger: 0.065,
          },
          0.22,
        )
        .fromTo(
          decorativeItems,
          {
            scale: 0.75,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.65,
            stagger: 0.08,
          },
          0.3,
        );

      return () => {
        timeline.kill();
      };
    }

    timeline
      .to(menuItems, {
        y: 12,
        autoAlpha: 0,
        duration: 0.2,
        stagger: {
          each: 0.025,
          from: "end",
        },
        ease: "power2.in",
      })
      .to(
        panel,
        {
          yPercent: 105,
          scale: 0.985,
          autoAlpha: 0,
          duration: 0.48,
          ease: "power3.inOut",
        },
        0.08,
      )
      .to(
        backdrop,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        0.2,
      );

    return () => {
      timeline.kill();
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 150);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyboardNavigation = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = rootRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyboardNavigation);

    return () => {
      document.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, [open, onClose]);

  const handleNavigationClick = (sectionId) => {
    setActiveSection(sectionId);
    onClose();
  };

  return (
    <div
      ref={rootRef}
      id="mobile-navigation"
      className={`fixed inset-0 z-[1000] lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        ref={backdropRef}
        type="button"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        aria-label="Close navigation menu"
        className="absolute inset-0 h-full w-full cursor-default bg-[#24151d]/35 backdrop-blur-md dark:bg-black/60"
      />

      {/* Navigation panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute inset-x-2 bottom-2 top-3 flex flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-[#fff9fb] shadow-[0_35px_100px_rgba(54,25,38,0.34)] sm:inset-x-4 sm:bottom-4 sm:top-4 dark:border-white/10 dark:bg-[#130f15] dark:shadow-[0_40px_110px_rgba(0,0,0,0.65)]"
      >
        {/* Decorative background */}
        <div
          data-mobile-decoration
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#efc5d5]/65 blur-[80px] dark:bg-[#9d4c6b]/25"
          aria-hidden="true"
        />

        <div
          data-mobile-decoration
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#dfd0ed]/70 blur-[90px] dark:bg-[#674676]/25"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,70,91,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(124,70,91,0.055) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-7 sm:pt-6">
          {/* Top area */}
          <div
            data-mobile-item
            className="flex items-center justify-between gap-4"
          >
            <a
              href="#home"
              onClick={() => handleNavigationClick("home")}
              className="flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45"
              tabIndex={open ? 0 : -1}
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white/75 shadow-[0_10px_26px_rgba(86,42,60,0.12)] dark:border-white/10 dark:bg-white/[0.07]">
                <span className="absolute inset-1 rounded-full bg-[linear-gradient(145deg,#f8dbe6,#ead8f2)] dark:bg-[linear-gradient(145deg,#5f3345,#35243d)]" />

                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 object-contain max-h-8 max-w-8"
                />
              </span>

              <span className="min-w-0">
                <span className="block truncate font-Poppins text-sm font-semibold tracking-[-0.02em] text-[#3b2831] dark:text-white">
                  Anna Marie
                </span>

                <span className="mt-0.5 block truncate font-Inter text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-[#98717f] dark:text-[#b9a7ae]">
                  Digital marketing
                </span>
              </span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbc3cd] bg-white/72 text-[#684454] shadow-sm backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-[#bd7893] hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.10]"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Menu label */}
          <div data-mobile-item className="flex items-center gap-3 mt-10">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4dce5] text-[#9f4e6e] dark:bg-[#d57a9c]/15 dark:text-[#efa9c3]">
              <SparkleIcon className="w-4 h-4" />
            </span>

            <p className="font-Inter text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#9a7382] dark:text-[#ae9ca4]">
              Explore portfolio
            </p>

            <span className="h-px flex-1 bg-[#dfc9d2] dark:bg-white/10" />
          </div>

          {/* Main navigation */}
          <nav className="mt-5" aria-label="Mobile primary navigation">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id} data-mobile-item>
                    <a
                      href={item.href}
                      onClick={() => handleNavigationClick(item.id)}
                      tabIndex={open ? 0 : -1}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex min-h-[4.6rem] items-center gap-4 overflow-hidden rounded-[1.35rem] border px-4 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/40 sm:min-h-[5rem] sm:px-5 ${
                        isActive
                          ? "border-[#c98ba4]/55 bg-[#f6e3ea] shadow-[0_14px_32px_rgba(107,52,74,0.09)] dark:border-[#df8fad]/25 dark:bg-[#d77d9e]/10"
                          : "border-transparent hover:border-[#dec5cf] hover:bg-white/60 dark:hover:border-white/10 dark:hover:bg-white/[0.045]"
                      }`}
                    >
                      <span
                        className={`font-Inter text-[0.64rem] font-semibold tracking-[0.16em] ${
                          isActive
                            ? "text-[#a55072] dark:text-[#ef9fbd]"
                            : "text-[#aa8d98] dark:text-[#756c71]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 font-Poppins text-[clamp(1.75rem,8vw,2.35rem)] font-medium leading-none tracking-[-0.055em] ${
                          isActive
                            ? "text-[#70374e] dark:text-[#f3cada]"
                            : "text-[#3d2932] dark:text-[#f4edf0]"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
                          isActive
                            ? "bg-[#8d4160] text-white shadow-[0_10px_24px_rgba(115,50,76,0.20)] dark:bg-[#dc86a6] dark:text-[#2d151f]"
                            : "border border-[#dbc4cd] bg-white/65 text-[#815266] group-hover:border-[#bd7893] group-hover:bg-[#9b4a6b] group-hover:text-white dark:border-white/10 dark:bg-white/[0.05] dark:text-[#d9c4cc] dark:group-hover:bg-[#d87e9f] dark:group-hover:text-[#2d151f]"
                        }`}
                      >
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </span>

                      {isActive && (
                        <span className="absolute bottom-0 left-5 right-5 h-px bg-[linear-gradient(90deg,transparent,#bf6b8b,transparent)] dark:bg-[linear-gradient(90deg,transparent,#e699b6,transparent)]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom content */}
          <div className="pt-8 mt-auto">
            <div
              data-mobile-item
              className="rounded-[1.55rem] border border-[#dbc3cd]/75 bg-white/60 p-4 shadow-[0_14px_34px_rgba(86,42,59,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-Inter text-[0.63rem] font-semibold uppercase tracking-[0.17em] text-[#9a7382] dark:text-[#a899a0]">
                    Appearance
                  </p>

                  <p className="mt-1 font-Poppins text-sm font-medium text-[#4c333e] dark:text-[#f3e9ed]">
                    {dark ? "Dark mode" : "Light mode"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onToggleTheme}
                  tabIndex={open ? 0 : -1}
                  aria-label={
                    dark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  aria-pressed={dark}
                  className="relative flex h-11 w-[5.25rem] items-center rounded-full border border-[#d6bac6] bg-[#f7e6ec] p-1 transition-colors duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-white/[0.07]"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#865268] shadow-[0_7px_18px_rgba(82,41,57,0.16)] transition-transform duration-500 dark:bg-[#d984a4] dark:text-[#2c151f] ${
                      dark ? "translate-x-[2.45rem]" : "translate-x-0"
                    }`}
                  >
                    {dark ? (
                      <SunIcon className="w-4 h-4" />
                    ) : (
                      <MoonIcon className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </div>
            </div>

            <div
              data-mobile-item
              className="mt-3 grid grid-cols-[1fr_auto] gap-3"
            >
              <a
                href="#contact"
                onClick={() => handleNavigationClick("contact")}
                tabIndex={open ? 0 : -1}
                className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#8d4160] px-5 font-Inter text-sm font-semibold text-white shadow-[0_16px_36px_rgba(116,50,76,0.22)] transition-all duration-300 hover:bg-[#75334e] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:bg-[#d981a3] dark:text-[#2c151f] dark:hover:bg-[#e798b5]"
              >
                Start a conversation
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.facebook.com/00annamarie00"
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
                aria-label="Visit Anna Marie on Facebook"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d9bec9] bg-white/70 text-[#8d4562] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a95879] hover:bg-[#a95879] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-white/[0.055] dark:text-[#efb3ca] dark:hover:bg-[#d77f9f] dark:hover:text-[#29141d]"
              >
                <FacebookIcon />
              </a>
            </div>

            <div
              data-mobile-item
              className="flex items-center justify-center gap-2 mt-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#b95e81]" />

              <p className="font-Inter text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[#9a838c] dark:text-[#81767b]">
                Creative strategy · content · growth
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;
