import React, { useState, useEffect } from "react";

import { data } from "../../Wallet/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
import SingleApprovedItem from "./singleApprovedItem";

import { connect } from "react-redux";
import { getSingleApprovedList } from "'../../../src/Services/adminRequest";

const SingleApproved = ({
  getSingleApprovedList,
  adminRequest: { singleApprovedList },
}) => {
  useEffect(() => {
    getSingleApprovedList();
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

  const countData = singleApprovedList && singleApprovedList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);

  return (
    <div className="card w-100">
      <div className="table-responsive">
        <table
          className="table hover dils-table"
          // width="100%"
          // cellspacing="0"
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
            {singleApprovedList &&
              singleApprovedList
                .slice(
                  screen * itemsPerScreen - itemsPerScreen,
                  itemsPerScreen * screen
                )
                .map((item) => (
                  <tr key={item.id}>
                    <SingleApprovedItem item={item} />
                  </tr>
                ))}
          </tbody>
        </table>
        {(!singleApprovedList ||
          (singleApprovedList && singleApprovedList.length === 0)) && (
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
  );
};

const mpaStateToProps = (state) => {
  return {
    adminRequest: state.adminRequest,
  };
};

export default connect(mpaStateToProps, {
  getSingleApprovedList,
})(SingleApproved);
