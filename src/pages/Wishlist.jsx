import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ProductCard from "../components/ProductCard";
import Emptiness from "../components/Emptiness";

const Wishlist = () => {
  const {
    data: { wishlist },
  } = useContext(DataContext);
  const isEmptyWishlist = wishlist.length === 0 ? true : false;
  return (
        isEmptyWishlist ? 
           <Emptiness pageName="Favs" />
       : (
                
                <div className="wishlist-main">
                    <h2>
                    <span className="cursive accent">{wishlist.length} cubes </span>
                    in your Favourites :0
                    </h2>
                    <div className="product-card-container mar-up-10">
                    {wishlist &&
                        wishlist.map((i) => <ProductCard wish item={i} key={i.id} />)}
                    </div>
              </div>
            
            )
  );
};

export default Wishlist;
