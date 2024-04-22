import React from "react";
import Vehicles from "../Components/Boss/Vehicles";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import './PreBook.css'

const PreBook = () => {
  return (
    <div className="prebook">
      <Vehicles></Vehicles>
      <div className="order-now-btn">
        <div>Order Now</div>
        <PiShoppingBagOpenBold />
      </div>
    </div>
  );
};

export default PreBook;
