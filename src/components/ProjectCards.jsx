import projects from '../data/WebProjects.json'
import Button from './Button'
import { useAOS } from '../hooks/useAOS';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ProjectCards = () => {
    // Hook
    useAOS();

    return (
        <>
            <div  className="space-y-10 mb-10 ">
                
                {/* Animation */}
                {projects.map(project => (
                    <div data-aos="flip-up" data-aos-once="true" key={project.id}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 items-center bg-slate-950 rounded-lg border border-blue-600 custom-hover">
                        
                        {/* Text Content */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
                            <p className="text-white mb-4 text-lg">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4 ">
                                {project.tech.map((tech, index) => (
                                    <img
                                        key={index}
                                        src={tech}
                                        alt="Tech Icon"
                                        className="h-10 w-10 object-contain"
                                        title={tech.split('/').pop().replace('.png', '').charAt(0).toUpperCase() + tech.split('/').pop().replace('.png', '').slice(1)}
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
            </div>
        </>
    )
}

export default ProjectCards