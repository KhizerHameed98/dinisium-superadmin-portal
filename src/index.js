import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./App/Assets/css/new-style.css";
import "./App/Assets/css/styles.css";
import { BrowserRouter } from "react-router-dom";
import AppIndex from "./App/index";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setAuthToken from "./utils/setAuthToken";
import dotenv from "dotenv";

if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  dotenv.config();
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <AppIndex />
        </BrowserRouter>
      </Provider>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
