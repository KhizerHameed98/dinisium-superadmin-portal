import React from "react";
import Route from "../Constants/browserRoutes";

const SignIn = React.lazy(() => import("../Components/Authentication/SignIn"));

const authRoutes = [
  {
    path: Route.SIGNIN,
    exact: true,
    name: "SignIn",
    component: SignIn,
  },
];

export default authRoutes;
