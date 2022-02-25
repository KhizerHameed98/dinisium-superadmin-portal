import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";

const SingleApprovedItem = ({
  item: {
    fname,
    lname,
    account_name,
    total_amount,
    transfer_amount,
    transfer_fee,
    id,
  },
}) => {
  return (
    <Fragment>
      <td className="text-dr-blu">{`${fname} ${lname}`}</td>
      <td className="text-dr-blu">{account_name}</td>
      <td className="fn-600">{transfer_amount}</td>
      <td>{transfer_fee}</td>
      <td>{total_amount} </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.ADMIN_REQUESTS_DETAILS_BTN + `${id}`}
        >
          VIEW DETAILS
        </Link>
      </td>
    </Fragment>
  );
};

export default SingleApprovedItem;
