import ProjectCard from "./ProjectsCard"
import ProjectData from "./ProjectData.json"

export default function Projects() {

    const projectsArr = ProjectData.map(proj => <ProjectCard {...proj} key={proj.name} />);
    
    return (
        <section className="w-1/2 h-[100vh]">
            
            <h2 className="
            text-4xl
            mb-4
            text-end"
            >
                My projects. &gt;&gt;
            </h2>

            <div className=" 
                overflow-y-scroll
                flex flex-col gap-3
                w-3/4
                ml-auto
                border-y-2
                h-full
                ">
                    {projectsArr}
            </div>
            
        </section>
    )
}