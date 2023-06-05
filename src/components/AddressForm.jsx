import React, { useEffect, useState } from "react";

const AddressForm = ({ address:add, onSave, onEdit }) => {
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
  const handleDummyAddress = () => {
    setFormAddress({
      name: "Test User",
      street: "Test Street",
      city: "Test City",
      state: "Test State",
      country: "Test Country",
      pincode: "123456",
      mobile: "9876543210",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleEdit = () => {
    setFormAddress(add);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formAddress);
  };

  useEffect(()=>{handleEdit()},[onEdit])
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
    <form
      onSubmit={handleSubmit}
      className="flex-col gap-10 flex-center mar-up-10"
    >
      {formFields.map((field) => (
        <div className="flex-row  gap-10 flex-center sp-bw">
          <label key={field.name}>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={formAddress[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <section className="btn-address-add flex-row gap-10">

      <button type="submit" className="btn">Save</button>
        <button type="submit" className="btn" onClick={() => handleDummyAddress()}>
        Dummy
      </button>
      </section>
    </form>
  );
};


export default AddressForm;
