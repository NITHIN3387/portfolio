"use client";
import SectionHeader from "@/components/customFonts/SectionHeader";
import HTML_Tag from "@/components/HTML_Tag";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import TagCloud from "TagCloud";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const AboutMe = () => {
  useEffect(() => {
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind",
      "ReactJs",
      "Nextjs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Firebase",
      "React-Native",
      "Python",
    ];

    const options = {
      radius: 300,
    };

    TagCloud(".tagcloud", texts, options);

    console.log(document.querySelectorAll(".tagcloud"));
    if (document.querySelectorAll(".tagcloud").length > 1)
      document.querySelectorAll(".tagcloud")[1].style.display = "none";

  }, []);

  return (
    <div className="relative grid grid-cols-[2fr_3fr] ps-5 items-center">
      <div className="absolute text-[10em] top-0 right-0 font-extrabold text-white/5">
        About Me
      </div>
      <div>
        <SectionHeader>Who I Am ?</SectionHeader>

        <HTML_Tag className="pt-5">p</HTML_Tag>
        <p className="ps-5 font-bold tracking-wide leading-7">
          I am a third-year Computer Science and Engineering (AIML) student at
          Sahyadri College of Engineering. I define myself as a versatile
          full-stack web and app developer, passionate about crafting seamless
          digital experiences. My journey involves both front-end and back-end
          development, and I am in constant pursuit of knowledge in the dynamic
          world of web development. Eager to contribute and learn
          collaboratively, I look forward to exploring the endless possibilities
          that coding and creativity bring to the table.
        </p>
        <HTML_Tag>/p</HTML_Tag>
      </div>

      <div className="tagcloud sm:flex justify-center text-[aqua] font-bold text-[1.3em] hidden"></div>
    </div>
  );
};

export default AboutMe;
