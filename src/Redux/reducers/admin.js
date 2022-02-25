import {
  GET_ADMIN_LIST_SUCCESS,
  GET_ADMIN_LIST_ERR,
  GET_ADMIN_BY_ID_ERR,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_ITO_SUCCESS,
  GET_ADMIN_ITO_ERR,
  ADD_NEW_ADMIN_ERR,
  ADD_NEW_ADMIN_SUCCESS,
  DELETE_ADMIN_ERR,
  DELETE_ADMIN_SUCCESS,
  ADMIN_BLOCK_UNBLOCK_SUCCESS,
  ADMIN_BLOCK_UNBLOCK_ERR,
  ADMIN_LINK_ITO_ERR,
  ADMIN_LINK_ITO_SUCCESS,
  ADMIN_UNLINK_ITO_ERR,
  ADMIN_UNLINK_ITO_SUCCESS,
  ALL_ITO_SUCCESS,
  ALL_ITO_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  adminList: [],
  adminDetails: {},
  adminITOList: [],
  adminLinkITO: {},
  adminUnLinkITO: {},
  adminAvailItoList: [],
  addNewAdmin: {},
  deleteAdmin: {},
  adminBlockUnBlock: {},
  allItos: [],
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_ITO_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case GET_ADMIN_LIST_SUCCESS:
      return {
        ...state,
        adminList: payload,
        loading: false,
      };

    case GET_ADMIN_LIST_ERR:
    case GET_ADMIN_BY_ID_ERR:
    case GET_ADMIN_ITO_ERR:
    case ADD_NEW_ADMIN_ERR:
    case DELETE_ADMIN_ERR:
    case ADMIN_BLOCK_UNBLOCK_ERR:
    case ADMIN_LINK_ITO_ERR:
    case ADMIN_UNLINK_ITO_ERR:
    case ALL_ITO_SUCCESS:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case ADMIN_LINK_ITO_SUCCESS:
      return {
        ...state,
        adminLinkITO: payload,
        loading: false,
      };
    case ADMIN_UNLINK_ITO_SUCCESS:
      return {
        ...state,
        adminUnLinkITO: payload,
        loading: false,
      };

    case GET_ADMIN_BY_ID_SUCCESS:
      return {
        ...state,
        adminDetails: payload,
        loading: false,
      };

    case GET_ADMIN_ITO_SUCCESS:
      return {
        ...state,
        adminITOList: payload,
        loading: false,
      };

    case ADD_NEW_ADMIN_SUCCESS:
      return {
        ...state,
        addNewAdmin: payload,
        loading: false,
      };

    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        adminList: state.adminList.filter((item) => item.id !== payload),
        loading: false,
      };

    case ADMIN_BLOCK_UNBLOCK_SUCCESS:
      return {
        ...state,
        adminBlockUnBlock: payload.response,
        adminList: state.adminList.map((item) =>
          item.id === payload.adminId
            ? // transform the one with a matching id
              { ...item, is_blocked: payload.status }
            : // otherwise return original item
              item
        ),
        loading: false,
      };

    default:
      return state;
  }
};
