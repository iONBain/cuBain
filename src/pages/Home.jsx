import CarouselComponent from "../components/CarouselComponent";
import CategoriesSel from "../components/CategoriesSel";
import Loader from "./Loader";
import "./Pages.css"
const Home = () => {
  return (
    <div className="home-main">
      <Loader home/>
      <div className="carousel-wrapper">
        <CarouselComponent/>
      </div>
      <section className="category-wrapper">
        <CategoriesSel />
      </section>
    </div>
  );
};

export default Home;
