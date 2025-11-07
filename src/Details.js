import { useState } from "react";
function Details({ data }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-details">
      <h2>Login Details</h2>
      <p>Username: {data.userName}</p>
      <input type={showPassword ? "text" : "password"} value={data.password} />
      <div>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />
      </div>
    </div>
  );
}
export default Details;
