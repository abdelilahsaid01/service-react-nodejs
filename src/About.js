import React from "react";
import Footer from "./footer";
import header from "./header";
const About = () => {
  return (
    <body>
      {header("about")}
      {/* <!--/header--> */}
      <div
        class="page-title"
        style={{ backgroundImage: `url(./images/page-title.png)` }}
      >
        <h1>About us</h1>
      </div>

      <section id="about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="about-img">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="about-content">
                <h2>Who we are</h2>
                <p>
                  Photographs are a way of preserving a moment in our lives for
                  the rest of our lives. Many of us have at least been tempted
                  at the flashy array of photo printers which seemingly leap off
                  the shelves at even the least tech-savvy. It surely seems old
                  fashioned to talk about 35mm film and non-digital cameras in
                  today’s day and age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="middle"
        class="skill-area"
        style={{ backgroundImage: `url(./images/skill-bg.png)` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 fadeInDown">
              <div class="skill">
                <h2>Our Skills</h2>
                <p>
                  All users on MySpace will know that there are millions of
                  people out there. Every <br /> day besides so many people
                  joining this community.
                </p>
              </div>
            </div>
            {/* <!--/.col-sm-6--> */}

            <div class="col-sm-6">
              <div class="progress-wrap">
                <h3>Graphic Design</h3>
                <div class="progress">
                  <div
                    class="progress-bar  color1"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  >
                    <span class="bar-width">85%</span>
                  </div>
                </div>
              </div>

              <div class="progress-wrap">
                <h3>HTML</h3>
                <div class="progress">
                  <div
                    class="progress-bar color2"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "95%" }}
                  >
                    <span class="bar-width">95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="progress-wrap">
                <h3>CSS</h3>
                <div class="progress">
                  <div
                    class="progress-bar color3"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <span class="bar-width">80%</span>
                  </div>
                </div>
              </div>

              <div class="progress-wrap">
                <h3>Wordpress</h3>
                <div class="progress">
                  <div
                    class="progress-bar color4"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    <span class="bar-width">90%</span>
                  </div>
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

export default About;
