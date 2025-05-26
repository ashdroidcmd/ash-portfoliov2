import ProjectCards from "../components/ProjectCards"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      once: true, // only animate once
    });
  }, []);
  
  return (
    <>
      <section id="project-section" className="bg-black flex justify-center items-center min-h-screen overflow-y-auto font-[Raleway] py-8">
        <div className="w-7xl mx-auto mt-4 px-4">
          
          <p data-aos="fade-down" data-aos-once="true" className="text-5xl text-center text-blue-600 mb-6 font-semibold animate__animated animate__bounce">Projects</p>
          <ProjectCards />
        </div>

      </section>
    </>
  )
}

export default Projects