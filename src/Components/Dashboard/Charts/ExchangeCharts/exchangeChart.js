import React, { useState } from "react";
import OrdersGraph from "./ordersGraph";

const InvestmentChart = () => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-around">
        <h3>MARKETPLACE</h3>
        <input type="checkbox" value="" id="flexCheckDefault" />
        Buy Orders
        <input type="checkbox" value="" id="flexCheckDefault" />
        Sell Orders
      </div>
      <div className="card-block">
        <OrdersGraph />
      </div>
    </div>
  );
};

export default InvestmentChart;
