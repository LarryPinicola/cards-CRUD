import React, { useEffect, useState } from "react";
import { useGetSingleBlogQuery } from "./BlogApi";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Detail = () => {
  const { id } = useParams();
  const { data: card } = useGetSingleBlogQuery(id);
  console.log(card);

  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(true);
    }, 500);
  }, []);

  return (
    <div className=" w-80 mx-auto bg-gradient-to-tl from-yellow-400 to-red-500 border shadow-xl mt-10 flex flex-col justify-center items-center rounded-lg hover:translate-y-[-10px] duration-500">
      <h1 className="my-4 text-xl font-semibold tracking-wide text-white">
        {card?.title}
      </h1>
      {skeleton ? (
        <img src={card?.img} alt="" className="w-44 rounded-lg" />
      ) : (
        <Skeleton className="w-44 h-44 bg-blue-300" />
      )}
      {skeleton ? (
        <p className="w-[90%] text-center mt-5 text-sm">{card?.desc}</p>
      ) : (
        <Skeleton className="w-56 mt-5 text-center bg-blue-300" />
      )}
      <div className="flex justify-between items-center gap-5 mt-5 mb-5">
        <Link to={`/`}>
          <button className="bg-gray-300 px-5 shadow-lg py-1 rounded-lg border-none">
            Back
          </button>
        </Link>
        <Link to={`/edit/${card?.id}`}>
        <button className="bg-black text-white px-5 shadow-lg py-1 rounded-lg border-none">
          Edit
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
