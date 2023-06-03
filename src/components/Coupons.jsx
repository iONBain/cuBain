import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Coupons = ({ finPrice }) => {
  const {
    data: { showCoupon, couponValue },
    dataDispatch,
  } = useContext(DataContext);
  const handleHideCoupon = () => {
    dataDispatch({
      type: "SET_COUPON",
      payload: false,
    });
  };
  const handleApplyCoupon = () => {
    handleHideCoupon();
  };
  const handleSetCouponValue = (e) => {
    dataDispatch({
      type: "SET_COUPON_VALUE",
      payload: e.target.value,
    });
  };
  const coupons = [
    { value: 10, orderValue: 999 },
    { value: 25, orderValue: 2499 },
    { value: 50, orderValue: 4999 },
  ];

  return (
    <div className={`coupon-wrapper ${!showCoupon && "none z-50"}`}>
      <section className="coupon-main">
        <h2>
          <span className="accent cursive">Available</span> coupons{" "}
        </h2>
        {coupons.map(({ value, orderValue }) => (
          <label htmlFor={`coupon${value}`} key={value}>
            <input
              type="radio"
              id={`coupon${value}`}
              name="coupons"
              value={value}
              onChange={handleSetCouponValue}
              disabled={orderValue > finPrice.finSP}
              checked={""+couponValue === ""+value}
            />
            <span className="accent">{`CUBAIN${value}`}</span> ({" "}
            {`${value}% OFF`} ){" "}
            <p className="color-grey sm">
              {" "}
              (Applicable on orders above Rs.{orderValue})
            </p>
          </label>
        ))}
        <button
          className="btn btn-coupon-apply"
          onClick={() => handleApplyCoupon()}
          disabled={couponValue === 0}
        >
          Apply coupon
        </button>
        <button
          className="btn btn-coupon-close"
          onClick={() => handleHideCoupon()}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Coupons;