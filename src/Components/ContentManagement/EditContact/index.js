import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { updateContactPage } from "../../../Redux/actions/actions";

const EditContact = ({ updateContactPage }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    address: "",
    email: "",
  });

  const { email, address } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    updateContactPage({ formData, setFormData, setLoading });
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
                    <label>Email</label>

                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="col-sm-12">
                    <label>address</label>

                    <input
                      placeholder="Address"
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={(e) => onChange(e)}
                      required
                    />
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

export default connect(null, { updateContactPage })(EditContact);
