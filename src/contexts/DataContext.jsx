import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { initialState, dataReducer } from "../reducers/DataReducer";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const navigate = useNavigate()
  const getData = async () => {
    try {
      // const { data: category } = await axios("/api/categories");
      const res = await axios("/api/categories");
      const category = await res.data.categories
      console.log(res,"res")


      dispatch({
        type: "INITIALIZE_CATEGORIES",
        // payload: category.categories,
        payload: category,
      });
      
      // category.categories.map(({ categoryName }) => {
      category.map(({ categoryName }) => {
        dispatch({
          type: "SET_SKILL",
          payload: [categoryName, false],
        });
        return null;
      });
      const { data: products } = await axios("/api/products");
      dispatch({
        type: "INITIALIZE_PRODUCTS",
        payload: products.products,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => getData, []);
  useEffect(()=> {
    state.search && navigate("/productlisting")
  }
  ,[state.search,navigate])
  useEffect(() => console.log(state, "DataContext"), [state]);
  
  
  // loading cart init
//   const cartIt = [
//     {
//         "id": "fca2c43d-3aec-4d42-bd7a-68a80d8feb5f",
//         "name": "Drift 2M 2x2 (Magnetic)",
//         "price": 499,
//         "shapeType": "cube",
//         "skill": "Intermediate",
//         "discountPercentage": 30,
//         "rating": 4,
//         "ratingCount": 1770,
//         "isRecommended": true,
//         "imgLink": "https://drive.google.com/uc?export=view&id=1lugyj9KGU0dMol4DGJ9iDWsNfkTDfmQ1"
//     },
//     {
//         "id": "17fe2c28-0504-41b9-a8ac-f7aaf72f6884",
//         "name": "Drift 5x5",
//         "price": 449,
//         "shapeType": "cube",
//         "skill": "Intermediate",
//         "discountPercentage": 30,
//         "rating": 4,
//         "ratingCount": 2520,
//         "isRecommended": false,
//         "imgLink": "https://drive.google.com/uc?export=view&id=1wmKB_5APdAl3yredeYRS7s9VFTAy5gLO"
//     },
//     {
//         "id": "94de85de-19ed-4c42-9d9c-d71a40d43356",
//         "name": "Drift Carbon Fiber 3x3",
//         "price": 299,
//         "shapeType": "cube",
//         "skill": "Beginner",
//         "discountPercentage": 30,
//         "rating": 4,
//         "ratingCount": 1420,
//         "isRecommended": false,
//         "imgLink": "https://drive.google.com/uc?export=view&id=1xDWSPwBnvNKk3TseZuRCNz6NWqAl-CpV"
//     },
//     {
//         "id": "5479faea-c8df-47a1-99c0-bf221b6e5756",
//         "name": "Drift Gear 3x3",
//         "price": 399,
//         "shapeType": "mod",
//         "skill": "Intermediate",
//         "discountPercentage": 30,
//         "rating": 5,
//         "ratingCount": 850,
//         "isRecommended": true,
//         "imgLink": "https://drive.google.com/uc?export=view&id=1HuGKXfB8zA2fpMoMSulvFlBdTUtk-5_E"
//     }
// ]
//   const loadCart = () => cartIt.map(i=>{
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: i,
//     });
//     return null
//   })
  
//   useEffect(() => loadCart, []);
  
  return (
    <DataContext.Provider value={{ data: state, dataDispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
};


// is   get-->  "/api/user/cart"   delete--> "/api/user/cart/${id}" ,     add item api -->  "/api/user/cart"    get--> and post-->   "/api/user/wishlist" 