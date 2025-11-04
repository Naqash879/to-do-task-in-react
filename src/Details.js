function Details({ data }) {
  return (
    <div className="login-details">
      <h2>Login Details</h2>
      <p>Username: {data.userName}</p>
      <p>Password: {data.password}</p>
    </div>
  );
}
export default Details;
