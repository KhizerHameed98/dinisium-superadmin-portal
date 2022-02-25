import React from "react";
import { Link, useHistory } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const PastItem = ({ PastData }) => {
  let history = useHistory();

  const toItoManagementDetail = (e) => {
    history.push(Route.ITO_MANAGEMENT_DETAILS_BTN + `${PastData.id}`);
  };

  return (
    <>
      <td>{PastData.name}</td>
      <td>
        <Moment format="YYYY/MM/DD">{PastData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{PastData.end_date}</Moment>
      </td>
      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={toItoManagementDetail}
        >
          VIEW DETAILS
        </button>
      </td>
    </>
  );
};

export default PastItem;
