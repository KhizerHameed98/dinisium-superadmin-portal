import {
  PENDING_KYC_SUCCESS,
  PENDING_KYC_ERR,
  APPROVED_KYC_SUCCESS,
  APPROVED_KYC_ERR,
  REJECTED_KYC_SUCCESS,
  REJECTED_KYC_ERR,
  GET_KYC_SUCCESS,
  GET_KYC_ERR,
  KYC_UPDATE_SUCCESS,
  KYC_UPDATE_ERR,
  SINGLE_APPROVED_KYC_ERR,
  SINGLE_APPROVED_KYC_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: true,
  singleApprovedData: {},
  pendingData: {},
  approvedData: {},
  rejectedData: {},
  data: {},
  error: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SINGLE_APPROVED_KYC_SUCCESS:
    case PENDING_KYC_SUCCESS:
    case APPROVED_KYC_SUCCESS:
    case REJECTED_KYC_SUCCESS:
    case GET_KYC_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case KYC_UPDATE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          rejection_message: payload.rejectionMessage,
          kyc_status: payload.status,
          verified_by_superadmin: true,
        },
        loading: false,
      };

    case SINGLE_APPROVED_KYC_ERR:
    case PENDING_KYC_ERR:
    case APPROVED_KYC_ERR:
    case REJECTED_KYC_ERR:
    case GET_KYC_ERR:
    case KYC_UPDATE_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
