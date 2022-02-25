import React, { useEffect, useState } from "react";

import SubmitConfirmationModal from "./SubmitConfirmationModal";

import { connect } from "react-redux";
import { depositPayment } from "../../../Redux/actions/actions";

const BankPayment = ({ depositPayment }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bank_draft, setBank_draft] = useState("");
  const [depositForm, setDepositForm] = useState({
    country: "",
    swift: "",
    bank_name: "",
    account_no: "",
    account_name: "",
    from_account: "",
    currency: "",
    transfer_amount: "",
    transfer_fee: "",
    total_amount: "",
  });

  const onChange = (e) => {
    setDepositForm({ ...depositForm, [e.target.name]: e.target.value });
  };
  const onFileChange = (event) => {
    setBank_draft(event.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      bank_draft === "" ||
      depositForm.total_amount === "" ||
      depositForm.transfer_fee === "" ||
      depositForm.transfer_amount === "" ||
      depositForm.currency === "" ||
      depositForm.from_account === "" ||
      depositForm.account_name === "" ||
      depositForm.bank_name === "" ||
      depositForm.swift === "" ||
      depositForm.country === ""
    ) {
      setError(true);
    } else {
      setError(false);

      const formData = new FormData();

      // Update the formData object
      formData.append("bank_draft", bank_draft, bank_draft.name);
      formData.append("country", depositForm.country);
      formData.append("swift", depositForm.swift);
      formData.append("bank_name", depositForm.bank_name);
      formData.append("account_no", depositForm.account_no);
      formData.append("account_name", depositForm.account_name);
      formData.append("from_account", depositForm.from_account);
      formData.append("currency", depositForm.currency);
      formData.append("transfer_amount", depositForm.transfer_amount);
      formData.append("transfer_fee", depositForm.transfer_fee);
      formData.append("total_amount", depositForm.total_amount);

      // Details of the uploaded file
      setLoading(true);
      depositPayment({ formData, setDepositForm, setBank_draft, setLoading });
          }
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4 mt-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Country</label>
                      <input
                        type="text"
                        placeholder="Country"
                        className="form-control py-4"
                        name="country"
                        value={depositForm.country}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.country === "" ? (
                        <div className="error-msg"> Country is required </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">SWIFT</label>
                      <input
                        type="text"
                        placeholder="SWIFT"
                        className="form-control py-4"
                        name="swift"
                        value={depositForm.swift}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.swift === "" ? (
                        <div className="error-msg"> SWIFT is required </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Bank/Branch Name</label>

                      <input
                        type="text"
                        placeholder="Bank/Branch Name"
                        className="form-control py-4"
                        name="bank_name"
                        value={depositForm.bank_name}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.bank_name === "" ? (
                        <div className="error-msg">
                          {" "}
                          Bank/Branch Name is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Account Number</label>
                      <input
                        type="text"
                        placeholder="Account Number"
                        className="form-control py-4"
                        name="account_no"
                        value={depositForm.account_no}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.account_no === "" ? (
                        <div className="error-msg">
                          {" "}
                          Account Number is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Account Name</label>

                      <input
                        type="text"
                        placeholder="Account Name"
                        className="form-control py-4"
                        name="account_name"
                        value={depositForm.account_name}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.account_name === "" ? (
                        <div className="error-msg">
                          {" "}
                          Account Name is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">From Account Number</label>

                      <input
                        type="text"
                        placeholder="From Account Number"
                        className="form-control py-4"
                        name="from_account"
                        value={depositForm.from_account}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.from_account === "" ? (
                        <div className="error-msg">
                          {" "}
                          From Account Number is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Transfer Currency</label>
                      <input
                        type="text"
                        placeholder="Transfer Currency"
                        className="form-control py-4"
                        name="currency"
                        value={depositForm.currency}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.currency === "" ? (
                        <div className="error-msg">
                          {" "}
                          Transfer Currency is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Transfer Amount</label>
                      <input
                        type="number"
                        placeholder="Transfer Amount"
                        className="form-control py-4"
                        name="transfer_amount"
                        value={depositForm.transfer_amount}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.transfer_amount === "" ? (
                        <div className="error-msg">
                          {" "}
                          Transfer Amount is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Transfer Fee</label>
                      <input
                        type="number"
                        placeholder="Transfer Fee"
                        className="form-control py-4"
                        name="transfer_fee"
                        value={depositForm.transfer_fee}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.transfer_fee === "" ? (
                        <div className="error-msg">
                          {" "}
                          Transfer Feeis required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="">Total Amount</label>

                      <input
                        type="number"
                        placeholder="Total Amount"
                        className="form-control py-4"
                        name="total_amount"
                        value={depositForm.total_amount}
                        onChange={onChange}
                        required
                      />
                      {error && depositForm.total_amount === "" ? (
                        <div className="error-msg">
                          {" "}
                          Total Amount is required{" "}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-4">
                        <div
                          className="form-group upload-input-sty"
                          style={{ margin: "auto" }}
                        >
                          {/* <p className="upload-icon">
                            <i className="far fa-image"></i>
                          </p> */}
                          <label htmlFor="exampleFormControlFile1">
                            Upload Bank Draft
                            <i className="fas fa-plus-circle"></i>
                          </label>
                          <input
                            type="file"
                            onChange={onFileChange}
                            className="form-control-file"
                            id="exampleFormControlFile1"
                          />
                        </div>
                        <p className="font-weight-bold ml-3 mt-2">
                          {" "}
                          {bank_draft.name || ""}
                        </p>
                        {error && bank_draft === "" ? (
                          <div className="error-msg">
                            {" "}
                            Bank Draft is required{" "}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 text-center mt-3">
                    <button
                      type="submit"
                      // data-toggle="modal"
                      // data-target="#exampleModalCentered"
                      className="btn btn-dark w-25 btn-lg"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}{" "}
                      SUBMIT
                    </button>
                  </div>
                  {/* <!-- Modal --> */}
                  {/* <SubmitConfirmationModal /> */}

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
                            Payment details submitted{" "}
                            <strong>successfully</strong>
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary w-25 btn-md"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            OK
                          </button>
                        </div>
                        <div className="modal-footer border-0"></div>
                      </div>
                    </div>
                  </div>
                  {/* <!--end Modal --> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default connect(null, { depositPayment })(BankPayment);
