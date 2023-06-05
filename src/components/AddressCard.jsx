import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ToastHandler, { getCostPrice } from "../utils";
import { useNavigate } from "react-router-dom";

const AddressDetails = ({details}) => {
  const { id,name,street,city,state,country,pincode,mobile} = details ? details : {};
  return(
    <>
    
    <p className="accent">{name}</p> || 
      
      <p className="sm"> {street},{city}</p>
    </>
  )
}

const AddressCard = ({ item, noRadio }) => {
  const { id,name,street,city,state,country,pincode,mobile} = item ? item : {};

  const {
    data: { wishlist },
    dataDispatch,
  } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    "jio"
//     <>
//     {noRadio ? <AddressDetails details={item}/> : 

//     <label htmlFor={`${id}address`}>
//     <input name={`${id}address`} type="radio" className="cart-card-main flex-row" />

//       <AddressDetails details={item}/>
//     </label>
// }
//     </>
    
  );
};

export default AddressCard;
