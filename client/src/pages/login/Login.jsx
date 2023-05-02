import React, { useState } from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";

// const [error, setError] = useState(false);

// function setError(message) {
//   const error = new Error(message);
//   error.statusCode = 400;
//   throw error;
// }

export default function LoginPage() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      window.location.replace("/");
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            className="input-log"
            type="text"
            placeholder="Enter your username..."
            ref={userRef}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="input-log"
            type="password"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
        </div>
        <button className="log-btn" type="submit">
          Login
        </button>

        <div>
          <p className="login-p">
            Don't have account? <Link to="/register">create anew a ccount</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
