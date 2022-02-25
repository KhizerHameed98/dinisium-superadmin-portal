import {
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERR,
  GET_INVESTMENT_DETAIL_SUCCESS,
  GET_INVESTMENT_DETAIL_ERR,
  BLOCK_UNBLOCK_SUCCESS,
  BLOCK_UNBLOCK_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  usersList: [],
  userProfile: {},
  userBlockUnBlock: {},
  investmentDetail: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LIST_SUCCESS:
    case GET_USER_PROFILE_SUCCESS:
    case GET_INVESTMENT_DETAIL_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case BLOCK_UNBLOCK_SUCCESS:
      return {
        ...state,
        userBlockUnBlock: payload.response,
        usersList: state.usersList.map((item) =>
          item.id === payload.userId
            ? // transform the one with a matching id
              { ...item, is_blocked: payload.status }
            : // otherwise return original item
              item
        ),
        loading: false,
      };

    case BLOCK_UNBLOCK_ERR:
    case GET_USERS_LIST_ERR:
    case GET_USER_PROFILE_ERR:
    case GET_INVESTMENT_DETAIL_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
