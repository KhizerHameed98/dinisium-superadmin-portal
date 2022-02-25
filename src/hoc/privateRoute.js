import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import browserRoutes from "../Constants/browserRoutes";
const AuthRoute = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated || (token && token !== "undefined") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: browserRoutes.SIGNIN,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AuthRoute);
