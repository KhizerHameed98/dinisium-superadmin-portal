import React from "react";

const CreateNewSeries = () => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" action="">
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Voting Name</label>

                      <input
                        type="text"
                        placeholder="Add Voting Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>ITO Name</label>

                      <input
                        type="text"
                        placeholder="ITO Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Start Date</label>

                    <input
                      type="text"
                      placeholder="Start Date"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>

                      <input
                        type="text"
                        placeholder="End Date"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label>Description</label>

                    <textarea
                      placeholder="Description"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCentered"
                  className="btn btn-primary btn-lg"
                >
                  CREATE NEW SERIES
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

export default CreateNewSeries;
