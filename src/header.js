import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { EmptyCart, isAuthenticated } from "./auth/handleAuth";
import signInPop from "./auth/SigninPop";
import SignupPop from "./auth/SignupPop";
const Header = (props) => {
  // useEffect(() => {}, []); set Name Majus !!
  return (
    <div>
      <header id="header">
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="top-number">
                  <p>
                    <i className="fa fa-phone-square"></i> +0123 456 70 90
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="social">
                  <ul className="social-share">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="search">
                    <form role="form">
                      <input
                        type="text"
                        className="search-form"
                        autoComplete="off"
                        placeholder="Search"
                      />
                      <i className="fa fa-search"></i>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.container--> */}
        </div>
        {/* <!--/.top-bar--> */}

        <nav className="navbar navbar-inverse" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="home">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>

            <div className="collapse navbar-collapse navbar-left">
              <ul className="nav navbar-nav">
                <li className={props === "home" ? "active" : ""}>
                  <Link to="home">
                    Home <i className="fa fa-home" aria-hidden="true"></i>
                  </Link>
                </li>
                {isAuthenticated() && (
                  <li>
                    <a href="blog.html">Dashboard</a>
                  </li>
                )}
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Categories <i className="fa fa-angle-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-item.html">Cleaning</a>
                    </li>
                    <li>
                      <a href="pricing.html">Home Upgrade</a>
                    </li>
                    <li>
                      <a href="404.html">Maintenance</a>
                    </li>
                  </ul>
                </li>
                <li className={props === "services" ? "active" : ""}>
                  <Link to="services">Services</Link>
                </li>
                <li className={props === "about" ? "active" : ""}>
                  <Link to="about">About Us</Link>
                </li>

                <li className={props === "contact" ? "active" : ""}>
                  <Link to="contact">
                    Contact{" "}
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse navbar-right">
              <ul className="nav navbar-nav">
                {!isAuthenticated() && (
                  <li>
                    <Link to="#" onClick={signInPop}>
                      Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </Link>
                    {/* </li>

                    <li> */}
                    <Link to="#" onClick={SignupPop}>
                      Sign Up{" "}
                      <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </Link>
                  </li>
                )}
                {isAuthenticated() && (
                  <li>
                    <Link to="#" onClick={EmptyCart}>
                      Log Out{" "}
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* <!--/.container--> */}
        </nav>
        {/* <!--/nav--> */}
      </header>
    </div>
  );
};

export default Header;
