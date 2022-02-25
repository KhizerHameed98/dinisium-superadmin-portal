import React, { useState, useEffect } from "react";
import Route from "../../Constants/browserRoutes";
import image from "../../App/Assets/images/avatar.png";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addBankAcountDetails,
  getBankAccount,
} from "../../Redux/actions/actions";

import {
  emailAuthentiactionOn,
  smsAuthentiactionOn,
  googleAuthentiactionOn,
  updatePassword,
} from "../../Redux/actions/actions";

const Account = ({
  emailAuthentiactionOn,
  smsAuthentiactionOn,
  googleAuthentiactionOn,
  updatePassword,
}) => {
  const denisiumBankDetails = useSelector(
    (state) => state?.dinisiumBankAccount?.data?.data?.data
  );

  console.log(denisiumBankDetails);
  const dispatch = useDispatch();

  const [accountExists, setAccountExists] = useState(false);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    dispatch(getBankAccount({ setAccountExists }));
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card pu-rel p-5 mb-3">
            <div className="row">
            
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Bank Name</span>
                      <span>
                        {denisiumBankDetails?.bank_name || ""}
                        {/* Meezan Bank Ltd */}
                      </span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Account Title</span>
                      <span> {denisiumBankDetails?.account_title || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>IBAN</span>
                      <span>
                        {denisiumBankDetails?.iban || ""}
                        {/* AL47 2121 1009 0000 */}
                      </span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Swift Code</span>
                      <span>
                        {denisiumBankDetails?.swift_code || ""}
                        {/* AL47 */}
                      </span>
                    </li>
                  </ul>

                  <div className="d-flex justify-content-center">
                    <Link
                      className="btn btn-secondary btn-sm mt-5"
                      to={{
                        pathname: Route.BANK_ACCOUNT_UPDATE,
                        state: {
                          exist: true,
                          bankName: denisiumBankDetails?.bank_name,
                          accountTitle: denisiumBankDetails?.account_title,
                          iban: denisiumBankDetails?.iban,
                          swiftCode: denisiumBankDetails?.swift_code,
                        },
                      }}
                    >
                      Update Bank Account
                    </Link>
                  </div>
                </div>
        
              {/* {!accountExists && ( */}
                {/* <div className="col-12 col-md-12">
                  <div className="d-flex justify-content-center">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h5 style={{ color: "red" }}>
                        No account has been added yet, please add an account.
                      </h5>
                     
                      <Link
                        style={{ width: "30%", alignSelf: "center" }}
                        className="btn btn-secondary btn-sm mt-5"
                        to={{
                          pathname: Route.BANK_ACCOUNT_UPDATE,
                          state: { exist: false },
                        }}
                      >
                        Add Bank Account
                      </Link>
                    </div>
                  </div>
                </div> */}
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    accountDetails: state.dinisiumBankAccount,
  };
};

export default connect(mpaStateToProps, {
  emailAuthentiactionOn,
  smsAuthentiactionOn,
  googleAuthentiactionOn,
  updatePassword,
})(Account);
