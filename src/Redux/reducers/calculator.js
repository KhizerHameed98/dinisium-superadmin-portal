import { GET_ALL_TOKENS_SUCCESS, GET_ALL_TOKENS_ERR } from "../actions/types";

const initialState = {
  loading: true,
  tokensdata: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TOKENS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_ALL_TOKENS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
