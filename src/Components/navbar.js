import React from "react";
import "../Styles/navbar.css";
import { AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
         <center> <h1>Book Store</h1></center>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <AiOutlineShoppingCart/>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;