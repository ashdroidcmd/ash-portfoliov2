import ProjectCards from "../components/ProjectCards";
import { useAOS } from "../hooks/useAOS";

const Projects = () => {
  // Hook
  useAOS();

  return (
    <>
      <section
        id="project-section"
        className="flex min-h-screen items-center justify-center overflow-y-auto bg-black py-8 font-[Raleway]"
      >
        <div className="mx-auto mt-4 w-7xl px-4">
          <p
            data-aos="fade-down"
            data-aos-once="true"
            className="animate__animated animate__bounce mb-6 text-center text-5xl font-semibold text-blue-600"
          >
            Projects
          </p>
          <ProjectCards />
        </div>
      </section>
    </>
  );
};

export default Projects;
