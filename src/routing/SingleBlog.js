import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SingleBlog() {

  let navigate = useNavigate();  
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((result) => {
        // console.log(result.data);
        setSinglePost(result.data);
      })
      .catch((err) => {
        return navigate("/blog")
      })
  }, [id]);
  return (
    <>
      <h3>Single Post</h3>
      <div className="singlepost">
        <h4>{singlePost.title}</h4>
        <p>{singlePost.body}</p>
      </div>
      
    </>
  );
}

export default SingleBlog;
