import React, { Fragment } from "react";

const TokensDetailItem = ({
  item: { tokenName, price, marketCap, balance },
}) => {
  return (
    <Fragment>
      <td className="text-dr-blu">{tokenName}</td>
      <td className="fn-600">{price}</td>
      <td>{marketCap}</td>
      <td>{balance} TCN</td>
    </Fragment>
  );
};

export default TokensDetailItem;
