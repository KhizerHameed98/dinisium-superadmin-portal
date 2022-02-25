import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "./../../../Constants/config";

// import { data } from "../dummyData";
import UserDataItem from "./userDataItem";
import { getUsersList, userBlockUnBlock } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const UserManagement = ({
  userManagement: { usersList },
  getUsersList,
  userBlockUnBlock,
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = usersList && usersList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData, config.userPerScreen]);

  useEffect(() => {
    getUsersList();
  }, []);

  const handleBlockUnBlock = (id, value) => {
    userBlockUnBlock({ id, value });
  };
  console.log(usersList);
  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="table-responsive">
                <TableWithDetailButton
                  data={usersList}
                  columns={columns(handleBlockUnBlock)}
                  title={"LIST OF ALL USERS"}
                  isViewDetailBtn={true}
                  viewDetailButtonName={"View Details"}
                  RouteBtn={browserRoute.USER_DETAIL_BTN}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userManagement: state.userManagement,
});

export default connect(mapStateToProps, { getUsersList, userBlockUnBlock })(
  UserManagement
);
