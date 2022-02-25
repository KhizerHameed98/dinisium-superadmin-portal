import React from "react";
import { useHistory } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import BuyRequests from "./BuyRequests";
import SellRequests from "./SellRequests";

const BuySellRequests = () => {
  const history = useHistory();
  const toCompletedOrder = () => {
    history.push(Route.COMPLETED_ORDERS);
  };

  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block">
            <h4 className="tbl-small-heading d-inline-block">BUY REQUESTS</h4>
            {/* <div className="selct-drop d-inline ml-2">
              <select className="custom-select w-50">
                <option defaultChecked>Select ITO</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}
            <button
              className="btn btn-success float-right font-12 btn-green mb-2  btn-lg"
              onClick={toCompletedOrder}
            >
              VIEW COMPLETED ORDER
            </button>
          </div>
        </div>
        <div className="col-md-12">
          <BuyRequests />
        </div>

        <div className="col-md-12">
          <div>
            <h4 className="tbl-small-heading">SELL REQUESTS</h4>
          </div>
          <SellRequests />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default BuySellRequests;
