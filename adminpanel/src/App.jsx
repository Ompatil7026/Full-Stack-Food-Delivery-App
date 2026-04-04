import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menubar from "./components/Menubar/Menubar";
import Sidebar from "./components/Sidebar/Sidebar";
import AddFood from "./pages/AddFood/AddFood";
import ListFood from "./pages/ListFood/ListFood";
import Orders from "./pages/Orders/Orders";
const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible={sidebarVisible} />

      {/* <!-- Page content wrapper--> */}
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />
        <ToastContainer />
        {/* <!-- Page content--> */}
        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddFood />} />
            <Route path="/list" element={<ListFood />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
