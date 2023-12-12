import Navbar from "@/components/Navbar";
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";

export default function Page() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-[100dvh]">
      <nav className="relative z-10">
        <Navbar />
      </nav>

      <div className="overflow-y-scroll scroll-smooth">
        <section id="home">
          <Home />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contactMe">
          <ContactMe />
        </section>

        <footer className="bg-white/10 py-2 w-[100%] text-center">&copy; Made with love by Nithin N</footer>
      </div>
    </div>
  );
}
