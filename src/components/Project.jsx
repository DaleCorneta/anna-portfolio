import { useState } from "react";
import GraphicDesign from "./GraphicDesign";
import Video from "./Video";
import Article from "./Article";

const Project = () => {
  const [tab, setTab] = useState("Graphic Design");
  return (
    <section id="projects" className="container min-h-screen flex-center">
      <div className="w-full text-center text-balance">
        <h3 className="font-bold text-primary">My Projects</h3>

        <br />
        <div className="gap-4 flex-center">
          <button
            onClick={() => setTab("Graphic Design")}
            className={`btn ${
              tab === "Graphic Design" ? "btn-filled" : "btn-outline"
            }`}
          >
            Graphic Designs
          </button>
          <button
            onClick={() => setTab("Videos")}
            className={`btn ${tab === "Videos" ? "btn-filled" : "btn-outline"}`}
          >
            Videos
          </button>
          <button
            onClick={() => setTab("Articles")}
            className={`btn ${
              tab === "Articles" ? "btn-filled" : "btn-outline"
            }`}
          >
            Articles
          </button>
        </div>
        <br />
        {/* projects */}
        {tab === "Graphic Design" ? (
          <GraphicDesign />
        ) : tab === "Videos" ? (
          <Video />
        ) : tab === "Articles" ? (
          <Article />
        ) : null}
      </div>
    </section>
  );
};

export default Project;
