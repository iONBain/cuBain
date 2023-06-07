import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import OrderCard from "../components/OrderCard"
import Loader from "./Loader"


const OrderSummary = () => {
    const {data:{orderHistory}} = useContext(DataContext)
    const orderDetails = orderHistory[orderHistory?.length-1]
    // console.log(orderDetails)
    return (
        <div className="login-main">
            <Loader order/>
        <div className="logged-in-box flex-col flex-center">
            <h2 className="accent cursive f-xxl">Order Confirmed !</h2>
            <section className="flex-col gap-10 order-summary-details">
                
            <OrderCard orderDetails={orderDetails} />
            </section>
        </div>
        </div>
    )
}

export default OrderSummary