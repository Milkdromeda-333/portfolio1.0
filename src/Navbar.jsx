
export default function Navbar(){

    return (
        <div className="flex flex-row justify-between items-center border-b-2 p-2 col-span-2 h-auto">

            <div className="flex flex-rowitems-center">

                <img src="/guycomputer.gif" alt="earth logo" className='object-contain w-18' />

                <p className='header'>
                    Anjanique Mackey, Web developer &gt;&gt;
                </p>
            </div>

            <button className="
            bg-white
            text-black
            rounded
            p-2
            hover:bg-gray-100">View My Resume.</button>
      </div>
    )
}