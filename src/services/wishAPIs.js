import axios from "axios"
const addToWishlist = async (product,token,dataDispatch) => {
    try{
        const {status,data:{wishlist}} = await axios.post("/api/user/wishlist",
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
                type: "UPDATE_WISHLIST",
                payload: wishlist,
            });
            
        }
    }
    catch(e){
        console.error(e,"error in add to Wishlist")
    }
} 

const removeFromWishlist = async (id,token,dataDispatch) => {
    try{
    const {status,data:{wishlist}} = await axios.delete(`/api/user/wishlist/${id}`,
      {
        headers: {
          authorization: token,
        }
      }
    )
    if(status===200){
      dataDispatch({
        type:"UPDATE_WISHLIST",
        payload: wishlist
      })
    }
  }
  catch(e){
    console.error(e.message,"unable to update item quantity in Wishlist")
  }
}


export {addToWishlist,removeFromWishlist}