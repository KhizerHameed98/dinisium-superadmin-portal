import React, { Fragment } from "react";
import Moment from "react-moment";

const CompletedOrdersItem = ({ item }) => {
  return (
    <Fragment>
      <td className="fn-600">{item && `${item.fname} ${item.lname}`}</td>
      <td className="fn-600">{item && item.token_name}</td>
      <td className="fn-600">{item && item.token_symbol}</td>
      <td className="fn-600">{item && item.order_type}</td>
      <td className="fn-600">{item && item.amount}</td>
      <td className="fn-600">{item && item.transaction_hash}</td>
      <td className="text-dr-blu" style={{ whiteSpace: "nowrap" }}>
        <span className="pro-date mb-0">
          <i className="far fa-calendar"></i>{" "}
          <Moment format="D MMM YYYY" withTitle>
            {item && item.created_at}
          </Moment>
        </span>
      </td>
    </Fragment>
  );
};

export default CompletedOrdersItem;
