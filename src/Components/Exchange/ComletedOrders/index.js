import React, { useState, useEffect } from "react";
// import { data1 } from "../dummyData";
import CompletedOrdersItem from "./CompletedOrdersItem";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
import { getCompletedOrdersList } from "../../../Redux/actions/actions";
import { connect } from "react-redux";

const CompletedOrders = ({ exchange: { data }, getCompletedOrdersList }) => {
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
    getCompletedOrdersList();
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <h4 className="tbl-small-heading d-inline-block">
              COMPLETED ORDER
            </h4>
            {/* <div className="selct-drop d-inline mb-2 w-50">
              <select className="custom-select">
                <option defaultChecked>Select ITO</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> */}
          </div>
        </div>
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body srl-bar p-0">
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
                      <th>Order Type</th>
                      <th>Amount</th>
                      <th>Transaction Hash</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data &&
                      data.length > 0 &&
                      data
                        .slice(
                          screen * itemsPerScreen - itemsPerScreen,
                          itemsPerScreen * screen
                        )
                        .map((item) => (
                          <tr key={item.id}>
                            <CompletedOrdersItem item={item} />
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
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchange,
});

export default connect(mapStateToProps, { getCompletedOrdersList })(
  CompletedOrders
);
