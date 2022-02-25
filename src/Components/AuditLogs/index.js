import React, { useState, useEffect } from "react";
import AuditItem from "./auditItem";

import Pagination from "@material-ui/lab/Pagination";
import config from "../../Constants/config";

import { connect, useSelector } from "react-redux";
import { getAuditLogsList } from "../../Redux/actions/actions";
import TableWithDetailButton from "../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";

const AuditLogs = ({ getAuditLogsList, auditLogs: { auditLogList } }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = auditLogList && auditLogList.length;

  const auditLog = useSelector((state) => {
    return state?.auditLogs?.auditLogList;
  });
  auditLog?.sort((a, b) => {
    return a?.admin - b?.admin;
  });

  // auditLog.sort((a, b) => {
  //   return a?.user_name - b?.user_name;
  // });

  auditLog.sort((a, b) => {
    return a?.action - b?.action;
  });

  // auditLog?.sort((a, b) => {
  //   return a?.updated_at - b?.updated_at;
  // });

  // auditLog.sort((a, b) => {
  //   return a?.created_at - b?.created_at;
  // });

  console.log("logs", auditLog);

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    getAuditLogsList();
  }, []);

  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-sm-12">
          {/* <div className="card"> */}
          {/* <div className="table-responsive"> */}
          <div className="card mb-2">
            <div className="card-body p-0">
              <div className="table-responsive">
                <TableWithDetailButton
                  data={auditLog}
                  columns={columns()}
                  title={"Audit Logs "}
                  options={{
                    sorting: true,
                  }}
                  // isViewDetailBtn={true}
                  viewDetailButtonName={"View Details"}
                  // RouteBtn={browserRoute.ADMIN_DETAILS_BTN}
                />
              </div>
            </div>
          </div>

          {/* <table
                className="table hover dils-table fn-500"
                // width="100%"
                // cellspacing="0"
                // style="margin-top:0;"
              >
                <thead className="bg-cr-1 text-white">
                  <tr>
                    <th>Admin</th>
                    <th>User</th>
                    <th>Action</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {auditLogList &&
                    auditLogList
                      .slice(
                        screen * config.itemsPerScreen - config.itemsPerScreen,
                        config.itemsPerScreen * screen
                      )
                      .map((item, index) => (
                        <tr key={index}>
                          <AuditItem item={item} />
                        </tr>
                      ))}
                </tbody>
              </table> */}
          {/* {(!auditLogList ||
                (auditLogList && auditLogList.length === 0)) && (
                <h4 className="text-center">No Record Found</h4>
              )} */}
          {/* </div> */}

          {/* <div style={{ marginBottom: "5px" }}>
              <Pagination
                count={count}
                shape="rounded"
                screen={screen}
                onChange={handleChange}
                showFirstButton
                showLastButton
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    auditLogs: state.auditLogs,
  };
};

export default connect(mpaStateToProps, {
  getAuditLogsList,
})(AuditLogs);
