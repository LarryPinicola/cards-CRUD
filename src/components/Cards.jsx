import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useGetRemoveBlogMutation } from "./BlogApi";

const Cards = ({ blog }) => {
  const [getRemoveBlog] = useGetRemoveBlogMutation();
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(true);
    }, 1500);
  }, []);

  return (
    <div className=" w-80 mx-auto bg-gradient-to-tl from-yellow-400 to-red-500 shadow-xl mt-10 flex flex-col justify-center items-center rounded-lg hover:translate-y-[-10px] duration-500">
      <h1 className="my-4 text-xl font-semibold tracking-wide text-white">
        {blog.title}
      </h1>
      {skeleton ? (
        <img src={blog.img} alt="" className="w-44 rounded-lg" />
      ) : (
        <Skeleton className="w-44 h-44 bg-blue-300" />
      )}
      {skeleton ? (
        <p className="w-[90%] text-center mt-5 text-sm">
          {blog.desc.substring(0, 50)}...
        </p>
      ) : (
        <Skeleton className="w-56 mt-5 text-center bg-blue-300" />
      )}
      <div className="flex justify-between items-center gap-5 mt-5 mb-5">
        <Link to={`/detail/${blog.id}`}>
          <button className="bg-gray-300 px-5 shadow-lg py-1 rounded-lg border-none">
            View
          </button>
        </Link>
        <button
          onClick={() => getRemoveBlog(blog.id)}
          className="bg-black text-white px-5 shadow-lg py-1 rounded-lg border-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cards;
