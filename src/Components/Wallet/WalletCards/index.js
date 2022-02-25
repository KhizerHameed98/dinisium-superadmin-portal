import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getWalletDetails } from "../../../Redux/actions/actions";

const WalletCards = ({ getWalletDetails, wallet }) => {
  const { walletDetails } = wallet;
  console.log(walletDetails);

  useEffect(() => {
    getWalletDetails();
  }, []);

  return (
    <Fragment>
      <div className="col-md-6">
        <div className="card bg-cr-1 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot font-30 fn-500">
                {(walletDetails && walletDetails.fiat_balances) || 0}$
              </p>
              <span className="dashboard-cd-blc">FIAT BALANCE</span>
            </div>
            <div className="dashboard-cd-icon d-inline-block float-right">
              <i className="far fa-chart-bar"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card bg-cr-2 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot font-30 fn-500">
                {" "}
                {(walletDetails && walletDetails.tokens) || 0}
              </p>
              <span className="dashboard-cd-blc">TOKENS</span>
            </div>
            <div className="dashboard-cd-icon d-inline-block float-right">
              <i className="fas fa-coins"></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mpaStateToProps = (state) => {
  return {
    wallet: state.wallet,
  };
};

export default connect(mpaStateToProps, {
  getWalletDetails,
})(WalletCards);
