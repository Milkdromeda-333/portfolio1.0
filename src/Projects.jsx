import ProjectCard from "./ProjectsCard"

export default function Projects() {

    const demoProj = {
        name: "Project demo name",
        techUsed: ["HTML", "CSS", "JavaScript"],
        img: "catcomputer.gif",
        liveLink: "#",
        githubLink: "#",
        description: "Bhbvhsvbfbevh f gfrbgeyfygvb yegf; urguiwf fhgs.eg gffbvyegbf fgeygfbgbsf fgyfes,sfgey  gfyefsb."
    }
    
    return (
        <section className="col-span-1">
            
            <h2 className="
            text-4xl
            mb-4
            text-end"
            >
                My projects. &gt;&gt;
            </h2>

            <div className=" 
                h-[100vh]
                overflow-y-scroll
                flex flex-col gap-3
                w-3/4
                ml-auto
                border-y-2
                ">
                    <ProjectCard {...demoProj} />
                    <ProjectCard {...demoProj} />
                    <ProjectCard {...demoProj} />
                    <ProjectCard {...demoProj} />
                </div>
        </section>
    )
}