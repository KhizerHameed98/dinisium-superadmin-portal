import {
  GET_DEPOSITES_LIST_SUCCESS,
  GET_DEPOSITES_LIST_ERR,
  CONFIRM_DEPOSITE_SUCCESS,
  CONFIRM_DEPOSITE_ERR,
  GET_DEPOSITE_BY_ID_SUCCESS,
  GET_DEPOSITE_BY_ID_ERR,
  GET_ALL_DEPOSITES_LIST_SUCCESS,
  GET_ALL_DEPOSITES_LIST_ERR,
  GET_SINGLE_APPROVED_SUCCESS,
  GET_SINGLE_APPROVED_ERR,
} from "../actions/types";

const initialState = {
  loading: true,

  pendingDepositeList: [],
  allDepositesList: [],
  rejectedDepositesList: [],

  singleApprovedList: [],
  depositeDetails: {},

  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_APPROVED_SUCCESS:
    case GET_DEPOSITES_LIST_SUCCESS:
    case GET_ALL_DEPOSITES_LIST_SUCCESS:
    case GET_DEPOSITE_BY_ID_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case CONFIRM_DEPOSITE_SUCCESS:
      return {
        ...state,
        depositeDetails: { ...state.depositeDetails, status: payload },
        loading: false,
      };

    case GET_DEPOSITES_LIST_ERR:
    case CONFIRM_DEPOSITE_ERR:
    case GET_DEPOSITE_BY_ID_ERR:
    case GET_ALL_DEPOSITES_LIST_ERR:
    case GET_SINGLE_APPROVED_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
