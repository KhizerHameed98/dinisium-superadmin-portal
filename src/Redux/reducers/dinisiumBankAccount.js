import {
  ADD_BANK_ACCOUNT_DETAILS_SUCCESS,
  ADD_BANK_ACCOUNT_DETAILS_ERR,
  GET_BANK_ACCOUNT_DETAILS_SUCCESS,
  GET_BANK_ACCOUNT_DETAILS_ERR,
  UPDATE_BANK_ACCOUNT_DETAILS_SUCCESS,
  UPDATE_BANK_ACCOUNT_DETAILS_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  data: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BANK_ACCOUNT_DETAILS_SUCCESS:
    case GET_BANK_ACCOUNT_DETAILS_SUCCESS:
    case UPDATE_BANK_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case GET_BANK_ACCOUNT_DETAILS_ERR:
    case ADD_BANK_ACCOUNT_DETAILS_ERR:
    case UPDATE_BANK_ACCOUNT_DETAILS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
