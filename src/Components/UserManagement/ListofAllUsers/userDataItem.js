import React from "react";
import { Link } from "react-router-dom";
import browserRoute from "../../../Constants/browserRoutes";
import Route from "../../../Constants/browserRoutes";

const UserDataItem = ({ userData, blockUser }) => {
  return (
    <>
      <td className="fn-600">
        <div className="icon-flex">
          <div className="icon-wrapper">
            <i className="fas fa-user"></i>
          </div>
        </div>

        {userData && userData.fname + " " + userData.lname}
      </td>

      <td className="text-dr-blu">{userData && userData.email}</td>
      <td>{userData && userData.country}</td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          // href="UserDetails.html"
          to={
            Route.USER_DETAIL_BTN +
            `${userData ? userData.id : browserRoute.BLANK_LINK}`
          }
        >
          VIEW DETAILS
        </Link>
      </td>
      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={() => blockUser(userData.id, userData.is_blocked)}
        >
          {userData.is_blocked ? "Unblock User" : "Block User"}
        </button>
      </td>
    </>
  );
};

export default UserDataItem;
