import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  countAllElections,
  countAllRegisteredUsers,
  countAllExchangeOrders,
  countAllTokens,
} from "../../Redux/actions/actions";

const ShortReport = ({
  dashboard: { countElections, countUsers, countOrders, countTokens },
  countAllElections,
  countAllRegisteredUsers,
  countAllExchangeOrders,
  countAllTokens,
}) => {
  useEffect(() => {
    countAllElections();
    countAllRegisteredUsers();
    countAllExchangeOrders();
    countAllTokens();
  }, []);

  return (
    <div className="row">
      <div className="col-md-3">
        <div
          className="card bg-cr-1 text-white mb-4 "
          style={{ maxHeight: "100px" }}
        >
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{countOrders || "0"}</p>
              <span className="dashboard-cd-blc">MARKETPLACE ORDERS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div
          className="card bg-cr-2 text-white mb-4"
          style={{ maxHeight: "100px" }}
        >
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{countElections || "0"}</p>
              <span className="dashboard-cd-blc">TOTAL ELECTIONS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div
          className="card bg-cr-1 text-white mb-4"
          style={{ maxHeight: "100px" }}
        >
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{countUsers || "0"}</p>
              <span className="dashboard-cd-blc">REGISTERED USERS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div
          className="card bg-cr-2 text-white mb-4"
          style={{ maxHeight: "100px" }}
        >
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{countTokens || "0"}</p>
              <span className="dashboard-cd-blc">ALL TOKENS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  countAllElections,
  countAllRegisteredUsers,
  countAllExchangeOrders,
  countAllTokens,
})(ShortReport);
