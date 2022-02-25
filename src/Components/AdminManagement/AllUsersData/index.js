import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "./../../../Constants/config";
import { deleteAdmin } from "../../../Redux/actions/actions";
import UserItem from "./userItem";
import { connect, useSelector } from "react-redux";

import {
  getAdminsList,
  adminBlockUnBlock,
} from "../../../Redux/actions/actions";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import { columns2 } from "./ColumnData2";

import browserRoute from "../../../Constants/browserRoutes";

const UsersData = ({
  selectedItoId,
  getAdminsList,
  adminBlockUnBlock,
  data,
}) => {
  // const { adminList } = data;
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const adminList = useSelector((state) => {
    return state?.admin?.adminList;
  });

  adminList?.sort((a, b) => {
    return a?.name - b?.name;
  });

  adminList?.sort((a, b) => {
    return a?.email - b?.email;
  });

  adminList?.sort((a, b) => {
    return a?.contact_no - b?.contact_no;
  });

  // console.log('list' , adminList);
  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = adminList && adminList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData, config.userPerScreen]);

  useEffect(() => {
    getAdminsList(selectedItoId);
  }, [selectedItoId]);

  const handleBlockUnBlock = (id, value) => {
    adminBlockUnBlock({ id, value });
  };

  // const titleObj = [
  //   {
  //     accordianTitle: "LIST OF ALL TOKENS",
  //     tableTitle: "LIST OF ALLOTED ADMINS",
  //   },
  // ];
  // console.log("CHECK", titleObj);

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={adminList}
              columns={columns({ handleBlockUnBlock })}
              title={"LIST OF ALL ADMINS"}
              isViewDetailBtn={true}
              isOption={false}
              viewDetailButtonName={"View Details"}
              RouteBtn={browserRoute.ADMIN_DETAILS_BTN}
            />
          </div>
        </div>
      </div>

      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={adminList}
              columns={columns({ handleBlockUnBlock })}
              title={"LIST OF ALL TOKENS"}
              // title={titleObj}
              isViewDetailBtn={true}
              isOption={true}
              viewDetailButtonName={"View Details"}
              RouteBtn={browserRoute.ADMIN_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mpaStateToProps = (state) => {
  return {
    data: state.admin,
  };
};

export default connect(mpaStateToProps, {
  getAdminsList,
  adminBlockUnBlock,
  deleteAdmin,
})(UsersData);
