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
} from "../actions/types";

const initialState = {
  loading: true,
  countElections: "",
  countUsers: "",
  countOrders: "",
  countTokens: "",
  investmentGraphDetail: [],
  usersGraphDetail: [],
  ordersGraphDetail: [],
  error: {},
  errors: [],
  userCount: {},
  ordersCount: {},
  sellCount: {},
  buyCount: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_ELECTIONS_COUNT_SUCCESS:
    case ALL_USERS_COUNT_SUCCESS:
    case ALL_ORDERS_COUNT_SUCCESS:
    case INVESTMENT_PER_MONTH_SUCCESS:
    case USERS_PER_MONTH_SUCCESS:
    case ORDERS_PER_DAY_SUCCESS:
    case ALL_TOKENS_COUNT_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case ALL_ELECTIONS_COUNT_ERR:
    case ALL_USERS_COUNT_ERR:
    case ALL_ORDERS_COUNT_ERR:
    case INVESTMENT_PER_MONTH_ERR:
    case USERS_PER_MONTH_ERR:
    case ORDERS_PER_DAY_ERR:
    case ALL_TOKENS_COUNT_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_USER_COUNT:
      return {
        ...state,
        userCount: payload,
        loading: false,
      };
    case ORDERS_COUNT:
      return {
        ...state,
        ordersCount: payload,
        loading: false,
      };
    case EXCHANGE_SELL_ORDER:
      return {
        ...state,
        sellCount: payload,
        loading: false,
      };
    case EXCHANGE_BUY_ORDER: {
      return {
        ...state,
        buyCount: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
