import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import ProductCard from "./ProductCard";
import { DataContext } from "../contexts/DataContext";
import "./components.css";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const navigate = useNavigate()
  const handleNavToProduct = (id) => {
    navigate(`/productdetails/${id}`)
  }
  const {data:{products}} = useContext(DataContext)
  const recommendedProducts = products
    ? products.filter(({ isRecommended }) => isRecommended)
    : [];
    return (
      <Carousel infiniteLoop autoPlay={true} interval={3000} showThumbs={false} showStatus={false} showIndicators={true} showArrows={false} className="carousel-main"  >
        {recommendedProducts && recommendedProducts.map((i) => 
        <div className="carousel-cards" key={i._id} onClick={()=>handleNavToProduct(i._id)}>
        <img src={i.imgLink} alt={i.name} />
        <h1>{i.name}</h1>
        <p className="rating cen-top">{i.rating} &#9733;</p>
        <p className="discount cen-top">{i.discountPercentage}% OFF </p>
        </div>
        )}
      </Carousel>
    );
};

export default CarouselComponent;
