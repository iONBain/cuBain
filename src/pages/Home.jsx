import CarouselComponent from "../components/CarouselComponent";
import CategoriesSel from "../components/CategoriesSel";
import "./Pages.css"
const Home = () => {
  return (
    <div className="home-main">
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
