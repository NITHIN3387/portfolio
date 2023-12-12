import HTML_Tag from "@/components/HTML_Tag";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/customFonts/SectionHeader";

const Projects = () => {

    const projects = [
        {
            name: "Gravience website",
            githubLink: 'https://github.com/NITHIN3387/grievance-management-system',
            skills: ['NextJs', 'Tailwindcss', 'NodeJs', 'ExpressJs', 'firebase'],
            details: 'Built a government grievance website with Next.js, Tailwind, Node.js, Express.js, and Firebase. It automates problem submission to relevant departments using a Naive Bayes algorithm. Utilizes image metadata to identify the problem`s location.',
            laptopView: require('@/assets/images/gravience_laptop.png'),
            mobileView: require('@/assets/images/gravience_mobile.png')
        },
        {
            name: "LinkedIn clone",
            githubLink: 'https://github.com/NITHIN3387/Linkedin_Clone',
            skills: ['React-native', 'React Navigation'],
            details: 'A stunning LinkedIn clone frontend built entirely with React Native and powered by React Navigation.',
            laptopView: null,
            mobileView: require('@/assets/images/linkedIn.png')
        },
        {
            name: "Recipe website",
            githubLink: 'https://github.com/NITHIN3387/Recipe-website',
            skills: ['ReactJs', 'Bootstrap', 'NodeJs', 'ExpressJs', 'MongoDB'],
            details: 'a full-stack recipe sharing application developed using React, Node.js, and MongoDB. This project showcases my skills in web development, database management, and user authentication.',
            laptopView: require('@/assets/images/recipe_laptop.png'),
            mobileView: require('@/assets/images/recipe_mobile.png')
        },
        {
            name: "Inventory System",
            githubLink: 'https://github.com/NITHIN3387/Inventory-Management-System',
            skills: ['ReactJs', 'Bootstrap', 'NodeJs', 'ExpressJs', 'MongoDB'],
            details: 'My MERN stack inventory system offers real-time updates, streamlined stock tracking, and seamless workflow integration, enhancing efficiency and accuracy. Empower your organization with improved productivity and optimized inventory management.',
            laptopView: require('@/assets/images/inventory.png'),
            mobileView: null
        },
    ]

  return (
    <div className=" relative ps-5 flex flex-col justify-center">
        <div className="absolute sm:text-[10em] text-[6em] top-0 right-0 font-extrabold text-white/5">Projects</div>
        <SectionHeader>My works</SectionHeader>

        <HTML_Tag className=''>div</HTML_Tag>
        <div className="flex gap-10 mx-5 overflow-x-scroll w-[calc(100vw-80px)] snap-x snap-mandatory" data-carousel="slide">
            {
                projects.map((project) => (
                    <ProjectCard key={project.githubLink} project={project}/>
                ))
            }
        </div>
        <HTML_Tag className=''>/div</HTML_Tag>
    </div>
  )
}

export default Projects