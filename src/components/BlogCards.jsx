import blogs from "../data/BlogPosts.json";
import Button from "./Button";
import { useAOS } from "../hooks/useAOS";

const BlogCards = () => {
  // Hook
  useAOS();

  // Sort blogs by date (latest first) and limit to 6
  const sortedBlogs = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="space-y-10 mb-10 font-[Raleway]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Animation Flip Left */}
        {sortedBlogs.map((blogPost) => (
          <div data-aos="flip-left" data-aos-once="true" key={blogPost.id}>
            <div className="card bg-slate-950 rounded-lg border border-blue-600 custom-hover flex flex-col">
              <figure className="h-48 overflow-hidden">
                <img
                  src={blogPost.images}
                  alt={blogPost.title}
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="card-body flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-blue-600 text-2xl font-semibold">
                    {blogPost.title}
                  </h2>
                  <p>{blogPost.date}</p>
                  <p className="mb-4 text-lg">
                    {blogPost.description?.slice(0, 100)}...
                  </p>
                </div>

                <a
                  href={blogPost.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button title="Read Article" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
