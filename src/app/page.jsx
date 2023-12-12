'use client'
import Navbar from "@/components/Navbar";
import AboutMe from "@/sections/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    switch(window.location.hash){
      case '#aboutMe':
        document.getElementById('aboutMe').scrollIntoView({behavior: 'smooth'})
        break
      case '#projects':
        document.getElementById('projects').scrollIntoView({behavior: 'smooth'})
        break
      case '#contactMe':
        document.getElementById('contactMe').scrollIntoView({behavior: 'smooth'})
        break
      default:
        document.getElementById('home').scrollIntoView({behavior: 'smooth'})
    }
  }, [])

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

        <footer className="bg-white/10 py-2 w-[100%] text-center">
          &copy; Made with love by Nithin N
        </footer>
      </div>
    </div>
  );
}
