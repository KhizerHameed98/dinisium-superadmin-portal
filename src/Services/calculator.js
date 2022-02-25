import axios from "axios";
import {
  GET_ALL_TOKENS_SUCCESS,
  GET_ALL_TOKENS_ERR,
} from "../Redux/actions/types";
import { exchange } from "../Routes/serverRoutes";
import { toast } from "react-toastify";

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

//Get All Tokens List
export const getAllTokensList = () => (dispatch) => {
  axios
    .get(exchange.GET_TOKENS)
    .then((res) => {
      dispatch({
        type: GET_ALL_TOKENS_SUCCESS,
        payload: { tokensdata: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_TOKENS_ERR,
      });
    });
};
