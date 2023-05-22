import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import "./Pages.css";
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const ProductDetails = () => {
  const { productID } = useParams();
  const  navigate  = useNavigate();
  const {
    data: { products: p },
  } = useContext(DataContext);
  const product = p && p.find(({ id }) => id === "" + productID);
  const {
    name,
    imgLink,
    price,
    rating,
    discountPercentage:dp,
    ratingCount,
    skill,
  } = product && product;
  // console.log(product)
  const cp = Math.floor((price * 100) / (100 - dp), 10);
  const getRandomDay = getRandomNumber(2,5)

  const addToCart = () => {
    
  }
  const addToFavs = () => {

  }

  return (
    <div className="product-details-main">
      {/* <Link to="/productlisting" className="btn-details-back"> */}
        <button className="details-back btn" onClick={()=>navigate("/productlisting")}>Back to shopping</button>
      {/* </Link> */}
      <section className="details-img">
        <img src={imgLink} alt="" className="details-img-image" />
      </section>
      <section className="details-of-cube">
        <h2 className="details-heading-cube accent">{name}</h2>
        <section className="flex-row">

          <p className="details-green">{dp}% OFF </p>
          <p className="details-recommended">{skill}</p>
        </section>
          <p className="color-orange">
            {rating} &#9733;
          <span className="sm"> ({ratingCount}) </span>
          </p>
          <p className="details-list sm">COD Available</p>
          <p className="details-list sm">Get delivered in {getRandomDay} days!</p>
          <p>
            Price: <span className="accent">Rs.{price}</span> <span className="color-grey sm strike">Rs.{cp}</span>
            <p className="sm color-grey">**Inclusive all taxes</p>
          </p>
      </section>
      <button className="btn btn-details-cart" onClick={()=>addToCart()}>Add to Cart</button>
      <button className="btn btn-details-wish" onClick={()=>addToFavs()}>Add to Favourites</button>
    </div>
  );
};

/**
 * discountPercentage
: 
"33"
id
: 
"f43397c7-1dc0-4078-88d3-50dac0544db1"
imgLink
: 
"https://drive.google.com/uc?export=view&id=1lugyj9KGU0dMol4DGJ9iDWsNfkTDfmQ1"
isRecommended
: 
true
name
: 
"Drift 2M 2x2 (Magnetic)"
price
: 
499
rating
: 
4
ratingCount
: 
282
shapeType
: 
"cube"
skill
: 
"Beginner"
[[Prototype]]
: 
Object
 */

export default ProductDetails;
