import React, { useEffect, useState } from "react";
import BuyRequestsItem from "./BuyRequestsItem";
import { data1 } from "../../dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../../Constants/config";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getBuyRequestsList } from "./../../../../Services/exchange";

const BuyRequests = ({ getBuyRequestsList, data }) => {
  const { buyRequestList } = data;

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen
  const itemsPerScreen = config.itemsPerScreen;

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = buyRequestList && buyRequestList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);

  useEffect(() => {
    getBuyRequestsList();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body p-0">
        <div className="table-responsive">
          <table
            className="table hover dils-table"
            width="100%"
            cellSpacing="0"
          >
            <thead className="bg-cr-1 text-white">
              <tr>
                <th>Person Name</th>
                <th>Token Name</th>
                <th>Token Symbol</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {buyRequestList &&
                buyRequestList
                  .slice(
                    screen * itemsPerScreen - itemsPerScreen,
                    itemsPerScreen * screen
                  )
                  .map((item) => (
                    <tr key={item.id}>
                      <BuyRequestsItem item={item} />
                    </tr>
                  ))}
            </tbody>
          </table>
          {(!buyRequestList || buyRequestList.length === 0) && (
            <h4 className="text-center">No Record Found ...</h4>
          )}
        </div>
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
    data: state.exchange,
  };
};

export default connect(mpaStateToProps, {
  getBuyRequestsList,
})(BuyRequests);
