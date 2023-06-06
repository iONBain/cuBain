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
      
      const { status:statusCategories,data: category } = await axios.get("/api/categories");
      if(statusCategories===200){
        dispatch({
          type: "INITIALIZE_CATEGORIES",
          payload: category.categories,
        });
        category.categories.map(({ categoryName }) => {
          dispatch({
            type: "SET_SKILL",
            payload: [categoryName, false],
          });
          return null;
        });
      }

      const {status,data:{products}} = await axios.get("/api/products");
      if(status===200){

        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: products,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(()=> {
    state.search && navigate("/productlisting")
  }
  ,[state.search])
  useEffect(() => {getData()}, []);  
  // useEffect(() => console.log(state, "DataContext"), [state]);

  return (
    <DataContext.Provider value={{ data: state, dataDispatch: dispatch }}>
      {children}
    </DataContext.Provider>
  );
};