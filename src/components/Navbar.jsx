import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { links } from '../data.jsx';
import { FaEnvelope, FaFileAlt, FaAngleRight } from 'react-icons/fa'

const Navbar = () => {
  const emailRef = useRef(null)
  const resumeRef = useRef(null)

  // Hover animation: add a rose-tinted box-shadow that stays until the mouse leaves.
  const handleHoverEnter = (ref) => {
    gsap.to(ref.current, {
      boxShadow: '0px 0px 20px rgba(244,63,94,0.8)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleHoverLeave = (ref) => {
    gsap.to(ref.current, {
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  // Shake animation on click for both Email and Resume.
  // For Email, we trigger the mailto; for Resume, we trigger the download.
  const handleClick = (e, ref, targetUrl) => {
    e.preventDefault() // Prevent immediate action so animation can play
    gsap.to(ref.current, {
      x: 10,
      duration: 0.1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 5,
      onComplete: () => {
        gsap.to(ref.current, { x: 0, duration: 0.1 })
        window.location.href = targetUrl
      },
    })
  }

  return (
    <nav>
      <div className="px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left: Title */}
        <div className="w-full sm:w-auto text-left">
          <h2 className="text-3xl font-bold">
            Web <span className="text-rose-600">Developer</span>
          </h2>
        </div>
        {/* Center: Email */}
        <div className="w-full sm:w-auto flex justify-center">
          <a
            ref={emailRef}
            href="mailto:ahmed@example.com"
            onMouseEnter={() => handleHoverEnter(emailRef)}
            onMouseLeave={() => handleHoverLeave(emailRef)}
            onClick={(e) =>
              handleClick(e, emailRef, 'mailto:ahmed@example.com')
            }
            className="flex items-center gap-x-2 text-lg tracking-wide hover:text-rose-600 duration-300"
          >
            <FaEnvelope className="h-6 w-6" />
            abelghith@oakland.edu
          </a>
        </div>
        {/* Right: Links & Resume */}
        <div className="w-full sm:w-auto flex items-center gap-x-8 justify-center sm:justify-end">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="flex items-center gap-x-2 capitalize text-lg tracking-wide hover:text-rose-600 duration-300"
              >
                <FaAngleRight className="h-6 w-6" />
                {text}
              </a>
            )
          })}
          <a
            ref={resumeRef}
            href="/resume.pdf"
            download
            onMouseEnter={() => handleHoverEnter(resumeRef)}
            onMouseLeave={() => handleHoverLeave(resumeRef)}
            onClick={(e) => handleClick(e, resumeRef, '/resume.pdf')}
            className="flex items-center gap-x-2 capitalize text-lg tracking-wide hover:text-rose-600 duration-300 px-2 py-1 rounded"
          >
            <FaFileAlt className="h-6 w-6" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
