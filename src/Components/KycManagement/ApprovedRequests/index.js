import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";

// import { data } from "./../dummyData";
import config from "./../../../Constants/config";

import ApprovedRequestItem from "./approvedRequestItem";
import { connect } from "react-redux";
import { getApprovedKyc } from "../../../Redux/actions/actions";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const ApprovedRequest = ({
  getApprovedKyc,
  kyc: {
    approvedData: { data },
  },
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
  }, [countData, config.itemsPerScreen]);

  useEffect(() => {
    getApprovedKyc();
  }, []);

  return (
    <>
      <div className="card mb-4">
        <div className="card-body  p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={data}
              title={"Approved Requests"}
              columns={columns}
              isViewDetailBtn={true}
              viewDetailButtonName={"View Details"}
              RouteBtn={browserRoute.REQUEST_STATUS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mpaStateToProps = (state) => ({
  kyc: state.kyc,
});

export default connect(mpaStateToProps, { getApprovedKyc })(ApprovedRequest);
