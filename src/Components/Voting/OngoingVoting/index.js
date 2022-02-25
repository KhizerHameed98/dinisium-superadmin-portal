import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import config from "./../../../Constants/config";
import { connect } from "react-redux";
import { getOngoingVoting } from "../../../Redux/actions/actions";
import OngoingVotingItem from "./onGoingVotingItem";

const OngoingVoting = ({
  ito_id,
  getOngoingVoting,
  voting: { onGoingVoting },
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = onGoingVoting && onGoingVoting.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);


  useEffect(() => {
    getOngoingVoting({ ito_id });
  }, [ito_id]);

  return (
    <>
      <div className="card mb-2">
        <div className="card-body  p-0">
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
                  <th>Election Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {onGoingVoting &&
                  onGoingVoting
                    .slice(
                      screen * config.itemsPerScreen - config.itemsPerScreen,
                      config.itemsPerScreen * screen
                    )
                    .map((item, index) => (
                      <tr key={index}>
                        <OngoingVotingItem item={item} />
                      </tr>
                    ))}
              </tbody>
            </table>
            {(!onGoingVoting || onGoingVoting.length === 0) && (
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
    </>
  );
};

const mpaStateToProps = (state) => {
  return {
    voting: state.voting,
  };
};

export default connect(mpaStateToProps, {
  getOngoingVoting,
})(OngoingVoting);