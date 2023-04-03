import React from "react";

const SinglePost = ({ title, desc }) => {
  return (
    <div className="SinglePost">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
