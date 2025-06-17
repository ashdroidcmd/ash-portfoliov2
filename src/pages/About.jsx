import "../App.css";
import { useAOS } from "../hooks/useAOS";
import { useEffect, useState } from "react";

// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const About = () => {
  // Hook
  useAOS();

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "tech-stack"));
      const fetchedSkills = querySnapshot.docs.map((doc) => doc.data());
      const sortedSkills = fetchedSkills.sort((a, b) => a.id - b.id); // Sort by ID
      setSkills(sortedSkills);
    };

    fetchSkills();
  }, []);

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

          {/* Skill Cards */}
          {skills.map((skill) => (
            <div key={skill.id} data-aos="flip-up" data-aos-once="true">
              <div className="bg-dark custom-hover mb-8 rounded-2xl border border-blue-600 bg-slate-950 p-4 text-white">
                <h5 className="text-center text-2xl font-bold text-blue-600">
                  {skill.title}
                </h5>
                <p className="text-center text-lg">"{skill.description}"</p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                  {skill.tech.map((imgPath, index) => (
                    <div
                      key={index}
                      className="w-16 object-contain transition-transform duration-400 hover:scale-125"
                    >
                      <figure>
                        <img
                          src={imgPath}
                          alt="tech-icon"
                          className="h-auto w-full"
                        />
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
  );
};

export default About;
