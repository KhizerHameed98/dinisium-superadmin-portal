import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import { connect } from "react-redux";
import { updateHomePage } from "../../../Redux/actions/actions";

const EditHome = ({ updateHomePage }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    logo: {},
    background: {},
  });
  const { title, tagline, logo, background } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkMimeType = (event) => {
    let files = event.target.files[0];
    let err = "";
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (types.every((type) => files.type !== type)) {
      err += files.type + " is not a supported format\n";
      toast.error(err, { draggable: true });
    }

    if (err !== "") {
      event.target.value = null;
      return false;
    }
    return true;
  };

  const onLogoFileChange = (e) => {
    if (checkMimeType(e)) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  const onBackgroundFileChange = (e) => {
    if (checkMimeType(e)) {
      setFormData({ ...formData, background: e.target.files[0] });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    var data = new FormData();
    data.append("title", title);
    data.append("tagline", tagline);
    data.append("logo", logo);
    data.append("background", background);

    updateHomePage({ data, setFormData, setLoading });
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-4 mb-5">
                    <div className="d-flex justify-content-start">
                      <div
                        className="form-group upload-input-sty mr-5"
                        // style={{ margin: "auto" }}
                      >
                        {/* <p className="upload-icon">
                            <i className="far fa-image"></i>
                          </p> */}
                        <p className=" ">
                          upload only 200 x 50 pixels size logo
                        </p>
                        <label
                          htmlFor="exampleFormControlFile1"
                          style={{ display: "flex" }}
                        >
                          Upload_website_Logo
                          <i className="fas fa-plus-circle"></i>
                        </label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          onChange={(e) => onLogoFileChange(e)}
                          required
                        />
                        <p className="font-weight-bold pt-2">
                          {logo.name || ""}
                        </p>
                      </div>

                      {/* ////------------------ */}
                      <div
                        className="form-group upload-input-sty"
                        style={{ margin: "auto" }}
                      >
                        <p className=" ">
                          upload only 1583 x 849 pixels size logo
                        </p>
                        <label
                          htmlFor="exampleFormControlFile2"
                          style={{ display: "flex" }}
                        >
                          Upload_background_image{" "}
                          <i className="fas fa-plus-circle"></i>
                        </label>
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile2"
                          onChange={(e) => onBackgroundFileChange(e)}
                          required
                        />
                        <p className="font-weight-bold pt-2">
                          {" "}
                          {background.name || ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 mb-3">
                    <label>Title</label>

                    <textarea
                      placeholder="Title"
                      className="form-control"
                      name="title"
                      value={title}
                      onChange={(e) => onChange(e)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <label>TagLine</label>

                    <textarea
                      placeholder="tagline"
                      className="form-control"
                      name="tagline"
                      value={tagline}
                      onChange={(e) => onChange(e)}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default connect(null, { updateHomePage })(EditHome);
