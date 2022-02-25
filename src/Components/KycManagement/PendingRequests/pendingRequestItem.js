import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";

const PendingRequestItem = ({ pendingRequestData }) => {
  return (
    <>
      <td className="fn-600">{pendingRequestData.full_name}</td>
      <td className="text-dr-blu">{pendingRequestData.permanent_address}</td>

      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.REQUEST_STATUS_BTN + `${pendingRequestData.id}`}
          // href="PendingRequest.html"
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default PendingRequestItem;
