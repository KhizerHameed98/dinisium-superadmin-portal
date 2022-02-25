import axios from "axios";
import {
  CREATE_ITO_SUCCESS,
  CREATE_ITO_ERR,
  ONGOING_ITO_SUCCESS,
  ONGOING_ITO_ERR,
  UPCOMING_ITO_SUCCESS,
  UPCOMING_ITO_ERR,
  PAST_ITO_SUCCESS,
  PAST_ITO_ERR,
  GET_ITO_SUCCESS,
  GET_ITO_ERR,
  UPDATE_ITO_SUCCESS,
  UPDATE_ITO_ERR,
  UNASSIGNED_ADMINS_SUCCESS,
  UNASSIGNED_ADMINS_ERR,
} from "../Redux/actions/types";
import Route from "../Constants/browserRoutes";
import { toast } from "react-toastify";
import { ito } from "../Routes/serverRoutes";

//alert tost
const alertToast = (error, message) => {
  if (!error) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

//Get Admins List with No ITO Assigned
export const getUnAssignedAdminsToItos = () => (dispatch) => {
  axios
    .get(ito.GET_ADMIN_WITH_NO_ITO)
    .then((res) => {
      dispatch({
        type: UNASSIGNED_ADMINS_SUCCESS,
        payload: { unAssignedAdmins: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: UNASSIGNED_ADMINS_ERR,
      });
    });
};

//Create ITO success
export const createIto =
  ({ formData, setFormData, setLoading, history }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { name, adminId, startDate, endDate, description } = formData;
    const body = JSON.stringify({
      name,
      adminId,
      description,
      start_date: startDate,
      end_date: endDate,
    });

    axios
      .post(ito.CREATE_ITO, body, config)
      .then(async (res) => {
        await dispatch({
          type: CREATE_ITO_SUCCESS,
          payload: res.data,
        });
        setLoading(false);

        alertToast(false, res.data.msg);
        setFormData({
          name: "",
          startDate: "",
          endDate: "",
          description: "",
          adminId: "",
        });
        history.push(Route.ITO_MANAGEMENT);
      })
      .catch((err) => {
        dispatch({
          type: CREATE_ITO_ERR,
        });
        setLoading(false);

        alertToast(
          true,
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
        setFormData({
          name: "",
          startDate: "",
          endDate: "",
          description: "",
          adminId: "",
        });
      });
  };

//Get Ongoing ITO
export const getOngoingIto = () => (dispatch) => {
  const status = "ongoing";
  axios
    .get(ito.GET_ITO_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: ONGOING_ITO_SUCCESS,
        payload: { ongoingData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: ONGOING_ITO_ERR,
      });
    });
};

//Get Upcoming ITO
export const getUpcomingIto = () => (dispatch) => {
  const status = "upcoming";
  axios
    .get(ito.GET_ITO_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: UPCOMING_ITO_SUCCESS,
        payload: { upcomingData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: UPCOMING_ITO_ERR,
      });
    });
};

//Get Past ITO
export const getPastIto = () => (dispatch) => {
  const status = "closed";
  axios
    .get(ito.GET_ITO_BY_STATUS + `?status=${status}`)
    .then((res) => {
      dispatch({
        type: PAST_ITO_SUCCESS,
        payload: { pastData: res.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: PAST_ITO_ERR,
      });
    });
};

//Get Ito by id
export const getItoById =
  ({ itoId }) =>
  (dispatch) => {
    axios
      .get(ito.GET_ITO_BY_ID + `${itoId}`)
      .then((res) => {
        dispatch({
          type: GET_ITO_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ITO_ERR,
        });
      });
  };

// block/Unblock ITO
export const blockUnblockIto =
  (setShow, setStatus, status, itoId, isBlocked) => (dispatch) => {
    const body = {
      onhold: isBlocked,
    };

    axios
      .put(ito.UPDATE_ITO_BY_ID + itoId, body)
      .then(async (res) => {
        await dispatch({
          type: UPDATE_ITO_SUCCESS,
          payload: { response: res.data, isBlocked: isBlocked },
        });
        setShow(true);
        setStatus(status);
        alertToast(false, res.data.msg);
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ITO_ERR,
        });
        setShow(false);
        let errorMsg =
          (error &&
            error.response &&
            error.response.data &&
            error.response.data.msg &&
            error.response.data.msg) ||
          error.message;
        alertToast(true, errorMsg);
      });
  };
