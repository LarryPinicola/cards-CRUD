import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Detail from "./components/Detail";
import NewBlog from "./components/NewBlog";
import Edit from "./components/Edit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/create" element={<NewBlog />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
  );
};

export default App;
