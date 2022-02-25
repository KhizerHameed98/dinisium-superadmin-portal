import {
  UPDATE_HOME_PAGE_SUCCESS,
  UPDATE_HOME_PAGE_ERR,
  UPDATE_ABOUT_PAGE_SUCCESS,
  UPDATE_ABOUT_PAGE_ERR,
  UPDATE_CONTACT_PAGE_SUCCESS,
  UPDATE_CONTACT_PAGE_ERR,
} from "../actions/types";

const initialState = {
  updateHome: {},
  updateAbout: {},
  updateContact: {},

  loading: true,
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_HOME_PAGE_SUCCESS:
    case UPDATE_ABOUT_PAGE_SUCCESS:
    case UPDATE_CONTACT_PAGE_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case UPDATE_HOME_PAGE_ERR:
    case UPDATE_ABOUT_PAGE_ERR:
    case UPDATE_CONTACT_PAGE_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
