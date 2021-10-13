import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/img/logo.png";
import { withRouter } from "react-router-dom";
import { LoginApi } from "../../Services/Fetch";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState("با موفقیت وارد شدید");

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      props.history.push("/dashboard");
    }
  });
  const handleSubit = (e) => {
    e.preventDefault();
    LoginApi(username, password).then((res) => {
      console.log(res)
      if (res.status === 200) {
        setError(false);
        setResponse(true)
        setResponseMessage("با موفقیت وارد شدید");
        localStorage.setItem("token", res.data.jwt);
        setTimeout(() => {
          props.history.push("/dashboard");
        }, 1500);
      } else {
        setError(true);
        setResponse(false)
        setErrorMessage("نام کاربری یا رمز عبور شما اشتباه است");
      }
    });
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center login">
      <div className="loginForm">
        <div className="w-100 d-flex justify-content-center mb-4">
          <img src={logo} alt="" width="350px" />
        </div>
        <form onSubmit={handleSubit} className="w-75">
          <div className="mb-3 w-100">
            <input
              type="email"
              className="form-control w-100 text-center"
              placeholder="نام کاربری"
              value={username}
              name={username}
              onChange={handleUsername}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control w-100 text-center"
              placeholder="رمز عبور"
              value={password}
              name={password}
              onChange={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-primary" type="submit">
              ورود
            </button>
          </div>
        </form>
        {error ? (
          <div className="alert alert-danger w-75" role="alert">
            {errorMessage}
          </div>
        ) : null}
        {response ? (
          <div className="alert alert-success w-75" role="alert">
            {responseMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Login);
