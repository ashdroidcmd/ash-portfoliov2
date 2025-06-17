import { useAOS } from "../hooks/useAOS";

import useFirebaseCollection from "../hooks/useFirebaseCollection";

const TechStackCards = () => {
  // Hook
  useAOS();

  const [skills, loading, error] = useFirebaseCollection(
    "tech-stack",
    (a, b) => a.id - b.id,
  );

  if (loading)
    return <p className="text-center text-white">Loading Tech Stack...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  return (
    <>
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
    </>
  );
};

export default TechStackCards;
