import {
  CREATE_ITO_ERR,
  CREATE_ITO_SUCCESS,
  GET_ITO_ERR,
  GET_ITO_SUCCESS,
  ONGOING_ITO_ERR,
  ONGOING_ITO_SUCCESS,
  PAST_ITO_ERR,
  PAST_ITO_SUCCESS,
  UPCOMING_ITO_ERR,
  UPCOMING_ITO_SUCCESS,
  UPDATE_ITO_SUCCESS,
  UPDATE_ITO_ERR,
  UNASSIGNED_ADMINS_SUCCESS,
  UNASSIGNED_ADMINS_ERR,
} from "../actions/types";

const initialState = {
  loading: true,
  unAssignedAdmins: [],
  ongoingData: {},
  upcomingData: {},
  pastData: {},
  data: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UNASSIGNED_ADMINS_SUCCESS:
    case CREATE_ITO_SUCCESS:
    case ONGOING_ITO_SUCCESS:
    case UPCOMING_ITO_SUCCESS:
    case PAST_ITO_SUCCESS:
    case GET_ITO_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case UPDATE_ITO_SUCCESS:
      return {
        ...state,
        data: { ...state.data, onhold: payload.isBlocked },
        loading: false,
      };

    case UNASSIGNED_ADMINS_ERR:
    case CREATE_ITO_ERR:
    case ONGOING_ITO_ERR:
    case UPCOMING_ITO_ERR:
    case PAST_ITO_ERR:
    case GET_ITO_ERR:
    case UPDATE_ITO_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
