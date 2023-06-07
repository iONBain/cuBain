import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";
import ToastHandler from "../utils";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
    const navigate = useNavigate()
    const {setToken,LSUser} = useContext(AuthContext)
    const {data:{address,orderHistory},dataDispatch} = useContext(DataContext)

    const handleBackToShopping = () => {
      navigate("/productlisting")
    }
    const handlePreviousOrders = () => {
      navigate("/order_history")
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
        <p> Total Orders - <span className="accent">{orderHistory.length} </span> </p>
        </section>
        <p className="flex-row flex-center gap-10 btns-user-profile">
        <button className="btn btn-user-profile" onClick={()=>handleBackToShopping()}>Back to shopping</button>
        {/* <button className="btn" onClick={()=>handleLogOut()}>Edit Profile</button> */}
        <button className="btn btn-user-profile" onClick={()=>handleShowAddress()}>Manage Address</button>
        <button className="btn btn-user-profile" onClick={()=>handlePreviousOrders()}>Previous Orders</button>
        <button className="btn btn-user-profile" onClick={()=>handleLogOut()}>Log Out</button>
        </p>
      </section> 
    }
      
    </>
    }


    export default UserProfile