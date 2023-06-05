import { loginService } from "../services/login";
import { signUpService } from "../services/signup";
import { createContext, useContext, useEffect, useState } from "react";
import ToastHandler from "../utils";
import { DataContext } from "./DataContext";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {dataDispatch} = useContext(DataContext)
  const LSToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(LSToken?.token);
  const LSUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(LSUser?.user);
  
  const signUpUser = async ({email, password, firstName, lastName}) => {
    try{
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService({email, password, firstName, lastName});
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
    }}
    catch(e) {
      console.error(e)
    }
  }

  const loginUser = async ({email, password}) => {
        if (email && password !== "") {
          try {
            const {
              data: {  encodedToken,foundUser },
              status,
            } = await loginService({email, password});
            if (status === 200) {
              ToastHandler("success", "Successfully logged in :)");
              localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
              setToken(encodedToken);
              localStorage.setItem("user", JSON.stringify({ user: foundUser }));
              setUser(foundUser);
            }
          } catch (error) {
            console.log("Error occured in logging in user", error);
          }
        }
      };
     
 
  return (
    <AuthContext.Provider value={{ token, setToken, LSUser,loginUser, signUpUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}