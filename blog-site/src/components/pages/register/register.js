import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>username</label>
        <input
          type="text"
          className="register-input"
          placeholder="enter your user name .."
        />

        <label>Emain</label>
        <input
          type="email"
          className="register-input"
          placeholder="enter your email .."
        />
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="enter your password.."
        />
        <button className="register-button">register</button>
      </form>
      <button className="login-button">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
}

export default Register;
