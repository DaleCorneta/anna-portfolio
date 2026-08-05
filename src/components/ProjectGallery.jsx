import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const INITIAL_ITEMS = 8;
const ITEMS_PER_LOAD = 8;

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

const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
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

const getCategoryIcon = (kind) => {
  if (kind === "video") {
    return <VideoIcon />;
  }

  if (kind === "article") {
    return <ArticleIcon />;
  }

  return <DesignIcon />;
};

const getGridClass = (index) => {
  if (index === 0) {
    return "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2";
  }

  if (index % 11 === 0) {
    return "sm:col-span-2 lg:col-span-2";
  }

  if (index % 7 === 0) {
    return "lg:row-span-2";
  }

  if (index % 5 === 0) {
    return "sm:col-span-2 lg:col-span-2";
  }

  return "";
};

const ProjectImage = ({ itemId, alt, kind, background = false }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const sources = [
    `https://drive.google.com/thumbnail?id=${itemId}&sz=w1600`,
    `https://drive.google.com/thumbnail?id=${itemId}`,
    `https://lh3.googleusercontent.com/d/${itemId}=w1600`,
  ];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((currentIndex) => currentIndex + 1);
      return;
    }

    setFailed(true);
  };

  if (failed) {
    if (background) {
      return (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_40%),linear-gradient(145deg,#dba6b9,#87506b)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%),linear-gradient(145deg,#573145,#261b24)]"
          aria-hidden="true"
        />
      );
    }

    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#efd9e2,#d9c5e6)] dark:bg-[linear-gradient(145deg,#462b37,#2d2233)]">
        <div className="text-center text-[#98506c] dark:text-[#e9a5bd]">
          <ImageIcon className="mx-auto" />

          <p className="mt-3 font-Inter text-[0.6rem] font-semibold uppercase tracking-[0.14em]">
            Preview unavailable
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt={background ? "" : alt}
      aria-hidden={background ? "true" : undefined}
      loading="lazy"
      onError={handleError}
      className={
        background
          ? "absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl transition-transform duration-700 group-hover:scale-125 dark:opacity-25"
          : `relative h-full w-full transition-transform duration-700 group-hover:scale-[1.035] ${
              kind === "video" ? "object-cover" : "object-contain p-2 sm:p-3"
            }`
      }
    />
  );
};

const ProjectGallery = ({
  items = [],
  category,
  eyebrow,
  description,
  tags = [],
  kind = "design",
  buildLink,
}) => {
  const gridRef = useRef(null);
  const animatedCountRef = useRef(0);

  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);

  const visibleItems = useMemo(() => {
    return items.slice(0, visibleCount);
  }, [items, visibleCount]);

  const hasMore = visibleItems.length < items.length;

  const progress =
    items.length > 0
      ? Math.round((visibleItems.length / items.length) * 100)
      : 0;

  /*
   * Animate only newly loaded cards.
   *
   * gsap.context().revert() is important here because React Strict
   * Mode mounts and cleans effects twice during development.
   * Reverting removes any temporary opacity and transform styles.
   */
  useLayoutEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return undefined;
    }

    const cards = Array.from(grid.querySelectorAll("[data-gallery-card]"));

    const startIndex = Math.min(animatedCountRef.current, cards.length);

    const newCards = cards.slice(startIndex);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion || newCards.length === 0) {
        gsap.set(cards, {
          autoAlpha: 1,
          clearProps: "transform,visibility,opacity",
        });

        return;
      }

      gsap.fromTo(
        newCards,
        {
          y: 36,
          scale: 0.96,
          autoAlpha: 0,
        },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.72,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "transform,visibility,opacity",
        },
      );
    }, grid);

    animatedCountRef.current = cards.length;

    return () => {
      context.revert();
    };
  }, [visibleItems.length]);

  const openProject = (itemId) => {
    if (typeof buildLink !== "function") {
      return;
    }

    const link = buildLink(itemId);

    const projectWindow = window.open(link, "_blank", "noopener,noreferrer");

    if (projectWindow) {
      projectWindow.opener = null;
    }
  };

  const loadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + ITEMS_PER_LOAD, items.length),
    );
  };

  if (!items.length) {
    return (
      <div className="rounded-[2rem] border border-[#dfc6d0]/75 bg-white/60 p-10 text-center shadow-[0_20px_55px_rgba(88,43,60,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3dce5] text-[#a04d6e] dark:bg-[#d77d9e]/15 dark:text-[#eca7c0]">
          <ImageIcon />
        </span>

        <h3 className="mt-5 font-Poppins !text-2xl font-semibold text-[#402b35] dark:text-white">
          No projects found
        </h3>

        <p className="mx-auto mt-3 max-w-xl font-Inter text-sm leading-6 text-[#75616a] dark:text-[#bfb1b7]">
          Make sure the project ID array in this category component contains its
          Google Drive file IDs.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Collection information */}
      <div className="grid gap-4 rounded-[2rem] border border-[#dfc6d0]/75 bg-white/62 p-5 shadow-[0_22px_60px_rgba(88,43,60,0.07)] backdrop-blur-2xl sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center dark:border-white/10 dark:bg-white/[0.04]">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3dce5] text-[#a04d6e] shadow-sm dark:bg-[#d77d9e]/15 dark:text-[#eca7c0]">
            {getCategoryIcon(kind)}
          </span>

          <div>
            <p className="font-Inter text-[0.63rem] font-semibold uppercase tracking-[0.19em] text-[#a06b7f] dark:text-[#c798aa]">
              {eyebrow}
            </p>

            <h3 className="mt-2 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402b35] dark:text-white sm:!text-3xl">
              {category}
            </h3>

            <p className="mt-3 max-w-3xl font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dfc5cf] bg-[#fffafb] px-3 py-1.5 font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#815568] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#cdbbc2]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 rounded-[1.4rem] border border-[#dfc5cf] bg-[#fffafb]/70 p-4 lg:min-w-[230px] dark:border-white/10 dark:bg-white/[0.035]">
          <div>
            <p className="font-Inter text-[0.59rem] font-semibold uppercase tracking-[0.15em] text-[#a0818d] dark:text-[#8f8388]">
              Collection size
            </p>

            <p className="mt-1 font-Poppins text-3xl font-semibold tracking-[-0.04em] text-[#934360] dark:text-[#eea8c2]">
              {items.length}
            </p>
          </div>

          <div className="h-11 w-px bg-[#e1ccd5] dark:bg-white/10" />

          <div>
            <p className="font-Inter text-[0.59rem] font-semibold uppercase tracking-[0.15em] text-[#a0818d] dark:text-[#8f8388]">
              Visible
            </p>

            <p className="mt-1 font-Poppins text-3xl font-semibold tracking-[-0.04em] text-[#4b323d] dark:text-white">
              {visibleItems.length}
            </p>
          </div>
        </div>
      </div>

      {/* Project cards */}
      <div
        ref={gridRef}
        className="mt-5 grid auto-rows-[230px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-4"
      >
        {visibleItems.map((itemId, index) => {
          const isFeatured = index === 0;

          return (
            <button
              key={itemId}
              type="button"
              data-gallery-card
              onClick={() => openProject(itemId)}
              aria-label={`Open ${category} project ${index + 1}`}
              className={`group relative isolate min-h-[230px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#ead9e1] text-left opacity-100 shadow-[0_20px_48px_rgba(79,37,54,0.11)] transition-all duration-500 hover:-translate-y-1.5 hover:!scale-100 hover:border-[#c9849f] hover:shadow-[0_28px_65px_rgba(91,40,61,0.17)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-[#211820] dark:hover:border-[#da87a6]/35 ${getGridClass(
                index,
              )}`}
            >
              <ProjectImage itemId={itemId} alt="" kind={kind} background />

              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.30),transparent_50%,rgba(54,23,37,0.20))] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.05),transparent_50%,rgba(0,0,0,0.45))]" />

              <ProjectImage
                itemId={itemId}
                alt={`${category} portfolio item ${index + 1}`}
                kind={kind}
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(35,15,25,0.88)_0%,rgba(35,15,25,0.12)_46%,transparent_70%)] opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Card number */}
              <div className="absolute flex items-center gap-2 left-4 top-4">
                <span className="rounded-full border border-white/25 bg-[#28131d]/45 px-3 py-1.5 font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {isFeatured && (
                  <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                    Featured
                  </span>
                )}
              </div>

              {kind === "video" && (
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a34c6e]">
                  <PlayIcon className="w-5 h-5 ml-1" />
                </span>
              )}

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <div className="min-w-0">
                  <p className="font-Inter text-[0.59rem] font-semibold uppercase tracking-[0.16em] text-white/60">
                    {eyebrow}
                  </p>

                  <p
                    className={`mt-1 truncate font-Poppins font-semibold tracking-[-0.025em] text-white ${
                      isFeatured ? "text-xl sm:text-2xl" : "text-base"
                    }`}
                  >
                    {category} #{String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-xl transition-all duration-300 group-hover:rotate-45 group-hover:border-white/40 group-hover:bg-[#a44d6f]">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </div>

              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,transparent,#f2afc8,transparent)] transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          );
        })}
      </div>

      {/* Load-more area */}
      <div className="mt-7 rounded-[1.75rem] border border-[#dfc7d1]/75 bg-white/55 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] sm:p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <p className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#8c6f7b] dark:text-[#a19399]">
                Viewing {visibleItems.length} of {items.length}
              </p>

              <span className="font-Poppins text-sm font-semibold text-[#944462] dark:text-[#eba5bf]">
                {progress}%
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ead9e0] dark:bg-white/[0.07]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#8d4160,#d889a7)] transition-[width] duration-700 ease-out dark:bg-[linear-gradient(90deg,#bd6385,#eea9c2)]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {hasMore ? (
            <button
              type="button"
              onClick={loadMore}
              className="group inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-[#8d4160] px-6 font-Inter text-sm font-semibold text-white shadow-[0_14px_34px_rgba(113,48,73,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:!scale-100 hover:bg-[#75334e] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:bg-[#d981a3] dark:text-[#2c151f] dark:hover:bg-[#e798b5]"
            >
              <PlusIcon className="w-4 h-4 transition-transform duration-500 group-hover:rotate-90" />
              Load more work
              <span className="rounded-full bg-white/15 px-2.5 py-1 font-Poppins text-[0.65rem] dark:bg-[#2c151f]/10">
                +{Math.min(ITEMS_PER_LOAD, items.length - visibleItems.length)}
              </span>
            </button>
          ) : (
            <div className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-[#d8bdc8] bg-[#fffafb]/75 px-5 font-Inter text-xs font-semibold uppercase tracking-[0.12em] text-[#815568] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#cdbbc2]">
              Full collection displayed
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
