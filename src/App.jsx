import Navbar from './Navbar'
import Intro from './Intro'
import Skills from './Skills'
import ContactForm from './ContactForm';
import Projects from './Projects';
import { magicMouse } from 'magicmouse.js'

const options = {
	"outerStyle": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": true,
  "outerWidth": 41,
  "outerHeight": 41
      };
magicMouse(options);

function App() {


  return (
    <div className='box-border bg-[url(/blurry-gradient-haikei.svg)] bg-no-repeat bg-cover text-white h-full'>

      <Navbar />
      
      {/* body */}
      <section className='flex flex-row mx-8 mt-8 pb-4'>

        {/* left side */}
        <div className="w-1/2 flex flex-col justify-between gap-4">
          <Intro />
          <Skills />
          <ContactForm />
        </div>

        {/* right side */}
        <Projects />

        
      </section>

    </div>
  )
}

export default App
