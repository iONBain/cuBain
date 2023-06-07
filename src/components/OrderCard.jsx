import AddressCard from "./AddressCard"

const OrderCard = ({orderDetails, borders}) => {
    return(
        <div className={`flex-row order-card-main gap-10 ${borders && "borders"}`}>

        <section className="flex-col gap-10">

                <h3 className="normal-font f-n accent">Order Details:-</h3>
                <p>Order ID - <span>{orderDetails?.id}</span> </p>
                <p>Ordered on- <span>{orderDetails?.orderDate}</span> </p>
                <p>Amount -<span className="color-green"> Rs.{orderDetails.amount}</span> </p>
                <p>Your order will be delivered in <span className="color-orange"> {orderDetails.daysToDeliver} days.</span></p>
                <p>Delivery Address - 
                </p>
                <section> <AddressCard item={orderDetails.address} displayOnly /></section> 

        </section>

        <section className="order-card-cube-container flex-row">
                    {
                        orderDetails.cubes.map(item=> (
                            <div key={item._id} className="flex-col flex-center order-card-cubes-individual">
                             <img src={item.imgLink} alt="" height="100px" className="img-prods" />
                             <p>
                            {item.name}

                             </p>
                             <p>Qty - {item.qty}x</p>
                            </div>
                        ))
                    }
        </section>


        </div>
    )
}


export default OrderCard