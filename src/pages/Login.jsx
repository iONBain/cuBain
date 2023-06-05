import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ToastHandler from "../utils";
import UserProfile from "../components/UserProfile";
import "./Pages.css";
import { DataContext } from "../contexts/DataContext";

const Login = () => {
  const [btnState, setBtnState] = useState(false);
  const { token, setToken, loginUser, signUpUser } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleReset = () => {
    if (emailRef.current) {
      emailRef.current.value = ""
    }
    if (passwordRef.current) {
      passwordRef.current.value = ""
    }
  };

  const handleLogin = async () => {
    try {
      if (emailRef.current.value === "" || passwordRef.current.value === "") {
        ToastHandler("warn", "Please enter details to Log In");
      } else {
        const bodyLogin = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        await loginUser(bodyLogin);
        if (localStorage.getItem("login") === null) {
          ToastHandler("error", "Invalid credentials");
          handleReset();
        } else {
          setToken(localStorage.getItem("login"));
          dataDispatch({
            type: "SET_DEFAULT_ADDRESS",
          });
        }
      }
    } catch (e) {
      console.error(e, "sad");
    }
  };
  const handleTestUser = async () => {
    try {
      const bodyLoginTest = {
        email: "programmer@neog.com",
        password: "neoGrammer",
      };
      await loginUser(bodyLoginTest);
      setToken(localStorage.getItem("login"));
      dataDispatch({
        type: "SET_DEFAULT_ADDRESS",
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleSignin = async () => {
    try {
      if (emailRef.current.value === "" || passwordRef.current.value === "") {
        ToastHandler("warn", "Please enter details to Sign In");
      } else {
        const bodyLogin = {
          firstName: "",
          lastName: "",
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        await signUpUser(bodyLogin);
        setToken(localStorage.getItem("signup"));
      }
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect(()=>{handleReset()},[btnState])

  return (
    <div className="login-main">
      {token ? (
        <UserProfile />
      ) : (
        <section className="login-box">
          {/* <>   */}
          <button
            className={`btn-login ${!btnState ? "btn-active" : ""}`}
            onClick={() => {
              setBtnState(false);
              handleReset();
            }}
          >
            Log In
          </button>
          <button
            className={`btn-signin ${btnState ? "btn-active" : ""}`}
            onClick={() => {
              setBtnState(true);
              handleReset();
            }}
          >
            Sign Up
          </button>
          <h2 className="login-heading lbl-sign">
            {btnState ? "New User Sign In" : "Existing User Log In"}
          </h2>
          <label htmlFor="username" className="user-name lbl-sign">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter email id"
              ref={emailRef}
            />
          </label>
          <label htmlFor="password" className="password lbl-sign">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </label>
          <button
            className="btn btn-submit"
            onClick={btnState ? () => handleSignin() : () => handleLogin()}
          >
            {btnState ? "Sign Up > " : "Log In >"}
          </button>
          <button className="btn test-user" onClick={() => handleTestUser()}>
            {" "}
            Test User
          </button>
        </section>
      )}
    </div>
  );
};

export default Login;
