import React from "react";
import { useForm } from "react-hook-form";

const HookFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="HookFormPage">
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h3>Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="First name"
                {...register("First name", { required: true, maxLength: 80 })}
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true, maxLength: 100 })}
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                className="form-control mb-3"
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <select
                className="form-control"
                {...register("Title", { required: true })}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>

              <input
                {...register("Developer", { required: true })}
                type="radio"
                value="Yes"
              />
              <input
                {...register("Developer", { required: true })}
                type="radio"
                value="No"
              />

              <input className="form-control mb-3" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HookFormPage;
