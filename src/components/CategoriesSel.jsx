import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";

const CategoriesSel = () => {
  const { data,dataDispatch } = useContext(DataContext);
  const handleSkillAll = (cat) => {
    dataDispatch({
      type: "CLEAR_FILTER"
    });
    data.category.map(({categoryName}) => categoryName !==cat ? handleSkill(categoryName,false): handleSkill(categoryName,true))
  }
  const handleSkill = (cat,bool) => {
    dataDispatch({
      type: "SET_SKILL",
      payload: [cat,bool],
    });
  }
  
  return (
    <div className="category-wrapper">
      {data.category.length !== 0
        ? data.category.map((i) => {
            return (
              <NavLink to="/productlisting" className="navLink" key={i._id}>
                <div className="cat-card" onClick={()=>handleSkillAll( i.categoryName,true)}>
                <img src={i.imgLink} height="100px" alt="" />
                  <h3>{i.categoryName}</h3>
                  <p>{i.description}</p>
                </div>
              </NavLink>
            );
          })
        : ""}
    </div>
  );
};

export default CategoriesSel;
