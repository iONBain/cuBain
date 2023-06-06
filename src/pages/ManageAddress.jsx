import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";
import AddressForm from "../components/AddressForm";
import ToastHandler from "../utils";
import AddressCard from "../components/AddressCard";

const ManageAddress = () => {
  const [editAddress, setEditAddress] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [displayAddress, setDisplayAddress] = useState(false);
  const {
    data: { address },
    dataDispatch,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const handleNavBack = () => {
    navigate(-1);
    dataDispatch({
      type:"SET_DELIVERY_ADDRESS",
      payload:""
    })
  };

  const handleAddNewAddress = () => {
    setOnEdit(false);
    setDisplayAddress(true);
    setEditAddress(null);
  };

  const handleEditAddress = (editAdd) => {
    setEditAddress(editAdd);
    setOnEdit(false);
    setOnEdit(true);
    setDisplayAddress(true);
  };

  const handleDeleteAddress = (delAdd) => {
    dataDispatch({
      type: "DELETE_ADDRESS",
      payload: delAdd,
    });
    ToastHandler("info", "Address deleted successfully");
  };

  return (
    <div className="address-page-main ">
      <section className="address-list-left">
        <h2> <span className="accent cursive"> Address Management </span> <span className="underline-text" onClick={()=>handleNavBack()} > {"< "}Back</span> </h2>
        {address &&
          address.map((item) => (
            <AddressCard
              item={item}
              onEdit={(data) => handleEditAddress(data)}
              onDelete={(data) => handleDeleteAddress(data)}
              key={item?.id}
            />
          ))}
      </section>
      <section className="address-right">
        <h2>
          New Address?{" "}
          <span
            className="underline-text accent"
            onClick={() => handleAddNewAddress()}
          >
            &#43; Add
          </span>
        </h2>

        {displayAddress && (
          <AddressForm
            address={editAddress}
            onEdit={onEdit}
            setterDisplay={setDisplayAddress}
          />
        )}

        {/* <button className="btn" onClick={() => handleBack()}>
        Back
      </button>
      <button className="btn">Done</button> */}
      </section>
    </div>
  );
};

export default ManageAddress;
