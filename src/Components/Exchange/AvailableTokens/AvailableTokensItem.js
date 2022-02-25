import React, { Fragment } from "react";

const AvailableTokensItem = ({
  item: { token_name, token_symbol, price, supply },
}) => {
  return (
    <Fragment>
      <td className="fn-600 text-dr-blu">{token_name}</td>
      <td className="fn-600">{token_symbol}</td>
      <td className="fn-600">{price}</td>
      <td>{supply}</td>
    </Fragment>
  );
};

export default AvailableTokensItem;
