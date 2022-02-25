import React from "react";
import { Link, useHistory } from "react-router-dom";
import AvailableTokens from "./AvailableTokens";
import Route from "../../Constants/browserRoutes";

const Exchange = () => {
  const history = useHistory();

  const toBuySellRequests = () => {
    history.push(Route.BUY_SELL_REQUESTS);
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block">
            <h4 className="tbl-small-heading d-inline-block">
              AVAILABLE TOKENS ON MARKETPLACE
            </h4>
            {/* <Link
              className="exp-mr-link text-dr-green mb-2"
              to={Route.ADD_REMOVE_TOKEN}
            >
              ADD / REMOVE TOKEN{" "}
              <i className="fa fa-plus-circle ml-1 font-24"></i>
            </Link> */}
          </div>
        </div>
        <div className="col-md-12">
          <AvailableTokens />
        </div>

        <div className="col-sm-12 text-center">
          <button
            className="btn btn-dark  font-12  my-4  btn-lg"
            onClick={toBuySellRequests}
          >
            VIEW MARKETPLACE REQUESTS
          </button>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default Exchange;
