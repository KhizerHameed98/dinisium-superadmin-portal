import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTokenToExchange } from "../../../../Services/exchange";

const TokensListItem = ({
  item: { id, token_name, token_symbol, price, supply },
  addTokenToExchange,
}) => {
  const onClickAddToken = (e) => {
    e.preventDefault();
    addTokenToExchange({ id });
  };

  return (
    <Fragment>
      <td className="fn-600 text-dr-blu">{token_name}</td>
      <td className="fn-600">{token_symbol}</td>
      <td className="fn-600">{price}</td>
      <td>{supply}</td>
      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={onClickAddToken}
        >
          ADD TOKEN
        </button>
      </td>
    </Fragment>
  );
};

export default connect(null, { addTokenToExchange })(TokensListItem);
