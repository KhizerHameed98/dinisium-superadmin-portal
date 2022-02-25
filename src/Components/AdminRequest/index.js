import React, { useState, useEffect } from "react";
// import { data } from "../../Components/Wallet/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../Constants/config";
import ConfirmRequestItem from "./confirmRequesetItem";
import { connect } from "react-redux";
import ApprovedRequests from "./ApprovedRequests";
import RejectedRequests from "./RejectedRequests";

import {
  getDepositesList,
  confrimDeposite,
} from "../../../src/Services/adminRequest";

import SingleApproved from "./SingleApproved/index";

const AdminRequest = ({ adminRequest, getDepositesList }) => {
  const { pendingDepositeList } = adminRequest;

  useEffect(() => {
    getDepositesList();
  }, []);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen
  const itemsPerScreen = config.itemsPerScreen;

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const countData = pendingDepositeList && pendingDepositeList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <h4 className="tbl-small-heading">PENDING DEPOSITES REQUESTS</h4>

          <div className="card">
            <div className="table-responsive">
              <table
                className="table hover dils-table fn-500"
                width="100%"
                cellSpacing="0"
                style={{ marginTop: "0" }}
              >
                <thead className="bg-cr-1 text-white">
                  <tr>
                    <th>Username</th>
                    <th>Account Name</th>
                    <th>Transfer Amount</th>
                    <th>Transfer Fee</th>
                    <th>Total Amount</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {pendingDepositeList &&
                    pendingDepositeList
                      .slice(
                        screen * itemsPerScreen - itemsPerScreen,
                        itemsPerScreen * screen
                      )
                      .map((item) => (
                        <tr key={item.id}>
                          <ConfirmRequestItem item={item} />
                        </tr>
                      ))}
                </tbody>
              </table>
              {(!pendingDepositeList ||
                (pendingDepositeList && pendingDepositeList.length === 0)) && (
                <h4 className="text-center">No Record Found ...</h4>
              )}
              <div style={{ marginBottom: "5px" }}>
                <Pagination
                  count={count}
                  shape="rounded"
                  screen={screen}
                  onChange={handleChange}
                  showFirstButton
                  showLastButton
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12  mt-5">
          <div>
            <h4 className="tbl-small-heading">Single Approved Requests </h4>
          </div>
          <div className="card-body  p-0">
            <SingleApproved />
          </div>
        </div>

        <div className="col-md-12 mb-5 mt-5">
          <div>
            <h4 className="tbl-small-heading">Approved Requests </h4>
          </div>
          <div className="card-body  p-0">
            <ApprovedRequests />
          </div>
        </div>
        <div className="col-md-12 mb-5 mt-5">
          <div>
            <h4 className="tbl-small-heading">Rejected Requests </h4>
          </div>
          <div className="card-body  p-0">
            <RejectedRequests />
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    adminRequest: state.adminRequest,
  };
};

export default connect(mpaStateToProps, {
  getDepositesList,
})(AdminRequest);
