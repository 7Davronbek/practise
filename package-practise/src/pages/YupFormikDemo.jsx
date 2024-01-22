import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const YupFormikDemo = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    adress1: "",
    adress2: "",
  };

  //   const phoneRegExp = /^((+[1-9][ -]?(\d{1,4}[ -]?)?)|((\d{2,3})[ -]?(\d[ -]?)?)|(\d{2,4}[ -]?))\d{3,4}[ -]?\d{3,4}[ -]?\d{3,4}$/
  // /^((\+[1-9]{1,4}[ -]?)|(\([0-9]){2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    contact: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("required"),
    adress1: yup.string().required("required"),
    adress2: yup.string().required("required"),
  });

  const handleformSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="YupFormikDemo">
      <div className="container">
        <div className="row">
          <div className="col-6 shadow p-4 rounded mx-auto">
            <h1 className="mb-3">Formik</h1>

            <Formik
              onSubmit={handleformSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>

                  <label htmlFor="First">First Name:</label>
                  <div className="inputWrap mb-3">
                    <input
                      id="First"
                      name="First"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      required={touched.firstName && errors.firstName}
                      // onError={!!touched.firstName && !!errors.firstName}
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="text-danger">{errors.firstName}</div>
                    ) : null}
                  </div>

                  <label htmlFor="last">Last Name:</label>
                  <div className="inputWrap mb-3">
                    <input
                      id="last"
                      name="last"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      required={touched.lastName && errors.lastName}
                      // onError={!!touched.lastName && !!errors.lastName}
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className="text-danger">{errors.lastName}</div>
                    ) : null}
                  </div>

                  <label htmlFor="Email">Email:</label>
                  <div className="inputWrap mb-3">
                    <input
                      id="Email"
                      name="Email"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required={touched.email && errors.email}
                      // onError={!!touched.email && !!errors.email}
                    />
                    {touched.email && errors.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>
                  
                  <label htmlFor="First">First Name:</label>
                  <div className="inputWrap mb-3">
                    <input
                      id="First"
                      name="First"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      required={touched.firstName && errors.firstName}
                      // onError={!!touched.firstName && !!errors.firstName}
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="text-danger">{errors.firstName}</div>
                    ) : null}
                  </div>
                  

                  <button className="btn btn-outline-dark py-2 px-4" type="submit">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YupFormikDemo;
