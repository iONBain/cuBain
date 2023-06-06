import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import ToastHandler, { getFinPrice } from "../utils"
import { useNavigate } from "react-router-dom"
import AddressCard from "../components/AddressCard"

const Checkout = () => {
  
  const {data:{address,cart,couponValue,deliveryAddress},dataDispatch} = useContext(DataContext)
  
  const finPrice = getFinPrice(cart)
  const couponValueRs = Math.floor((finPrice.finSP + cart.length*10)* couponValue * 0.01,1 )
  const discountValueRs = finPrice.finCP - finPrice.finSP
  const packingValueRs = cart.length*10

  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/cart")
  }
  const handleNavAdd = () => {
    navigate("/manage_address")
  }
  const handleSelectAddress = (addressData) => {
    dataDispatch({
      type:"SET_DELIVERY_ADDRESS",
      payload:addressData
    })
    ToastHandler("info", "Delivery address updated" )
  }
  const handleOrderNow = () => {
    // dataDispatch({})
    if(deliveryAddress===""){
      ToastHandler("warn", "Please select delivery address")
    }
  }


  return (
    <div className="checkout-main flex-row flex-grow mar-up-10 gap-10">
      <section className="checkout-address flex-col">
        <h2> <span className="cursive accent"> Your Addresses </span> <span className="underline-text" onClick={()=>handleNavAdd()}>Manage {"> "}</span></h2>
        <section className="checkout-display-address mar-up-10 pad-r-10">

        {
          address.map(item => (
            <AddressCard item = {item} checkout onSelect={(data)=>handleSelectAddress(data)} key={item.id} />
            ))
          }
          </section>
      </section>

      {/* Checkout summary section */}
      <section className="flex-col checkout-summary">
        <h2>Checkout Summary</h2>
        <section className="checkout-details-scroll">

       
        <section className="checkout-summary-details flex-col">
          <h3 className="center-text accent border-top-and-bot">Cubes in Cart </h3>
          <h4 className="space-bw-row ">Cube <span>Qty</span> </h4>
          {cart && cart.map(({name,qty}) => (
            <section key={name}>
            <h5 className="space-bw-row">{name} <span>{qty}</span>  </h5>
            </section>
          ))}
          <h3 className="center-text accent border-top-and-bot">{" "} <span>Price Details</span> </h3>
          
          <h5 className="space-bw-row">Price <span>Rs. {finPrice.finCP}</span>  </h5>
          <h5 className="space-bw-row color-orange">Discount <span>- Rs. {discountValueRs}</span>  </h5>
          <h5 className="space-bw-row">Delivery <span>Rs. {packingValueRs}</span>  </h5>
          <h5 className="space-bw-row color-green">Coupon <span>- Rs. {couponValueRs}</span>  </h5>
          <h5 className="space-bw-row accent">Final Amount <span>Rs. {finPrice.finSP + packingValueRs - couponValueRs}</span>  </h5>
          <h3 className="center-text accent border-top-and-bot">{" "} <span>Delivery Address </span> </h3>
          <p className="center-text">

            {
              deliveryAddress ? <AddressCard item={deliveryAddress} displayOnly/> : "[Select an address to deliver]"
            }
            </p>
          
          <p className="btns-checkout-con">

          <button className="btn btn-cart" onClick={()=>handleBack()}>Back</button>
          <button className="btn btn-cart" onClick={()=>handleOrderNow()}>Order Now</button>
          </p>
        </section>
        </section>
      </section>
    </div>
  )
}

export default Checkout