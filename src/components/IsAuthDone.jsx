import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import ToastHandler from "../utils.js"
export const IsAuthDone = () => {
const {token} = useContext(AuthContext)
const navigate = useNavigate()

const Redirect = () => {
    ToastHandler("warn", "Please login to continue")
    useEffect(()=>navigate("/login"),[])
}
  return token ? <Outlet /> : <Redirect/>
};