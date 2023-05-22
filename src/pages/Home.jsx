import CategoriesSel from "../components/CategoriesSel";
import "./Pages.css"
const Home = () => {
  return (
    <div className="home-main">
      <div style={{ height: "100vh", backgroundColor: "rgb(224, 78, 78)" }}>
        This is Hero image
      </div>
      <section className="category-wrapper">
        <CategoriesSel />
      </section>
    </div>
  );
};

export default Home;
