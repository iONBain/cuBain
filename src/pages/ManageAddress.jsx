import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";
import AddressForm from "../components/AddressForm";
// import AddressCard from "../components/AddressCard"




const ManageAddress = () => {
  const [editAddress,setEditAddress] = useState("")
  const [onEdit,setOnEdit] = useState(false)
  const [displayAddress,setDisplayAddress] = useState(false)
  const {
    data: { address },dataDispatch
  } = useContext(DataContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/login");
  };
  const handleAddNewAddress = () => {
    setOnEdit(false)
    setDisplayAddress(true)
    setEditAddress(null)
  }
  const handleSave = (toAddAddress,isSave=false) => {
    // if(toAddAddress){
    // if(true){
    console.log(toAddAddress,"in main",isSave,"save?");
    
    isSave &&  dataDispatch({
        type:"SET_ADDRESS",
        payload:{...toAddAddress,_id:3}
      })
    // }
  }
  const handleEditAddress = (editAdd) => {
    setEditAddress(editAdd)
    setOnEdit(true)
  }
  const handleDeleteAddress = (delAdd) => {
    dataDispatch({
      type:"DELETE_ADDRESS",
      payload:delAdd
    })
  }
  return (
    <div className="address-page-main ">
      <section className="address-list-left">
        <h2 className="accent cursive">Address Management</h2>
        {address && address.map((item) => (
          <p className="address-card-item" key={item?.id}>
            <p className="f-l accent">{item?.name}</p>
            <p>
              {item?.street}, {item?.city}, {item?.state}
            </p>
            <p>
              {" "}
              {item?.country}, PIN {item?.pincode}
            </p>
            <p className="color-green">Mob. {item?.mobile}</p>
            <button className="btn btn-delete-address" onClick={()=>handleDeleteAddress(item)}>Delete</button>
            <button className="btn btn-edit-address" onClick={()=>handleEditAddress(item)}>Edit</button>
          </p>
        ))}
      </section>
      <section className="address-right">
        <h2>New Address? <span className="underline-text accent" onClick={()=>handleAddNewAddress()}>Add &#43;</span></h2>

{
  displayAddress &&
          <AddressForm address={editAddress} onSave={(data,isSave)=>handleSave(data,isSave)} onEdit={onEdit}/>
}
        
      {/* <button className="btn" onClick={() => handleBack()}>
        Back
      </button>
      <button className="btn">Done</button> */}
      </section>
    </div>
  );
};

export default ManageAddress;