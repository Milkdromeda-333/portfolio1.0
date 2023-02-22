
export default function Navbar(){

    return (
        <div className="flex flex-row justify-between items-center border-b-2 p-2 col-span-2 h-auto">

            <div className="flex flex-rowitems-center">

                <img src="/guycomputer.gif" alt="earth logo" className='object-contain w-18' />

                <p className='header'>
                    Anjanique Mackey, Web developer &gt;&gt;
                </p>
            </div>

            <a href="https://drive.google.com/file/d/1Fw030GC4fp3xjvq1P1kZ63KeTr6uo02f/view?usp=sharing"
            target="_blank"
            className="
            bg-white
            text-black
            rounded
            p-2
            inline-block
            hover:bg-gray-200
            hover:rotate-3">View My Resume.</a>
      </div>
    )
}