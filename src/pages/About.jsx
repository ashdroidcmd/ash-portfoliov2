import '../App.css'
import skills from '../data/TechStack.json'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      once: true, // only animate once
    });
  }, []);
  return (
    <>
      <section id="about-section" className="bg-black border-y border-blue-800 flex justify-center items-center min-h-screen overflow-y-auto font-[Raleway] py-8">
        <div className="w-7xl mx-auto mt-4 px-4">

          {/* Intro Card */}
          <div data-aos="fade-down" data-aos-once="true">
            <div className="text-white rounded-2xl border border-blue-600 bg-slate-950 p-6 mb-8 custom-hover">
              <h1 className="text-3xl font-bold text-blue-600">I'm Ashlee Zoe Gesite</h1>
              <p className="block">Location: Bohol, Philippines</p>
              <p className="text-lg m-0">
                I'm a front-end developer and 3D environment artist crafting interactive
                websites and immersive visuals.
              </p>
            </div>
          </div>

          {/* Skill Cards */}
          {skills.map((skill) => (
            <div key={skill.id} data-aos="flip-up" data-aos-once="true" >
              <div className="bg-dark text-white rounded-2xl border border-blue-600 bg-slate-950 p-4 mb-8 custom-hover">
                <h5 className="text-2xl font-bold text-blue-600 text-center">{skill.title}</h5>
                <p className="text-lg text-center">"{skill.description}"</p>

                <div className="flex flex-wrap justify-center gap-4 items-center mt-4">
                  {skill.tech.map((imgPath, index) => (
                    <div key={index} className="w-16 transition-transform duration-400 hover:scale-125 object-contain">
                      <figure>
                        <img src={imgPath} alt="tech-icon" className="w-full h-auto" />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default About