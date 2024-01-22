import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

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
              <Link to="/mui">MUI</Link>
              <Link to="/editor">Editor</Link>
              <Link to="/spline">Spline</Link>
              <Link to="/offtop">Offtop</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
