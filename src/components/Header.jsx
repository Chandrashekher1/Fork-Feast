import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import React from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");  // Navigate to the home page when the logo is clicked
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="Header shadow-md">
      <div className="logo">
        <img src={LOGO} alt="Logo" className="logo" onClick={handleLogoClick} />
      </div>
      <div className="nav-items m-6">
        <ul className="flex">
          <li className="link px-6">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="link px-6">
            <Link to="/cart" className="link"> Cart ({cartItems.length} items)</Link>
          </li>
          <li className="link px-6">
            <button className="link">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
