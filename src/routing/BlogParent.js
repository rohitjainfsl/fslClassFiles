import React from "react";
import { Outlet } from "react-router-dom";

function BlogParent() {
  return (
    <>
      <h1>BlogParent</h1>
      <Outlet />
    </>
  );
}

export default BlogParent;
