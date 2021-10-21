import React from "react";
import Footer from "./footer";
import header from "./header";
const Services = () => {
  return (
    <body>
      {header("services")}
      {/* <!--/header--> */}
      <div
        class="page-title"
        style={{ backgroundImage: `url(./images/page-title.png)` }}
      >
        <h1>Services</h1>
      </div>

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

      <Footer />
    </body>
  );
};

export default Services;
