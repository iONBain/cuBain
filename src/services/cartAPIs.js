import axios from "axios"
const addToCart = async (product,token,dataDispatch) => {
    try{
        const {status,data:{cart}} = await axios.post("/api/user/cart",
            {
              product,
            },
            {
              headers: {
                authorization: token,
              },
            }
          );
        if(status===201){
          dataDispatch({
            type: "UPDATE_CART",
            payload: cart,
            });

        }
    }
    catch(e){
        console.error(e,"error in add to cart")
    }
} 

const updateQtyCart = async (id,token,incOrDec,dataDispatch) => {
  try{
    const {status,data:{cart}} = await axios.post(`/api/user/cart/${id}`,{
      action:{
        type: incOrDec
      }},
      {
        headers: {
          authorization: token,
        }
      }
    )
    if(status===200){
      dataDispatch({
        type:"UPDATE_CART",
        payload: cart
      })
    }
  }
  catch(e){
    console.error(e.message,"unable to update item quantity in cart")
  }
}

const removeFromCart = async (id,token,dataDispatch) => {
  try{
    const {status,data:{cart}} = await axios.delete(`/api/user/cart/${id}`,{
      headers: {
        authorization: token,
      }
    })
    if(status===200){
      dataDispatch({
        type: "UPDATE_CART",
        payload: cart,
      })
    }
  }
  catch(e){
    console.error(e,"error in removing item from cart")
  }
}

export {addToCart,updateQtyCart,removeFromCart}