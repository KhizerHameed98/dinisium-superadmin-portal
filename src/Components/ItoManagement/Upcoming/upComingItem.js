import React from "react";
import { Link, useHistory } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const UpCommingItem = ({ upCommingData }) => {
  let history = useHistory();

  const toItoManagementDetail = (e) => {
    history.push(Route.ITO_MANAGEMENT_DETAILS_BTN + `${upCommingData.id}`);
  };

  const toCreateToken = (e) => {
    history.push(Route.CREATE_TOKEN_BTN + `${upCommingData.id}`);
  };

  return (
    <>
      <td>{upCommingData.name}</td>
      <td>
        <Moment format="YYYY/MM/DD">{upCommingData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{upCommingData.end_date}</Moment>
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

export default UpCommingItem;
