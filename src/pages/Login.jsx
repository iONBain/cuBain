import { useContext, useRef, useState } from "react";
import "./Pages.css";
import { loginService } from "../services/login";
import { signUpService } from "../services/signup";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import ManageAddress from "../components/ManageAddress";

const Login = () => {
  const [btnState,setBtnState] = useState(false)
  const {token,setToken,loginUser,foundUser,LSUser} = useContext(AuthContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const {data:{showAddress} ,dataDispatch} = useContext(DataContext)
  // console.log(LSUser.user?.firstName,"lsuser")

  const handleLogin = async ()=> {
    const bodyLogin = {email:emailRef.current.value,password:passwordRef.current.value}
    const {status,data: {encodedToken,foundUser}} = await loginService(bodyLogin)
    console.log( status,encodedToken,foundUser)
  }
  const handleLogOut = async ()=> {
    console.log(foundUser)
    setToken("")
    dataDispatch({
      type: "LOG_OUT",
    })
    localStorage.removeItem("login")
    localStorage.removeItem("user")
  }
  
  const handleTestUser = async () => {
    try{
      const bodyLoginTest = {email:"programmer@neog.com",password:"neoGrammer"}
      const res = await loginUser(bodyLoginTest)
      setToken(localStorage.getItem("login"))
      console.log(await res, "ress")
    }
    catch(e) {
      console.error(e)
    }

  }

  const handleSignin = ()=> {
    signUpService()
  }

  const handleShowAddress = () => {
    console.log("show address")
    dataDispatch({
      type:"SET_SHOW_ADDRESS",
      payload:true
    })
  }

  return <div className="login-main">
    {
      token && !showAddress
      ? <section className="logged-in-box flex-col">
        Welcome,
        <h2>{LSUser.user?.firstName}</h2>
        <h2>{LSUser.user?.lastName}</h2>
        <p className="flex-row flex-center">
        <button className="btn" onClick={()=>handleLogOut()}>Log Out</button>
        <button className="btn" onClick={()=>handleShowAddress()}>Manage Address</button>
        </p>
      </section> 
      : token && showAddress 
      ? <ManageAddress/>
      : <section className="login-box">
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
