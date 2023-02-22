import Navbar from './Navbar'
import Intro from './Intro'
import Skills from './Skills'
import ContactForm from './ContactForm';
import Projects from './Projects';

function App() {


  return (
    <div className='box-border'>

      <Navbar />
      
      {/* body */}
      <section className='flex flex-row m-8'>

        {/* left side */}
        <div className="w-1/2">
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
