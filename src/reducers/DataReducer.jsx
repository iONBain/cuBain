export const initialState = {
  products: [],
  category: [],
  cart: [],
  wishlist: [],
  address: [],
  search: "",
  sortName: "",
  sortOrder: "",
  priceRange: 14999,
  discountValue: 10,
  skills: { Advanced: false, Beginner: false, Intermediate: false },
  cubeType: { cube: false, mod: false, pyramid: false, special: false },
  rating: "",
  loader:false,
};

export function dataReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      return {
        ...state,
        category: action.payload.map((category) => ({
          ...category,
        })),
      };

    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        products: action.payload.map((product) => ({
          ...product,
        })),
      };
    case "INITIALIZE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };
    case "SET_DISCOUNT":
      return {
        ...state,
        discountValue: action.payload,
      };
    case "SET_SKILL":
      return {
        ...state,
        skills: { ...state.skills, [action.payload[0]]: action.payload[1] },
      };
    case "SET_CUBE_TYPE":
      return {
        ...state,
        cubeType: { ...state.cubeType, [action.payload[0]]: action.payload[1] },
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_SORT_NAME":
      return {
        ...state,
        sortName: action.payload,
      };
    case "SET_SORT_ORDER":
      return {
        ...state,
        sortOrder: action.payload,
      };

    case "SET_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart ,{...action.payload,qty:1 }],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "UPDATE_QTY_IN_CART_INC":
      return {
        ...state,
        cart: state.cart.map(item=> item.id===action.payload.id ? ({...item,qty:item.qty+1}) : item ) ,
      };
    case "UPDATE_QTY_IN_CART_DEC":
      return {
        ...state,
        cart: state.cart.map(item=> item.id===action.payload.id ? ({...item,qty:item.qty-1}) : item ) ,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(({id})=> id!==action.payload.id),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist ,action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(({id})=> id!==action.payload.id)
      };
    case "ADDRESS":
      return {
        ...state,
        address: [...action.payload],
      };
    case "LOG_OUT":
      return {
        ...state,
        cart: [],
        wishlist: [],
        address: [],
      };
      case "SET_LOADER":
        return {
          ...state,
          loader: action.payload,
        };
    case "CLEAR_FILTER":
      return {
        ...state,
        sortName: "",
        sortOrder: "",
        rating: "",
        priceRange: 14999,
        discountValue: 10,
        search: "",
        skills: { Advanced: false, Beginner: false, Intermediate: false },
        cubeType: { cube: false, mod: false, pyramid: false, special: false },
      };

    default:
      throw new Error("Error in reducer");
  }
}
