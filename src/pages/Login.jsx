import { useContext, useRef, useState } from "react";
import "./Pages.css";
import { loginService } from "../services/login";
import { signUpService } from "../services/signup";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import { json } from "react-router-dom";

const Login = () => {
  const [btnState,setBtnState] = useState(false)
  const {token,setToken,loginUser,foundUser,LSUser} = useContext(AuthContext)
  const {dataDispatch} = useContext(DataContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  // console.log(LSUser.user?.firstName,"lsuser")
  const handleLogin = async ()=> {
    const bodyLogin = {email:emailRef.current.value,password:passwordRef.current.value}
    const {status,data: {encodedToken,foundUser}} = await loginService(bodyLogin)
    console.log( status,encodedToken,foundUser)
  }
  const handleLogOut = async ()=> {
    setToken("")
    localStorage.removeItem("login")
    localStorage.removeItem("user")
  }
  const handleSignin = ()=> {
    signUpService()
  }
  const handleTestUser = async () => {
    try{
      const bodyLoginTest = {email:"programmer@neog.com",password:"neoGrammer"}
      const res = await loginUser(bodyLoginTest)
      setToken(localStorage.getItem("login"))
    }
    catch(e) {
      console.error(e)
    }

  }
  return <div className="login-main">
    {
      token ? <section className="logged-in-box flex-col">
        Welcome,
        <h2>{LSUser.user?.firstName}</h2>
        <h2>{LSUser.user?.lastName}</h2>
        <button className="btn" onClick={()=>handleLogOut()}>Log Out</button>
      </section> : 
    <section className="login-box">
      {/* <>   */}
        <button className={`btn-login ${!btnState ? "btn-active" : ""}`}  onClick={()=>setBtnState(false)}>Log In</button>
        <button className={`btn-signin ${btnState ? "btn-active" : ""}`} onClick={()=>setBtnState(true)}>Sign Up</button>
        <h2 className="login-heading lbl-sign">{btnState ? "Sign up Page" : "Log in Page"}</h2>
        <label htmlFor="username" className="user-name lbl-sign">Username: 
        <input type="text" name="username" placeholder="Enter email id" ref={emailRef} />
        </label>
        <label htmlFor="password" className="password lbl-sign">Password: 
        <input type="password" name="password" placeholder="Enter password" ref={passwordRef} />
        </label>
        <button className="btn btn-submit" onClick={btnState ? ()=>handleSignin() : ()=>handleLogin()} >{btnState ? "Sign Up > " : "Log In >"}</button>
        <button className="btn test-user" onClick={()=>handleTestUser()}> Test User</button>
      {/* </> */}
    </section>
    }
  </div>;
};

export default Login;
