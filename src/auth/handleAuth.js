import Swal from "sweetalert2";
import { signout } from "../api/authApi";

export const isAuthenticated = () => {
  const jwt = localStorage.getItem("auth");
  if (jwt) {
    return JSON.parse(jwt);
  }
  return false;
};

export const EmptyCart = () => {
  signout()
    .then(async (res) => {
      localStorage.removeItem("auth");
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You aaccount has been created succefully, Please SIGN IN",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload(false);
    })
    .catch((err) => console.log(err));
};
