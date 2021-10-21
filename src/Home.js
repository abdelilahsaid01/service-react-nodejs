import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "./auth/handleAuth";
import Footer from "./footer";
import header from "./header";
import "./css/owl.carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SigninPop from "./auth/SigninPop";
const Home = () => {
  // const location = useLocation();
  // const [state, setState] = useState({});
  // setState(location.state.user);
  useEffect(() => {}, []);
  const { user, token } = isAuthenticated();
  return (
    // <div classNameName="container">
    //   <div className="mx-auto mt-5 col-md-6">
    //     <div className="card">
    //       <div className="card-body">
    //         <h5 className="card-title">Profil</h5>
    //         <h6 className="card-subtitle mb-2 ">
    //           <strong>Email :</strong> {user.email}
    //         </h6>
    //         <h6 className="card-subtitle mb-2 ">
    //           <strong>Name :</strong> {user.name}
    //         </h6>
    //         {/* <h6 className="card-subtitle mb-2 ">
    //           <strong>Permession :</strong> {state.role}? Admin:User
    //         </h6> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <body className="homepage">
      {header("home")}
      {/* <!--/header--> */}

      <section id="main-slider" className="no-margin">
        <div className="carousel slide">
          {/* <ol className="carousel-indicators">
            <li
              data-target="#main-slider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#main-slider" data-slide-to="1"></li>
            <li data-target="#main-slider" data-slide-to="2"></li>
          </ol> */}
          <div className="carousel-inner">
            <div
              className="item active"
              style={{ backgroundImage: `url(./images/slider/bg1.jpg)` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="carousel-content">
                      <h1 className="animation animated-item-1">
                        Help Finding Information Online
                      </h1>
                      <div className="animation animated-item-2">
                        Every new computer that’s brought home from the store
                        has an operating system installed onto it.
                      </div>
                      <a
                        className="btn-slide animation animated-item-3"
                        href="#"
                      >
                        Learn More
                      </a>
                      <a
                        className="btn-slide white animation animated-item-3"
                        href="#"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a
          className="prev hidden-xs hidden-sm"
          href="#main-slider"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left"></i>
        </a>
        <a
          className="next hidden-xs hidden-sm"
          href="#main-slider"
          data-slide="next"
        >
          <i className="fa fa-chevron-right"></i>
        </a> */}
      </section>

      {/* <!--/#main-slider--> */}

      <section id="feature">
        <div className="container">
          <div className="center fadeInDown">
            <h2>Features</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>

          <div className="row">
            <div className="features">
              <div
                className="col-md-3 col-sm-4 fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="feature-wrap">
                  <div className="icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <h2>Fast</h2>
                  <p>
                    Having a baby can be a nerve wracking experience for new
                  </p>
                </div>
              </div>
              {/* <!--/.col-md-3--> */}
              <div
                className="col-md-3 col-sm-4 fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="feature-wrap">
                  <div className="icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <h2>Easy</h2>
                  <p>
                    If you are looking for a new way to promote your business
                    that
                  </p>
                </div>
              </div>
              {/* <!--/.col-md-3--> */}
              <div
                className="col-md-3 col-sm-4 fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="feature-wrap">
                  <div className="icon">
                    <i className="fa fa-bullhorn"></i>
                  </div>
                  <h2>Cheap</h2>
                  <p>
                    Okay, you’ve decided you want to make money with Affiliate
                  </p>
                </div>
              </div>
              {/* <!--/.col-md-3--> */}
              <div
                className="col-md-3 col-sm-4 fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="feature-wrap">
                  <div className="icon">
                    <i className="fa fa-arrows"></i>
                  </div>
                  <h2>Editable</h2>
                  <p>A Pocket PC is a handheld computer, which features many</p>
                </div>
              </div>
              {/* <!--/.col-md-3--> */}
            </div>
            {/* <!--/.services--> */}
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.container--> */}
      </section>

      {/* <!--/#feature--> */}

      <section id="recent-works">
        <div className="container">
          <div className="center fadeInDown">
            <h2>Recent Works</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-1.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-1.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-2.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-2.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-3.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-3.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-4.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-4.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-5.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-5.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 single-work">
              <div className="recent-work-wrap">
                <img
                  className="img-responsive"
                  src="images/portfolio/item-6.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="recent-work-inner">
                    <a
                      className="preview"
                      href="images/portfolio/item-6.png"
                      rel="prettyPhoto"
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.row--> */}
          <div className="clearfix text-center">
            <br />
            <br />
            <a href="#" className="btn btn-primary">
              Show More
            </a>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#recent-works--> */}

      <section id="services" className="service-item">
        <div className="container">
          <div className="center fadeInDown">
            <h2>Our Service</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="/images/services/ux.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">UI/UX Design</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="./images/services/web.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Web Design</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="./images/services/motion.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Motion Graphics</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="./images/services/mobile-ui.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Mobile UI/UX</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="./images/services/web-app.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Web Applications</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="media services-wrap fadeInDown">
                <div className="pull-left">
                  <img
                    className="img-responsive"
                    src="./images/services/mobile-ui.svg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">SEO Marketing</h3>
                  <p>Hydroderm is the highly desired anti-aging cream on</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#services--> */}

      <section
        id="middle"
        className="skill-area"
        style={{ backgroundImage: `url(./images/skill-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 fadeInDown">
              <div className="skill">
                <h2>Our Skills</h2>
                <p>
                  All users on MySpace will know that there are millions of
                  people out there. Every <br /> day besides so many people
                  joining this community.
                </p>
              </div>
            </div>
            {/* <!--/.col-sm-6--> */}

            <div className="col-sm-6">
              <div className="progress-wrap">
                <h3>Graphic Design</h3>
                <div className="progress">
                  <div
                    className="progress-bar  color1"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  >
                    <span className="bar-width">85%</span>
                  </div>
                </div>
              </div>

              <div className="progress-wrap">
                <h3>HTML</h3>
                <div className="progress">
                  <div
                    className="progress-bar color2"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  >
                    <span className="bar-width">95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="progress-wrap">
                <h3>CSS</h3>
                <div className="progress">
                  <div
                    className="progress-bar color3"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <span className="bar-width">80%</span>
                  </div>
                </div>
              </div>

              <div className="progress-wrap">
                <h3>Wordpress</h3>
                <div className="progress">
                  <div
                    className="progress-bar color4"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    <span className="bar-width">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#middle--> */}

      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 fadeInDown">
              <div className="tab-wrap">
                <div className="media">
                  <div className="parrent pull-left">
                    <ul className="nav nav-tabs nav-stacked">
                      <li className="">
                        <a
                          href="#tab1"
                          data-toggle="tab"
                          className="analistic-01"
                        >
                          Responsive Web Design
                        </a>
                      </li>
                      <li className="active">
                        <a
                          href="#tab2"
                          data-toggle="tab"
                          className="analistic-02"
                        >
                          Premium Plugin Included
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab3" data-toggle="tab" className="tehnical">
                          Predefine Layout
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab4" data-toggle="tab" className="tehnical">
                          Our Philosopy
                        </a>
                      </li>
                      <li className="">
                        <a href="#tab5" data-toggle="tab" className="tehnical">
                          What We Do?
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="parrent media-body">
                    <div className="tab-content">
                      <div className="tab-pane fade" id="tab1">
                        <div className="media">
                          <div className="pull-left">
                            <img
                              className="img-responsive"
                              src="images/tab2.png"
                            />
                          </div>
                          <div className="media-body">
                            <h2>Adipisicing elit</h2>
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade active in text-right"
                        id="tab2"
                      >
                        <div className="video-box">
                          <img src="images/tab-video-bg.png" alt="video" />
                          <a
                            className="video-icon"
                            href="http://www.youtube.com/watch?v=cH6kxtzovew"
                            rel="prettyPhoto"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>

                      <div className="tab-pane fade" id="tab3">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit.
                        </p>
                      </div>

                      <div className="tab-pane fade" id="tab4">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin words
                        </p>
                      </div>

                      <div className="tab-pane fade" id="tab5">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin
                          words, combined with a handful of model sentence
                          structures,
                        </p>
                      </div>
                    </div>
                    {/* <!--/.tab-content--> */}
                  </div>
                  {/* <!--/.media-body--> */}
                </div>
                {/* <!--/.media--> */}
              </div>
              {/* <!--/.tab-wrap--> */}
            </div>
            {/* <!--/.col-sm-6--> */}
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#content--> */}

      <section id="testimonial">
        <div className="container">
          <div className="center fadeInDown">
            <h2>Testimonials</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="testimonial-slider owl-carousel">
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client1.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client2.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client3.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client2.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client1.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="images/client3.jpg" alt="" />
              </div>
              <div className="content">
                <img src="images/review.png" alt="" />
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price.
                </p>
                <h4>- Charlotte Daniels</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner">
        <div className="container">
          <div className="center fadeInDown">
            <h2>Our Partners</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>

          <div className="partners">
            <ul>
              <li>
                <a href="#">
                  <img
                    className="img-responsive fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                    src="images/partners/brand-1.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-responsive fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="600ms"
                    src="images/partners/brand-2.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-responsive fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="900ms"
                    src="images/partners/brand-3.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-responsive fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="1200ms"
                    src="images/partners/brand-4.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-responsive fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="1500ms"
                    src="images/partners/brand-5.png"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#partner--> */}

      {/* <!--/#bottom--> */}

      <Footer />

      {/* <!--/#footer--> */}
    </body>
  );
};

export default Home;
