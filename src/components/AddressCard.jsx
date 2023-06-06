
const AddressCard = ({ item, checkout, displayOnly, onEdit, onDelete, onSelect }) => {
  return (
    <section className={`address-card-item ${displayOnly && "transform-to-display-address"} ` } key={item?.id}>
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
          Select
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
