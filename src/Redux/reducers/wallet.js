import {
  GET_TOKEN_LIST_SUCCESS,
  GET_TOKEN_LIST_ERR,
  DEPOSIT_PAYMENT_ERR,
  DEPOSIT_PAYMENT_SUCCESS,
  GET_WALLET_DETAILS_ERR,
  GET_WALLET_DETAILS_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: true,
  depositPayment: {},
  tokenList: [],
  walletDetails: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOKEN_LIST_SUCCESS:
      return {
        ...state,
        tokenList: payload,
        loading: false,
      };
    case GET_WALLET_DETAILS_SUCCESS:
      return {
        ...state,
        walletDetails: payload,
        loading: false,
      };

    case GET_TOKEN_LIST_ERR:
    case DEPOSIT_PAYMENT_ERR:
    case GET_WALLET_DETAILS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DEPOSIT_PAYMENT_SUCCESS:
      return {
        ...state,
        depositPayment: payload,
        loading: false,
      };

    default:
      return state;
  }
};
