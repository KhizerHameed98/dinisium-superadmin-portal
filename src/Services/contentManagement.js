import axios from "axios";

import {
  UPDATE_HOME_PAGE_SUCCESS,
  UPDATE_HOME_PAGE_ERR,
  UPDATE_ABOUT_PAGE_SUCCESS,
  UPDATE_ABOUT_PAGE_ERR,
  UPDATE_CONTACT_PAGE_SUCCESS,
  UPDATE_CONTACT_PAGE_ERR,
} from "../Redux/actions/types";
import { toast } from "react-toastify";
import { contentManagement } from "../Routes/serverRoutes";

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

// Update home page
export const updateHomePage = ({ data, setFormData, setLoading }) => (
  dispatch
) => {
  axios
    .put(contentManagement.UPDATE_HOME_PAGE, data)
    .then((res) => {
      dispatch({
        type: UPDATE_HOME_PAGE_SUCCESS,
        payload: { updateHome: res && res.data && res.data.data },
      });
      setLoading(false);
      // setFormData({
      //   title: "",
      //   tagline: "",
      //   // logo: {},
      //   // banner: {},
      // });
      toast.info("You successfully updated home info");
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_HOME_PAGE_ERR,
      });
      setLoading(false);
    });
};

// Update about page
export const updateAboutPage = ({ formData, setFormData, setLoading }) => (
  dispatch
) => {
  axios
    .put(contentManagement.UPDATE_ABOUT_PAGE, formData)
    .then((res) => {
      dispatch({
        type: UPDATE_ABOUT_PAGE_SUCCESS,
        payload: { updateAbout: res && res.data && res.data.data },
      });
      setLoading(false);
      setFormData({
        about: "",
      });
      toast.info("You successfully updated about info");
    })

    .catch((error) => {
      dispatch({
        type: UPDATE_ABOUT_PAGE_ERR,
      });
      setLoading(false);
    });
};

// Update contact page
export const updateContactPage = ({ formData, setFormData, setLoading }) => (
  dispatch
) => {
  axios
    .put(contentManagement.UPDATE_CONTACT_PAGE, formData)
    .then((res) => {
      dispatch({
        type: UPDATE_CONTACT_PAGE_SUCCESS,
        payload: { updateContact: res && res.data && res.data.data },
      });
      setLoading(false);
      setFormData({
        address: "",
        email: "",
      });

      toast.info("You successfully updated conatact info");
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_CONTACT_PAGE_ERR,
      });
      setLoading(false);
    });
};
