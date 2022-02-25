import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";

import { connect } from "react-redux";
import { deleteAdmin } from "../../../Redux/actions/actions";

const UserItem = ({ UserData, deleteAdmin }) => {
  const handleDelete = (id) => {
    deleteAdmin(id);
  };

  return (
    <>
      <td>{UserData.fname + " " + UserData.lname}</td>
      <td>{UserData.email}</td>
      <td>{UserData.ito_name}</td>
      <td>{UserData.contact_no}</td>
      <td>{UserData.role}</td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.ADMIN_DETAILS_BTN + `${UserData.id}`}
        >
          VIEW DETAILS
        </Link>
      </td>
      <td>
        <Link
          className="text-danger"
          to="#"
          onClick={() => handleDelete(UserData.id)}
        >
          <strong> REMOVE</strong> <i className="fa fa-trash-alt"></i>
        </Link>
      </td>
    </>
  );
};

export default connect(null, { deleteAdmin })(UserItem);
