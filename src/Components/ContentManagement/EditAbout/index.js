import React, { useState, useEffect } from "react";


import { connect } from "react-redux";
import { updateAboutPage } from "../../../Redux/actions/actions";

const EditAbout = ({ updateAboutPage }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    about: "",
  });
  const { about } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    updateAboutPage({ formData, setFormData, setLoading });
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
                  <div className="col-sm-12 mb-3">
                    <label>Description</label>

                    <textarea
                      rows="6"
                      placeholder="Description"
                      className="form-control"
                      onChange={onChange}
                      name="about"
                      value={about}
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



export default connect(null, { updateAboutPage })(EditAbout);
