const MobileNav = ({ toggle, setToggle }) => {
  return (
    <>
      <ul
        id="mobile-nav"
        className={`gap-10 text-xl dark:bg-slate-800 bg-primary text-white flex-center flex-col fixed w-full ${
          toggle ? "h-96" : "h-0 md:hidden"
        } overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998]`}
      >
        <button
          onClick={() => setToggle(false)}
          className="absolute z-20 bg-transparent top-4 right-8"
        >
          <i className="fa-solid fa-xmark"></i> Close
        </button>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <a href="#contact">
          <button className="btn btn-outline">
            <i className="fa-regular fa-paper-plane"></i> Contact Me
          </button>
        </a>
      </ul>
    </>
  );
};

export default MobileNav;
