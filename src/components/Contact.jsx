import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = "iamannamarie1998@gmail.com";
const CONTACT_PHONE = "+639094118913";
const FACEBOOK_URL = "https://www.facebook.com/00annamarie00";

const projectTypes = [
  "Social media strategy",
  "Paid advertising campaign",
  "Graphic design",
  "Video content",
  "Content writing and SEO",
  "Website or UI design",
  "General collaboration",
];

const initialFormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

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

const SendIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    <path d="M22 2 11 13" />
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

const PhoneIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CopyIcon = ({ className = "w-4 h-4" }) => (
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
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
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

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
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
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
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
    <rect x="3" y="7" width="18" height="13" rx="3" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

const MessageIcon = ({ className = "w-5 h-5" }) => (
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
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
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

const Contact = () => {
  const sectionRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  const [formData, setFormData] = useState(initialFormData);

  const [copiedField, setCopiedField] = useState("");

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

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
            "[data-contact-reveal]",
            "[data-contact-card]",
            "[data-contact-float]",
          ],
          {
            clearProps: "all",
            autoAlpha: 1,
          },
        );

        return;
      }

      gsap.from("[data-contact-reveal]", {
        y: 38,
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

      gsap.from("[data-contact-card]", {
        y: 52,
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-contact-layout]",
          start: "top 78%",
          once: true,
        },
      });

      gsap.to("[data-contact-float='one']", {
        y: -12,
        rotation: -2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-contact-float='two']", {
        y: 10,
        rotation: 2,
        duration: 4.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 32,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".contact-glow", {
        scale: 1.1,
        opacity: 0.95,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const magneticElements = gsap.utils.toArray(".contact-magnetic");

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
    }, section);

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (formStatus.type) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  const copyToClipboard = async (value, fieldName) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = value;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.focus();
        temporaryInput.select();

        document.execCommand("copy");
        temporaryInput.remove();
      }

      setCopiedField(fieldName);

      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedField("");
      }, 1800);
    } catch {
      setCopiedField("");

      setFormStatus({
        type: "error",
        message:
          "Copying was blocked by the browser. Please select and copy the contact detail manually.",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType.trim(),
      message: formData.message.trim(),
    };

    if (
      !trimmedData.name ||
      !trimmedData.email ||
      !trimmedData.projectType ||
      !trimmedData.message
    ) {
      setFormStatus({
        type: "error",
        message: "Please complete all fields before preparing your message.",
      });

      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry: ${trimmedData.projectType}`,
    );

    const body = encodeURIComponent(
      [
        `Hello Anna Marie,`,
        "",
        `My name is ${trimmedData.name}.`,
        `Email: ${trimmedData.email}`,
        `Project type: ${trimmedData.projectType}`,
        "",
        trimmedData.message,
        "",
        "Sent from your portfolio contact form.",
      ].join("\n"),
    );

    setFormStatus({
      type: "success",
      message:
        "Your email application should open with the message prepared. Review it, then press Send.",
    });

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate overflow-hidden !py-0 bg-[#fffdfd] text-[#302028] dark:bg-[#120f14] dark:text-white"
    >
      {/* Ambient background */}
      <div
        className="contact-glow pointer-events-none absolute -left-52 top-[12%] h-[36rem] w-[36rem] rounded-full bg-[#efc8d7]/50 blur-[130px] dark:bg-[#9c4b6a]/17"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-[4%] h-[34rem] w-[34rem] rounded-full bg-[#dfd2ee]/60 blur-[135px] dark:bg-[#6c4979]/18"
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
        data-contact-float="one"
        className="pointer-events-none absolute left-[5%] top-[12%] hidden text-[#bd718e]/25 xl:block dark:text-[#efa9c3]/15"
        aria-hidden="true"
      >
        <SparkleIcon className="h-14 w-14" />
      </div>

      <div
        data-contact-float="two"
        className="pointer-events-none absolute bottom-[12%] right-[6%] hidden h-16 w-16 rounded-full border border-[#be7590]/25 xl:block dark:border-[#eba5be]/15"
        aria-hidden="true"
      />

      <div className="relative w-full px-5 py-24 mx-auto max-w-7xl sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="max-w-4xl mx-auto text-center">
          <div
            data-contact-reveal
            className="inline-flex items-center gap-2 rounded-full border border-[#d6b5c2]/60 bg-white/70 px-4 py-2 shadow-[0_12px_34px_rgba(94,46,65,0.07)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ba6688] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#a84f73]" />
            </span>

            <span className="font-Inter text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#7e5264] dark:text-[#dec3cd]">
              Open for collaborations
            </span>
          </div>

          <h2
            data-contact-reveal
            className="mt-6 font-Poppins text-[clamp(2.5rem,6vw,5.6rem)] font-semibold leading-[1.01] tracking-[-0.065em] text-[#302028] dark:text-[#fff8fb]"
          >
            Have an idea worth
            <span className="block font-medium italic text-[#a34e70] dark:text-[#eda8c2]">
              bringing to life?
            </span>
          </h2>

          <p
            data-contact-reveal
            className="mx-auto mt-7 max-w-2xl font-Inter text-base font-normal leading-7 text-[#705b64] dark:text-[#c6b9bf] sm:text-lg sm:leading-8"
          >
            Tell me about the brand, campaign, content, or digital experience
            you have in mind. Let&apos;s shape something thoughtful, polished,
            and purposeful.
          </p>
        </div>

        <div
          data-contact-layout
          className="mt-14 grid items-stretch gap-5 lg:mt-20 lg:grid-cols-[1.12fr_0.88fr]"
        >
          {/* Contact form */}
          <article
            data-contact-card
            className="relative overflow-hidden rounded-[2.2rem] border border-[#dfc6d0]/80 bg-white/68 p-5 shadow-[0_30px_80px_rgba(84,40,58,0.10)] backdrop-blur-2xl sm:p-8 lg:p-10 dark:border-white/10 dark:bg-white/[0.045]"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#efc8d7]/40 blur-3xl dark:bg-[#a75171]/15"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.19em] text-[#a06b7f] dark:text-[#c798aa]">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 font-Poppins !text-2xl font-semibold tracking-[-0.04em] text-[#402b35] dark:text-white sm:!text-3xl">
                    Send me a message.
                  </h3>

                  <p className="mt-3 max-w-xl font-Inter text-sm font-normal leading-6 text-[#75616a] dark:text-[#bfb1b7]">
                    Complete the form and your default email application will
                    open with everything prepared.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dfc4cf] bg-[#fffafb]/75 px-3.5 py-2 dark:border-white/10 dark:bg-white/[0.045]">
                  <span className="h-2 w-2 rounded-full bg-[#68a77b]" />

                  <span className="font-Inter text-[0.61rem] font-semibold uppercase tracking-[0.14em] text-[#7e6670] dark:text-[#b7aab0]">
                    Currently available
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2.5 block font-Inter text-xs font-semibold text-[#573b47] dark:text-[#e7dce1]"
                    >
                      Your name
                    </label>

                    <div className="relative group">
                      <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#a37083] transition-colors duration-300 group-focus-within:text-[#9c496a] dark:text-[#a7979e] dark:group-focus-within:text-[#eca7c0]">
                        <UserIcon className="h-[1.1rem] w-[1.1rem]" />
                      </span>

                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleFieldChange}
                        autoComplete="name"
                        placeholder="Enter your full name"
                        required
                        className="!mb-0 min-h-[3.65rem] w-full !rounded-[1.15rem] !border-[#dfc7d1] !bg-[#fffafb]/75 !py-3 !pl-12 !pr-4 font-Inter text-sm font-medium text-[#3f2b34] shadow-sm transition-all duration-300 placeholder:text-[#ab929c] focus:!border-[#b86786] focus:!ring-4 focus:!ring-[#dba7bb]/20 dark:!border-white/10 dark:!bg-white/[0.04] dark:text-white dark:placeholder:text-[#7f7479] dark:focus:!border-[#dc87a6]/45"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2.5 block font-Inter text-xs font-semibold text-[#573b47] dark:text-[#e7dce1]"
                    >
                      Email address
                    </label>

                    <div className="relative group">
                      <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#a37083] transition-colors duration-300 group-focus-within:text-[#9c496a] dark:text-[#a7979e] dark:group-focus-within:text-[#eca7c0]">
                        <MailIcon className="h-[1.1rem] w-[1.1rem]" />
                      </span>

                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleFieldChange}
                        autoComplete="email"
                        placeholder="name@example.com"
                        required
                        className="!mb-0 min-h-[3.65rem] w-full !rounded-[1.15rem] !border-[#dfc7d1] !bg-[#fffafb]/75 !py-3 !pl-12 !pr-4 font-Inter text-sm font-medium text-[#3f2b34] shadow-sm transition-all duration-300 placeholder:text-[#ab929c] focus:!border-[#b86786] focus:!ring-4 focus:!ring-[#dba7bb]/20 dark:!border-white/10 dark:!bg-white/[0.04] dark:text-white dark:placeholder:text-[#7f7479] dark:focus:!border-[#dc87a6]/45"
                      />
                    </div>
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="mb-2.5 block font-Inter text-xs font-semibold text-[#573b47] dark:text-[#e7dce1]"
                  >
                    What can I help you with?
                  </label>

                  <div className="relative group">
                    <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#a37083] transition-colors duration-300 group-focus-within:text-[#9c496a] dark:text-[#a7979e] dark:group-focus-within:text-[#eca7c0]">
                      <BriefcaseIcon className="h-[1.1rem] w-[1.1rem]" />
                    </span>

                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFieldChange}
                      required
                      className="min-h-[3.65rem] w-full appearance-none rounded-[1.15rem] border border-[#dfc7d1] bg-[#fffafb]/75 py-3 pl-12 pr-12 font-Inter text-sm font-medium text-[#3f2b34] shadow-sm outline-none transition-all duration-300 focus:border-[#b86786] focus:ring-4 focus:ring-[#dba7bb]/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-[#dc87a6]/45"
                    >
                      <option value="" className="text-[#3f2b34]">
                        Select a project type
                      </option>

                      {projectTypes.map((projectType) => (
                        <option
                          key={projectType}
                          value={projectType}
                          className="text-[#3f2b34]"
                        >
                          {projectType}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9d7484] dark:text-[#a899a0]">
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="mb-2.5 flex items-center justify-between gap-4">
                    <label
                      htmlFor="contact-message"
                      className="font-Inter text-xs font-semibold text-[#573b47] dark:text-[#e7dce1]"
                    >
                      Tell me about your idea
                    </label>

                    <span className="font-Inter text-[0.62rem] font-medium text-[#a28893] dark:text-[#84787e]">
                      {formData.message.length} characters
                    </span>
                  </div>

                  <div className="relative group">
                    <span className="pointer-events-none absolute left-4 top-4 z-10 text-[#a37083] transition-colors duration-300 group-focus-within:text-[#9c496a] dark:text-[#a7979e] dark:group-focus-within:text-[#eca7c0]">
                      <MessageIcon className="h-[1.1rem] w-[1.1rem]" />
                    </span>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleFieldChange}
                      placeholder="Share your goals, audience, timeline, or any details that would help me understand the project."
                      rows={7}
                      minLength={10}
                      required
                      className="!mb-0 min-h-[11rem] w-full !rounded-[1.25rem] !border-[#dfc7d1] !bg-[#fffafb]/75 !pb-4 !pl-12 !pr-4 !pt-4 font-Inter text-sm font-medium leading-6 text-[#3f2b34] shadow-sm transition-all duration-300 placeholder:text-[#ab929c] focus:!border-[#b86786] focus:!ring-4 focus:!ring-[#dba7bb]/20 dark:!border-white/10 dark:!bg-white/[0.04] dark:text-white dark:placeholder:text-[#7f7479] dark:focus:!border-[#dc87a6]/45"
                    />
                  </div>
                </div>

                {/* Status */}
                {formStatus.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-[1.15rem] border px-4 py-3.5 ${
                      formStatus.type === "success"
                        ? "border-[#9ac5a8]/50 bg-[#edf7f0] text-[#436950] dark:border-[#70a47f]/25 dark:bg-[#6c9d78]/10 dark:text-[#b8ddc1]"
                        : "border-[#da9daa]/55 bg-[#fff0f3] text-[#8f4458] dark:border-[#dc809a]/25 dark:bg-[#d76e8e]/10 dark:text-[#efb0c2]"
                    }`}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-current/10">
                      {formStatus.type === "success" ? (
                        <CheckIcon className="h-3.5 w-3.5" />
                      ) : (
                        <MailIcon className="h-3.5 w-3.5" />
                      )}
                    </span>

                    <p className="text-xs font-medium leading-5 font-Inter">
                      {formStatus.message}
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-4 border-t border-[#e4d1d9] pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
                  <p className="max-w-sm font-Inter text-xs font-normal leading-5 text-[#8b747e] dark:text-[#978a90]">
                    This form does not store your information. It prepares an
                    email in your device&apos;s default email application.
                  </p>

                  <button
                    type="submit"
                    className="contact-magnetic group inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded-full bg-[#8d4160] px-7 font-Inter text-sm font-semibold text-white shadow-[0_16px_38px_rgba(113,48,73,0.22)] transition-colors duration-300 hover:!scale-100 hover:bg-[#75334e] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:bg-[#d981a3] dark:text-[#2c151f] dark:hover:bg-[#e798b5]"
                  >
                    Prepare my message
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:bg-[#2c151f]/10">
                      <SendIcon className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </article>

          {/* Contact details */}
          <div className="grid gap-5">
            <article
              data-contact-card
              className="relative overflow-hidden rounded-[2.2rem] border border-[#a95a78]/60 bg-[#8d4160] p-6 text-white shadow-[0_32px_80px_rgba(101,39,64,0.24)] sm:p-8 dark:border-[#e08eac]/20 dark:bg-[#75334f]"
            >
              <div
                className="absolute border border-dashed rounded-full pointer-events-none contact-orbit -right-28 -top-28 h-72 w-72 border-white/15"
                aria-hidden="true"
              >
                <span className="absolute bottom-[18%] left-[-6px] h-3 w-3 rounded-full border-[3px] border-[#8d4160] bg-[#f2b0c8] dark:border-[#75334f]" />
              </div>

              <div
                className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/[0.07] blur-2xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-Inter text-[0.64rem] font-semibold uppercase tracking-[0.19em] text-white/60">
                      Contact details
                    </p>

                    <h3 className="mt-3 max-w-md font-Poppins !text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
                      Let&apos;s make something people remember.
                    </h3>
                  </div>

                  <span className="flex items-center justify-center text-white rounded-full h-11 w-11 shrink-0 bg-white/12 backdrop-blur-xl">
                    <SparkleIcon className="w-5 h-5" />
                  </span>
                </div>

                <p className="max-w-md mt-5 text-sm font-normal leading-6 font-Inter text-white/68">
                  You can reach me through email, phone, Messenger, Viber, or
                  WhatsApp. Choose whichever channel is easiest for you.
                </p>

                <div className="mt-8 space-y-3">
                  {/* Email */}
                  <div className="group flex items-center gap-3 rounded-[1.3rem] border border-white/15 bg-white/[0.08] p-3.5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12]">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="flex items-center flex-1 min-w-0 gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#ffd9e7]">
                        <MailIcon className="h-[1.1rem] w-[1.1rem]" />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/45">
                          Email
                        </span>

                        <span className="block mt-1 text-sm font-medium text-white truncate font-Poppins">
                          {CONTACT_EMAIL}
                        </span>
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(CONTACT_EMAIL, "email")}
                      aria-label="Copy email address"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/75 transition-all duration-300 hover:!scale-100 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      {copiedField === "email" ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="group flex items-center gap-3 rounded-[1.3rem] border border-white/15 bg-white/[0.08] p-3.5 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.12]">
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="flex items-center flex-1 min-w-0 gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#ffd9e7]">
                        <PhoneIcon className="h-[1.1rem] w-[1.1rem]" />
                      </span>

                      <span className="min-w-0">
                        <span className="block font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/45">
                          Phone · Viber · WhatsApp
                        </span>

                        <span className="block mt-1 text-sm font-medium text-white font-Poppins">
                          +63 909 411 8913
                        </span>
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(CONTACT_PHONE, "phone")}
                      aria-label="Copy phone number"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/75 transition-all duration-300 hover:!scale-100 hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      {copiedField === "phone" ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-[1.3rem] border border-white/15 bg-white/[0.08] p-3.5 backdrop-blur-xl">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#ffd9e7]">
                      <LocationIcon className="h-[1.1rem] w-[1.1rem]" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-Inter text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-white/45">
                        Based in
                      </span>

                      <span className="block mt-1 text-sm font-medium text-white font-Poppins">
                        Baguio City, Philippines
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Social and communication card */}
            <article
              data-contact-card
              className="relative overflow-hidden rounded-[2rem] border border-[#dfc6d0]/80 bg-white/68 p-5 shadow-[0_22px_60px_rgba(84,40,58,0.08)] backdrop-blur-2xl sm:p-6 dark:border-white/10 dark:bg-white/[0.045]"
            >
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-Inter text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-[#a06b7f] dark:text-[#c798aa]">
                    Prefer social?
                  </p>

                  <h3 className="mt-2 font-Poppins !text-xl font-semibold tracking-[-0.035em] text-[#412c35] dark:text-white">
                    Connect with me on Facebook.
                  </h3>

                  <p className="mt-2 max-w-md font-Inter text-xs font-normal leading-5 text-[#806b74] dark:text-[#aa9ca2]">
                    Send a direct message or follow along with my latest work
                    and updates.
                  </p>
                </div>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-magnetic group inline-flex min-h-[3.35rem] items-center justify-center gap-3 rounded-full border border-[#d8bdc8] bg-[#fffafb]/75 px-5 font-Inter text-sm font-semibold text-[#75475a] shadow-sm transition-colors duration-300 hover:border-[#a95879] hover:bg-[#a95879] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/45 dark:border-white/10 dark:bg-white/[0.05] dark:text-[#edb0c6] dark:hover:bg-[#d77f9f] dark:hover:text-[#2b151e]"
                >
                  <FacebookIcon className="w-5 h-5" />
                  Facebook
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>

            {/* Small philosophy card */}
            <article
              data-contact-card
              className="relative overflow-hidden rounded-[2rem] border border-[#dfc6d0]/75 bg-[#f4e3ea] p-5 shadow-[0_20px_55px_rgba(84,40,58,0.07)] sm:p-6 dark:border-white/10 dark:bg-[#211720]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/65 text-[#a04d6e] shadow-sm dark:bg-white/[0.06] dark:text-[#eca7c0]">
                  <SparkleIcon className="w-5 h-5" />
                </span>

                <div>
                  <p className="font-Inter text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-[#a06b7f] dark:text-[#c798aa]">
                    A good collaboration starts here
                  </p>

                  <p className="mt-2 font-Poppins text-base font-medium leading-6 text-[#4a323d] dark:text-[#f4ebef]">
                    Clear goals, honest communication, and thoughtful creative
                    direction.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          data-contact-reveal
          className="mt-6 flex flex-col items-center justify-between gap-5 rounded-[1.8rem] border border-[#dfc6d0]/75 bg-white/58 p-5 text-center shadow-[0_20px_55px_rgba(84,40,58,0.07)] backdrop-blur-2xl sm:flex-row sm:p-6 sm:text-left dark:border-white/10 dark:bg-white/[0.035]"
        >
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3dce5] text-[#a04d6e] sm:flex dark:bg-[#d77d9e]/15 dark:text-[#eca7c0]">
              <MailIcon className="w-5 h-5" />
            </span>

            <div>
              <p className="font-Poppins text-base font-semibold text-[#432e37] dark:text-white">
                Prefer to write directly?
              </p>

              <p className="mt-1 font-Inter text-xs font-normal text-[#806a73] dark:text-[#a99aa1]">
                Send your inquiry to {CONTACT_EMAIL}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex min-h-[3.2rem] w-full items-center justify-center gap-2 rounded-full border border-[#d5b7c3] bg-[#fffafb] px-5 font-Inter text-sm font-semibold text-[#77495b] transition-all duration-300 hover:border-[#aa5877] hover:bg-[#f7e5ec] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dba7bb]/40 sm:w-auto dark:border-white/10 dark:bg-white/[0.045] dark:text-[#e9adC3] dark:hover:bg-white/[0.08]"
          >
            Open email
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
