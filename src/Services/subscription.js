import axios from "axios";
import {
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { subscription } from "../Routes/serverRoutes";

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

//Create ITO Subscription
export const createSubscription =
  ({ formData, setFormData, setLoading }) =>
  (dispatch) => {
    const {
      itoName,
      itoSeries,
      tokenName,
      description,
      threshold,
      tokenPrice,
      startDate,
      endDate,
    } = formData;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      ito_name: itoName,
      ito_series: itoSeries,
      ito_token: tokenName,
      description: description,
      threshold: threshold,
      token_price: tokenPrice,
      start_date: startDate,
      end_date: endDate,
    });

    axios
      .post(subscription.CREATE_SUBSCRIPTION, body, config)
      .then(async (res) => {
        await dispatch({
          type: CREATE_SUBSCRIPTION_SUCCESS,
          payload: res.data,
        });
        alertToast(false, "Subscription Created Successfully");
        setFormData({
          itoName: "",
          itoSeries: "",
          tokenName: "",
          description: "",
          threshold: "",
          tokenPrice: "",
          startDate: "",
          endDate: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_SUBSCRIPTION_ERR,
        });
        setLoading(false);

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

// //Get Ongoing TOKENS
// export const getTokensList = () => (dispatch) => {
//   const status = "false";
//   axios
//     .get(exchange.GET_TOKENS + `?is_tradeable=${status}`)
//     .then((res) => {
//       dispatch({
//         type: GET_TOKENS_SUCCESS,
//         payload: { tokenData: res.data },
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: GET_TOKENS_ERR,
//       });
//     });
// };
