import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Button from "./Button";
import { useAOS } from "../hooks/useAOS";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useAOS();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "arduino-blogposts")
        );
        const fetchedBlogs = querySnapshot.docs.map((doc) => doc.data());
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Sort by date (latest first)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  return (
    <div className="space-y-10 mb-10 font-[Raleway]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blogPost) => (
          <div data-aos="flip-left" data-aos-once="true" key={blogPost.id}>
            <a
              href={blogPost.blogSlug}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card bg-slate-950 rounded-lg border border-blue-600 custom-hover flex flex-col">
                <figure className="h-48 overflow-hidden">
                  <img
                    src={blogPost.images?.[0]}
                    alt={blogPost.title}
                    className="object-cover w-full h-full"
                  />
                </figure>

                <div className="card-body flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h2 className="text-blue-600 text-xl font-semibold">
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
  );
};

export default BlogCards;
