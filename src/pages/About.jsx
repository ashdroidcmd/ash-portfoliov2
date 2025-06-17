import "../App.css";
import TechStackCards from "../components/TechStackCards";

const About = () => {
  return (
    <>
      <section
        id="about-section"
        className="flex min-h-screen items-center justify-center overflow-y-auto border-y border-blue-800 bg-black py-8 font-[Raleway]"
      >
        <div className="mx-auto mt-4 w-7xl px-4">
          {/* Intro Card */}
          <div data-aos="fade-down" data-aos-once="true">
            <div className="custom-hover mb-8 rounded-2xl border border-blue-600 bg-slate-950 p-6 text-white">
              <h1 className="text-3xl font-bold text-blue-600">
                I'm Ashlee Zoe Gesite
              </h1>
              <p className="block">Location: Bohol, Philippines</p>
              <p className="m-0 text-lg">
                I'm a front-end developer and 3D environment artist crafting
                interactive websites and immersive visuals.
              </p>
            </div>
          </div>
          <TechStackCards />
        </div>
      </section>
    </>
  );
};

export default About;
