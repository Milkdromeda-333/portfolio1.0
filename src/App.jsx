import { useState } from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Skills from './Skills'
import ContactForm from './ContactForm';
import Projects from './Projects';

function App() {


  return (
    <div className='leading-10 grid grid-cols-2 grid-rows-auto'>

      <Navbar />
      
      {/* body */}
      <div className="m-4 col-span-1">

        <Intro />
        <Skills />
        <ContactForm />

      </div>

      <Projects />

      {/* footer */}

    </div>
  )
}

export default App
