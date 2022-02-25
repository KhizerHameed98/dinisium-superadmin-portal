import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

import config from "./../../../Constants/config";

import { connect } from "react-redux";
import { getClosedVoting } from "../../../Redux/actions/actions";
import PastVotingItem from "./pastVotingItem";
import { Link } from "react-router-dom";

import Route from "../../../Constants/browserRoutes";

const PastVoting = ({ ito_id, getClosedVoting, voting: { closedVoting } }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = closedVoting && closedVoting.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    getClosedVoting({ ito_id });
  }, [ito_id]);

  return (
    <div className="card mb-4">
      <div className="card-body p-0">
        <div className="table-responsive">
          <table
            className="table hover dils-table fn-500"
            //   width="100%"
            //   cellspacing="0"
            //   style="margin-top:0;"
            style={{
              width: "100%",
              cellspacing: "0",
              marginTop: "0",
            }}
          >
            <thead className="bg-cr-1 text-white">
              <tr>
                <th>Election Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
                <th>
                  <Link className="exp-mr-link" to={Route.PAST_VOTING_LIST}>
                    Explore More
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              {closedVoting &&
                closedVoting
                  .slice(
                    screen * config.itemsPerScreen - config.itemsPerScreen,
                    config.itemsPerScreen * screen
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <PastVotingItem item={item} />
                    </tr>
                  ))}
            </tbody>
          </table>
          {(!closedVoting || closedVoting.length === 0) && (
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
    voting: state.voting,
  };
};

export default connect(mpaStateToProps, {
  getClosedVoting,
})(PastVoting);
