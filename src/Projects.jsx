import ProjectCard from "./ProjectsCard"

export default function Projects() {

    const demoProj = {
        name: "Project demo name",
        techUsed: ["HTML", "CSS", "JavaScript"],
        img: "black-fur.jfif",
        liveLink: "#",
        githubLink: "#",
        description: "bhbvhsvbfbevh f gfrbgeyfygvb yegf; urguiwf fhgs.eg gffbvyegbf fgeygfbgbsf fgyfes,sfgey  gfyefsb."
    }
    
    return (
        <section className="col-span-1">
            <h2>My projects. &gt;&gt;</h2>
            <div>
                <ProjectCard demoProj />
            </div>
        </section>
    )
}