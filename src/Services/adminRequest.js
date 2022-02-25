import axios from "axios";

import {
  GET_DEPOSITES_LIST_SUCCESS,
  GET_DEPOSITES_LIST_ERR,
  CONFIRM_DEPOSITE_SUCCESS,
  CONFIRM_DEPOSITE_ERR,
  GET_DEPOSITE_BY_ID_SUCCESS,
  GET_DEPOSITE_BY_ID_ERR,
  GET_ALL_DEPOSITES_LIST_SUCCESS,
  GET_ALL_DEPOSITES_LIST_ERR,
  GET_SINGLE_APPROVED_SUCCESS,
  GET_SINGLE_APPROVED_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { adminRequest } from "../Routes/serverRoutes";

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

//Confirm deposite
export const confrimDeposite = ({ id, obj }) => (dispatch) => {
  axios
    .put(`${adminRequest.CONFIRM_DEPOSITE}/${id}/status`, obj)
    .then((res) => {
      dispatch({
        type: CONFIRM_DEPOSITE_SUCCESS,
        payload: obj.status,
      });
      let successMessage =
        (res && res.data && res.data.msg && res.data.msg) || "Request Approved";
      alertToast(false, successMessage);
    })
    .catch((error) => {
      dispatch({
        type: CONFIRM_DEPOSITE_ERR,
      });
      let errorMessage =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.msg &&
          error.response.data.msg) ||
        "Request failed";
      alertToast(true, errorMessage);
    });
};

//Get pending deposites list
export const getDepositesList = () => (dispatch) => {
  axios
    .get(adminRequest.GET_PENDING_DEPOSITES_LIST + `?status=pending`)
    .then((res) => {
      dispatch({
        type: GET_DEPOSITES_LIST_SUCCESS,
        // payload: res.data.data,
        payload: { pendingDepositeList: res.data.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DEPOSITES_LIST_ERR,
      });
    });
};

//Get all deposites list
export const getAllDepositesList = (status) => (dispatch) => {
  console.log(status);
  axios
    .get(adminRequest.GET_ALL_DEPOSITES_LIST + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_DEPOSITES_LIST_SUCCESS,
        payload:
          status === "approved"
            ? { allDepositesList: res.data.data }
            : { rejectedDepositesList: res.data.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_DEPOSITES_LIST_ERR,
      });
    });
};

//Get singleApproved req list
export const getSingleApprovedList = () => (dispatch) => {
  axios
    .get(adminRequest.GET_SINGLE_APPROVED_LIST)
    .then((res) => {
      dispatch({
        type: GET_SINGLE_APPROVED_SUCCESS,
        payload: { singleApprovedList: res.data.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SINGLE_APPROVED_ERR,
      });
    });
};

//Get deposite by Id
export const getDepositesById = (id) => (dispatch) => {
  axios
    .get(`${adminRequest.GET_DEPOSITE_BY_ID}/${id}`)
    .then((res) => {
      dispatch({
        type: GET_DEPOSITE_BY_ID_SUCCESS,
        payload: { depositeDetails: res.data.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DEPOSITE_BY_ID_ERR,
      });
    });
};
