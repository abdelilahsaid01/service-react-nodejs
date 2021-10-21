import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../api/authApi";

const Signin = (props) => {
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    SetUser({ ...user, [e.target.id]: e.target.value });
  };

  const submitSignin = (e) => {
    e.preventDefault(); // avoid refreshing the page
    signin(user)
      .then((res) => res.json())
      .then((user) => {
        console.log(props.history);
        localStorage.setItem("auth", JSON.stringify(user));
        props.history.push("/home");
        // props.history.push({
        //   pathname: "/home",
        //   state: user,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="mx-auto mt-5 col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <Link className="text-danger" to="signup">
                Signup
              </Link>
            </div>

            <button
              onClick={submitSignin}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
