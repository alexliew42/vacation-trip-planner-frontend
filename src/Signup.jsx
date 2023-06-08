import axios from "axios";
import { useState } from "react";
import "./Signup.css"

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="wrapper">
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
        </form>
      
      {/* <h2>Signup</h2  >
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          Name: <input name="name" type="text" />
        </div>
        <div className="input-box">
          Email: <input name="email" type="email" />
        </div>
        <div className="input-box">
          Password: <input name="password" type="password" />
        </div>
        <div className="input-box">
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <div className="input-box button">
          <button type="Submit">Signup</button>
        </div>
      </form> */}
      </div>
    );
  }