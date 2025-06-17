import { useState } from "react";
import { useAOS } from "../hooks/useAOS";
import useFirebaseCollection from "../hooks/useFirebaseCollection";

const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useAOS();

  const [blogs, loading, error] = useFirebaseCollection(
    "arduino-blogposts",
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  // Sort by date (latest first)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  if (loading)
    return <p className="text-center text-white">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="mb-10 space-y-10 font-[Raleway]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blogPost) => (
          <div data-aos="flip-left" data-aos-once="true" key={blogPost.id}>
            <a
              href={blogPost.blogSlug}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card custom-hover flex flex-col rounded-lg border border-blue-600 bg-slate-950">
                <figure className="h-48 overflow-hidden">
                  <img
                    src={blogPost.images?.[0]}
                    alt={blogPost.title}
                    className="h-full w-full object-cover"
                  />
                </figure>

                <div className="card-body flex flex-1 flex-col justify-between">
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-blue-600">
                      {blogPost.title}
                    </h2>
                    <p>{blogPost.date}</p>
                    <p className="mb-4 text-base">
                      {blogPost.description?.slice(0, 80)}...
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded px-4 py-2 text-xl font-semibold transition ${
              currentPage === i + 1
                ? "bg-blue-600 text-black"
                : "custom-hover border border-blue-600 bg-slate-950 text-gray-200 hover:bg-slate-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
