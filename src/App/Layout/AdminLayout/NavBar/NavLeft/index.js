import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Route from "../../../../../Constants/browserRoutes";
import logo from "../../../../Assets/images/danisium-logo.png";
import { SideNavToggleContext } from "../../../../index";

const NavLeft = () => {
  const sideNavToggleContext = useContext(SideNavToggleContext);
  const { sideNavToggle, setSideNavToggle } = sideNavToggleContext;

  const onClickSideNavBtn = (e) => {
    e.preventDefault();
    setSideNavToggle(!sideNavToggle);
  };

  return (
    <Fragment>
      <Link className="navbar-brand" to={Route.DASHBOARD}>
        <img className="main-logo" src={logo} alt="Logo" />
      </Link>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 text-dark"
        id="sidebarToggle"
        onClick={onClickSideNavBtn}
      >
        <i className="fas fa-bars"></i>
      </button>
    </Fragment>
  );
};

export default NavLeft;
