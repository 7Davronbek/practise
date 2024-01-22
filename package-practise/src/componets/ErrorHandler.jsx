import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorHandler = () => {
    const error = useRouteError()
  return (
    <div className="ErrorHandler">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" >
            <h1>An error occured!</h1>
            <h3>{error.message}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
