import axios from "axios";
import {
  GET_TOKENS_SUCCESS,
  GET_TOKENS_ERR,
  TOKEN_ADDED_EXCHANGE_SUCCESS,
  TOKEN_ADDED_EXCHANGE_ERR,
  GET_UNHOLD_TOKENS_SUCCESS,
  GET_UNHOLD_TOKENS_ERR,
  GET_ONHOLD_TOKENS_SUCCESS,
  GET_ONHOLD_TOKENS_ERR,
  TOKEN_UNBLOCKED_SUCCESS,
  TOKEN_UNBLOCKED_ERR,
  TOKEN_BLOCKED_SUCCESS,
  TOKEN_BLOCKED_ERR,
  GET_BUY_REQUEST_LIST_SUCCESS,
  GET_BUY_REQUEST_LIST_ERR,
  GET_SELL_REQUEST_LIST_SUCCESS,
  GET_SELL_REQUEST_LIST_ERR,
  GET_COMPLETED_ORDERS_SUCCESS,
  GET_COMPLETED_ORDERS_ERR,
  CREATE_TOKENS_SUCCESS,
  CREATE_TOKENS_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { exchange } from "../Routes/serverRoutes";
import browserRoute from "../Constants/browserRoutes";

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

//Create ITO Token
export const createToken =
  ({ formData, setFormData, history }) =>
  (dispatch) => {
    const { itoId, tokenName, tokenSymbol, tokenDecimal, supply, price } =
      formData;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      ito_id: itoId,
      token_name: tokenName,
      token_symbol: tokenSymbol,
      token_decimal: tokenDecimal,
      supply,
      price,
    });

    axios
      .post(exchange.CREATE_TOKEN, body, config)
      .then(async (res) => {
        await dispatch({
          type: CREATE_TOKENS_SUCCESS,
          payload: res.data,
        });
        alertToast(false, "Token Created Successfully");
        setFormData({
          tokenSymbol: "",
          tokenDecimal: "",
          tokenName: "",
          supply: "",
          itoId: "",
          price: "",
        });
        history.push(browserRoute.ITO_MANAGEMENT);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_TOKENS_ERR,
        });
        alertToast(
          true,
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
      });
  };

//Get Ongoing TOKENS
export const getTokensList = () => (dispatch) => {
  const status = "false";
  axios
    .get(exchange.GET_TOKENS + `?is_tradeable=${status}`)
    .then((res) => {
      dispatch({
        type: GET_TOKENS_SUCCESS,
        payload: { tokenData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TOKENS_ERR,
      });
    });
};

//Add TOken to Exchange
export const addTokenToExchange =
  ({ id }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      is_tradeable: true,
      // is_blocked: false,
    });

    axios
      .put(exchange.ADD_TOKEN_TO_EXCHANGE + `${id}/add`, body, config)
      .then(async (res) => {
        await dispatch({
          type: TOKEN_ADDED_EXCHANGE_SUCCESS,
          payload: id,
        });
        alertToast(false, "Token Added to Exchange, SUCCESSFULLY");
      })
      .catch((err) => {
        dispatch({
          type: TOKEN_ADDED_EXCHANGE_ERR,
        });
        alertToast(
          true,
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
      });
  };

//Get Unhold Tokens List
export const getUnholdTokensList = () => (dispatch) => {
  const status = "unhold";
  axios
    .get(exchange.GET_TOKENS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: GET_UNHOLD_TOKENS_SUCCESS,
        payload: { unholdData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_UNHOLD_TOKENS_ERR,
      });
    });
};

//Get Onhold Tokens List
export const getOnholdTokensList = () => (dispatch) => {
  const status = "onhold";
  axios
    .get(exchange.GET_TOKENS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: GET_ONHOLD_TOKENS_SUCCESS,
        payload: { onholdData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ONHOLD_TOKENS_ERR,
      });
    });
};

// Block/Unblock Token
export const blockUnblockToken =
  ({ id, isBlocked }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      is_blocked: isBlocked,
    });

    axios
      .put(exchange.TOKEN_CRUD + `${id}`, body, config)
      .then(async (res) => {
        if (!isBlocked) {
          await dispatch({
            type: TOKEN_UNBLOCKED_SUCCESS,
            payload: { data: res.data, id },
          });
        } else {
          await dispatch({
            type: TOKEN_BLOCKED_SUCCESS,
            payload: { data: res.data, id },
          });
        }
        alertToast(false, res.data.msg);
      })
      .catch((err) => {
        if (!isBlocked) {
          dispatch({
            type: TOKEN_UNBLOCKED_ERR,
          });
          alertToast(
            true,
            err && err.response && err.response.data && err.response.data.msg
          );
        } else {
          dispatch({
            type: TOKEN_BLOCKED_ERR,
          });
          alertToast(
            true,
            err &&
              err.response &&
              err.response.data &&
              err.response.data.msg &&
              err.response.data.msg
          );
        }
      });
  };

//Get Buy Request List
export const getBuyRequestsList = () => (dispatch) => {
  const orderType = "buy_order";
  const status = "pending";

  axios
    .get(
      exchange.GET_BUY_REQUEST_LIST +
        `?order_type=${orderType}&status=${status}`
    )
    .then((res) => {
      dispatch({
        type: GET_BUY_REQUEST_LIST_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_BUY_REQUEST_LIST_ERR,
      });
    });
};

//Get Sell Request List
export const getSellRequestsList = () => (dispatch) => {
  const orderType = "sell_order";
  const status = "pending";

  axios
    .get(
      exchange.GET_BUY_REQUEST_LIST +
        `?order_type=${orderType}&status=${status}`
    )
    .then((res) => {
      dispatch({
        type: GET_SELL_REQUEST_LIST_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SELL_REQUEST_LIST_ERR,
      });
    });
};

//Get Completed Orders List
export const getCompletedOrdersList = () => (dispatch) => {
  const status = "completed";
  axios
    .get(exchange.GET_BUY_REQUEST_LIST + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: GET_COMPLETED_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_COMPLETED_ORDERS_ERR,
      });
    });
};
