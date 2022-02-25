import axios from "axios";
import {
  ALL_ELECTIONS_COUNT_SUCCESS,
  ALL_ELECTIONS_COUNT_ERR,
  ALL_USERS_COUNT_SUCCESS,
  ALL_USERS_COUNT_ERR,
  ALL_ORDERS_COUNT_SUCCESS,
  ALL_ORDERS_COUNT_ERR,
  INVESTMENT_PER_MONTH_SUCCESS,
  INVESTMENT_PER_MONTH_ERR,
  USERS_PER_MONTH_SUCCESS,
  USERS_PER_MONTH_ERR,
  ORDERS_PER_DAY_SUCCESS,
  ORDERS_PER_DAY_ERR,
  ALL_TOKENS_COUNT_SUCCESS,
  ALL_TOKENS_COUNT_ERR,
  GET_USER_COUNT,
  ORDERS_COUNT,
  EXCHANGE_SELL_ORDER,
  EXCHANGE_BUY_ORDER,
} from "../Redux/actions/types";
import { dashboard } from "../Routes/serverRoutes";
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

//Count ALl Elections
export const countAllElections = () => (dispatch) => {
  axios
    .get(dashboard.ALL_ELECTIONS_COUNT)
    .then((res) => {
      dispatch({
        type: ALL_ELECTIONS_COUNT_SUCCESS,
        payload: { countElections: res.data.count },
      });
    })
    .catch((err) => {
      dispatch({
        type: ALL_ELECTIONS_COUNT_ERR,
      });
    });
};

//Count ALL Registered Users
export const countAllRegisteredUsers = () => (dispatch) => {
  axios
    .get(dashboard.ALL_USERS_COUNT)
    .then((res) => {
      dispatch({
        type: ALL_USERS_COUNT_SUCCESS,
        payload: { countUsers: res.data.count },
      });
    })
    .catch((err) => {
      dispatch({
        type: ALL_USERS_COUNT_ERR,
      });
    });
};

//Count All Tokens
export const countAllTokens = () => (dispatch) => {
  axios
    .get(dashboard.ALL_TOKENS_COUNT)
    .then((res) => {
      dispatch({
        type: ALL_TOKENS_COUNT_SUCCESS,
        payload: { countTokens: res.data.data.count },
      });
    })
    .catch((err) => {
      dispatch({
        type: ALL_TOKENS_COUNT_ERR,
      });
    });
};

//Count ALL Exchnage Orders
export const countAllExchangeOrders = () => (dispatch) => {
  axios
    .get(dashboard.ALL_ORDERS_COUNT)
    .then((res) => {
      dispatch({
        type: ALL_ORDERS_COUNT_SUCCESS,
        payload: { countOrders: res.data.count },
      });
    })
    .catch((err) => {
      dispatch({
        type: ALL_ORDERS_COUNT_ERR,
      });
    });
};

//COunt All Investment Per Month
export const countInvestmentPerMonth = () => (dispatch) => {
  axios
    .get(dashboard.ALL_INVESTMENT_PER_MONTH)
    .then((res) => {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let data = res.data.data.reduce((acc, current) => {
        let monthIndex = new Date(current.investment_to_month).getMonth();
        let currentMonth = months[monthIndex];
        let currentYear = new Date(current.investment_to_month).getFullYear();
        let investment_to_month = `${currentMonth}-${currentYear}`;
        acc.push({
          investment_to_month: investment_to_month,
          Investment: current.investment,
        });
        return acc;
      }, []);
      dispatch({
        type: INVESTMENT_PER_MONTH_SUCCESS,
        payload: { investmentGraphDetail: data },
      });
    })
    .catch((err) => {
      dispatch({
        type: INVESTMENT_PER_MONTH_ERR,
      });
    });
};

//Count ALL Registered Users Per Month
export const countRegiteredUsersPerMonth = () => (dispatch) => {
  axios
    .get(dashboard.ALL_REGISTERED_USERS_PER_MONTH)
    .then((res) => {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let data = res.data.data.reduce((acc, current) => {
        let monthIndex = new Date(current.register_to_month).getMonth();
        let currentMonth = months[monthIndex];
        let currentYear = new Date(current.register_to_month).getFullYear();
        let register_to_month = `${currentMonth}-${currentYear}`;
        acc.push({
          register_to_month: register_to_month,
          No_Of_Users: current.count,
        });
        return acc;
      }, []);
      dispatch({
        type: USERS_PER_MONTH_SUCCESS,
        payload: { usersGraphDetail: data },
      });
    })
    .catch((err) => {
      dispatch({
        type: USERS_PER_MONTH_ERR,
      });
    });
};

//Count ALL Exchnage Orders Per day
export const countExchangeOrdersPerDay = () => (dispatch) => {
  axios
    .get(dashboard.ALL_ORDERS_PER_DAY)
    .then((res) => {
      let data = res.data.data.reduce((acc, current) => {
        let currentDate = new Date(current.exchange_to_day).getDate();
        let currentMonth = new Date(current.exchange_to_day).getMonth() + 1; // months start from 0,1,2 to 11
        let currentYear = new Date(current.exchange_to_day).getFullYear();
        let exchange_to_date = `${currentMonth}-${currentDate}-${currentYear}`;
        acc.push({
          exchange_to_day: exchange_to_date,
          buy_orders: current.count_buy,
          sell_orders: current.count_sell,
        });
        return acc;
      }, []);
      dispatch({
        type: ORDERS_PER_DAY_SUCCESS,
        payload: { ordersGraphDetail: data },
      });
    })
    .catch((err) => {
      dispatch({
        type: ORDERS_PER_DAY_ERR,
      });
    });
};

export const getUserCount = (text) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(dashboard.USER_COUNT + `${text}`);
      dispatch({
        type: GET_USER_COUNT,
        payload: data.data,
      });
    } catch (err) {
      alertToast(true, err?.res);
    }
  };
};

export const getOrdersCount = (text) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(dashboard.ORDERS_COUNT + `${text}`);
      dispatch({
        type: ORDERS_COUNT,
        payload: data.data,
      });
      if (data?.data?.msg === "No record found.") {
        alertToast(true, data?.data?.msg);
      }
    } catch (err) {
      alertToast(true, err?.res?.msg);
    }
  };
};

export const sellCount = (text) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(dashboard.EXCHANGE_SELL_ORDER + `${text}`);
      dispatch({
        type: EXCHANGE_SELL_ORDER,
        payload: data.data,
      });
    } catch (err) {
      alertToast(true, err?.res?.msg);
    }
  };
};

export const buyCount = (text) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(dashboard.EXCHANGE_BUY_ORDER + `${text}`);
      dispatch({
        type: EXCHANGE_BUY_ORDER,
        payload: data.data,
      });
      if (data?.data?.msg === "No record found.") {
        alertToast(true, data?.data?.msg);
      }
    } catch (err) {
      alertToast(true, err?.res?.msg);
    }
  };
};
