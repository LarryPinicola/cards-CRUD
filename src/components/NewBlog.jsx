import React, { useState } from "react";
import { useGetNurtureBlogMutation } from "./BlogApi";
import { Link, useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [getNurtureBlog] = useGetNurtureBlogMutation();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, desc);
    const newData = { id: Date.now(), title, desc, img };
    getNurtureBlog(newData);
    nav("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-[35%] flex-col gap-7 shadow-xl p-5 items-center rounded-lg hover:translate-y-[-10px] bg-gradient-to-tl from-yellow-400 to-red-500 duration-500"
      >
        <h1 className="text-2xl text-black underline">Create New Blog</h1>
        <input
          type="text"
          className="outline-none rounded-xl p-3"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="outline-none p-3 rounded-xl"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          className="outline-none p-3 rounded-xl"
          placeholder="img link"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="flex justify-between items-center gap-5 mt-5 mb-5">
          <Link to={"/"}>
            <button className="bg-gray-300 px-5 shadow-lg py-2 rounded-lg border-none">
              Back
            </button>
          </Link>
          <button
            type="onsubmit"
            className="bg-black text-white px-5 shadow-lg py-2 rounded-lg border-none"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
