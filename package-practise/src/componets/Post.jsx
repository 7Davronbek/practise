import React, { useEffect } from "react";
import { getPosts } from "../utils/api";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  return (
    <div className="Post">
      <div className="container">
        <div className="row">
          {posts.slice(0, 6).map((item) => (
            <Link
              to={`/post/${item.id}`}
              className="col-lg-4 mb-4"
              key={item.id}
            >
              <h5>{item.id}</h5>
              <h3>{item.body}</h3>
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
