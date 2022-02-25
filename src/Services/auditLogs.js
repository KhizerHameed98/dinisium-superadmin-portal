import axios from "axios";
import {
  GET_AUDIT_LOGS_SUCCESS,
  GET_AUDIT_LOGS_ERR,
} from "../Redux/actions/types";
import { auditLogs } from "../Routes/serverRoutes";
import { toast } from "react-toastify";

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

//getAuditLogsList
export const getAuditLogsList = () => (dispatch) => {
  axios
    .get(auditLogs.GET_ADUDIT_LOGS)
    .then((res) => {
      dispatch({
        type: GET_AUDIT_LOGS_SUCCESS,
        payload: { auditLogList: res.data.data },
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_AUDIT_LOGS_ERR,
      });
    });
};
