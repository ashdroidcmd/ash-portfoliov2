import { useState } from "react";
import Button from "./Button";
import PaginationComponent from "./Pagination";

// Custom Hooks
import { useAOS } from "../hooks/useAOS";
import useFirebaseCollection from "../hooks/useFirebaseCollection";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectCards = () => {
  useAOS();

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const [projects, loading, error] = useFirebaseCollection(
    "website-projects",
    (a, b) => a.id - b.id,
  );

  // Pagination Variables
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  if (loading)
    return <p className="text-center text-white">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="mb-10 space-y-10">
      {currentProjects.map((project) => (
        <div data-aos="flip-up" data-aos-once="true" key={project.id}>
          <div className="custom-hover grid grid-cols-1 items-center gap-2 rounded-lg border border-blue-600 bg-slate-950 md:grid-cols-2">
            {/* Text Content */}
            <div className="p-4">
              <h3 className="mb-2 text-2xl font-semibold text-blue-600">
                {project.title}
              </h3>
              <p className="mb-4 text-lg text-white">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt="Tech Icon"
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="mb-4 flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button title="Repo" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button title="Live" />
                  </a>
                )}
              </div>
            </div>

            {/* Swiper Images */}
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
                      className="h-full w-full rounded-lg object-contain"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-2">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProjectCards;
