import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <Link to="/">Logo</Link>
              <Link to="/pagination">Pagination</Link>
              <Link to="/post">Post</Link>
              <Link to="/formik">Formik</Link>
              <Link to="/hookform">Hook form</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
