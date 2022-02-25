import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import {
  addBankAcountDetails,
  updateBankAcountDetails,
} from "../../../Redux/actions/actions";

const UpdateAccountDetails = ({
  addBankAcountDetails,
  updateBankAcountDetails,
}) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    bankName: location?.state?.bankName || "",
    accountTitle: location?.state?.accountTitle || "",
    iban: location?.state?.iban || "",
    swiftCode: location?.state?.swiftCode || "",
    exist: location?.state?.exist,
  });
  
  let history = useHistory();

  const obj = {
    name: location?.state?.bankName.replace(/ /g, ""),
    title: location?.state?.accountTitle.replace(/ /g, ""),
    oldIban: location?.state?.iban.replace(/ /g, ""),
    code: location?.state?.swiftCode.replace(/ /g, ""),
  };

  const { exist, bankName, accountTitle, iban, swiftCode } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      bankName === "" ||
      accountTitle === "" ||
      iban === "" ||
      swiftCode === ""
    ) {
      toast.error("Fill All Fields");
    } else {
      const body = JSON.stringify({
        bank_name: bankName,
        account_title: accountTitle,
        iban,
        swift_code: swiftCode,
      });
      addBankAcountDetails({ body, setLoading });
    }
  };
  const updateHandler = (e) => {
    e.preventDefault();
    if (
      bankName === "" ||
      accountTitle === "" ||
      iban === "" ||
      swiftCode === ""
    ) {
      toast.error("Fill All Fields");
    } else if (
      obj.name === bankName.replace(/ /g, "") &&
      obj.title === accountTitle.replace(/ /g, "") &&
      obj.oldIban === iban.replace(/ /g, "") &&
      obj.code === swiftCode.replace(/ /g, "")
    ) {
      toast.error("No changes made, please update at least one field");
    } else {
      const body = JSON.stringify({
        bank_name: bankName,
        account_title: accountTitle,
        iban,
        swift_code: swiftCode,
      });
      updateBankAcountDetails({ body, setLoading, history });
    }
  };
  console.log("val" , obj.name)
  console.log("valnow" , bankName)
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form">
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Bank Name</label>
                      <input
                        type="text"
                        placeholder="Bank Name"
                        className="form-control"
                        name="bankName"
                        value={bankName}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Account Title</label>
                      <input
                        type="text"
                        placeholder="Account Title"
                        className="form-control"
                        name="accountTitle"
                        value={accountTitle}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label>IBAN</label>
                    <input
                      type="text"
                      placeholder="IBAN"
                      className="form-control"
                      name="iban"
                      value={iban}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Swift Code</label>
                      <input
                        type="text"
                        placeholder="Swift Code"
                        className="form-control"
                        name="swiftCode"
                        value={swiftCode}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  {exist ? (
                    <button
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                      onClick={updateHandler}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}{" "}
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                      onClick={submitHandler}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}{" "}
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- inner row --> */}
    </div>
  );
};
//this is the best acting for developer as I know of and if we want to confirm it from the server we can create a call to the server be
const mpaStateToProps = (state) => ({
  state,
});

export default connect(mpaStateToProps, {
  updateBankAcountDetails,
  addBankAcountDetails,
})(UpdateAccountDetails);
