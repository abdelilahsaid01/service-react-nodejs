import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../api/authApi";
const Signup = (props) => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const handleChange = (e) => {
    SetUser({ ...user, [e.target.id]: e.target.value });
  };

  const submitSignun = (e) => {
    e.preventDefault(); // avoid refreshing the page
    signup(user)
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        // localStorage.setItem("user", JSON.stringify(user));
        props.history.push("/");
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
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                />
              </div>
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
              <label htmlFor="repeat_password" className="form-label">
                Repeat Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                id="repeat_password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <Link className="text-danger" to="/">
                Signin
              </Link>
            </div>
            <button
              onClick={submitSignun}
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
export default Signup;
