import axios from "axios";
import {
  REGISTER_MSG,
  REGISTER_FAIL,
  VERIFY_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_MSG,
  LOGIN_MSG_ERR,
  LOGOUT,
  FORGET_MSG,
  FORGET_FAIL,
  FORGET_SUCCESS,
  RESET_SUCCESS,
  RESET_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERR,
  IS_EMAIL_AUTH_ON_SUCCESS,
  IS_EMAIL_AUTH_ON_ERR,
  IS_GOOGLE_AUTH_ON_SUCCESS,
  IS_GOOGLE_AUTH_ON_ERR,
  IS_SMS_AUTH_ON_SUCCESS,
  IS_SMS_AUTH_ON_ERR,
  SET_AUTH_VERIFICATION,
} from "../Redux/actions/types";
import { auth } from "../Routes/serverRoutes";
import Route from "../Constants/browserRoutes";
import setAuthToken from "../utils/setAuthToken";
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

//Load User
export const loadUser = () => (dispatch) => {
  if (localStorage.token) setAuthToken(localStorage.token);
  axios
    .get(auth.LOGGEDIN_USER)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Register User
export const register =
  ({ formData, setOpen, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    axios
      .post(auth.SIGNUP, body, config)
      .then(async (res) => {
        await dispatch({
          type: REGISTER_MSG,
          payload: res.data,
        });
        setOpen(true);
        setLoading(false);
        // dispatch(setAlert(res.data.msg, res.data.alertType));
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAIL,
        });
        // toast.error(err.response.data.msg);
        setLoading(false);
      });
  };

//Verify Email of User by using Verification Token
export const verifyUser =
  ({ verificationToken, email, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ verificationToken, email });
    axios
      .post(auth.VERIFY_USER, body, config)
      .then(async (res) => {
        await dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        // toast.success(res.data.msg);
        history.push(Route.LOGIN_USER);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: VERIFY_FAIL,
        });
        // toast.error(err.response.data.msg);
        setLoading(false);
        // dispatch(setAlert(err.response.data.msg, err.response.data.alertType));
      });
  };

//Login User if there is no authentication
export const login =
  ({
    formData,
    setVerificationPage,
    verificationPage,
    setRequestIdSms,
    history,
    setLoading,
    setUserId,
  }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);

    axios
      .post(auth.LOGIN, body, config)
      .then(async (res) => {
        if (
          res.data &&
          res.data.data &&
          res.data.data.userDetails &&
          res.data.data.userDetails.role !== "super-admin"
        ) {
          toast.error("Invalid Email Address");
          dispatch({
            type: LOGIN_FAIL,
          });
          setLoading(false);
        } else if (res.data && res.data.data && !res.data.data.authentication) {
          await dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.data,
          });
          setLoading(false);

          setUserId(res.data.data.id);
          history.push(Route.DASHBOARD);
          toast.success("Logged In Successfully");
          if (localStorage.token) setAuthToken(localStorage.token);
        } else if (
          res.data &&
          res.data.data &&
          res.data.data.authentication === "email"
        ) {
          await dispatch({
            type: LOGIN_MSG,
            payload: { authentication: res.data.data },
          });
          setVerificationPage({
            emailPage: true,
            smsPage: false,
            googlePage: false,
          });

          setUserId(res.data.data.id);
          toast.success(res.data.msg);
        } else if (
          res.data &&
          res.data.data &&
          res.data.data.authentication === "sms"
        ) {
          await dispatch({
            type: LOGIN_MSG,
            payload: { authentication: res.data.data },
          });

          if (res.data.result && res.data.result.request_id) {
            setRequestIdSms(res.data.result.request_id);
            setVerificationPage({
              emailPage: false,
              smsPage: true,
              googlePage: false,
            });

            setUserId(res.data.data.id);
            toast.success(res.data.msg);
          } else {
            toast.error("Message not sending properly");
            setLoading(false);
          }
        } else if (
          res.data &&
          res.data.data &&
          res.data.data.authentication === "google"
        ) {
          await dispatch({
            type: LOGIN_MSG,
            payload: { authentication: res.data.data },
          });
          setVerificationPage({
            emailPage: false,
            smsPage: false,
            googlePage: true,
          });

          setUserId(res.data.data.id);
          toast.success(res.data.msg);
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        setLoading(false);

        toast.error(
          err && err.response && err.response.data && err.response.data.msg
        );
      });
  };

//Verify Email and then login
export const verifyEmail =
  ({ verificationCode, userId, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ token: verificationCode, id: userId });

    axios
      .post(auth.VERIFY_EMAIL, body, config)
      .then(async (res) => {
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        setLoading(false);
        history.push(Route.DASHBOARD);
        toast.success("Logged In Successfully");
        if (localStorage.token) setAuthToken(localStorage.token);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        setLoading(false);

        toast.error(
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
      });
  };

//Verify SMS and then login
export const verifySms =
  ({ verificationCode, requestIdSms, history, setLoading, userId }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      code: verificationCode,
      requestId: requestIdSms,
      id: userId,
    });

    axios
      .post(auth.VERIFY_SMS, body, config)
      .then(async (res) => {
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        setLoading(false);
        history.push(Route.DASHBOARD);
        toast.success("Logged In Successfully");
        if (localStorage.token) setAuthToken(localStorage.token);
      })
      .catch((err) => {
        setLoading(false);
        dispatch({
          type: LOGIN_FAIL,
        });

        toast.error(
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
      });
  };

//Verify google and then login
export const verifyGoogle =
  ({ verificationCode, userId, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ token: verificationCode, id: userId });

    axios
      .post(auth.VERIFY_GOOGLE, body, config)
      .then(async (res) => {
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        setLoading(false);
        history.push(Route.DASHBOARD);
        toast.success("Logged In Successfully");
        if (localStorage.token) setAuthToken(localStorage.token);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        setLoading(false);
        toast.error(
          err &&
            err.response &&
            err.response.data &&
            err.response.data.msg &&
            err.response.data.msg
        );
      });
  };
//Forget Password
export const forgetPassword =
  ({ email, setOpen, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    axios
      .post(auth.FORGET, body, config)
      .then(async (res) => {
        await dispatch({
          type: FORGET_MSG,
          payload: res.data,
        });
        setOpen(true);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: FORGET_FAIL,
        });
        // toast.error(err.response.data.msg);
        setLoading(false);
        // setAlert(
        //   err.response.data.msg + ": Please try again",
        //   err.response.data.alertType
        // );
      });
  };

//Verify Email of User For Forget Password by using Verification Token
export const verifyForget =
  ({ verificationToken, email, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ verificationToken, email });
    axios
      .post(auth.VERIFY_FORGET, body, config)
      .then(async (res) => {
        await dispatch({
          type: FORGET_SUCCESS,
          payload: res.data,
        });
        history.push(Route.RESET_PASSWORD + `?email=${email}`);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: FORGET_FAIL,
        });
        // toast.error(err.response.data.msg);
        setLoading(false);
        // dispatch(setAlert(err.response.data.msg, err.response.data.alertType));
      });
  };

//Reset Password
export const resetPassword =
  ({ password, email, history, setLoading }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ password, email });

    axios
      .post(auth.UPDATE_PASSWORD, body, config)
      .then(async (res) => {
        await dispatch({
          type: RESET_SUCCESS,
          payload: res.data,
        });
        // toast.success(res.data.msg);
        history.push(Route.LOGIN_USER);
        setLoading(false);
      })
      .catch((err) => {
        dispatch({
          type: RESET_FAIL,
        });
        // toast.error(err.response.data.msg);
        setLoading(false);
        // setAlert(
        //   err.response.data.msg + ": Please try again",
        //   err.response.data.alertType
        // );
      });
  };

// Logout / Clear User
export const logout = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  history.push(Route.SIGNIN);
  // dispatch(setAlert("You have successfully logged out", "success"));
};

// update profile data
export const updateProfile =
  ({ formData, id, setFormData, setLoading }) =>
  (dispatch) => {
    axios
      .put(auth.UPDATE_PROFILE + `/users/${id}`, formData)
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: { userDetails: res.data.data },
          });
          let successMessage = "Profile update successfully";
          alertToast(false, successMessage);
          setFormData({
            fname: "",
            lname: "",
            contact_no: "",
            country: "",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_PROFILE_ERR,
        });
        setLoading(false);
      });
  };

// IS_EMAIL_AUTH_ON User
export const emailAuthentiactionOn =
  (obj, { SetVerifySMS, SetVerifyGoogle, SetVerifyEmail, verifyEmail }) =>
  (dispatch) => {
    axios
      .put(auth.IS_EMAIL_AUTH_ON, obj)
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: IS_EMAIL_AUTH_ON_SUCCESS,
            payload: { status: obj.status },
          });
          let successMessage = (res && res.data.msg) || res.message;
          alertToast(false, successMessage);

          if (verifyEmail) {
            SetVerifyEmail(false);
            SetVerifySMS(false);
            SetVerifyGoogle(false);
          } else {
            SetVerifyEmail(true);
            SetVerifySMS(false);
            SetVerifyGoogle(false);
          }
        }
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
          type: IS_EMAIL_AUTH_ON_ERR,
        });
      });
  };

// IS_GOOGLE_AUTH_ON User
export const googleAuthentiactionOn =
  (
    obj,
    { SetVerifySMS, SetVerifyGoogle, SetVerifyEmail, verifyGoogle },
    setShowGoogleAuthQRcode,
    setGoogleQRcodeUrl
  ) =>
  (dispatch) => {
    let DISABLE_GOOGLE_AUTH = auth.IS_GOOGLE_AUTH_ON;
    let ENABLE_GOOGLE_AUTH = auth.ENABLE_GOOGLE_AUTH;
    let URL = DISABLE_GOOGLE_AUTH;
    let REQUEST_METHOD = "put";
    if (obj.status) {
      URL = ENABLE_GOOGLE_AUTH;
      REQUEST_METHOD = "post";
    } else {
      URL = DISABLE_GOOGLE_AUTH;
      REQUEST_METHOD = "put";
    }

    axios[REQUEST_METHOD](URL, obj)
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: IS_GOOGLE_AUTH_ON_SUCCESS,
            payload: { status: obj.status },
          });
          let successMessage = (res && res.data.msg) || res.message;
          alertToast(false, successMessage);

          if (obj.status) {
            setShowGoogleAuthQRcode(true); // Show QRcode Modal
            setGoogleQRcodeUrl(res.data.dataURL); // Extract QRcode image URL
          } else {
            setShowGoogleAuthQRcode(false);
            setGoogleQRcodeUrl("");
          }

          if (verifyGoogle) {
            SetVerifyGoogle(false);
            SetVerifySMS(false);
            SetVerifyEmail(false);
          } else {
            SetVerifyGoogle(true);
            SetVerifySMS(false);
            SetVerifyEmail(false);
          }
        }
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
          type: IS_GOOGLE_AUTH_ON_ERR,
        });
      });
  };

// IS_SMS_AUTH_ON User
export const smsAuthentiactionOn =
  (obj, { SetVerifySMS, SetVerifyGoogle, SetVerifyEmail, verifySMS }) =>
  (dispatch) => {
    axios
      .put(auth.IS_SMS_AUTH_ON, obj)
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: IS_SMS_AUTH_ON_SUCCESS,
            payload: { status: obj.status },
          });
          let successMessage = (res && res.data.msg) || res.message;
          alertToast(false, successMessage);
          if (verifySMS) {
            SetVerifySMS(false);
            SetVerifyGoogle(false);
            SetVerifyEmail(false);
          } else {
            SetVerifySMS(true);
            SetVerifyGoogle(false);
            SetVerifyEmail(false);
          }
        }
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
          type: IS_SMS_AUTH_ON_ERR,
        });
      });
  };

// Update password
export const updatePassword =
  ({ formData, setFormData, setLoading, setShow }) =>
  (dispatch) => {
    axios
      .put(auth.UPDATE_PASSWORD, formData)
      .then(async (res) => {
        if (res.status === 200) {
          await dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: { updatePassword: res.data.data },
          });
          let successMessage = (res && res.data.msg) || res.message;
          alertToast(false, successMessage);
          setFormData({
            currentPassword: "",
            Password: "",
          });
          setLoading(false);
          setShow(false);
        }
      })
      .catch((err) => {
        // doing mapping because the erro rreceiving from backend is in array
        let message = err?.response?.data?.msg?.map((item) => item.msg);
        // destructing that Array
        const [error] = message;
        alertToast(true, error);
        dispatch({
          type: UPDATE_PASSWORD_ERR,
        });
        setLoading(false);
        setShow(false);
      });
  };
