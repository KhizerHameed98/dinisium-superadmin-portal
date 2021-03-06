import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const PastVotingtem = ({
  item: { name, start_date, end_date, status, id },
}) => {
  return (
    <>
      <td className="text-dr-bluu">{name}</td>
      <td>
        <Moment format="D MMM YYYY" withTitle>
          {start_date}
        </Moment>
      </td>
      <td>
        <Moment format="D MMM YYYY" withTitle>
          {end_date}
        </Moment>
      </td>
      <td className="text-dr-blu"></td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={{
            pathname: Route.VOTING_DETAILS_BTN + `${id}`,
            state: { status: "pastvoting" },
          }}
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default PastVotingtem;
