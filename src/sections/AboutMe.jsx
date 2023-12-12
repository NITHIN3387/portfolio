"use client";
import SectionHeader from "@/components/customFonts/SectionHeader";
import HTML_Tag from "@/components/HTML_Tag";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const AboutMe = () => {
  const [screenWidth, setScreenWidth] = useState(screen.width)

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
      radius: screenWidth >= 1440 ? 300 : 250,
    };

    console.log(screenWidth, options.radius);

    TagCloud(".tagcloud", texts, options);

    if (document.querySelectorAll(".tagcloud").length > 2)
      document.querySelectorAll(".tagcloud")[1].style.display = "none";

  }, [screenWidth]);

  return (
    <div className="relative grid xl:grid-cols-[2fr_3fr] lg:grid-cols-2 grid-cols-1 lg:gap-10 ps-5 items-center">
      <div className="absolute sm:text-[10em] text-[7em] top-0 right-0 font-extrabold text-white/5">
        About
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

      <div className="tagcloud lg:flex justify-center text-[aqua] font-bold lg:text-[1.3em] hidden"></div>
      <HTML_Tag className={'lg:hidden'}>/div</HTML_Tag>
      <div className="lg:hidden flex gap-5 ps-5 flex-wrap sm:py-0 py-2">
        <Image src={require('../assets/images/html.png')} alt='html'/>
        <Image src={require('../assets/images/css.png')} alt='css'/>
        <Image src={require('../assets/images/js.png')} alt='js'/>
        <Image src={require('../assets/images/bootstrap.png')} alt='bootstrap'/>
        <Image src={require('../assets/images/tailwind.svg')} alt='tailwindcss' width={23} />
        <Image src={require('../assets/images/react.png')} alt='react'/>
        <Image src={require('../assets/images/nextjs.svg')} alt='nextjs' width={32}/>
        <Image src={require('../assets/images/nodejs.png')} alt='nodejs' width={32}/>
        <Image src={require('../assets/images/express.png')} alt='expressjs' width={32}/>
        <Image src={require('../assets/images/mongodb.png')} alt='mongodb' width={32}/>
        <Image src={require('../assets/images/firebase.png')} alt='firebase' width={32}/>
        <Image src={require('../assets/images/python.png')} alt='python'/>
      </div>
      <HTML_Tag className={'lg:hidden'}>/div</HTML_Tag>
    </div>
  );
};

export default AboutMe;
