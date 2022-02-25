import React, { useState, useEffect } from "react";
import TokensDetailItem from "./TokensDetailItem";
import { data } from "../dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";

import { connect } from "react-redux";
import { getTokentList } from "../../../Redux/actions/actions";

const TokenDetail = ({ getTokentList, wallet }) => {
  const { tokenList } = wallet;

  useEffect(() => {
    getTokentList();
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

  const countData = data && data.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);

  return (
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
              <th>Token Name</th>
              <th>Price</th>
              <th>Marketcap</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data
                .slice(
                  screen * itemsPerScreen - itemsPerScreen,
                  itemsPerScreen * screen
                )
                .map((item) => (
                  <tr key={item.id}>
                    <TokensDetailItem item={item} />
                  </tr>
                ))}
          </tbody>
        </table>
        {(!data || (data && data.length === 0)) && (
          <h2 className="text-center">No Record Found</h2>
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

// export default TokenDetail;

const mpaStateToProps = (state) => {
  return {
    wallet: state.wallet,
  };
};

export default connect(mpaStateToProps, {
  getTokentList,
})(TokenDetail);
