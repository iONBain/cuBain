
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
  loader: false,
  showCoupon: false,
  couponValue: 0,
  showAddress: false,
  deliveryAddress:null
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
    case "SET_DELIVERY_ADDRESS":
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: state.address.map((item)=> item.id===action.payload.id ? action.payload : item )
      
      }
    case "DELETE_ADDRESS":
      return {
        ...state,
        address: state.address.filter(({id})=> id!==action.payload.id) ,
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
    case "UPDATE_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "LOG_OUT":
      return {
        ...state,
        cart: [],
        wishlist: [],
        address: [],
      };
    case "SET_SHOW_ADDRESS":
      return {
        ...state,
        showAddress: action.payload,
      };
    case "SET_COUPON":
      return {
        ...state,
        showCoupon: action.payload,
      };
    case "SET_COUPON_VALUE":
      return {
        ...state,
        couponValue: action.payload,
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
