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
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
{/* <div className="wrapper">
        <img id="beach-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvDCDLiHnoimv7kx72ztSIb5oaF7k6HfLjg&usqp=CAU" />
        <h2>Registration</h2>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input name="name" type="text" placeholder="  Enter your name" required/>
          </div>
          <div className="input-box">
            <input name="email" type="text" placeholder="  Enter your email" required/>
          </div>
          <div className="input-box">
            <input name="password" type="password" placeholder="  Create password" required/>
          </div>
          <div className="input-box">
            <input name="password_confirmation"type="password" placeholder="  Confirm password" required/>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Sign up Now"/>
          </div>
          <div className="text">
            <h3>Already have an account? <a href="/login">Login now</a></h3>
          </div>
        </form> */}