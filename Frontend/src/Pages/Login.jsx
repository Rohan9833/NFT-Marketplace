import { useState } from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";

export default function MintoraLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  return (
    <div className="mintoraLoginMainWrapper">
      <div className="mintoraLoginCardContainer">

        <h2 className="mintoraLoginHeadingText">
          Welcome Back
        </h2>

        <p className="mintoraLoginSubText">
          Login to continue exploring Mintora Marketplace 🚀
        </p>

        <form
          onSubmit={handleSubmit}
          className="mintoraLoginFormWrapper"
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            className="mintoraLoginInputField"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className="mintoraLoginInputField"
            required
          />

          <button
            type="submit"
            className="mintoraLoginSubmitButton"
          >
            Login
          </button>
        </form>

        <p className="mintoraLoginSignupRedirectText">
          Don’t have an account?
          <Link to="/signup" className="mintoraLoginSignupLinkText">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}