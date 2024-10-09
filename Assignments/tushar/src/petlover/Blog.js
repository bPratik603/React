import React from "react";
import Blog_Cards from "./Blog_Cards";

function Blog() {
  return (
    <div className="bg-white pb-5">
      <p
        className="pt-5 text-success fw-bold text-center"
        style={{ fontSize: "20px" }}
      >
        Pet Blog
      </p>
      <h1 className="h1 fw-bold text-center">
        <span style={{ color: "orangered" }}>Updates</span>{" "}
        <span style={{ color: "black" }}>From Blog</span>
      </h1>
      <Blog_Cards />
    </div>
  );
}

export default Blog;
