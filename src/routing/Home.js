import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import FourZeroFour from "./FourZeroFour";
import BlogParent from "./BlogParent";

function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<BlogParent />}>
          <Route index element={<Blog />}></Route>
          <Route path=":id" element={<SingleBlog />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<FourZeroFour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
