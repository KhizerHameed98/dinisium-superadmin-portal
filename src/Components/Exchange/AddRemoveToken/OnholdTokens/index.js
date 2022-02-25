import React, { useState, useEffect } from "react";
import OnholdTokensItem from "./OnholdTokensItem";
import { data } from "../../dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../../Constants/config";
import { getOnholdTokensList } from "../../../../Redux/actions/actions";
import { connect } from "react-redux";

const OnholdTokens = ({
  exchange: {
    onholdData: { data },
  },
  getOnholdTokensList,
}) => {
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

  useEffect(() => {
    getOnholdTokensList();
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
                <th>Token Name</th>
                <th>Token Symbol</th>
                <th>Price</th>
                <th>Supply</th>
                <th></th>
                <th></th>
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
                      <OnholdTokensItem item={item} />
                    </tr>
                  ))}
            </tbody>
          </table>
          {(!data || data.length === 0) && (
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

const mapStateToProps = (state) => ({
  exchange: state.exchange,
});

export default connect(mapStateToProps, { getOnholdTokensList })(OnholdTokens);
