import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addNewAdmin } from "../../../Redux/actions/actions";

const AddNewAdmin = ({ addNewAdmin, ...otherProps }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact_no: "",
    country: "",
    address: "",
    role: "admin",
  });
  useEffect(() => {
    console.log(formData);
    checkDisable();
  }, [formData]);
  const onChange = (e) => {
    let alpha = e.target.value.replace(/[^A-Za-z ]*$/gm, "");

    if (
      e.target.name === "fname" ||
      e.target.name === "lname" ||
      e.target.name === "country"
    ) {
      setFormData({
        ...formData,

        [e.target.name]: alpha,
      });
    } else {
      setFormData({
        ...formData,

        [e.target.name]: e.target.value,
      });
    }
  };
  const checkDisable = () => {
    const { fname, lname, email, contact_no, country, address } = formData;
    console.log(formData);
    if (
      fname !== "" &&
      lname !== "" &&
      email !== "" &&
      contact_no !== "" &&
      country !== "" &&
      address !== ""
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // if (
    //   (formData.fname && !isNaN(parseInt(formData.fname, 10))) ||
    //   (formData.lname && !isNaN(parseInt(formData.lname, 10))) ||
    //   (formData.contact_no && formData.contact_no.length != 11)
    // ) {
    //   return setError(true);
    // }

    setError(false);
    setLoading(true);
    addNewAdmin({ formData, setFormData, setLoading });
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body p-5">
                <form className="form" onSubmit={onSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="First Name*"
                          className="form-control"
                          name="fname"
                          value={formData.fname}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder="Last Name*"
                          className="form-control"
                          name="lname"
                          value={formData.lname}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Contact</label>
                      <input
                        className="form-control"
                        type="tel"
                        id="mobile-number"
                        name="contact_no"
                        placeholder="0300xxxxxxx"
                        pattern="[0-9]{4}[0-9]{7}"
                        value={formData.contact_no}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Email*"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          type="text"
                          placeholder="Country*"
                          className="form-control"
                          name="country"
                          value={formData.country}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          placeholder="Address*"
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg "
                    disabled={disable}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}{" "}
                    ADD ADMIN
                  </button>
                </form>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade bd-example-modal-sm"
                  id="exampleModalCentered"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenteredLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-sm modal-sm-cu modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span className="font-18" aria-hidden="true">
                            &times;
                          </span>
                        </button>
                      </div>
                      <div className="modal-body text-center ">
                        <p>
                          Vote create <strong>successfully</strong>
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary w-25 btn-md"
                        >
                          Ok
                        </button>
                      </div>
                      <div className="modal-footer border-0"></div>
                    </div>
                  </div>
                </div>
                {/* <!--end Modal --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mpaStateToProps = (state) => ({});

export default connect(mpaStateToProps, { addNewAdmin })(AddNewAdmin);
