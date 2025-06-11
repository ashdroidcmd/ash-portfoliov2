import { useState } from "react";
import projects from "../data/WebProjects.json";
import Button from "./Button";
import { useAOS } from "../hooks/useAOS";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectCards = () => {
  useAOS();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Sliced projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <div className="space-y-10 mb-10">
        {currentProjects.map((project) => (
          <div data-aos="flip-up" data-aos-once="true" key={project.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center bg-slate-950 rounded-lg border border-blue-600 custom-hover">
              {/* Text Content */}
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-white mb-4 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt="Tech Icon"
                      className="h-10 w-10 object-contain"
                      title={
                        tech
                          .split("/")
                          .pop()
                          .replace(".png", "")
                          .charAt(0)
                          .toUpperCase() +
                        tech.split("/").pop().replace(".png", "").slice(1)
                      }
                    />
                  ))}
                </div>
                <div className="flex space-x-4 mb-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      <Button title="Repo" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      <Button title="Live" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div>
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="mySwiper w-full"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded font-semibold transition text-xl ${
                currentPage === i + 1
                  ? "bg-blue-600 text-black "
                  : "bg-slate-950 text-gray-200 border border-blue-600 hover:bg-slate-800 custom-hover"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;