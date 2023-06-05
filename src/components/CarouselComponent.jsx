import React from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ productsToShow, isPageSummary }) => {
  const navigate = useNavigate();
  const handleNavToProduct = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <>
      {productsToShow.length > 0 && (
        <Carousel
          infiniteLoop
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
          className="carousel-main"
        >
          {productsToShow.map((i) => (
            <div
              className="carousel-cards"
              key={i._id}
              onClick={() => handleNavToProduct(i._id)}
            >
              <img src={i.imgLink} alt={i.name} />
              <h1>{i.name}</h1>
              {!isPageSummary && (
                <>
                  <p className="rating cen-top">{i.rating} &#9733;</p>
                  <p className="recommended">Best Seller</p>
                  <p className="discount cen-top">
                    {i.discountPercentage}% OFF{" "}
                  </p>
                </>
              )}
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselComponent;
