'use client'
import HTML_Tag from "@/components/HTML_Tag";
import Laptop from "@/components/Laptop";
import Mobile from "@/components/Mobile";
import SectionHeader from "@/components/customFonts/SectionHeader";
import Link from "next/link";

const Projects = () => {

    const projects = [
        {
            name: "Gravience website",
            githubLink: 'https://github.com/NITHIN3387/grievance-management-system',
            skills: ['nextJs', 'tailwindcss', 'nodeJs', 'expressJs', 'firebase'],
            details: 'details',
            laptopView: require('@/assets/images/gravience_laptop.png'),
            mobileView: require('@/assets/images/gravience_mobile.png')
        },
        {
            name: "LinkedIn clone",
            githubLink: 'https://github.com/NITHIN3387/Linkedin_Clone',
            skills: ['React-native', 'React Navigation'],
            details: 'details',
            laptopView: null,
            mobileView: require('@/assets/images/linkedIn.png')
        },
    ]

  return (
    <div className=" relative ps-5 flex flex-col justify-center">
        <div className="absolute text-[10em] top-0 right-0 font-extrabold text-white/5">Projects</div>
        <SectionHeader>My works</SectionHeader>

        <HTML_Tag className=''>div</HTML_Tag>
        <div className="flex gap-10 mx-5 overflow-x-scroll w-[calc(100vw-80px)]">
            {
                projects.map((project) => (
                    <div key={project.githubLink} className="flex flex-col items-center p-7 pr-10 rounded-lg backdrop-blur-md bg-white/5 w-[25rem] group">
                        <div className="relative w-fit scale-95 group-hover:scale-[1.01] transition-all">
                            <div style={{zoom: '2'}}>
                                {project.laptopView && <Laptop imgLink={project.laptopView} />}
                            </div>
                            <div className={project.laptopView ? "absolute bottom-0 -right-2" : ""} style={{zoom: project.laptopView ? '2' : '3.1'}}>
                                {project.mobileView && <Mobile scale={1} imgLink={project.mobileView} />}
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-5 text-[aqua] border-b border-gray-400 pb-2 w-[100%]">
                            <h3 className="text-[2em] font-bold">{project.name}</h3>
                            <Link href={project.githubLink} target="_blank" className="text-[1.5em] text-gray-400 font-extrabold">&lt;/&gt;</Link>
                        </div>
                        <div className="flex gap-2 flex-wrap pt-3 w-[100%]">
                        {
                            project.skills.map((skill, i) => (
                                    <span key={i} className="border border-gray-400 text-[#00FFFF]/80 rounded-[10px] py-1 px-2 hover:bg-[aqua] hover:text-black hover:border-[transparent]">{skill}</span>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
        <HTML_Tag className=''>/div</HTML_Tag>
    </div>
  )
}

export default Projects