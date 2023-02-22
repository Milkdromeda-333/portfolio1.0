

export default function Skills() {

      const skillsArr = [
    "HTML + CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "ExpressJS",
    "Tailwind",
    "MongoDB",
    "Mongoose",
    "HTTP",
    "REST API"
  ]
    
    return (
        <section className='mb-4'>
          <h2 className='text-4xl mb-2'>My Skills. &gt;&gt;</h2>
          <ul className='grid grid-cols-3 text-2xl'>
            {skillsArr.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
    )
}