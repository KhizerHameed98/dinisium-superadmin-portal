import React from "react";
import { Link } from "react-router-dom";

import Route from "../../../Constants/browserRoutes";

const ApprovedRequestItem = ({ approvedRequestData }) => {
  return (
    <>
      <td className="fn-600">{approvedRequestData.full_name}</td>
      <td className="text-dr-blu">{approvedRequestData.permanent_address}</td>

      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.REQUEST_STATUS_BTN + `${approvedRequestData.id}`}
          // href="PendingRequest.html"
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default ApprovedRequestItem;
