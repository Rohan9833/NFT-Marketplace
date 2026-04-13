// MintoraSignup.jsx
import { useState } from "react";
import "../Style/Signup.css";

export default function MintoraSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="mintoraSignupMainWrapper">
      <div className="mintoraSignupCardContainer">
        <h2 className="mintoraSignupHeadingText">Create Account</h2>

        <p className="mintoraSignupSubText">
          Join Mintora Marketplace and start your NFT journey 🚀
        </p>

        <form
          onSubmit={handleSubmit}
          className="mintoraSignupFormWrapper"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="mintoraSignupInputField"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="mintoraSignupInputField"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mintoraSignupInputField"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mintoraSignupInputField"
            required
          />

          <button
            type="submit"
            className="mintoraSignupSubmitButton"
          >
            Sign Up
          </button>
        </form>

        <p className="mintoraSignupLoginRedirectText">
          Already have an account?
          <span className="mintoraSignupLoginLinkText">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

