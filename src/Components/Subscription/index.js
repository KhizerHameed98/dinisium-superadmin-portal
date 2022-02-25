import React, { useState } from "react";
import { connect } from "react-redux";
import { createSubscription } from "../../Redux/actions/actions";

const Subscription = ({ createSubscription }) => {
  const [formData, setFormData] = useState({
    itoName: "",
    itoSeries: "",
    tokenName: "",
    description: "",
    threshold: "",
    tokenPrice: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(false);

  const {
    itoName,
    itoSeries,
    tokenName,
    description,
    tokenPrice,
    threshold,
    startDate,
    endDate,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createSubscription({ formData, setFormData, setLoading });
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <h5>Add New Subscription</h5>
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter ITO Name</label>

                      <input
                        type="text"
                        placeholder="ITO Name"
                        className="form-control"
                        name="itoName"
                        value={itoName}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter ITO Series Name</label>

                      <input
                        type="text"
                        placeholder="ITO Series Name"
                        className="form-control"
                        name="itoSeries"
                        value={itoSeries}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Enter Token Name</label>

                    <input
                      type="text"
                      placeholder="Token Name"
                      className="form-control"
                      name="tokenName"
                      value={tokenName}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Token Price in Dollars</label>

                      <input
                        type="number"
                        placeholder="Enter Token Price in Dollars"
                        className="form-control"
                        name="tokenPrice"
                        value={tokenPrice}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter Start Date</label>

                      <input
                        type="date"
                        placeholder="Enter Start Date"
                        className="form-control"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Enter End Date</label>

                      <input
                        type="date"
                        placeholder="Enter End Date"
                        className="form-control"
                        name="endDate"
                        value={endDate}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Enter Threshold in Tokens</label>

                      <input
                        type="number"
                        placeholder="Enter Threshold in Tokens"
                        className="form-control"
                        name="threshold"
                        value={threshold}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label>Enter Description</label>

                    <textarea
                      placeholder="Enter Description"
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => onChange(e)}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  //   data-toggle="modal"
                  //   data-target="#exampleModalCentered"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  CREATE SUBSCRIPTION
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
  );
};

export default connect(null, { createSubscription })(Subscription);
