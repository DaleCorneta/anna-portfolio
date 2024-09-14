import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import MobileNav from "./MobileNav";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300 ${
          navBackground
            ? "shadow-lg dark:sm:bg-slate-900 dark:bg-slate-800 dark:text-white bg-white"
            : ""
        }`}
      >
        <nav className="flex items-center justify-between max-w-6xl px-2 mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="logo" className="h-[40px] w-full" />
              </a>
            </div>
          </div>
          <ul className="gap-10 md:flex hidden hover:*:text-primary *:duration-200">
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
            <li onClick={darkModeHandler} className="theme-switch">
              <i className="cursor-pointer fa-solid fa-circle-half-stroke"></i>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <a href="#contact">
              <button className="btn btn-outline md:!flex !hidden">
                <i className="fa-regular fa-paper-plane"></i> Contact Me
              </button>
            </a>
            <span onClick={darkModeHandler} className="md:hidden">
              <i className="cursor-pointer fa-solid fa-circle-half-stroke"></i>
            </span>
            <span
              onClick={toggleHandler}
              className="text-xl cursor-pointer md:hidden"
            >
              <i className={`fa-solid ${toggle ? "fa-xmark" : "fa-bars"}`}></i>
            </span>
          </div>
        </nav>
      </header>
      <span
        id="backdrop"
        className={`fixed h-screen ${
          toggle ? "" : "hidden"
        } bg-black/10 backdrop-blur-sm z-[997] inset-0 w-full`}
      ></span>
      <MobileNav toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Header;
