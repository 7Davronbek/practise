import React from "react";
import SinglePost from "../componets/SinglePost";
import { useLoaderData } from "react-router-dom";
import { getPost } from "../utils/api";

const SinglePostPage = () => {
  const postData = useLoaderData();
  return (
    <>
      <SinglePost title={postData.title} desc={postData.body} />
    </>
  );
};

export default SinglePostPage;

export const loader = ({ params }) => {
  const postId = params.id;
  return getPost(postId);
};
