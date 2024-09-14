import fb from "../assets/platforms/facebook.png";
import meta from "../assets/platforms/meta.jpg";
import insta from "../assets/platforms/instagram.png";
import tiktok from "../assets/platforms/tiktok.png";
import youtube from "../assets/platforms/yt-studio.png";
import google from "../assets/platforms/google.png";
import linkedin from "../assets/platforms/linkedin.png";

import canva from "../assets/platforms/canva.png";
import capcut from "../assets/platforms/capcut.jpg";
import figma from "../assets/platforms/figma.png";

const About = () => {
  return (
    <section id="about" className="container min-h-screen flex-center">
      <div className="max-w-4xl">
        <div className="lg:text-center text-pretty">
          <h3 className="font-bold text-primary !text-center">What I Do</h3>
          <p className="px-2 mt-3 text-gray-500">
            As a Digital Marketing Specialist, I excel in managing a variety of
            social media platforms, including Meta (Facebook), TikTok, YouTube,
            Instagram, and LinkedIn. My expertise extends to designing and
            executing highly effective promotional campaigns across Google and
            Meta, with a focus on aligning campaign goals, optimizing budgets,
            and pinpointing target audiences for maximum engagement and
            conversion.
          </p>
        </div>
        <div className="lg:text-center text-pretty">
          <p className="px-2 mt-3 text-gray-500">
            I am proficient in content writing and SEO, crafting impactful
            articles that boost website traffic and improve search engine
            rankings. With a strong background in using Canva and CapCut, I
            bring visuals and content to life, ensuring they resonate with
            audiences while maintaining a professional, polished look.
            Additionally, my knowledge of Figma enables me to design intuitive
            and aesthetically pleasing website interfaces, seamlessly
            integrating content into the digital front end.
          </p>
        </div>
        <div className="max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12">
          <div>
            <div className="*:text-primary">
              <i className="fa-regular fa-object-ungroup"></i>
              <h6 className="mt-3 font-semibold whitespace-nowrap">
                Platforms Used
              </h6>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <img src={fb} alt="" className="w-[50px] h-full" />
                <img src={meta} alt="" className="w-[50px] h-full" />
                <img src={insta} alt="" className="w-[50px] h-full" />
                <img src={tiktok} alt="" className="w-[50px] h-full" />
                <img src={youtube} alt="" className="w-[80px] h-full" />
                <img src={google} alt="" className="w-[80px] h-full" />
                <img src={linkedin} alt="" className="w-[50px] h-full" />
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400 text-balance">
                Posting daily contents (organic)and paid campaigns with these
                platforms.
              </p>
            </div>
          </div>

          <div>
            <div className="*:text-primary">
              <i className="fa-solid fa-wrench"></i>
              <h6 className="mt-3 font-semibold whitespace-nowrap">
                Tools Used
              </h6>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <img src={canva} alt="" className="w-[100px] h-full" />
                <img src={capcut} alt="" className="w-[100px] h-full" />
                <img src={figma} alt="" className="w-[100px] h-full" />
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
                Tools that I used to create and design for the posters and
                videos related to the brand identity of the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
