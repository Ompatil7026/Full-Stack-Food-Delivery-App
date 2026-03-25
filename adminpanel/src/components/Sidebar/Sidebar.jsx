import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = ({ sidebarVisible }) => {
  return (
    <div
      className={`border-end bg-white ${sidebarVisible ? "" : "d-none"}`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading border-bottom bg-light p-2">
        <div
          className="rounded-circle overflow-hidden"
          style={{ width: "50px", height: "50px" }}
        >
          <img
            src={assets.logo}
            alt="logo"
            className="w-100 h-100"
            style={{ transform: "scale(1.95)", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/add"
        >
          <i class="bi bi-bag-plus-fill me-2"></i>
          Add Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/list"
        >
          <i class="bi bi-card-checklist me-2"></i>
          List Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/orders"
        >
          <i class="bi bi-cart-check-fill me-2"></i>
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
