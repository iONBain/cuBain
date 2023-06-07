import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

const AddressCard = ({ item, checkout, displayOnly, onEdit, onDelete, onSelect, isSelectDeliveryAddress }) => {
  const {data:{deliveryAddress}} = useContext(DataContext)
  const isSelectedAddress = item?.id === deliveryAddress?.id
  return (
    <section className={`address-card-item ${displayOnly && "transform-to-display-address"} ${isSelectedAddress && isSelectDeliveryAddress &&"address-card-item-highlight"} ` } key={item?.id}>
      <p className="f-l accent">{item?.name}</p>
      <p>
        {item?.street}, {item?.city}, {item?.state}
      </p>
      <p>
        {" "}
        {item?.country}, PIN {item?.pincode}
      </p>
      <p className="color-green">Mob. {item?.mobile}</p>
      {displayOnly ? "" : checkout ? (
        <button
          className="btn btn-delete-address"
          onClick={() => onSelect(item)}
        >
          {isSelectedAddress && isSelectDeliveryAddress ? "Selected" : "Select"}
        </button>
      ) : (
        <>
          <button
            className="btn btn-delete-address"
            onClick={() => onDelete(item)}
          >
            Delete
          </button>
          <button className="btn btn-edit-address" onClick={() => onEdit(item)}>
            Edit
          </button>
        </>
      )}
    </section>
  );
};

export default AddressCard;
