import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import logo from "../assets/images/logo.png";
import MobileNav from "./MobileNav";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];

const ArrowUpRightIcon = ({ className = "w-4 h-4" }) => (
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

const MenuIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 7h16" />
    <path d="M8 12h12" />
    <path d="M4 17h16" />
  </svg>
);

const Header = () => {
  const headerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (dark) {
      root.classList.add("dark");
      body.classList.add("dark");
      window.localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      window.localStorage.setItem("portfolio-theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    let animationFrame = null;

    const updateNavigationState = () => {
      setScrolled(window.scrollY > 18);

      const navigationMarker = window.scrollY + 180;
      let currentSection = "home";

      navigationItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section && navigationMarker >= section.offsetTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateNavigationState);
    };

    const handleResize = () => {
      updateNavigationState();

      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    updateNavigationState();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set("[data-header-reveal]", {
          clearProps: "all",
          autoAlpha: 1,
        });

        return;
      }

      gsap.from("[data-header-reveal]", {
        y: -18,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    }, header);

    return () => {
      context.revert();
    };
  }, []);

  const toggleTheme = () => {
    setDark((currentTheme) => !currentTheme);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[999] border-b transition-all duration-500 ${
          scrolled
            ? "border-[#d9bcc8]/55 bg-[#fff9fb]/85 py-2.5 shadow-[0_14px_45px_rgba(77,38,55,0.08)] backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[#100d13]/82 dark:shadow-[0_18px_50px_rgba(0,0,0,0.26)]"
            : "border-transparent bg-transparent py-4"
        }`}
      >
        <nav className="flex items-center justify-between w-full gap-4 px-5 mx-auto max-w-7xl sm:px-8 lg:px-10">
          {/* Brand */}
          <a
            data-header-reveal
            href="#home"
            onClick={() => setActiveSection("home")}
            className="group relative z-10 flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45"
            aria-label="Anna Marie — Back to home"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white/75 shadow-[0_10px_28px_rgba(92,46,64,0.12)] backdrop-blur-xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:border-white/10 dark:bg-white/[0.07]">
              <span className="absolute inset-1 rounded-full bg-[linear-gradient(145deg,#f8dbe6,#ead8f2)] dark:bg-[linear-gradient(145deg,#5f3345,#35243d)]" />

              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="relative z-10 object-contain max-h-8 max-w-8"
              />
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block truncate font-Poppins text-sm font-semibold tracking-[-0.02em] text-[#3c2932] dark:text-white">
                Anna Marie
              </span>

              <span className="mt-0.5 block truncate font-Inter text-[0.61rem] font-semibold uppercase tracking-[0.15em] text-[#9a7282] dark:text-[#bba8b0]">
                Digital marketing
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div
            data-header-reveal
            className="absolute hidden -translate-x-1/2 left-1/2 lg:block"
          >
            <ul className="flex items-center gap-1 rounded-full border border-[#d9c0ca]/65 bg-white/68 p-1.5 shadow-[0_15px_40px_rgba(89,45,62,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.055]">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setActiveSection(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative flex min-h-10 items-center justify-center rounded-full px-4 font-Inter text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c97898]/50 xl:px-5 ${
                        isActive
                          ? "bg-[#8d4160] text-white shadow-[0_10px_25px_rgba(120,53,80,0.20)] dark:bg-[#da85a5] dark:text-[#2c151f]"
                          : "text-[#6f5661] hover:bg-[#f7e9ee] hover:text-[#8d4160] dark:text-[#c8bac0] dark:hover:bg-white/[0.07] dark:hover:text-white"
                      }`}
                    >
                      {item.label}

                      {isActive && (
                        <span className="absolute -bottom-[7px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b85d80] dark:bg-[#efabc4]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Header actions */}
          <div
            data-header-reveal
            className="relative z-10 flex items-center gap-2 ml-auto"
          >
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c0ca]/65 bg-white/68 text-[#774a5d] shadow-[0_10px_28px_rgba(84,43,59,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd7893] hover:text-[#9d4d6d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-white/[0.055] dark:text-[#efb4ca] dark:hover:bg-white/[0.09]"
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <span
                  className={`absolute transition-all duration-500 ${
                    dark
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-50 opacity-0"
                  }`}
                >
                  <SunIcon />
                </span>

                <span
                  className={`absolute transition-all duration-500 ${
                    dark
                      ? "rotate-90 scale-50 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                >
                  <MoonIcon />
                </span>
              </span>
            </button>

            <a
              href="#contact"
              className="group hidden min-h-11 items-center justify-center gap-2 rounded-full bg-[#8d4160] px-5 font-Inter text-xs font-semibold text-white shadow-[0_14px_32px_rgba(119,50,78,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#77344f] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 sm:inline-flex lg:px-5 dark:bg-[#d981a3] dark:text-[#2b151e] dark:hover:bg-[#e798b5]"
            >
              Let&apos;s talk
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#d9c0ca]/65 bg-white/68 px-3.5 text-[#5f3c4b] shadow-[0_10px_28px_rgba(84,43,59,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#bd7893] hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 lg:hidden dark:border-white/10 dark:bg-white/[0.055] dark:text-white dark:hover:bg-white/[0.09]"
            >
              <MenuIcon />

              <span className="hidden font-Inter text-xs font-semibold min-[430px]:block">
                Menu
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={closeMenu}
        navigationItems={navigationItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        dark={dark}
        onToggleTheme={toggleTheme}
      />
    </>
  );
};

export default Header;
