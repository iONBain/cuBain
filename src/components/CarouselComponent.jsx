import Carousel from "better-react-carousel";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "./components.css";
const CarouselComponent = () => {
  const {
    data: { products },
  } = useContext(DataContext);
  const recommendedProducts = products
    ? products.filter(({ isRecommended }) => isRecommended)
    : [];
  // useEffect(()=> console.log(recommendedProducts,"rec"),[recommendedProducts])
  return (
    <div className="carousel-main">

    <Carousel className="carousel-main" cols={4} rows={1} gap={10} loop autoplay={3000} hideArrow={true}>
      {recommendedProducts &&
        recommendedProducts.map((item) => (

          <Carousel.Item className="carousel-item">
            <img className="carousel-image"  height="50%"  src={item.imgLink} alt={item.name} />
            <h3>{item.name}</h3>
          </Carousel.Item>
        ))}
    </Carousel>
        </div>
  );
};

export default CarouselComponent;
