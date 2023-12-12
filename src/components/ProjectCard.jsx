import Link from "next/link";
import React from "react";
import Mobile from "./Mobile";
import Laptop from "./Laptop";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex flex-col items-center xl:p-7 p-5 xl:pr-10 pr-7 rounded-lg backdrop-blur-md bg-white/5 sm:min-w-[25rem] sm:max-w-[25rem] min-w-[19rem] max-w-[19rem] group hover:bg-white/10 snap-center">
      <p className="group-hover:inline hidden absolute left-7 right-10 text-center">
        {project.details}
      </p>
      <div className="relative w-fit sm:scale-95 scale-[0.7] group-hover:opacity-0 transition-all">
        <div style={{ zoom: "2" }}>
          {project.laptopView && <Laptop imgLink={project.laptopView} />}
        </div>
        <div
          className={project.laptopView ? "absolute bottom-0 -right-2" : ""}
          style={{ zoom: project.laptopView ? "2" : "3.1" }}
        >
          {project.mobileView && (
            <Mobile scale={1} imgLink={project.mobileView} />
          )}
        </div>
      </div>
      <div className="flex justify-between items-center pt-5 text-[aqua] border-b border-gray-400 pb-2 w-[100%]">
        <h3 className="xl:text-[2em] sm:text-[1.9em] text-[1.7em] font-bold">
          {project.name}
        </h3>
        <Link
          href={project.githubLink}
          target="_blank"
          className="xl:text-[1.5em] lg:text-[1.4em] text-gray-400 font-extrabold hover:text-[aqua]"
        >
          &lt;/&gt;
        </Link>
      </div>
      <div className="flex gap-2 flex-wrap pt-3 w-[100%]">
        {project.skills.map((skill, i) => (
          <span
            key={i}
            className="border border-gray-400 text-[#00FFFF]/80 rounded-[10px] py-1 px-2 hover:bg-[aqua] hover:text-black hover:border-[transparent] xl:text-[1em] lg:text-[0.9em]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
