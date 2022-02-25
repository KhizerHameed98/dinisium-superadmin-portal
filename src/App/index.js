import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../Routes/authRoutes";
import browserRoute from "../Constants/browserRoutes";
import PrivateRoute from "../hoc/privateRoute";
import SignInComponent from "../Components/Authentication/SignIn";
// import Loadable from "react-loadable";
import Aux from "../hoc/_Aux";
import Loader from "./Layout/Loader";
import AdminLayout from "./Layout/AdminLayout";
import "./Assets/css/new-style.css";
import "./Assets/css/styles.css";

// const AdminLayout = Loadable({
//   loader: () => "./layout/AdminLayout",
//   loading: Loader,
// });

export const SideNavToggleContext = React.createContext();

const App = () => {
  const [sideNavToggle, setSideNavToggle] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem("token");
  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  useEffect(() => {
    if (!isAuthenticated) {
      document.title = "Auth | Dinisium";
    } else {
      document.title = "Dinisium";
    }
  }, [isAuthenticated]);

  return (
    <Aux>
      <Suspense fallback={<Loader />}>
        <SideNavToggleContext.Provider
          value={{ sideNavToggle, setSideNavToggle }}
        >
          <Switch>
            <Route
              path="/"
              exact
              render={(props) =>
                isAuthenticated || (token && token !== "undefined") ? (
                  <Redirect
                    to={{
                      pathname: browserRoute.DASHBOARD,
                    }}
                  />
                ) : (
                  <Redirect
                    to={{
                      pathname: browserRoute.SIGNIN,
                    }}
                  />
                )
              }
            />
            <Route
              path={browserRoute.SIGNIN}
              exact
              render={(props) =>
                isAuthenticated || (token && token !== "undefined") ? (
                  <Redirect
                    to={{
                      pathname: browserRoute.DASHBOARD,
                    }}
                  />
                ) : (
                  <SignInComponent {...props} />
                )
              }
            />
            {menu}
            <PrivateRoute
              path={browserRoute.SUPER_ADMIN_ROUTE}
              component={AdminLayout}
            />
          </Switch>
        </SideNavToggleContext.Provider>
      </Suspense>
    </Aux>
  );
};

export default App;
