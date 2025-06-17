import BlogCards from "../components/BlogCards";
import { useAOS } from "../hooks/useAOS";

const Blog = () => {
  // Hook
  useAOS();

  return (
    <>
      <section
        id="blog-section"
        className="flex min-h-screen items-center justify-center overflow-y-auto border-t border-blue-800 bg-black py-8 font-[Raleway]"
      >
        <div className="mx-auto mt-4 w-7xl px-4">
          <p
            data-aos="fade-down"
            data-aos-once="true"
            className="animate__animated animate__bounce mb-6 text-center text-5xl font-semibold text-blue-600"
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
