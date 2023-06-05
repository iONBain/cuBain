import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { getFinPrice } from "../utils"
import { useNavigate } from "react-router-dom"
import AddressCard from "../components/AddressCard"

const Checkout = () => {
  
  const {data:{address,cart}} = useContext(DataContext)
  const finPrice = getFinPrice(cart)

  const {data:{couponValue},dataDispatch} = useContext(DataContext)

  const couponValueRs = Math.floor((finPrice.finSP + cart.length*10)* couponValue * 0.01,1 )
  const discountValueRs = finPrice.finCP - finPrice.finSP
  const packingValueRs = cart.length*10

  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/cart")
  }

  return (
    <div className="checkout-main flex-row flex-grow mar-up-10 gap-10">
      <section className="checkout-address flex-col">
        <h2 className="cursive accent">Your Addresses</h2>

        {
          address.map(item => (
            <AddressCard item = {item} />
            ))
          }
      </section>

      {/* Checkout summary section */}
      <section className="flex-col checkout-summary">
        <h2>Checkout Summary</h2>
        <section className="checkout-summary-details flex-col">
          <h3 className="center-text accent border-top-and-bot">Cubes in Cart </h3>
          <h4 className="space-bw-row ">Cube <span>Qty</span> </h4>
          {cart && cart.map(({name,qty}) => (
            <>
            <h5 className="space-bw-row">{name} <span>{qty}</span>  </h5>
            </>
          ))}
          <h3 className="center-text accent border-top-and-bot">{" "} <span>Price Details</span> </h3>
          
          <h5 className="space-bw-row">Price <span>Rs. {finPrice.finCP}</span>  </h5>
          <h5 className="space-bw-row color-orange">Discount <span>- Rs. {discountValueRs}</span>  </h5>
          <h5 className="space-bw-row">Delivery <span>Rs. {packingValueRs}</span>  </h5>
          <h5 className="space-bw-row color-green">Coupon <span>- Rs. {couponValueRs}</span>  </h5>
          <h5 className="space-bw-row accent">Final Amount <span>Rs. {finPrice.finSP + packingValueRs - couponValueRs}</span>  </h5>
          <h3 className="center-text accent border-top-and-bot">{" "} <span>Delivery Address </span> </h3>

          
          <p className="btns-checkout-con">

          <button className="btn btn-cart" onClick={()=>handleBack()}>Back</button>
          <button className="btn btn-cart">Order Now</button>
          </p>
        </section>
      </section>
    </div>
  )
}

export default Checkout