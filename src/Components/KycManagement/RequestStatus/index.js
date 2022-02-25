import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getKycById, updateKycStatus } from "../../../Redux/actions/actions";
import Route from "../../../Constants/browserRoutes";
import StatusModal from "./StatusModal";
import { CSVLink } from "react-csv";
import VerifyStatusModal from "./VerifyStatusModal";

const RequestStatus = ({
  match,
  kyc: { data },
  getKycById,
  updateKycStatus,
}) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  //CSV Data
  const headers = [
    { label: "KYC Name", key: "kyc" },
    { label: "Nationality", key: "nationality" },
    { label: "Date of Birth", key: "dob" },
    { label: "Address", key: "address" },
    { label: "City", key: "city" },
    { label: "State or Province", key: "state" },
    { label: "Country", key: "country" },
    { label: "Bank Name", key: "bankName" },
    { label: "Swift", key: "swift" },
    { label: "Account Number", key: "accountNumber" },
    { label: "Account Title", key: "accountTitle" },
    { label: "KYC Status", key: "status" },
    { label: "Rejection Reason", key: "rejectionMessage" },
  ];

  const csvData = [
    {
      kyc: data && data.full_name,
      nationality: data && data.nationality,
      dob: data && data.dob,
      address: data && data.permanent_address,
      city: data && data.city,
      state: data && data.state_or_province,
      country: data && data.country,
      bankName: data && data.bank_name,
      swift: data && data.swift,
      accountNumber: data && data.account_number,
      accountTitle: data && data.account_title,
      status: data && data.kyc_status,
      rejectionMessage: data && data.rejection_message,
    },
  ];

  let adminId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).id
    : null;
  useEffect(() => {
    getKycById({ kycId: match.params.id });
  }, []);

  useEffect(() => {
    if (data.kyc_status == "approved") {
      setShowButtons(false);
    } else if (data.kyc_status == "rejected") {
      setShowButtons(false);
    } else if (data.admin_one === adminId) {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  }, [data, status]);

  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card pu-rel text-dark p-5 mb-3">
              <h2
                className="page-title-heading mb-4 font-30 text-center d-flex justify-content-between"
                style={{ paddingLeft: "35px", paddingRight: "20px" }}
              >
                Details
                <CSVLink
                  data={csvData}
                  headers={headers}
                  filename="KYC_Detail.csv"
                >
                  <button className="btn btn-primary">Export CSV</button>
                </CSVLink>
              </h2>

              <div className="row">
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Name</span>
                      <span>{data && data.full_name}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Nationality</span>
                      <span>{data && data.nationality}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Date Of Birth</span>
                      <span>{data && data.dob}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Address</span>
                      <span>{data && data.permanent_address}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>City</span>
                      <span>{data && data.city}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>State or Province</span>
                      <span>{data && data.state_or_province}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Country</span>
                      <span>{data && data.country}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Bank Name</span>
                      <span>{data && data.bank_name}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Swift Code</span>
                      <span>{data && data.swift}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Account Number</span>
                      <span>{data && data.account_number}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Account Title</span>
                      <span>{data && data.account_title}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Status</span>
                      <span>{data && data.kyc_status}</span>
                    </li>
                  </ul>
                </div>
                {data.kyc_status == "rejected" ? (
                  <div class="col-12">
                    <ul className="row profile-detail">
                      <li className="col-12">
                        <span>
                          <strong>Rejection Reason</strong>
                        </span>
                        <div class="alert alert-primary" role="alert">
                          <span>{data && data.rejection_message}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-12">
                  <div className="row mt-4">
                    <div className="col-sm-4" style={{ textAlign: "center" }}>
                      {data && (
                        <a
                          href={`${Route.HOST}/${data.personal_photo}`}
                          target="_blank"
                        >
                          <img
                            max-width="200px"
                            width="auto"
                            height="100px"
                            src={`${Route.HOST}/${data.personal_photo}`}
                            alt="..."
                          />
                        </a>
                      )}
                      {/* <div className="form-group upload-input-sty">
                        <p className="upload-icon text-center">
                          <i className="far fa-image"></i>
                        </p>
                      </div> */}
                      <p className="text-center">Personal Photo</p>
                    </div>
                    <div className="col-sm-4" style={{ textAlign: "center" }}>
                      {data && (
                        <a
                          href={`${Route.HOST}/${data.license_photo}`}
                          target="_blank"
                        >
                          <img
                            max-width="200px"
                            width="auto"
                            height="100px"
                            src={`${Route.HOST}/${data.license_photo}`}
                            alt="..."
                          />
                        </a>
                      )}
                      {/* <div className="form-group upload-input-sty">
                        <p className="upload-icon text-center">
                          <i className="far fa-image"></i>
                        </p>
                      </div> */}
                      <p className="text-center">License Photo</p>
                    </div>
                    <div className="col-sm-4" style={{ textAlign: "center" }}>
                      {data && (
                        <a
                          href={`${Route.HOST}/${data.other_document}`}
                          target="_blank"
                        >
                          <img
                            max-width="200px"
                            width="auto"
                            height="100px"
                            src={`${Route.HOST}/${data.other_document}`}
                            alt="..."
                          />
                        </a>
                      )}
                      {/* <div className="form-group upload-input-sty">
                        <p className="upload-icon text-center">
                          <i className="far fa-image"></i>
                        </p>
                      </div> */}
                      <p className="text-center">Other Document</p>
                    </div>
                  </div>
                </div>
                {data && showButtons && (
                  <div className="col-md-12 my-5 ">
                    <button
                      type="button"
                      className="btn btn-dark  w-25 btn-lg ml-3"
                      onClick={() => setShowVerifyModal(true)}
                    >
                      Verify KYC
                    </button>
                  </div>
                )}
                {/* <!-- Verification Modal -->*/}
                {showVerifyModal && (
                  <VerifyStatusModal
                    showVerifyModal={showVerifyModal}
                    setShowVerifyModal={setShowVerifyModal}
                    data={data}
                    setStatus={setStatus}
                    setShow={setShow}
                    updateKycStatus={updateKycStatus}
                  />
                )}
                {/* <!--end Modal --> */}
                {show && (
                  <StatusModal show={show} setShow={setShow} status={status} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  kyc: state.kyc,
});

export default connect(mapStateToProps, { getKycById, updateKycStatus })(
  RequestStatus
);
