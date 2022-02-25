import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";

import { data } from "../dummyData";
import OngoingItem from "./onGoingItem";
import { getOngoingIto } from "../../../Redux/actions/actions";
import { connect } from "react-redux";

const Ongoing = ({
  ito: {
    ongoingData: { data },
  },
  getOngoingIto,
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = data && data.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);
  useEffect(() => {
    getOngoingIto();
  }, []);

  return (
    <>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table
            className="table hover dils-table"
            style={{
              width: "100%",
              cellspacing: "0",
            }}
            // width="100%"
            // cellspacing="0"
          >
            <thead className="bg-cr-1 text-white">
              <tr>
                <th>ITO Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Token Created</th>
                <th>ITO Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data
                  .slice(
                    screen * config.itemsPerScreen - config.itemsPerScreen,
                    config.itemsPerScreen * screen
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <OngoingItem OngoingData={item} />
                    </tr>
                  ))}
            </tbody>
          </table>
          {(!data || (data && data.length === 0)) && (
            <h4 className="text-center">No Record Found</h4>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
});

export default connect(mapStateToProps, { getOngoingIto })(Ongoing);
