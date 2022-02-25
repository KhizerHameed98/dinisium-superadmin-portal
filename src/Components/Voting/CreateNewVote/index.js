import React, { useState } from "react";
import { connect } from "react-redux";
import { creatVote } from "../../../Redux/actions/actions";

const CreateNewVote = ({ creatVote, voting: { itoList } }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [selectedITO, setSelectedITO] = useState("");

  const { name, start_date, end_date, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectITO = (e) => {
    setSelectedITO(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      start_date === "" ||
      end_date === "" ||
      selectedITO === "" ||
      description === ""
    ) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      formData.ito_id = selectedITO;
      creatVote({ formData, setFormData, setLoading });
    }
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
                        <label>Election Name</label>

                        <input
                          type="text"
                          placeholder="Enter Election Name"
                          className="form-control"
                          name="name"
                          value={name}
                          onChange={(e) => onChange(e)}
                          required
                        />
                        {error && name === "" ? (
                          <div className="error-msg"> Name is required </div>
                        ) : null}
                      </div>
                    </div>{" "}
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select ITO</label>
                        <select
                          className="custom-select d-inline mb-2 float-right "
                          onChange={handleSelectITO}
                        >
                          <option defaultChecked>Select ITO</option>
                          {itoList.map((ito, index) => (
                            <option value={ito.id}>{ito.name}</option>
                          ))}
                        </select>
                        {error && selectedITO === "" ? (
                          <div className="error-msg"> ITO is required </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Start Date</label>

                      <input
                        type="date"
                        placeholder="Start Date"
                        className="form-control"
                        name="start_date"
                        value={start_date}
                        onChange={(e) => onChange(e)}
                        required
                      />
                      {error && start_date === "" ? (
                        <div className="error-msg">
                          {" "}
                          Start Date is required{" "}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>End Date</label>

                        <input
                          type="date"
                          placeholder="End Date"
                          className="form-control"
                          name="end_date"
                          value={end_date}
                          onChange={(e) => onChange(e)}
                          required
                        />
                        {error && end_date === "" ? (
                          <div className="error-msg">
                            {" "}
                            End Date is required{" "}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label>Description</label>

                      <textarea
                        placeholder="Enter description"
                        className="form-control"
                        name="description"
                        value={description}
                        onChange={(e) => onChange(e)}
                        required
                      ></textarea>

                      {error && description === "" ? (
                        <div className="error-msg">
                          {" "}
                          Description is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <button
                    type="submit"
                    // data-toggle="modal"
                    // data-target="#exampleModalCentered"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}{" "}
                    CREATE ELECTION
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
                          Election create <strong>successfully</strong>
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

const mpaStateToProps = (state) => {
  return {
    voting: state.voting,
  };
};

export default connect(mpaStateToProps, {
  creatVote,
})(CreateNewVote);
