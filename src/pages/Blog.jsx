import BlogCards from "../components/BlogCards";
import { useAOS } from "../hooks/useAOS";

const Blog = () => {
  // Hook
  useAOS();

  return (
    <>
      <section
        id="blog-section"
        className="bg-black flex justify-center items-center min-h-screen  border-t border-blue-800 overflow-y-auto font-[Raleway] py-8"
      >
        <div className="w-7xl mx-auto mt-4 px-4">
          <p
            data-aos="fade-down"
            data-aos-once="true"
            className="text-5xl text-center text-blue-600 mb-6 font-semibold animate__animated animate__bounce"
          >
            Blog
          </p>
          <BlogCards />
        </div>
      </section>
    </>
  );
};

export default Blog;
