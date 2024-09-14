import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div className="dark:text-gray-200 dark:bg-slate-900">
        <Header />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
