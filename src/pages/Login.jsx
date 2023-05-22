import { useState } from "react";
import "./Pages.css";

const Login = () => {
  const [btnState,setBtnState] = useState(false)
  return <div className="login-main">
    <section className="login-box">

        <button className={`btn-login ${!btnState ? "btn-active" : ""}`}  onClick={()=>setBtnState(false)}>Log In</button>
        <button className={`btn-signin ${btnState ? "btn-active" : ""}`} onClick={()=>setBtnState(true)}>Sign Up</button>
        <h2 className="login-heading lbl-sign">{btnState ? "Sign up Page" : "Log in Page"}</h2>
        <label htmlFor="username" className="user-name lbl-sign">Username: 
        <input type="text" name="username" placeholder="Enter email id" />
        </label>
        <label htmlFor="password" className="password lbl-sign">Password: 
        <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button className="btn btn-submit" >{btnState ? "Sign Up > " : "Log In >"}</button>
        <button className="btn test-user" > Test User</button>
    </section>
  </div>;
};

export default Login;
