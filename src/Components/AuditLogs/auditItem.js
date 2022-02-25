import React from "react";
import Moment from "react-moment";


const AuditItem = ({ item: { action, admin_name, user_name, created_at } }) => {
  return (
    <>
      <td>{admin_name || ""}</td>
      <td>{user_name || ""}</td>
      <td>{action || ""}</td>
      <th>
        {" "}
        <Moment format="hh:mm a" withTitle>
          {created_at}
        </Moment>
      </th>
      <th>
        <Moment format="D MMM YYYY" withTitle>
          {created_at}
        </Moment>
      </th>
    </>
  );
};

export default AuditItem;
