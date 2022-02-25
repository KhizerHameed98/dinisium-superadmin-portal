import React from "react";
import { withRouter } from "react-router-dom";
import Route from "../../Constants/browserRoutes";
import TokenDetail from "./TokensDetail";
import WalletCards from "./WalletCards";

const Wallet = ({ history }) => {
  const payViaBank = (e) => {
    history.push(Route.BANK_PAYMENT);
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <WalletCards />
          </div>
        </div>
        <div className="col-md-12">
          <div className="sec-heading">
            <h4>Your Tokens</h4>
          </div>

          <TokenDetail />
        </div>
        <div className="col-md-12 my-5 text-center">
          <button
            className="btn btn-success font-12 btn-green w-25 btn-lg"
            onClick={payViaBank}
          >
            Pay Via Bank
          </button>
          <button type="button" className="btn btn-primary w-25 btn-lg ml-3">
            Deposit Fiat{" "}
          </button>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default withRouter(Wallet);
