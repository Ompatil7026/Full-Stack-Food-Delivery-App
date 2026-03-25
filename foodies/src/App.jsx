import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Menubar from "./components/Menubar/Menubar";
import Register from "./components/Register/Register";
import Cart from "./pages/Cart/Cart";
import ExploreFood from "./pages/ExploreFood/ExploreFood";
import FoodDetails from "./pages/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
import MyOrders from "./pages/MyOrders/MyOrders";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

const App = () => {
  const {token} = useContext (StoreContext);
  return (
    <div>
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={token ? <PlaceOrder /> : <Login/>} />
        <Route path="/login" element={token ? <Home/> : <Login />} />
        <Route path="/register" element={token ? <Home/> : <Register />} />
        <Route path="/myorders" element={token ? <MyOrders /> : <Login/>} />
      </Routes>
    </div>
  );
};

export default App;
