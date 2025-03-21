import aboutSvg from '../assets/IMG_4129.png'
import SectionTitle from './SectionTitle.jsx'
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          className="w-full h-96 rounded-xl object-cover shadow-lg"
        />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi, I'm Ahmed Belghith 👋, a passionate and detail-oriented Full
            Stack Developer 💻 with expertise in building dynamic, responsive,
            and user-friendly web applications. Proficient in React ⚛️, Redux
            🔄, Node.js 🟩, Express 🚀, MongoDB 🍃, and Mongoose, I specialize
            in crafting seamless full-stack solutions. My skill set also
            includes modern front-end technologies like Tailwind CSS 🌬️,
            JavaScript 💡, HTML 📄, and CSS 🎨, ensuring visually appealing and
            efficient designs.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
