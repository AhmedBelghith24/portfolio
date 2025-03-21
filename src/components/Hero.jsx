import heroImg from '../assets/ena.JPG'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 text-center">
        <article>
          <h2 className="text-3xl text-rose-600">Hi, I am</h2>
          <h1 className="text-8xl font-bold tracking-wider text-rose-700">
            Ahmed Belghith
          </h1>
          <p className="mt-4 text-3xl text-rose-600 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-rose-600 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex justify-center gap-x-4 mt-4">
            <a href="https://github.com/AhmedBelghith24">
              <FaGithubSquare className="h-8 w-8 text-rose-500 hover:text-rose-700 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-belghith-aab119349/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-rose-500 hover:text-rose-700 duration-300" />
            </a>
            {/* If you want to add a Twitter link, you can uncomment this:
            <a 
              href="https://twitter.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTwitterSquare className="h-8 w-8 text-rose-500 hover:text-rose-700 duration-300" />
            </a>
            */}
          </div>
        </article>
        <article className="hidden md:block">
          <div className="mx-auto h-[500px] w-[500px] rounded-full overflow-hidden">
            <img
              src={heroImg}
              className="h-full w-full object-cover"
              alt="Hero"
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
