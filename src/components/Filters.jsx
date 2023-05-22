import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
const Filters = () => {
  const {
    data: {
      category,
      priceRange,
      discountValue,
      skills,
      products,
      cubeType,
      sortName: sName,
      sortOrder: sOrder,
      rating: rVal,
    },
    dataDispatch,
  } = useContext(DataContext);

  const handlePrice = (e) => {
    dataDispatch({
      type: "PRICE_RANGE",
      payload: e.target.value,
    });
  };
  const handleSkill = (e) => {
    dataDispatch({
      type: "SET_SKILL",
      payload: [e.target.value, e.target.checked],
    });
  };
  const handleCubeType = (e) => {
    dataDispatch({
      type: "SET_CUBE_TYPE",
      payload: [e.target.value, e.target.checked],
    });
  };
  const handleRating = (e) => {
    dataDispatch({
      type: "SET_RATING",
      payload: e.target.value,
    });
  };
  const handleDiscount = (e) => {
    dataDispatch({
      type: "SET_DISCOUNT",
      payload: e.target.value,
    });
  };
  const handleSortName = (e) => {
    dataDispatch({
      type: "SET_SORT_NAME",
      payload: e.target.value,
    });
  };
  const handleSortOrder = (e) => {
    dataDispatch({
      type: "SET_SORT_ORDER",
      payload: e.target.value,
    });
  };
  const handleClearFilters = () => {
    dataDispatch({
      type: "CLEAR_FILTER",
      payload: products,
    });
  };
  const cubeTypes = ["cube", "pyramid", "mod", "special"];
  const ratingArr = [4, 3, 2, 1];
  const sortName = [
    { dispName: "", value: "" },
    { dispName: "Price", value: "price" },
    { dispName: "Rating", value: "rating" },
    { dispName: "Popularity", value: "ratingCount" },
    { dispName: "Discount", value: "discountPercentage" },
  ];
  const sortOrder = ["", "Descending", "Ascending"];
  return (
    <div className="filters-wrapper">
      <h2>Filters</h2>
      <section className="clear-filters" onClick={handleClearFilters}>
        Clear Filters
      </section>
      {/* Skill category cBox */}
      <section className="flex-col">
        <h3 className="accent">Skill Level</h3>
        {category.map(({ categoryName: cat }) => (
          <label htmlFor={cat} key={cat}>
            <input
              type="checkbox"
              value={cat}
              name="skill"
              id={cat}
              onChange={handleSkill}
              checked={skills[cat]}
            />
            {cat}
          </label>
        ))}
      </section>
      {/* Sort by dDown */}
      <section className="flex-col gap-10">
        <h3 className="accent mar-up-10">Sort By</h3>
        <label htmlFor="sortName" className="flex-row sp-bw">
          Type:
          <select
            name="sortName"
            id="sortName"
            onChange={handleSortName}
            value={sName}
          >
            {sortName.map(({ dispName, value }) => (
              <option value={value} key={value}>
                {dispName}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="sortOrder" className="flex-row sp-bw">
          Order:
          <select
            name="sortOrder"
            id="sortOrder"
            onChange={handleSortOrder}
            value={sOrder}
          >
            {sortOrder.map((order) => (
              <option value={order} key={order}>
                {order}
              </option>
            ))}
          </select>
        </label>
      </section>
      {/* Price slider */}
      <section className="flex-col price-wrapper gap-10 mar-up-10">
        <h3 className="accent">
          Price &lt; <span className="white sm"> Rs.{priceRange}</span>
        </h3>
        <div className="slidecontainer">
          <input
            type="range"
            min="99"
            max="14999"
            step="100"
            className="slider"
            id="myRange"
            value={priceRange}
            onChange={handlePrice}
          />
        </div>
        <div className="label-price-bot">
          <span>100</span>
          <span>15000</span>
        </div>
      </section>
      {/* Ratings radio */}
      <section className="flex-col">
        <h3 className="accent mar-up-10">Ratings</h3>
        {ratingArr.map((rating) => (
          <label htmlFor={`${rating}star`} key={rating}>
            <input
              type="radio"
              name="rating"
              id={`${rating}star`}
              value={rating}
              onChange={handleRating}
              checked={"" + rating === "" + rVal}
            />
            {rating} &#9733; & above
          </label>
        ))}
      </section>
      {/* Discount slider */}
      <section className="flex-col price-wrapper">
        <h3 className="accent mar-up-10">
          Discount &gt; <span className="white sm">{discountValue}%</span>
        </h3>
        <div className="slidecontainer">
          <input
            type="range"
            min="10"
            max="80"
            step="5"
            className="slider"
            id="myRangeDiscount"
            value={discountValue}
            onChange={handleDiscount}
          />
        </div>
        <div className="label-price-bot">
          <span>10</span>
          <span>80</span>
        </div>
      </section>
      {/* Cube type cBox */}
      <section className="flex-col">
        <h3 className="accent mar-up-10">Cube Type</h3>
        {cubeTypes.map((cube) => (
          <label htmlFor={cube} key={cube}>
            <input
              type="checkbox"
              value={cube}
              name="skill"
              id={cube}
              onChange={handleCubeType}
              checked={cubeType[cube]}
            />
            {cube.charAt(0).toUpperCase() + cube.slice(1)}
          </label>
        ))}
      </section>
    </div>
  );
};

export default Filters;
