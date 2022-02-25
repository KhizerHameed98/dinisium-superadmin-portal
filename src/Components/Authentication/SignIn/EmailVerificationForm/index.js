import React, { useState } from "react";
import verificationImg from "../../../../App/Assets/images/verification.png";
import { verifyEmail } from "../../../../Redux/actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const EmailVerificationForm = ({
  setVerificationPage,
  verifyEmail,
  userId,
  auth,
}) => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const [verificationCode, setVerificationCode] = useState("");

  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    verifyEmail({ verificationCode, userId, history, setLoading });
    // setVerificationPage({ emailPage: false, smsPage: true, googlePage: false });
  };

  return (
    <form className="form" action="" onSubmit={onSubmit}>
      <h3 className="h3">2-Step Verification</h3>
      <p>
        {" "}
        <img
          src={verificationImg}
          style={{ width: "25px", height: "25px" }}
          alt="..."
        />{" "}
        {/* Enter the Verification code that Send your email */}
        {`Enter the Verification code Send through this ${
          auth.email && auth.email
        }`}
      </p>
      <div className="form-group">
        <label> Code</label>

        <input
          type="text"
          placeholder="Enter Code"
          className="form-control"
          name="verificationCode"
          value={verificationCode}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button
        style={{ marginBottom: "20px" }}
        type="submit"
        className="btn btn-outline-primary"
        disabled={loading}
      >
        {loading && <span className="spinner-border spinner-border-sm"></span>}{" "}
        VERIFY
      </button>
    </form>
  );
};

export default connect(null, { verifyEmail })(EmailVerificationForm);
