import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";

const RejectedRquestItem = ({ rejectedRequestData }) => {
  return (
    <>
      <td className="fn-600">{rejectedRequestData.full_name}</td>
      <td className="text-dr-blu">{rejectedRequestData.permanent_address}</td>

      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.REQUEST_STATUS_BTN + `${rejectedRequestData.id}`}

          // href="PendingRequest.html"
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default RejectedRquestItem;
