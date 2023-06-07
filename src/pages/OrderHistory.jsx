import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Emptiness from "../components/Emptiness";
import OrderCard from "../components/OrderCard";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate()
  const {
    data: { orderHistory },
  } = useContext(DataContext);
  const isEmptyOrderHistory = orderHistory.length === 0;
  return isEmptyOrderHistory ? (
    <Emptiness pageName="Order history" />
  ) : (
    <div className="order-history-main flex-grow flex-col gap-10">
        <h2> <span className="underline-text" onClick={()=> navigate("/login")}>{"<"}</span><span className="accent cursive f-xl"> Order History  </span></h2>
      {orderHistory.map((item) => (
        <OrderCard orderDetails={item} borders />
      ))}
    </div>
  );
};

export default OrderHistory;
