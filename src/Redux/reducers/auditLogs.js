import { GET_AUDIT_LOGS_SUCCESS, GET_AUDIT_LOGS_ERR } from "../actions/types";

const initialState = {
  loading: true,
  auditLogList: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUDIT_LOGS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_AUDIT_LOGS_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
