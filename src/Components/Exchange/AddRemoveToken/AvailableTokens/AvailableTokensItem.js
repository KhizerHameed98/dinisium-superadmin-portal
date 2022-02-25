import React, { Fragment } from "react";
import { connect } from "react-redux";
import { blockUnblockToken } from "../../../../Redux/actions/actions";

const AvailableTokensItem = ({
  item: { id, token_name, token_symbol, price, supply },
  blockUnblockToken,
}) => {
  const blockToken = (e) => {
    e.preventDefault();
    blockUnblockToken({ id, isBlocked: true });
  };

  const removeToken = (e) => {
    e.preventDefault();
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
          onClick={blockToken}
        >
          ONHOLD
        </button>
      </td>
      <td>
        <button className="btn text-danger" onClick={removeToken}>
          <strong> REMOVE</strong> <i className="fa fa-trash-alt"></i>
        </button>
      </td>
    </Fragment>
  );
};

export default connect(null, { blockUnblockToken })(AvailableTokensItem);
