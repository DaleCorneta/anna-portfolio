import hero from "../assets/images/hero.png";
import Resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark"
    >
      <div className="grid items-center justify-around w-full h-full max-w-6xl pt-20 md:grid-cols-6">
        <div className="text-center lg:col-span-2 sm:pl-2 md:col-span-3 md:text-left">
          <div>
            <h5 className="font-medium text-gray-600 dark:text-gray-200">
              Greetings!
            </h5>
            <h1 className="sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium">
              {`I'm`} <span className="text-primary">Anna Marie</span> <br />
              Digital Marketing Specialist
            </h1>
            <button className="mt-5 btn btn-filled">
              <a href="#contact">Hire Me</a>
            </button>

            <a href="#projects">
              <button className="ml-4 font-semibold border-b-2 border-gray-700 dark:text-gray-200">
                <i className="fa-solid fa-up-right-from-square"></i> See
                Portfolio
              </button>
            </a>
          </div>
          <div className="flex gap-2 md:w-96 md:ml-auto mt-9 dark:text-gray-300">
            <i className="fa-solid fa-border-all mt-0.5 md:inline-block hidden"></i>
            <p className="max-w-md px-2 mx-auto text-xs leading-5 text-balance">
              <span className="font-semibold">About Myself</span>
              <br />I am a dynamic individual with a flair for crafting engaging
              campaigns and a keen eye for data-driven strategy. My expertise
              lies in elevating brand presence through innovative digital
              marketing techniques, fostering audience engagement, and driving
              measurable growth. I excel in collaborative environments, always
              eager to learn and adapt.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-gray-600 md:justify-end dark:text-gray-200 mt-9">
            <p className="text-xs">Follow Me</p>
            <div className="flex justify-end gap-3">
              <a
                href="https://www.facebook.com/00annamarie00"
                className="social-icon"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-3">
          <img
            src={hero}
            className="w-2/3 mx-auto mt-5 md:w-full max-w-96 md:mt-0"
            alt="hero"
          />
        </div>
        <div className="w-full mt-2 lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none bg-gradient-to-l dark:from-slate-800 from-gray-100 lg:h-96 md:h-auto h-96">
          <ul className="text-2xl data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between">
            <li data-slot="count">99+</li>
            <li>
              <span className="text-primary">Posters</span> and{" "}
              <span className="text-primary">Videos</span> Made
            </li>
            <br />
            <li data-slot="count">30+</li>
            <li>
              Successful <span className="text-primary">Paid Ad Campaign</span>
            </li>
            <li>
              <a href={Resume} download>
                <button className="mt-10 btn btn-outline lg:mt-10 md:mt-0">
                  <i className="fa-solid fa-download"></i> Download CV
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
