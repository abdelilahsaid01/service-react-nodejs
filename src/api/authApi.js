exports.signin = (user) => {
  return fetch(`${process.env.REACT_APP_API_KEY}/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), // format to json
  });
};
exports.signup = (user) => {
  return fetch(`${process.env.REACT_APP_API_KEY}/api/signup/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), // format to json
  });
};

exports.signout = () => {
  return fetch(`${process.env.REACT_APP_API_KEY}/api/signout`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
