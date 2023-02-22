

export default function ProjectCard(props) {
    const { name, liveLink, githubLink, img, description, techUsed } = props;
    console.log(props)
    return (
        <div className="w-full border">
            {/* <img src={'../public/portfolio-images/' + img} alt={name} /> */}

            {/* <div>
                {name}
                <span>Tech used:</span>
                <span>{techUsed.join(', ')}</span>
                <p>{description}</p>
            </div> */}

            Hiii
        </div>
    )
}