import axios from "axios";
import {
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERR,
  GET_INVESTMENT_DETAIL_SUCCESS,
  GET_INVESTMENT_DETAIL_ERR,
  BLOCK_UNBLOCK_SUCCESS,
  BLOCK_UNBLOCK_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { userManagement, exchange } from "../Routes/serverRoutes";

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

//Get All Investors List
export const getUsersList = () => (dispatch) => {
  const role = "user";
  axios
    .get(userManagement.GET_ALL_USERS + `?role=${role}`)
    .then((res) => {
      dispatch({
        type: GET_USERS_LIST_SUCCESS,
        payload: { usersList: res.data.response },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_LIST_ERR,
      });
    });
};

//Get User Profile By Id
export const getUserProfile = (id) => (dispatch) => {
  axios
    .get(userManagement.GET_USER_PROFILE + `?id=${id}`)
    .then((res) => {
      dispatch({
        type: GET_USER_PROFILE_SUCCESS,
        payload: { userProfile: res.data.response },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_PROFILE_ERR,
      });
    });
};

//Get buy orders detail of a user by user_id
//Get Investment Details of a user by user_id
export const getInvestmentDetailByUserId = (id) => (dispatch) => {
  const orderType = "buy_order";
  axios
    .get(
      exchange.GET_BUY_REQUEST_LIST + `?user_id=${id}&order_type=${orderType}`
    )
    .then((res) => {
      dispatch({
        type: GET_INVESTMENT_DETAIL_SUCCESS,
        payload: { investmentDetail: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INVESTMENT_DETAIL_ERR,
      });
    });
};


// block/unBlock
export const userBlockUnBlock = ({ id, value }) => (dispatch) => {
  let obj = {
    status: value ? false : true,
  };
  axios
    .put(userManagement.USER_BLOCK_UNBLOCK + `${id}`, obj)
    .then((res) => {
      dispatch({
        type: BLOCK_UNBLOCK_SUCCESS,
        payload: { response: res.data.message, userId: id, status: obj.status },
      });
      let successMessage = (res && res.data.message) || res.message;
      alertToast(false, successMessage);
    })
    .catch((err) => {
      dispatch({
        type: BLOCK_UNBLOCK_ERR,
      });
      let errorMessage =
        err &&
        err.response &&
        err.response.data &&
        err.response.data.msg &&
        err.response.data.msg;
      alertToast(true, errorMessage);
    });
};
