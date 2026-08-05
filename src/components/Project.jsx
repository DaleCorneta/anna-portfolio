import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GraphicDesign, { graphicDesignItems } from "./GraphicDesign";
import Video, { videoItems } from "./Video";
import Article, { articleItems } from "./Article";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: "graphic-design",
    label: "Graphic Design",
    shortLabel: "Design",
    count: graphicDesignItems.length,
    component: GraphicDesign,
  },
  {
    id: "videos",
    label: "Video Content",
    shortLabel: "Videos",
    count: videoItems.length,
    component: Video,
  },
  {
    id: "articles",
    label: "Articles",
    shortLabel: "Articles",
    count: articleItems.length,
    component: Article,
  },
];

const showcaseItems = [
  {
    id: graphicDesignItems[0],
    label: "Visual design",
    type: "design",
  },
  {
    id: videoItems[0],
    label: "Video content",
    type: "video",
  },
  {
    id: articleItems[0],
    label: "Editorial work",
    type: "article",
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

const DesignIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M4 20h16" />
    <path d="M6 16 16.5 5.5a2.12 2.12 0 0 1 3 3L9 19H6v-3Z" />
    <path d="m14.5 7.5 3 3" />
  </svg>
);

const VideoIcon = ({ className = "w-5 h-5" }) => (
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
    <rect x="3" y="5" width="14" height="14" rx="3" />
    <path d="m17 10 4-2v8l-4-2" />
    <path d="m9 9 4 3-4 3V9Z" />
  </svg>
);

const ArticleIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M6 3h9l4 4v14H6V3Z" />
    <path d="M15 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
    <path d="M9 9h2" />
  </svg>
);

const ImageIcon = ({ className = "h-7 w-7" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="9" cy="10" r="2" />
    <path d="m4 17 5-4 4 3 3-2 4 3" />
  </svg>
);

const PlayIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="m8 5 11 7-11 7V5Z" />
  </svg>
);

const getTabIcon = (tabId) => {
  if (tabId === "graphic-design") {
    return <DesignIcon className="w-4 h-4" />;
  }

  if (tabId === "videos") {
    return <VideoIcon className="w-4 h-4" />;
  }

  return <ArticleIcon className="w-4 h-4" />;
};

const getShowcasePosition = (index) => {
  if (index === 0) {
    return "left-0 top-8 -rotate-[7deg]";
  }

  if (index === 1) {
    return "left-1/2 top-0 z-20 -translate-x-1/2 rotate-[1deg]";
  }

  return "right-0 top-10 rotate-[7deg]";
};

const ProjectPreviewImage = ({ itemId, label, type, priority = false }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const sources = [
    `https://drive.google.com/thumbnail?id=${itemId}&sz=w1000`,
    `https://drive.google.com/thumbnail?id=${itemId}`,
    `https://lh3.googleusercontent.com/d/${itemId}=w1000`,
  ];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((currentIndex) => currentIndex + 1);
      return;
    }

    setFailed(true);
    setLoaded(true);

    window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  const handleLoad = () => {
    setLoaded(true);

    window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  if (failed) {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#f3dce5,#d9c7e6)] dark:bg-[linear-gradient(145deg,#4b2b39,#2b2130)]">
        <div
          className="absolute -right-7 -top-7 h-24 w-24 rounded-full border-[18px] border-white/20 dark:border-white/[0.05]"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center text-[#98506c] dark:text-[#e9a5bd]">
          {type === "video" ? (
            <PlayIcon className="w-8 h-8 mx-auto" />
          ) : (
            <ImageIcon className="mx-auto" />
          )}

          <p className="mt-3 font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.14em]">
            {label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#ead9e0] dark:bg-[#281d25]">
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[linear-gradient(145deg,#f3dce5,#e4d8ed)] dark:bg-[linear-gradient(145deg,#432936,#29212f)]">
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.45)_45%,transparent_70%)] bg-[length:250%_100%]" />

          <div className="relative flex h-full items-center justify-center text-[#a65a77] dark:text-[#d796ae]">
            {type === "video" ? (
              <PlayIcon className="h-7 w-7" />
            ) : (
              <ImageIcon className="h-7 w-7" />
            )}
          </div>
        </div>
      )}

      <img
        src={sources[sourceIndex]}
        alt={`${label} portfolio preview`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`h-full w-full object-contain p-1 transition-all duration-700 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {type === "video" && loaded && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#4b2032]/35 text-white shadow-lg backdrop-blur-xl">
          <PlayIcon className="ml-0.5 h-4 w-4" />
        </span>
      )}
    </div>
  );
};

const Project = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const tabButtonRefs = useRef([]);

  const [activeTab, setActiveTab] = useState("graphic-design");

  const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  const ActiveCollection = activeTabData.component;

  const totalProjects = tabs.reduce((total, tab) => total + tab.count, 0);

  /*
   * Critical fix:
   * The archive cards and tab buttons are never hidden.
   * GSAP only animates their position, so delayed layout
   * calculations cannot leave them invisible.
   */
  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const cleanupFunctions = [];
    const refreshTimers = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const revealElements = gsap.utils.toArray("[data-project-reveal]");

      const showcaseElements = gsap.utils.toArray("[data-project-showcase]");

      const tabElements = gsap.utils.toArray("[data-project-tab]");

      /*
       * Set all important interface elements visible before
       * creating any animation.
       */
      gsap.set([...revealElements, ...showcaseElements, ...tabElements], {
        autoAlpha: 1,
      });

      if (prefersReducedMotion) {
        gsap.set([...revealElements, ...showcaseElements, ...tabElements], {
          clearProps: "transform,opacity,visibility",
        });

        return;
      }

      /*
       * Only the section heading uses ScrollTrigger.
       * immediateRender:false prevents GSAP from hiding it
       * while waiting for the trigger.
       */
      gsap.fromTo(
        revealElements,
        {
          y: 34,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );

      /*
       * Archive cards render immediately.
       * Only their entrance position is animated.
       */
      gsap.fromTo(
        showcaseElements,
        {
          y: 26,
          scale: 0.96,
        },
        {
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /*
       * Tabs render immediately.
       * No opacity animation is used.
       */
      gsap.fromTo(
        tabElements,
        {
          y: 18,
        },
        {
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      gsap.to("[data-project-float='one']", {
        y: -10,
        rotation: -1.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-project-float='two']", {
        y: 12,
        rotation: 1.5,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".project-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".project-glow", {
        scale: 1.1,
        opacity: 0.9,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    const refreshScrollTrigger = () => {
      window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    /*
     * Refresh after the browser has painted the section.
     */
    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(refreshScrollTrigger);

      cleanupFunctions.push(() => {
        window.cancelAnimationFrame(secondFrame);
      });
    });

    cleanupFunctions.push(() => {
      window.cancelAnimationFrame(firstFrame);
    });

    /*
     * Refresh again after fonts and the general page layout settle.
     */
    refreshTimers.push(window.setTimeout(refreshScrollTrigger, 250));

    refreshTimers.push(window.setTimeout(refreshScrollTrigger, 900));

    /*
     * Refresh when remote Google Drive previews finish loading.
     */
    const images = Array.from(section.querySelectorAll("img"));

    images.forEach((image) => {
      if (image.complete) {
        return;
      }

      image.addEventListener("load", refreshScrollTrigger);

      image.addEventListener("error", refreshScrollTrigger);

      cleanupFunctions.push(() => {
        image.removeEventListener("load", refreshScrollTrigger);

        image.removeEventListener("error", refreshScrollTrigger);
      });
    });

    window.addEventListener("load", refreshScrollTrigger);

    cleanupFunctions.push(() => {
      window.removeEventListener("load", refreshScrollTrigger);
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup);

      cleanupFunctions.forEach((cleanup) => {
        cleanup();
      });

      refreshTimers.forEach((timer) => {
        window.clearTimeout(timer);
      });

      context.revert();
    };
  }, []);

  /*
   * Animate a newly selected collection without hiding it.
   */
  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return undefined;
    }

    gsap.set(content, {
      autoAlpha: 1,
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(content, {
        clearProps: "transform,opacity,visibility",
      });

      ScrollTrigger.refresh();

      return undefined;
    }

    const animation = gsap.fromTo(
      content,
      {
        y: 20,
      },
      {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      },
    );

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      animation.kill();
      window.cancelAnimationFrame(refreshFrame);

      gsap.set(content, {
        clearProps: "transform,opacity,visibility",
      });
    };
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabKeyDown = (event, currentIndex) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    handleTabChange(tabs[nextIndex].id);
    tabButtonRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative isolate overflow-hidden !py-0 bg-[#fff9fb] text-[#302028] dark:bg-[#100d13] dark:text-white"
    >
      {/* Ambient background */}
      <div
        className="project-glow pointer-events-none absolute -right-48 top-[8%] h-[36rem] w-[36rem] rounded-full bg-[#efc9d8]/50 blur-[130px] dark:bg-[#9d4c6c]/18"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-52 bottom-[10%] h-[34rem] w-[34rem] rounded-full bg-[#ded2ee]/60 blur-[135px] dark:bg-[#674775]/18"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,70,91,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(124,70,91,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 90%, transparent)",
        }}
        aria-hidden="true"
      />

      <div
        data-project-float="one"
        className="pointer-events-none absolute left-[5%] top-[11%] hidden text-[#b96787]/25 xl:block dark:text-[#eca5bf]/15"
        aria-hidden="true"
      >
        <SparkleIcon className="h-14 w-14" />
      </div>

      <div
        data-project-float="two"
        className="pointer-events-none absolute bottom-[14%] right-[5%] hidden h-16 w-16 rounded-full border border-[#be7590]/25 xl:block dark:border-[#eba5be]/15"
        aria-hidden="true"
      />

      <div className="relative w-full px-5 py-24 mx-auto max-w-7xl sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Heading and archive */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <div
              data-project-reveal
              className="inline-flex items-center gap-2 rounded-full border border-[#d6b5c2]/60 bg-white/70 px-4 py-2 opacity-100 shadow-[0_12px_34px_rgba(94,46,65,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
            >
              <SparkleIcon className="h-4 w-4 text-[#a75072] dark:text-[#efaac4]" />

              <span className="font-Inter text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#7e5264] dark:text-[#dec3cd]">
                Selected work
              </span>
            </div>

            <h2
              data-project-reveal
              className="mt-6 max-w-4xl font-Poppins text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.01] tracking-[-0.065em] text-[#302028] opacity-100 dark:text-[#fff8fb]"
            >
              A growing archive of ideas
              <span className="block font-medium italic text-[#a34e70] dark:text-[#eda8c2]">
                made to be seen.
              </span>
            </h2>

            <p
              data-project-reveal
              className="mt-7 max-w-2xl font-Inter text-base font-normal leading-7 text-[#705b64] opacity-100 dark:text-[#c6b9bf] sm:text-lg sm:leading-8"
            >
              Explore a collection of graphic design, video production, and
              written content created for digital audiences, campaigns, and
              brand communication.
            </p>

            <div
              data-project-reveal
              className="flex flex-wrap items-center gap-3 mt-8 opacity-100"
            >
              <div className="rounded-full border border-[#dcc2cc] bg-white/65 px-4 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
                <span className="font-Poppins text-lg font-semibold text-[#914360] dark:text-[#efa9c3]">
                  {totalProjects}
                </span>

                <span className="ml-2 font-Inter text-xs font-semibold uppercase tracking-[0.13em] text-[#907783] dark:text-[#a6989f]">
                  Portfolio pieces
                </span>
              </div>

              <div className="rounded-full border border-[#dcc2cc] bg-white/65 px-4 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
                <span className="font-Poppins text-lg font-semibold text-[#914360] dark:text-[#efa9c3]">
                  03
                </span>

                <span className="ml-2 font-Inter text-xs font-semibold uppercase tracking-[0.13em] text-[#907783] dark:text-[#a6989f]">
                  Creative disciplines
                </span>
              </div>
            </div>
          </div>

          {/* Visual archive */}
          <div
            data-project-archive
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div
              className="project-orbit pointer-events-none absolute -inset-5 rounded-[2.7rem] border border-dashed border-[#c98ba4]/30 dark:border-[#efb1ca]/15"
              aria-hidden="true"
            >
              <span className="absolute left-[22%] top-[-7px] h-3.5 w-3.5 rounded-full border-4 border-[#fff9fb] bg-[#aa5274] dark:border-[#100d13]" />

              <span className="absolute bottom-[20%] right-[-7px] h-3.5 w-3.5 rounded-full border-4 border-[#fff9fb] bg-[#dda0b7] dark:border-[#100d13]" />
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(145deg,#f7e2ea_0%,#fffdfd_52%,#e9dbf0_100%)] p-5 shadow-[0_35px_85px_rgba(83,40,58,0.16)] sm:min-h-[450px] sm:p-7 dark:border-white/10 dark:bg-[linear-gradient(145deg,#3f2632_0%,#1e171f_52%,#31233a_100%)] dark:shadow-[0_40px_95px_rgba(0,0,0,0.42)]">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#e9b8ca]/45 blur-3xl dark:bg-[#b85d80]/18"
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9b7181] dark:text-[#c195a6]">
                    Portfolio archive
                  </p>

                  <p className="mt-1 font-Poppins text-lg font-semibold tracking-[-0.03em] text-[#49303b] dark:text-white">
                    A visual index of the work
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#98506c] shadow-sm backdrop-blur-xl dark:bg-white/[0.07] dark:text-[#efa9c3]">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </div>

              <div className="relative mx-auto mt-8 h-[255px] max-w-[410px] sm:h-[300px]">
                {showcaseItems.map((item, index) => (
                  <div
                    key={item.id}
                    data-project-showcase
                    className={`group absolute block w-[42%] overflow-hidden rounded-[1.35rem] border border-white/85 bg-white p-2 opacity-100 shadow-[0_24px_55px_rgba(80,38,55,0.18)] transition-all duration-500 hover:z-30 hover:-translate-y-3 hover:rotate-0 sm:w-[40%] dark:border-white/10 dark:bg-[#211820] ${getShowcasePosition(
                      index,
                    )}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem]">
                      <ProjectPreviewImage
                        itemId={item.id}
                        label={item.label}
                        type={item.type}
                        priority={index === 1}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-2.5">
                      <span className="font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#806472] dark:text-[#b8a8af]">
                        {item.label}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#b85d7f]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-3 grid grid-cols-3 gap-2.5">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="rounded-[1rem] border border-white/70 bg-white/50 p-3 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <p className="font-Poppins text-lg font-semibold text-[#8e405e] dark:text-[#eba5bf]">
                      {tab.count}
                    </p>

                    <p className="mt-1 font-Inter text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-[#927984] dark:text-[#9f9197]">
                      {tab.shortLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div
          data-project-tabs
          className="mt-16 block rounded-[2rem] border border-[#dfc6d0]/75 bg-white/60 p-2 opacity-100 shadow-[0_20px_55px_rgba(88,43,60,0.07)] backdrop-blur-2xl lg:mt-24 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div
            role="tablist"
            aria-label="Project categories"
            className="grid grid-cols-1 gap-2 sm:grid-cols-3"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabButtonRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`${tab.id}-tab`}
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  data-project-tab
                  onClick={() => handleTabChange(tab.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`group relative flex min-h-[4.6rem] items-center gap-3 overflow-hidden rounded-[1.45rem] border px-4 text-left opacity-100 transition-all duration-300 hover:!scale-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/40 sm:px-5 ${
                    isActive
                      ? "border-[#a95676] bg-[#8d4160] text-white shadow-[0_15px_35px_rgba(113,48,73,0.22)] dark:border-[#dc88a7]/30 dark:bg-[#d981a3] dark:text-[#2c151f]"
                      : "border-transparent bg-transparent text-[#60434f] hover:border-[#dfc4ce] hover:bg-white/70 dark:text-[#d4c5cb] dark:hover:border-white/10 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-white/14 text-white dark:bg-[#2d151f]/10 dark:text-[#2d151f]"
                        : "border border-[#dcc3cd] bg-white/65 text-[#98506c] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#e2a1b9]"
                    }`}
                  >
                    {getTabIcon(tab.id)}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block truncate font-Poppins text-sm font-semibold tracking-[-0.02em]">
                      {tab.label}
                    </span>

                    <span
                      className={`mt-1 block font-Inter text-[0.59rem] font-semibold uppercase tracking-[0.14em] ${
                        isActive
                          ? "text-white/65 dark:text-[#2d151f]/60"
                          : "text-[#9b808b] dark:text-[#8d8086]"
                      }`}
                    >
                      Curated collection
                    </span>
                  </span>

                  <span
                    className={`font-Poppins text-lg font-semibold ${
                      isActive
                        ? "text-white dark:text-[#2d151f]"
                        : "text-[#9a4a69] dark:text-[#e6a4bc]"
                    }`}
                  >
                    {String(tab.count).padStart(2, "0")}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-0 left-6 right-6 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(45,21,31,0.5),transparent)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active collection */}
        <div
          ref={contentRef}
          id={`${activeTabData.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTabData.id}-tab`}
          tabIndex={0}
          className="mt-7 block rounded-[2.2rem] opacity-100 focus:outline-none sm:mt-8"
        >
          <ActiveCollection key={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Project;
