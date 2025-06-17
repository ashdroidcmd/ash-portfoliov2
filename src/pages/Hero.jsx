import React from "react";
import Button from "../components/Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section
        id="home-section"
        className="relative z-10 flex h-screen flex-col items-center justify-center overflow-hidden bg-black p-4 font-[Raleway]"
      >
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

        <div className="animate__animated animate__fadeInUp animate__slower text-center">
          <p className="text-center text-zinc-200">
            Front End Web Dev | 3D Artist
          </p>
          <h1 className="text-5xl font-bold text-blue-600">I&apos;m Ash</h1>
          <p className="mb-4 text-2xl font-light text-white">
            Blending code and creativity to bring ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-2xl">
            <Link
              to="project-section"
              smooth={true}
              className="animate__animated animate__bounceInLeft animate__slower animate__delay-2s"
            >
              <Button title="Web Projects" />
            </Link>
            <a
              href="https://www.instagram.com/kuroi_3d/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate__animated animate__bounceInUp animate__slower animate__delay-2s"
            >
              <Button title="3D Projects" />
            </a>
            <a
              href="/Resume-Web-Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animate__animated animate__bounceInRight animate__slower animate__delay-2s"
            >
              <Button title="Download CV" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
