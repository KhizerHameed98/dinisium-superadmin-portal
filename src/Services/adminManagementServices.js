import axios from "axios";

import {
  GET_ADMIN_LIST_SUCCESS,
  GET_ADMIN_LIST_ERR,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_ERR,
  GET_ADMIN_ITO_ERR,
  GET_ADMIN_ITO_SUCCESS,
  ADD_NEW_ADMIN_ERR,
  ADD_NEW_ADMIN_SUCCESS,
  ADMIN_LINK_ITO_SUCCESS,
  ADMIN_LINK_ITO_ERR,
  ADMIN_UNLINK_ITO_SUCCESS,
  ADMIN_UNLINK_ITO_ERR,
  DELETE_ADMIN_ERR,
  DELETE_ADMIN_SUCCESS,
  ADMIN_BLOCK_UNBLOCK_SUCCESS,
  ADMIN_BLOCK_UNBLOCK_ERR,
  ALL_ITO_SUCCESS,
  ALL_ITO_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { admin, ito } from "../Routes/serverRoutes";

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

//Get admins List
export const getAdminsList = (itoId) => (dispatch) => {
  let URL = "";
  if (itoId === "") {
    URL = admin.GET_ADMIN_LIST;
  } else {
    URL = admin.GET_ADMIN_LIST + `?ito_id=${itoId}`;
  }
  axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: GET_ADMIN_LIST_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      if (
        error &&
        error.response &&
        error.response.status &&
        error.response.status === 400
      ) {
        dispatch({
          type: GET_ADMIN_LIST_SUCCESS,
          payload: error && error.response && error.response.data,
        });
      } else {
        dispatch({
          type: GET_ADMIN_LIST_ERR,
        });
      }
    });
};

//Get admin by Id
export const getAdminsById = (id) => (dispatch) => {
  axios
    .get(admin.GET_ADMIN_BY_ID + `/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ADMIN_BY_ID_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ADMIN_BY_ID_ERR,
      });
    });
};

//Get getAdmin ITO
export const getAvailableITO = (id) => (dispatch) => {
  axios
    .get(admin.GET_AVAILABLE_ITO + `${id}/ito/tolink`)
    .then((res) => {
      dispatch({
        type: GET_ADMIN_ITO_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ADMIN_ITO_ERR,
      });
    });
};

//Get All ITOs
export const getAllItos = () => (dispatch) => {
  axios
    .get(admin.GET_ALL_ITOS)
    .then((res) => {
      dispatch({
        type: ALL_ITO_SUCCESS,
        payload: { allItos: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: ALL_ITO_ERR,
      });
    });
};

//Add new admin
export const addNewAdmin =
  ({ formData, setFormData, setLoading }) =>
  (dispatch) => {
    axios
      .post(admin.ADD_NEW_ADMIN, formData)
      .then((res) => {
        dispatch({
          type: ADD_NEW_ADMIN_SUCCESS,
          payload: res.data.data,
        });
        // let successMessage = (res.data && res.data.data.msg) || res.message;
        alertToast(false, res?.data?.msg);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          contact_no: "",
          country: "",
          address: "",
          role: "admin",
        });
        setLoading(false);
      })
      .catch((error) => {
        let errorMessage = error?.response?.data?.msg || error.message;
        alertToast(true, errorMessage);
        dispatch({
          type: ADD_NEW_ADMIN_ERR,
        });
        setLoading(false);
      });
  };

//delete admin
export const deleteAdmin = (id) => (dispatch) => {
  axios
    .delete(admin.DELETE_ADMIN + `/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ADMIN_SUCCESS,
        payload: id,
      });
      let successMessage = (res && res.data.msg) || res.message;
      alertToast(false, successMessage);
    })
    .catch((error) => {
      let errorMessage =
        (error &&
          error.response &&
          error.response.data &&
          error.response.data.msg &&
          error.response.data.msg) ||
        error.message;
      alertToast(true, errorMessage);
      dispatch({
        type: DELETE_ADMIN_ERR,
      });
    });
};

// Block and unBlock admin
export const adminBlockUnBlock =
  ({ id, value }) =>
  (dispatch) => {
    let obj = {
      status: value ? false : true,
    };
    axios
      .put(admin.ADMIN_BLOCK_UNBLOCK + `${id}`, obj)
      .then((res) => {
        dispatch({
          type: ADMIN_BLOCK_UNBLOCK_SUCCESS,
          payload: {
            response: res.data.message,
            adminId: id,
            status: obj.status,
          },
        });
        let successMessage = (res && res.data.message) || res.message;
        alertToast(false, successMessage);
      })
      .catch((err) => {
        dispatch({
          type: ADMIN_BLOCK_UNBLOCK_ERR,
        });
        let errorMessage =
          err &&
          err.response &&
          err.response.data &&
          err.response.data.msg &&
          err.response.data.msg;
        alertToast(true, errorMessage);
      });
  };

// Add admin linking ito
export const adminLinkITO =
  ({ admin_id, selectITO, success, setSuccess, setLoading }) =>
  (dispatch) => {
    axios
      .post(admin.ADMIN_LINK_ITO + `${admin_id}/ito/tolinkWith/${selectITO}`)
      .then((res) => {
        dispatch({
          type: ADMIN_LINK_ITO_SUCCESS,
          payload: res.data.data,
        });
        let successMessage = (res && res.data.msg) || res.message;
        alertToast(false, successMessage);
        setSuccess(!success);
        setLoading(false);
      })
      .catch((error) => {
        let errorMessage = error?.response?.data?.msg || error.message;
        alertToast(true, errorMessage);
        dispatch({
          type: ADMIN_LINK_ITO_ERR,
        });
        setLoading(false);
      });
  };

// Unlinking Ito To admin
export const adminUnLinkITO =
  ({ admin_id, unLinkITOid, success, setSuccess, setLoading }) =>
  (dispatch) => {
    axios
      .delete(admin.ADMIN_UNLINK_ITO + `${admin_id}/ito/tolink/${unLinkITOid}`)
      .then((res) => {
        dispatch({
          type: ADMIN_UNLINK_ITO_SUCCESS,
          payload: res.data.data,
        });
        setSuccess(!success);
        setLoading(false);
        alertToast(false, res?.data?.msg);
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_UNLINK_ITO_ERR,
        });
        setLoading(false);
        alertToast(true, error?.response?.data?.msg);
      });
  };
