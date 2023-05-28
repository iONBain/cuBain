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
      // const { data: category } = await axios.get("/api/categories");
      const res = await fetch("/api/categories");
      // console.log(await res.json(),"res")
      const category = (await res.json()).categories
      // console.log(res,"res")


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
      // const resProducts = await axios.get("/api/products");
      const resProducts = await fetch("/api/products");
      const products = (await resProducts.json()).products
      dispatch({
        type: "INITIALIZE_PRODUCTS",
        // payload: products.products,
        payload: products,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(()=> {
    state.search && navigate("/productlisting")
  }
  ,[state.search,navigate])
  useEffect(() => console.log(state, "DataContext"), [state]);
  useEffect(() => {getData()}, []);
  
  

  return (
    <DataContext.Provider value={{ data: state, dataDispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
};


// is   get-->  "/api/user/cart"   delete--> "/api/user/cart/${id}" ,     add item api -->  "/api/user/cart"    get--> and post-->   "/api/user/wishlist" 