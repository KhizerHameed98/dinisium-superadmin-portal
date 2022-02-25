import React from "react";
import { Link, useHistory } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const OngoingItem = ({ OngoingData }) => {
  let history = useHistory();

  const toItoManagementDetail = (e) => {
    history.push({
      pathname: Route.ITO_MANAGEMENT_DETAILS_BTN + `${OngoingData.id}`,
      state: "ongoing",
    });
  };
  const toCreateToken = (e) => {
    history.push(Route.CREATE_TOKEN_BTN + `${OngoingData.id}`);
  };

  return (
    <>
      <td>{OngoingData.name}</td>
      <td>
        <Moment format="YYYY/MM/DD">{OngoingData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{OngoingData.end_date}</Moment>
      </td>
      <td>{OngoingData.ito_token_id ? "Success" : "Pending"}</td>
      <td>{OngoingData.onhold ? "Blocked" : "Unblocked"}</td>
      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={toItoManagementDetail}
        >
          VIEW DETAILS
        </button>
        <button
          className="dls-btn bg-semi-black text-white mr-2"
          onClick={toCreateToken}
          disabled={OngoingData.ito_token_id ? true : false}
        >
          CREATE TOKEN
        </button>
      </td>
    </>
  );
};

export default OngoingItem;
