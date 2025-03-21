import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'
import img1 from './assets/p4.png';
import img2 from './assets/shell.png';
import img3 from './assets/fakeflix.png';
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-rose-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-cyan-400" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className="h-16 w-16 text-green-500" />,
    text: 'Skilled in Node.js, building scalable backend services and RESTful APIs for robust server-side applications.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className="h-16 w-16 text-sky-500" />,
    text: 'Proficient with Tailwind CSS, using a utility-first framework to rapidly build modern, responsive designs.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-green-600" />,
    text: 'Experienced with MongoDB, leveraging NoSQL databases to create high-performance, scalable, and flexible data models.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'My Portfolio',
    text: '👋 Welcome to my portfolio, built with React JS! This site showcases my projects, skills, and creative journey using modern, interactive web design. 🚀 Explore my work and drop me a message 📬 to learn more about how I bring ideas to life.',
  },
  {
    id: nanoid(),
    img: img2,
    url: '',
    github: '',
    title: 'Gas Station Management System',
    text: 'full-stack application using React.js, Node.js, and MongoDB to manage fuel sales, employee salaries, and inventory.',
  },
  {
    id: nanoid(),
    img: img3,
    url: '',
    github: 'https://github.com/Th3Wall/Fakeflix',
    title: 'FakeFlix',
    text: 'Not the usual clone that you can find on the web.',
  },
]
