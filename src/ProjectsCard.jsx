

export default function ProjectCard(props) {
    const { name, liveLinkUrl, githubLink, img, description, techUsed } = props;
    return (
        <div className="
        p-4
        border-b-2
        w-full
        text-lg">

            <img src={'/' + img} alt={name}
            className="
            h-1/2
            w-full
            object-cover"
            />

            <div className="px-2">

                <div
                    className="flex flex-row justify-between items-center pt-2 mb-4"
                >
                    <span className="text-2xl">
                        {name}.
                    </span>

                    <div className="text-black text-base">

                        <a href={ liveLinkUrl } target="_blank" className="bg-white rounded px-2 mr-2 inline-block hover:bg-gray-200  hover:rotate-3">
                            view live
                        </a>
                         <a href={ githubLink } target="_blank" className="bg-white rounded px-2 inline-block hover:bg-gray-200  hover:-rotate-3">
                            view github
                        </a>
                    </div>
                </div>

                <div className="mb-2">
                    <span>Tech used: </span>
                    <span>{techUsed.join(', ')}</span>
                </div>

                <p>{description}</p>
            </div>

        </div>
    )
}