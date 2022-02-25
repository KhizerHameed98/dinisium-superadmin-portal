import {
  REGISTER_MSG,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  VERIFY_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORGET_SUCCESS,
  FORGET_FAIL,
  FORGET_MSG,
  RESET_SUCCESS,
  RESET_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  ERR_USERS,
  LOGOUT,
  LOGIN_MSG,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERR,
  IS_EMAIL_AUTH_ON_SUCCESS,
  IS_EMAIL_AUTH_ON_ERR,
  IS_GOOGLE_AUTH_ON_SUCCESS,
  IS_GOOGLE_AUTH_ON_ERR,
  IS_SMS_AUTH_ON_SUCCESS,
  IS_SMS_AUTH_ON_ERR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERR,
  SET_AUTH_VERIFICATION,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
  loading: true,
  isAuthenticated: null,
  userDetails: {},
  updatePassword: {},
  users: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_MSG:
    case REGISTER_SUCCESS:
    case FORGET_MSG:
    case FORGET_SUCCESS:
    case RESET_SUCCESS:
    case LOGIN_MSG:

  
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
    case SET_AUTH_VERIFICATION:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case ERR_USERS:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case IS_GOOGLE_AUTH_ON_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          is_google_authentication_on: payload.status,
        },
        loading: false,
      };

    case IS_SMS_AUTH_ON_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          is_number_verification_on: payload.status,
        },
        loading: false,
      };

    case IS_EMAIL_AUTH_ON_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          is_email_verification_on: payload.status,
        },
        loading: false,
      };

    case REGISTER_FAIL:
    case VERIFY_FAIL:
    case FORGET_FAIL:
    case RESET_FAIL:
    case IS_EMAIL_AUTH_ON_ERR:
    case IS_GOOGLE_AUTH_ON_ERR:
    case IS_SMS_AUTH_ON_ERR:
    case UPDATE_PROFILE_ERR:
    case UPDATE_PASSWORD_ERR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.userDetails));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("persist:rootReducer");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        users: [],
      };

    default:
      return state;
  }
};
