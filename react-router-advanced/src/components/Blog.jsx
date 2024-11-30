// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      {/* Fetch and display content based on postId */}
    </div>
  );
}

export default BlogPost;
