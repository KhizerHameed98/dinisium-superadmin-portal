import axios from "axios";
import {
  GET_BANK_ACCOUNT_DETAILS_SUCCESS,
  GET_BANK_ACCOUNT_DETAILS_ERR,
  ADD_BANK_ACCOUNT_DETAILS_SUCCESS,
  ADD_BANK_ACCOUNT_DETAILS_ERR,
  UPDATE_BANK_ACCOUNT_DETAILS_SUCCESS,
  UPDATE_BANK_ACCOUNT_DETAILS_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { dinisumBankAccounts } from "../Routes/serverRoutes";
import browserRoute from "./../Constants/browserRoutes";

//alert tost
const alertToast = (error, message) => {
  if (!error) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
//Get Bank Account
export const getBankAccount =
  ({ setAccountExists }) =>
  (dispatch) => {
    axios
      .get(dinisumBankAccounts.GET_BANK_ACCOUNT)
      .then((res) => {
        dispatch({
          type: GET_BANK_ACCOUNT_DETAILS_SUCCESS,
          payload: { data: res.data },
        });
        // setAccountExists(true);
      })
      .catch((err) => {
        dispatch({
          type: GET_BANK_ACCOUNT_DETAILS_ERR,
        });
        setAccountExists(false);
        alertToast(true, err?.response?.data?.msg);
      });
  };

//Add New  Bank Account Details
export const addBankAcountDetails =
  ({ body, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(dinisumBankAccounts.ADD_BANK_ACCOUNT, body, config)
      .then(async (res) => {
        await dispatch({
          type: ADD_BANK_ACCOUNT_DETAILS_SUCCESS,
          payload: res.data.data,
        });

        alertToast(false, res.data.msg);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: ADD_BANK_ACCOUNT_DETAILS_ERR,
        });

        alertToast(true, err?.response?.data?.msg);
      });
  };

//Update a bank Account

export const updateBankAcountDetails =
  ({ body, setLoading, history }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(dinisumBankAccounts.UPDATE_BANK_ACCOUNT, body, config)
      .then(async (res) => {
        await dispatch({
          type: UPDATE_BANK_ACCOUNT_DETAILS_SUCCESS,
          payload: res.data.data,
        });
        alertToast(false, res.data.msg);
        setLoading(false);
        history.push(browserRoute.BANK_ACCOUNT);
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_BANK_ACCOUNT_DETAILS_ERR,
        });

        alertToast(true, err?.response?.data?.msg);
      });
  };
