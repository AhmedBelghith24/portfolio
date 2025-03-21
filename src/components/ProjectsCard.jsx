import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ url, img, github, title, text }) => {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      duration: 0.3,
      scale: 1.03,
      rotationY: 5, // A slight 3D tilt effect
      boxShadow: '0 15px 25px rgba(244, 63, 94, 0.3)', // Rose-colored shadow
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      duration: 0.3,
      scale: 1,
      rotationY: 0,
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
      ease: 'power3.out',
    })
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={img}
        alt={title}
        className="w-full object-contain rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
