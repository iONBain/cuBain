import axios from "axios";
import { createContext, useContext, useState } from "react";
import {DataContext} from "./DataContext"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const LSToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(LSToken?.token);
  const LSUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(LSUser?.user);
  // const { dataDispatch } = useContext(DataContext)
  
  // const signUpUser = async () => {
  //   try{
  //     const {
  //       data: { createdUser, encodedToken },
  //       status,
  //     } = await signUpService(email, password, firstName, lastName);
  //     if (status === 201) {
  //       localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
  //       setToken(encodedToken);
  //       localStorage.setItem("user", JSON.stringify({ user: createdUser }));
  //       setUser(createdUser);
  //       dataDispatch({
  //         type: ACTION_TYPE.INITIALIZE_ADDRESS,
  //         payload: foundUser.address,
  //       });
  //   }catch(e) {
  //     console.error(e)
  //   }
  // }
  return (
    <AuthContext.Provider value={{ authData: "aa" }}>
      {children}
    </AuthContext.Provider>
  );
};

// import { loginService, signUpService } from "../../services";
// import { ACTION_TYPE } from "../../utils";
// import { useData } from "../data/dataContext";


// const AuthProvider = ({ children }) => {

//   const loginUser = async (email, password) => {
//     if (email && password !== "") {
//       try {
//         const {
//           data: { foundUser, encodedToken },
//           status,
//         } = await loginService(email, password);
//         if (status === 200) {
//           localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
//           setToken(encodedToken);
//           localStorage.setItem("user", JSON.stringify({ user: foundUser }));
//           setUser(foundUser);
//           dataDispatch({
//             type: ACTION_TYPE.INITIALIZE_ADDRESS,
//             payload: foundUser.address,
//           });
//         }
//       } catch (error) {
//         console.log("Error in login user", error);
//       }
//     }
//   };

 
//   useEffect(() => {
//     if (token) {
//       dataDispatch({
//         type: ACTION_TYPE.INITIALIZE_ADDRESS,
//         payload: user.address,
//       });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, setToken, loginUser, signUpUser, user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

