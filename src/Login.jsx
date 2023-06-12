/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import "./Login.css"

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/trips"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="wrapper2">
      <div className="image-side">
        <div className="image-login">
        </div>
      </div>
      <div className="login-side">
        <h1>Login</h1>
         <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <h3 className="labels-login">Email:</h3>
            <input name="email" type="email" placeholder="  Email" />
          </div>
         <h3 className="labels-login">Password:</h3>
          <div className="inputs">
            <input name="password" type="password" placeholder="  Password" />
          </div>
          <br/>
          <button className="button-login" type="submit">Login</button>
          <div className="text-login">
            <h3>Don't have an account?</h3>
            <a href="/signup">Register now</a>
          </div>
        </form>
      </div>
      
    </div>
  );
}
