import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // function setError(message) {
  //   const error = new Error(message);
  //   error.statusCode = 400;
  //   throw error;
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
      console.log(res.data);
    } catch (err) {
      // setError(true);
      console.log(err);
    }
  };

  return (
    <div className="back">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          Name:
          <input
            className="input-reg"
            type="text"
            placeholder="Type your username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            className="input-reg"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="input-reg"
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
        <div>
          <p className="login-p">
            Already have a account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
