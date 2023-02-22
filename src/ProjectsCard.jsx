

export default function ProjectCard(props) {
    const { name, liveLink, githubLink, img, description, techUsed } = props;
    return (
        <div className="
        h-[55vh]
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

                        <button  className="bg-white rounded px-2 mr-2
                        hover:bg-gray-100">
                            view live
                        </button>

                         <button className="bg-white rounded px-2
                         hover:bg-gray-100">
                            view github
                        </button>
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