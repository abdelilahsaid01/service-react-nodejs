import Swal from "sweetalert2";
import { signin } from "../api/authApi";

const SigninPop = () => {
  Swal.fire({
    position: "center",
    title: "SIGN IN",
    backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
    html: `<input type="text" id="email" class="swal2-input" placeholder="Email">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Sign in",
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector("#email").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!email || !password) {
        Swal.showValidationMessage(`Please enter email and password`);
      }
      const user = { email: email, password: password };
      signin(user)
        .then((res) => res.json())
        .then(async (user) => {
          if (user.token) {
            localStorage.setItem("auth", JSON.stringify(user));
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You are logged In",
              showConfirmButton: false,
              timer: 1500,
            });
            return window.location.reload(false);
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

export default SigninPop;
