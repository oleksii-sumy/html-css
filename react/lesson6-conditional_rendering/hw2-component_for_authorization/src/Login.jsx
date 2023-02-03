import React from "react";

const Login = props => {
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;

