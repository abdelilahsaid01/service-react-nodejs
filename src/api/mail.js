const { isAuthenticated } = require("../auth/handleAuth");

const { token } = isAuthenticated();
exports.mail = (message) => {
  return fetch(`${process.env.REACT_APP_API_KEY}/api/mail/send`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(message), // format to json
  });
};
