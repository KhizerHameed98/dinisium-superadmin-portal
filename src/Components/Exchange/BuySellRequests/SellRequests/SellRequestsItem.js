import React, { Fragment } from "react";
import Moment from "react-moment";

const SellRequestsItem = ({ item }) => {
  return (
    <Fragment>
      <td className="fn-600">{`${item.fname} ${item.lname}`}</td>
      <td className="fn-600">{item.token_name}</td>
      <td className="fn-600">{item.token_symbol}</td>
      <td className="fn-600">{item.amount}</td>
      <td className="text-dr-blu">
        <span className="pro-date mb-0">
          <i className="far fa-calendar"></i>
          <Moment format="D MMM YYYY" withTitle>
            {item && item.created_at}
          </Moment>
        </span>
      </td>
    </Fragment>
  );
};

export default SellRequestsItem;
