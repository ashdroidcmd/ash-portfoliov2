import React from 'react'
import Button from '../components/Button'
const Hero = () => {
  return (
    <>
      <section id="home-section" className="relative z-10 overflow-hidden h-screen bg-black flex flex-col justify-center items-center p-4 font-[Raleway]">
        
        {/* Floating Shapes Animation */}
        <div className="wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className="text-center animate__animated animate__fadeInUp animate__slower">
          <p className="text-zinc-200 text-center">Front End Web Dev | 3D Artist</p>
          <h1 className="text-5xl font-bold text-blue-600">I&apos;m Ash</h1>
          <p className="text-white text-2xl mb-4 font-light">
            Blending code and creativity to bring ideas to life.
          </p>

          <div className="flex flex-wrap gap-2 justify-center text-2xl">
            <a href="#project-section" className="animate__animated animate__bounceInLeft animate__slower animate__delay-2s">
              <Button title="Web Projects" />
            </a>
            <a href="https://www.instagram.com/kuroi_3d/" target="_blank" rel="noopener noreferrer" className="animate__animated animate__bounceInUp animate__slower animate__delay-2s">
              <Button title="3D Projects" />
            </a>
            <a href="/Resume-Web-Dev.pdf" target="_blank" rel="noopener noreferrer" className="animate__animated animate__bounceInRight animate__slower animate__delay-2s">
              <Button title="Download CV" />
            </a>
          </div>

        </div>
      </section>

    </>
  )
}

export default Hero