import { useState } from "react";
import "./style.css"; // external CSS import
import Details from "./Details";

function SignIn() {
  const [userName, setuserName] = useState("");
  const [password, setPasword] = useState("");
  const [submitted, setSubmitted] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // page switch
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ userName, password });
    setIsLoggedIn(true); // switch page
  };

  // Conditional rendering
  if (isLoggedIn) {
    // Show Details page
    return <Details data={submitted} />;
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <button type="submit" className="login-Btn">
          Login
        </button>
        <div className="forgot-section">
          <span>Forgot </span>
          <button className="forgot-btn" type="button">
            Username
          </button>
          <button className="forgot-btn" type="button">
            Password
          </button>
        </div>
        <div className="noAccount-Section">
          <span>Don't have an Account? </span>
          <button className="forgot-btn" type="text">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
