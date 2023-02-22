
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

export default function ContactForm() {
    
    return (

        <section className="w-full text-lg">

          {/* contact form */}
        <form className='mb-4'>
          
          <h2 className='text-4xl mb-2'>Contact me. &gt;&gt;</h2>
          
            <div>
              <label htmlFor="name">Email:</label>
              <input type="text" placeholder='Your email here.' className='w-full p-1 text-black rounded my-2' />
            </div>
          
            <div>
              <label htmlFor="message">Message:</label>
              <textarea placeholder='Please include your name!' className='w-full p-1 text-black rounded h-36 my-2' />
            </div>
          
          <button className='bg-transparent w-full text-center border transition-all p-2
            hover:bg-zinc-200 rounded hover:text-my-blue'>Submit.</button>
          
          </form>

          {/* socials icons */}
        <div className='text-4xl flex flex-row items-center gap-2 w-full'>
          
            <FaGithub className='hover:text-zinc-200' />
            <FaTwitter className='hover:text-zinc-200' />
            <FaLinkedin className='hover:text-zinc-200' />
          
          </div>

        </section>
    )
}