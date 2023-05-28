import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ProductCard from "../components/ProductCard";
import "./Pages.css";
import Filters from "../components/Filters";
import Loader from "./Loader";
const ProductListing = () => {
  const { data } = useContext(DataContext);
  const {
    products,
    priceRange,
    rating,
    skills,
    discountValue,
    cubeType,
    search,
    sortName,
    sortOrder,
  } = data;
  const trueSkills = Object.keys(skills).filter((key) => skills[key] === true);
  const trueCubeType = Object.keys(cubeType).filter(
    (key) => cubeType[key] === true
  );
  // console.log("skill",trueSkills)
  const sortedProducts =
    sortName && sortOrder === "Descending"
      ? [...products].sort((a, b) => b[sortName] - a[sortName])
      : sortName && sortOrder === "Ascending"
      ? [...products].sort((a, b) => a[sortName] - b[sortName])
      : products;
  const filteredGal = sortedProducts
    .filter(({ price }) => price <= "" + priceRange)
    .filter(({ rating: rVal }) => rVal >= "" + rating)
    .filter(({ skill }) =>
      trueSkills.length > 0 ? trueSkills.includes(skill) : true
    )
    .filter(({ discountPercentage: dp }) => dp > discountValue)
    .filter(({ shapeType }) =>
      trueCubeType.length > 0 ? trueCubeType.includes(shapeType) : true
    )
    .filter(({ name }) =>
      search.length > 0
        ? name.toLowerCase().includes(search.toLowerCase())
        : true
    );
  return (
    <div className="product-listing-main">
      <Loader/>
      <Filters />
      <div className="product-gallery">
        <h2>
          {" "}
          <span className="cursive accent">
            showcasing {filteredGal.length}
          </span>{" "}
          cubes to choose from :)
        </h2>
        <div className="product-card-container">
          {filteredGal &&
            filteredGal.map((i) => <ProductCard item={i} key={i._id} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
