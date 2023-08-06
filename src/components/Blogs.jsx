import React from "react";
import { useGetBlogsQuery } from "./BlogApi";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  //   console.log(blogs);
  return (
    <div className="h-screen w-[95%] mx-auto">
      <h1 className="text-3xl text-center mt-10 font-semibold tracking-wider text-blue-500 ">
        Let's Customize The Cards
      </h1>

      <div className="text-center mt-10">
        <Link to={'/create'}>
          <button className=" py-3 px-5 hover:scale-110 hover:text-white font-semibold duration-500 rounded-lg bg-gradient-to-l from-pink-500 to-purple-600 uppercase tracking-wide">
            Nurture your card
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {blogs?.map((blog) => (
          <Cards key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
