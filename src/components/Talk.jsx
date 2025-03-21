import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaComments } from 'react-icons/fa'

const Talk = () => {
  return (
    <section id="talk" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-4">
          <FaComments className="w-8 h-8 text-blue-500" />
          Let's Chat
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Need an experienced full-stack developer to help out? Send me an email
          to discuss your project.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Alternatively connect with me elsewhere on the web →
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/ahmed-belghith-aab119349/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/AhmedBelghith24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="mailto:ahmed@example.com"
            className="text-red-600 hover:text-red-800"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Talk
