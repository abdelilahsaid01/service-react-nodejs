import Swal from "sweetalert2";
import { signup } from "../api/authApi";
import SigninPop from "./SigninPop";

const SignupPop = () => {
  Swal.fire({
    position: "center",
    title: "SIGN UP",
    backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
    html: `<input type="text" id="name" class="swal2-input" placeholder="Name">
    <input type="text" id="email" class="swal2-input" placeholder="Email">
    <input type="password" id="password" class="swal2-input" placeholder="Password">
    <input type="password" id="repeat_password" class="swal2-input" placeholder="Repeat password">`,
    confirmButtonText: "Sign up",
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector("#name").value;
      const email = Swal.getPopup().querySelector("#email").value;
      const password = Swal.getPopup().querySelector("#password").value;
      const repeat_password =
        Swal.getPopup().querySelector("#repeat_password").value;
      const user = { name, email, password, repeat_password };
      if (!user) {
        Swal.showValidationMessage(`Please enter email and password`);
      }
      signup(user)
        .then((res) => res.json())
        .then(async (user) => {
          if (user.email) {
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You aaccount has been created succefully, Please SIGN IN",
              showConfirmButton: false,
              timer: 1500,
            });
            return SigninPop();
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: user,
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => console.log(err));
    },
  });
};

export default SignupPop;
