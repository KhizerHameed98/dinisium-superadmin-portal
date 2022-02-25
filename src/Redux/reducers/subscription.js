import {
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case CREATE_SUBSCRIPTION_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
