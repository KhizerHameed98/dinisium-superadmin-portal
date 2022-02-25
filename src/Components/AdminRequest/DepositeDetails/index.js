import React, { useState, useEffect } from "react";
import browserRoute from "./../../../Constants/browserRoutes";

import { connect } from "react-redux";
import {
  getDepositesById,
  confrimDeposite,
} from "../../../Redux/actions/actions";

const DepositeDetails = ({
  adminRequest: { depositeDetails },
  getDepositesById,
  confrimDeposite,
  match,
  auth: { userDetails },
}) => {
  useEffect(() => {
    let { id } = match.params;

    getDepositesById(id);
  }, []);

  const handleApproved = (id) => {
    const obj = {
      status: "approved",
    };
    confrimDeposite({ id, obj });
  };

  const handleDisapproved = (id) => {
    const obj = {
      status: "rejected",
    };
    confrimDeposite({ id, obj });
  };

  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card pu-rel text-dark p-5 mb-3">
              <h2 className="page-title-heading mb-4 font-30 text-center">
                Deposite Details
              </h2>

              <div className="row">
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Account Name</span>
                      <span>{depositeDetails.account_name || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Account Number</span>
                      <span>{depositeDetails.account_no || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Bank Name</span>
                      <span>{depositeDetails.bank_name || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Country</span>
                      <span>{depositeDetails.country || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Swift</span>
                      <span>{depositeDetails.swift || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>From account</span>
                      <span>{depositeDetails.from_account || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Currency</span>
                      <span>{depositeDetails.currency || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Status</span>
                      <span>{depositeDetails.status || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Transfer amount</span>
                      <span>
                        {"$ " + depositeDetails.transfer_amount || ""}
                      </span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Total Amount</span>
                      <span>
                        {depositeDetails.total_amount +
                          " " +
                          depositeDetails.currency || ""}
                      </span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Transfer Fee</span>
                      <span>
                        {depositeDetails.transfer_fee +
                          " " +
                          depositeDetails.currency || ""}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <a
                        href={
                          browserRoute.HOST + `${depositeDetails.bank_draft}` ||
                          ""
                        }
                        target="_blank"
                      >
                        <img
                          src={
                            browserRoute.HOST +
                              `${depositeDetails.bank_draft}` || ""
                          }
                          alt="Transaction receipt"
                          width="300px"
                          height="200px"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row mt-4 ml-2">
                    {depositeDetails.status === "pending" ? (
                      <div>
                        {userDetails.id ===
                        (depositeDetails.user1_approve ||
                          depositeDetails.user2_approve) ? null : (
                          <div>
                            <button
                              className="btn btn-success font-12 btn-green"
                              onClick={() => handleApproved(depositeDetails.id)}
                            >
                              Approve
                            </button>

                            <button
                              className="btn btn-danger font-12 ml-5"
                              onClick={() =>
                                handleDisapproved(depositeDetails.id)
                              }
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
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
    adminRequest: state.adminRequest,
    auth: state.auth,
  };
};

export default connect(mpaStateToProps, {
  getDepositesById,
  confrimDeposite,
})(DepositeDetails);
