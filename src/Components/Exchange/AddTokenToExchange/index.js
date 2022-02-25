import React from "react";
import TokensList from "./TokensList";

const AddTokenToExchange = () => {
  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block">
            <h4 className="tbl-small-heading d-inline-block">
              AVAILABLE TOKENS
            </h4>
          </div>
        </div>
        <div className="col-md-12">
          <TokensList />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default AddTokenToExchange;
