import { useContext } from "react";
import CarouselComponent from "../components/CarouselComponent";
import CategoriesSel from "../components/CategoriesSel";
import Loader from "./Loader";
import "./Pages.css";
import { DataContext } from "../contexts/DataContext";
const Home = () => {
   const {data:{products}} = useContext(DataContext)
  const recommendedProducts = products
    ? products.filter(({ isRecommended }) => isRecommended)
    : [];
  return (
    <div className="home-main">
      <Loader home />
      <section className="flex-row home-hero">
        <section className="hero-left">
          <h2 className="cursive f-xxl">HoLa Gracious Amigos</h2>
          <p className="normal-font f-xl">Welcome to cUBain !</p>

          <section>
            <p className="m-w-50">
              The number of possible combinations of a Rubik's Cube is
              staggering. It has approximately 43 quintillion
              (43,252,003,274,489,856,000) possible configurations.
            </p>
            <h3>
              And that too for a <span className="cursive"> REGULAR 3x3 !</span>{" "}
            </h3>
          </section>

          <p className="color-white">
            Check out our favourite cubes {">>>>>>>>>>>>"}
          </p>
        </section>
        <section className="hero-right ">
          <CarouselComponent productsToShow={recommendedProducts} />
        </section>
      </section>
      <section className="category-wrapper">
        <CategoriesSel />
      </section>
    </div>
  );
};

export default Home;
