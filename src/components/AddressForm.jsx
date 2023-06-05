import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../contexts/DataContext";

const AddressForm = ({ address: add, onSave, onEdit }) => {
  const { dataDispatch } = useContext(DataContext);
  const formRef = useRef();
  const [formAddress, setFormAddress] = useState(
    add || {
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      mobile: "",
    }
  );
  const dummyAddress = {
    name: "Test User",
    street: "Test Street",
    city: "Test City",
    state: "Test State",
    country: "Test Country",
    pincode: "123456",
    mobile: "9876543210",
  };
  const handleDummyAddress = () => {
    setFormAddress(dummyAddress);
    // onSave(formAddress,false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleEdit = () => {
    if (onEdit) {
      setFormAddress(add);
    } else {
      setFormAddress({
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        mobile: "",
      });
    }
  };
  const handleSubmit = (e) => {
    console.log("yes submit", formRef.current.value);
    console.log(formAddress, "form address");
    e.preventDefault();
    // onSave(formAddress,true);
    const newID = new Date()
    dataDispatch({
      type: "SET_ADDRESS",
      payload: {...formAddress,_id:`id${newID.getSeconds()}`},
    });
  };

  useEffect(() => {
    handleEdit();
  }, [onEdit]);
  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Street", name: "street", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "Country", name: "country", type: "text" },
    { label: "Pincode", name: "pincode", type: "text" },
    { label: "Mobile", name: "mobile", type: "text" },
  ];

  return (
    <div className="address-main-form">
      <form
        ref={formRef}
        // defaultValue={formRef.current.value}
        onSubmit={(e) => handleSubmit(e)}
        className="flex-col gap-10 flex-center"
      >
        {/* mapper to loop through all fields of the form */}
        {formFields.map((field) => (
          <div className="flex-row  gap-10 flex-center sp-bw form-fields">
            <label key={field.name}>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formAddress[field.name]}
              onChange={handleChange}
              placeholder={`Enter your ${field.name}`}
            />
          </div>
        ))}

        {/* buttons for form submission */}
        <section className="btn-add-container flex-row gap-10">
          <button
            type="submit"
            className="btn btn-address-add"
            // onClick={()=>handleSubmit()}
          >
            {onEdit ? "Save" : "Add"}
          </button>
        </section>
      </form>
      <section className="btn-add-container flex-row gap-10">
        <button className="btn btn-address-add">Cancel</button>
        <button
          className="btn btn-address-add"
          onClick={() => handleDummyAddress()}
        >
          Fill with Dummy
        </button>
      </section>
    </div>
  );
};

export default AddressForm;
