import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import SignInForm from "./SignInForm";
import logo from "../../../App/Assets/images/danisium-logo-02.png";
import SmsVerificationForm from "./SmsVerificationForm";
import EmailVerificationForm from "./EmailVerificationForm";
import GoogleVerificationForm from "./GoogleVerificationForm";

import { connect, useSelector } from "react-redux";

const SignIn = ({ history }) => {
  const [verificationPage, setVerificationPage] = useState({
    emailPage: false,
    smsPage: false,
    googlePage: false,
  });
  const { emailPage, smsPage, googlePage } = verificationPage;
  const [requestIdSms, setRequestIdSms] = useState(null);
  const [userId, setUserId] = useState(null);

  const auth = useSelector((state) => state.auth.authentication);

  return (
    <Fragment>
      <div
        className="login-pge row m-0"
        style={{ justifyItems: "center", alignItems: "center" }}
      >
        <div className="col-sm-5" style={{ backgroundColor: "#038ff9" }}>
          <div className="logo">
            <img
              className="img2"
              src={logo}
              style={{ width: "300px", height: "100px" }}
              alt="..."
            />
          </div>
        </div>
        <div className="col-sm-7">
          {!emailPage && !smsPage && !googlePage && (
            <SignInForm
              setVerificationPage={setVerificationPage}
              verificationPage={verificationPage}
              setRequestIdSms={setRequestIdSms}
              setUserId={setUserId}
            />
          )}
          {emailPage && !smsPage && !googlePage && (
            <EmailVerificationForm
              setVerificationPage={setVerificationPage}
              verificationPage={verificationPage}
              userId={userId}
              auth={auth}
            />
          )}
          {!emailPage && smsPage && !googlePage && (
            <SmsVerificationForm
              setVerificationPage={setVerificationPage}
              requestIdSms={requestIdSms}
              userId={userId}
              auth={auth}
            />
          )}
          {!emailPage && !smsPage && googlePage && (
            <GoogleVerificationForm
              setVerificationPage={setVerificationPage}
              userId={userId}
              auth={auth}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(SignIn);
