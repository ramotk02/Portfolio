import Hero from "./Home";
import About from "./about";
import Skills from "./skills";
import Experience from "./studies";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
