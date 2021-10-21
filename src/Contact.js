import React, { useState } from "react";
import Swal from "sweetalert2";
import { mail } from "./api/mail";
import { isAuthenticated } from "./auth/handleAuth";
import Footer from "./footer";
import header from "./header";
const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  };
  const [message, setMessage] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const submitSignin = (e) => {
    e.preventDefault(); // avoid refreshing the page
    mail(message)
      .then((res) => res.json())
      .then(async (user) => {
        if (user.response) {
          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message has been sent successfully ",
            showConfirmButton: false,
            timer: 1000,
          });
          return window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <body>
      {header("contact")}
      {/* <!--/header--> */}

      <div
        class="page-title"
        style={{ backgroundImage: `url(./images/page-title.png)` }}
      >
        <h1>Contact us</h1>
      </div>

      <section id="contact-page">
        <div class="container">
          <div class="large-title text-center">
            <h2>Drop Your Message</h2>
            <p>
              All users on MySpace will know that there are millions of people
              out there. Every day <br /> besides so many people joining this
              community.
            </p>
          </div>
          <div class="row contact-wrap">
            <div
              class="status alert alert-success"
              style={{ display: "none" }}
            ></div>
            <form
              id="main-contact-form"
              class="contact-form"
              name="contact-form"
              method="post"
              action="sendemail.php"
            >
              <div class="col-sm-5 col-sm-offset-1">
                <div class="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    required="required"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="phone"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="address"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-sm-5">
                <div class="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    required="required"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    required="required"
                    class="form-control"
                    rows="8"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-lg" onClick={submitSignin}>
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!--/.row--> */}
        </div>
        {/* <!--/.container--> */}
      </section>
      {/* <!--/#contact-page--> */}
      {/* <!--/#bottom--> */}
      <Footer />
      {/* <!--/#footer--> */}
      {/* <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.prettyPhoto.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.isotope.min.js"></script>
      <script src="js/main.js"></script> */}
    </body>
  );
};

export default Contact;
