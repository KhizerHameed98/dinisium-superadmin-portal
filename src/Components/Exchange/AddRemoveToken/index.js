import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import AvailableTokens from "./AvailableTokens";
import OnholdTokens from "./OnholdTokens";

const index = () => {
  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block">
            <h4 className="tbl-small-heading d-inline-block">
              AVAILABLE TOKENS ON EXCHANGE
            </h4>
            <Link
              className="exp-mr-link text-dr-green mb-2"
              to={Route.ADD_TOKEN_TO_EXCHANGE}
            >
              ADD TOKEN TO MARKETPLACE{" "}
              <i className="fa fa-plus-circle ml-1 font-24"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-12">
          <AvailableTokens />
        </div>

        <div className="col-md-12">
          <div>
            <h4 className="tbl-small-heading">ONHOLD TOKENS</h4>
          </div>

          <OnholdTokens />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default index;
