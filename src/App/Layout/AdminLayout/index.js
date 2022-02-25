import React, { Suspense, useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Navigation from "./Navigation";
import routes from "../../../Routes/pagesRoutes";
import { Redirect, Route, Switch } from "react-router-dom";
import browserRoutes from "../../../Constants/browserRoutes";
import PrivateRoute from "../../../hoc/privateRoute";
import Loader from "../Loader";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";
import PageTitle from "./PageTitle";
import { SideNavToggleContext } from "../../index";

const AdminLayout = () => {
  const [sideNavToggleValue, setSideNavToggleValue] = useState("");

  const sideNavToggleContext = useContext(SideNavToggleContext);
  const { sideNavToggle } = sideNavToggleContext;

  useEffect(() => {
    if (sideNavToggle) setSideNavToggleValue("sb-sidenav-toggled");
    else setSideNavToggleValue("");
  }, [sideNavToggle]);

  const menu = routes.map((route, index) => {
    return route.component ? (
      <PrivateRoute
        key={index}
        exact={route.exact} 
        path={route.path}
        name={route.name}
        component={route.component}
      />
    ) : null;
  });

  return (
    <div className={`sb-nav-fixed ${sideNavToggleValue}`}>
      <NavBar />
      <div id="layoutSidenav">
        <Navigation />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <BreadCrumb />
              <div className="row">
                <PageTitle />
                <Suspense fallback={<Loader />}>
                  <Switch>
                    {menu}
                  </Switch>
                </Suspense>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
