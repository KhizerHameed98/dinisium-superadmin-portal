import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import Route from "../../../../../Constants/browserRoutes";
import { logout } from "../../../../../Redux/actions/actions";
import { connect } from "react-redux";
import browserRoute from "../../../../../Constants/browserRoutes";

const NavRight = ({ auth: { userWallet, userDetails }, logout }) => {
  let history = useHistory();

  const logoutUser = () => {
    logout(history);
  };

  return (
    <Fragment>
      <ul className="top-bar-assest ml-auto mr-5 mb-0">
        <li>
          Asset Holding{" "}
          <span>
            {userWallet && userWallet.tokens ? userWallet.tokens : "0"}
          </span>
        </li>
        <li>
          Balance Holding{" "}
          <span>
            {userWallet && userWallet.fiat_balances
              ? `$${userWallet.fiat_balances}`
              : "$0"}
          </span>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-dark"
            id="userDropdown"
            to={Route.BLANK_LINK}
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-cog"></i>
          </Link>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <div
              className="dropdown-item"
              style={{ color: "#0394fd", fontSize: "15px", fontWeight: "bold" }}
            >
              {(userDetails &&
                userDetails.fname &&
                userDetails.fname + " " + userDetails.lname) ||
                ""}
            </div>
            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item"
              onClick={() => history.push(browserRoute.PROFILE)}
            >
              Profile
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </li>
      </ul>
      <ul className="mt-4 my-1">
        <p className="font-weight-bold">Role: Superadmin</p>
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavRight);
