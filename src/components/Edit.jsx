import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useGetUpdateBlogMutation } from "./BlogApi";

const Edit = () => {
  const { id } = useParams();
  const [getUpdateBlog] = useGetUpdateBlogMutation();
  const { data: card } = useGetSingleBlogQuery(id);
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setTitle(card?.title), setDesc(card?.desc), setImg(card?.img);
  }, [card]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const newData = { id, title, desc, img };
    getUpdateBlog(newData);
    nav("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        onSubmit={handleUpdate}
        className="flex w-[35%] flex-col gap-7 shadow-xl p-5 items-center rounded-lg hover:translate-y-[-10px] bg-gradient-to-tl from-yellow-400 to-red-500 duration-500"
      >
        <h1 className="text-2xl text-black underline">Create New Blog</h1>
        <input
          type="text"
          className="outline-none rounded-xl p-3"
          placeholder="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="outline-none p-3 rounded-xl"
          placeholder="description"
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          className="outline-none p-3 rounded-xl"
          placeholder="img link"
          defaultValue={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="flex justify-between items-center gap-5 mt-5 mb-5">
          <Link to={"/"}>
            <button className="bg-gray-300 px-5 shadow-lg py-2 rounded-lg border-none">
              Cancel
            </button>
          </Link>
          <button
            type="onsubmit"
            className="bg-black text-white px-5 shadow-lg py-2 rounded-lg border-none"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
