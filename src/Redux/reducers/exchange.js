import {
  GET_TOKENS_ERR,
  GET_TOKENS_SUCCESS,
  TOKEN_ADDED_EXCHANGE_SUCCESS,
  TOKEN_ADDED_EXCHANGE_ERR,
  GET_ONHOLD_TOKENS_SUCCESS,
  GET_ONHOLD_TOKENS_ERR,
  GET_UNHOLD_TOKENS_SUCCESS,
  GET_UNHOLD_TOKENS_ERR,
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
} from "../actions/types";

const initialState = {
  loading: true,
  tokenData: {},
  unholdData: {},
  onholdData: {},
  buyRequestList: [],
  sellRequestList: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOKENS_SUCCESS:
    case GET_ONHOLD_TOKENS_SUCCESS:
    case GET_UNHOLD_TOKENS_SUCCESS:
    case GET_COMPLETED_ORDERS_SUCCESS:
    case CREATE_TOKENS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case TOKEN_ADDED_EXCHANGE_SUCCESS:
      return {
        ...state,
        tokenData: {
          ...state.tokenData,
          data: state.tokenData.data.filter((item) => item.id !== payload),
        },
        loading: false,
      };

    case TOKEN_UNBLOCKED_SUCCESS:
      return {
        ...state,
        onholdData: {
          ...state.onholdData,
          data: state.onholdData.data.filter((item) => item.id !== payload.id),
        },
        unholdData: {
          ...state.unholdData,
          data: [...state.unholdData.data, payload.data.data],
        },
        loading: false,
      };
    case TOKEN_BLOCKED_SUCCESS:
      return {
        ...state,
        unholdData: {
          ...state.unholdData,
          data: state.unholdData.data.filter((item) => item.id !== payload.id),
        },
        onholdData: {
          ...state.onholdData,
          data: [...state.onholdData.data, payload.data.data],
        },
        loading: false,
      };

    case GET_BUY_REQUEST_LIST_SUCCESS:
      return {
        ...state,
        buyRequestList: payload,
        loading: false,
      };
    case GET_SELL_REQUEST_LIST_SUCCESS:
      return {
        ...state,
        sellRequestList: payload,
        loading: false,
      };

    case GET_TOKENS_ERR:
    case TOKEN_ADDED_EXCHANGE_ERR:
    case GET_UNHOLD_TOKENS_ERR:
    case GET_ONHOLD_TOKENS_ERR:
    case TOKEN_UNBLOCKED_ERR:
    case TOKEN_BLOCKED_ERR:
    case GET_BUY_REQUEST_LIST_ERR:
    case GET_SELL_REQUEST_LIST_ERR:
    case GET_COMPLETED_ORDERS_ERR:
    case CREATE_TOKENS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
