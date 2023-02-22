import { useState } from 'react'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

export default function ContactForm() {

  const [userInput, setUserInput] = useState({
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput({})
  }
    
    return (

        <section className="w-full text-lg">

          {/* contact form */}
        <form className='mb-4'>
          
          <h2 className='text-4xl mb-2'>Contact me. &gt;&gt;</h2>
          
            <div>
              <label htmlFor="name">Email:</label>
              <input type="text" name='email' value={userInput.email} placeholder='Your email here.' onChange={handleChange} onSubmit={handleSubmit}  className='w-full p-1 text-black rounded my-2' />
            </div>
          
            <div>
              <label htmlFor="message">Message:</label>
              <textarea placeholder='Please include your name!' name='message' value={userInput.message} onChange={handleChange} onSubmit={handleSubmit}  className='w-full p-1 text-black rounded h-36 my-2' />
            </div>
          
          <button className='bg-transparent w-full text-center border transition-all p-2
            hover:bg-white rounded hover:text-my-blue'>Submit.</button>
          
          </form>

          {/* socials icons */}
        <div className='text-4xl flex flex-row items-center gap-2 w-full'>
          
            <a href="https://github.com/Milkdromeda-333" target="_blank">
              <FaGithub className='hover:text-zinc-200' />
            </a>
            <a href="https://twitter.com/Milkdromeda333" target="_blank">
              <FaTwitter className='hover:text-zinc-200' />
            </a>
            <a href="https://www.linkedin.com/in/anjanique-mackey/" target="_blank">
              <FaLinkedin className='hover:text-zinc-200' />
            </a>
          
          </div>

        </section>
    )
}