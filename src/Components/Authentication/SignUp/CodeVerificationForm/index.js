import React, { useState } from "react";
import verificationImg from "../../../../App/Assets/images/verification.png";

const CodeVerificationForm = ({ setCodeVerificationPage }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCodeVerificationPage(false);
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
        Enter the Verification code that Send your email
      </p>
      <div className="form-group">
        <label>Enter Code</label>

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
      >
        VERIFY
      </button>
    </form>
  );
};

export default CodeVerificationForm;
