import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result.data);
      setPosts(result.data);
    });
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>

              <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>

              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

export default Blog;
