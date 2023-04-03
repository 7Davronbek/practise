import React from "react";
import Post from "../componets/Post";
import { getPosts } from "../utils/api";
import { useLoaderData } from "react-router-dom";

const PostPage = () => {
  const loaderData = useLoaderData();
  return (
    <>
      <h3 className="text-center">Blog post</h3>
      <Post posts={loaderData} />
    </>
  );
};

export default PostPage;

export const loader = () => {
  return getPosts();
};
