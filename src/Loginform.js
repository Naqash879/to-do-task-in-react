import { useState } from "react";
import "./loginform.css";
import Details from "./Details";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ userName, password });
    setIsLogin(true);
  };
  if (isLogin === true) {
    return <Details data={submitted} />;
  }
  return (
    <>
      <div className="loginForm-Container">
        <div>
          <form className="loginForm" onSubmit={handleSubmit}>
            <h2>Login Form</h2>

            <div>
              <span>User Name</span>
              <input
                type="text"
                value={userName}
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <span>Password</span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Show password</span>
            </div>

            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>

      <div>
        {submitted && (
          <>
            <p>Username: {userName}</p>
            <p>Password: {password}</p>
          </>
        )}
      </div>
    </>
  );
}

export default LoginForm;
