import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import AddressCard from "./AddressCard"
import ToastHandler from "../utils";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
    const navigate = useNavigate()
    const {token,setToken,LSUser} = useContext(AuthContext)
    const {data ,dataDispatch} = useContext(DataContext)
    const {data:{address}} = useContext(DataContext)

    const handleBackToShopping = () => {
      navigate("/productlisting")
    }
    const handleLogOut = async ()=> {
        setToken("")
        dataDispatch({
          type: "LOG_OUT",
        })
        ToastHandler("success","Logged out successfully :)")
        localStorage.removeItem("login")
        localStorage.removeItem("user")
      }
      const handleShowAddress = () => {
        navigate("/manage_address")
      }
    return <>
{
    <section className="logged-in-box flex-col">
       <h2>
       Welcome,
        <span className="accent"> {LSUser.user?.firstName}  {LSUser.user?.lastName}</span>
      
        </h2>
        <section className="flex-col gap-10">

        <p> Status - <span className="color-green">Logged In</span> </p>
        <p> Mail id - <span className="accent">{LSUser.user?.email} </span> </p>
        <p> Total saved Addresses - <span className="color-orange"> {address?.length} </span> </p>
        {/* <p>Default Address:- </p>
        <p> <AddressCard noRadio item={address && address[0]}/> </p> */}
        </section>
        {/* <h2>{LSUser.user?.lastName}</h2> */}
        <p className="flex-row flex-center gap-10 btns-user-profile">
        <button className="btn btn-user-profile" onClick={()=>handleBackToShopping()}>{"< "} Back to shopping</button>
        {/* <b  utton className="btn" onClick={()=>handleLogOut()}>Edit Profile</b> */}
        <button className="btn btn-user-profile" onClick={()=>handleShowAddress()}>Manage Address</button>
        <button className="btn btn-user-profile" onClick={()=>handleLogOut()}>Log Out</button>
        </p>
      </section> 
    }
      
    </>
    }


    export default UserProfile