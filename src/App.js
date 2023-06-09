import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import ProductListing from "./pages/ProductListing"
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Mockman from "mockman-js"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WrongRoutePage from "./pages/WrongRoutePage";
import { IsAuthDone } from "./components/IsAuthDone";
import ManageAddress from "./pages/ManageAddress";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import OrderSummary from "./pages/OrderSummary";
function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/productlisting" element = {<ProductListing/>} />
        <Route path="/productdetails/:productID" element = {<ProductDetails />} />
        <Route path="/mm" element = {<Mockman/>} />
        <Route path="*" element={<WrongRoutePage />} /> 
        
        <Route element={<IsAuthDone/>}>
          <Route path="/cart" element = {<Cart />} />
          <Route path="/wishlist" element = {<Wishlist />} />
          <Route path="/checkout" element = {<Checkout />} /> 
          <Route path="/manage_address" element = {<ManageAddress />} />
          <Route path="/order_summary" element = {<OrderSummary />} />
          <Route path="/order_history" element = {<OrderHistory />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
