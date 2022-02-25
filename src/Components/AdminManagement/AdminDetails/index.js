import React, { useEffect, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router";
import browserRoute from "../../../Constants/browserRoutes";
import { ListGroup, Button, Modal } from "react-bootstrap";

import {
  getAdminsById,
  adminLinkITO,
  adminUnLinkITO,
  getAvailableITO,
} from "../../../Redux/actions/actions";

const AdminDetails = ({
  adminDetails,
  getAdminsById,
  adminLinkITO,
  adminUnLinkITO,
  getAvailableITO,
  ...otherProps
}) => {
  const [selectITO, setSeletITO] = useState();
  const [showModal, setShowModal] = useState(false);
  const [unLinkITOid, setunLinkITOid] = useState("");
  const [unLinkITOName, setunLinkITOName] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  const admin_id = otherProps.match.params.id;
  // const id = otherProps?.adminITO?.map((item) => item.id);

  const handleSelectITO = (e) => {
    const { value } = e.target;
    setSeletITO(value);

    const index = otherProps?.adminITO?.findIndex(
      (item) => item.id === parseInt(value)
    );

    setSelectedName(otherProps?.adminITO[index]?.name);
  };

  const handleUpdateITO = () => {
    setLoading(true);
    adminLinkITO({ admin_id, selectITO, success, setSuccess, setLoading });
    setSeletITO("");
  };
  const handleUnlinkITO = (e) => {
    e.preventDefault();
    adminUnLinkITO({ admin_id, unLinkITOid, success, setSuccess, setLoading });
    setShowModal(false);
  };

  const toItoDetail = (e, itoId) => {
    e.preventDefault();
    history.push(`${browserRoute.ITO_MANAGEMENT_DETAILS_BTN} ${itoId} `);
  };

  useEffect(() => {
    getAdminsById(admin_id);
  }, [success, loading]);

  useEffect(() => {
    getAvailableITO(admin_id);
  }, [success, loading]);

  const handleLink = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card pu-rel text-dark p-5 mb-3">
              <h2 className="page-title-heading mb-4 font-30 text-center">
                Details
              </h2>

              <div className="row">
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Name:</span>
                      <span>{adminDetails?.admin?.name || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Email:</span>
                      <span>{adminDetails?.admin?.email || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Contact:</span>
                      <span>{adminDetails?.admin?.contact_no || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Role:</span>
                      <span>{adminDetails?.admin?.role || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      {/* //col-md-6 */}
                      <span>Country:</span>
                      <span>{adminDetails?.admin?.country || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span></span>
                      <span></span>
                    </li>

                    {/* <li className="col-12 col-md-auto" style={{}}></li> */}
                    <li
                      className="col-12"
                      style={{
                        paddingRight: "0px",
                      }}
                    >
                      <span>ITO Name</span>
                      <ListGroup
                        className=" subs-main-scroll"
                        style={{
                          width: "auto",
                          height: "50vh",
                          padding: "0px",
                        }}
                      >
                        {adminDetails?.itos?.map((item) => (
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            action
                            variant="light"
                            key={item.ito_id}
                          >
                            <span
                              className="text-dark font-weight-bold"
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                toItoDetail(e, item.ito_id);
                              }}
                            >
                              {item.ito_name}
                            </span>
                            <Button
                              variant="outline-primary"
                              onClick={(e) => {
                                e.preventDefault();
                                setunLinkITOid(item.ito_id);
                                setunLinkITOName(item.ito_name);
                                setShowModal(true);
                              }}
                            >
                              Unlink
                            </Button>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {
            <div className="col-sm-12 my-4">
              <div className="selct-drop form-inline">
                <label className="mr-3 font-weight-bold text-dark font-16">
                  LINK TO
                </label>
                <select
                  className="custom-select w-50"
                  onChange={handleSelectITO}
                >
                  <option defaultChecked hidden>
                    Select ITO
                  </option>
                  {otherProps?.adminITO?.map((item, index) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCentered"
                  className="btn btn-dark ml-3 btn-lg"
                  onClick={handleLink}
                >
                  LINK
                </button>
              </div>
            </div>
          }

          {/* <!-- Modal --> */}
          {/* <div
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
            > */}
          {modalShow ? (
            <Modal size="md" show={modalShow} centered>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="close"
                  onClick={() => setModalShow(false)}
                >
                  <span className="font-18">&times;</span>
                </button>
              </div>
              <Modal.Body className="text-center">
                <div className="modal-body text-center ">
                  <p>
                    Are you sure that you want to link{" "}
                    <strong>{selectedName}</strong> to{" "}
                    {`${adminDetails?.admin?.name} `} ?
                  </p>
                  <button
                    type="button"
                    onClick={handleUpdateITO}
                    className="btn btn-primary mr-3 link_unlink1"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    OK
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary link_unlink2"
                    onClick={() => setModalShow(false)}
                  >
                    CANCEL
                  </button>
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0"></Modal.Footer>
            </Modal>
          ) : null}

          {/* OLD UNLINK CODE  */}

          {/* <div className="modal-content">
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
                  Are you sure that you want to link <strong>{selectedName}</strong> to{" "}
                    {`${adminDetails?.admin?.name} `} ?
                  </p>
                  <button
                    type="button"
                    onClick={handleUpdateITO}
                    className="btn btn-primary w-25 btn-md"
                    data-dismiss="modal"
                    aria-label="Close"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    OK
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark w-25 btn-md ml-3"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    CANCEL
                  </button>
                </div>
                <div className="modal-footer border-0"></div>
              </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <!--end Modal --> */}

          {showModal ? (
            <Modal size="md" show={showModal} centered>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span className="font-18">&times;</span>
                </button>
              </div>
              <Modal.Body className="text-center">
                <div className="modal-body ">
                  <p>
                    Are you sure that you want to unlink{" "}
                    <strong>{unLinkITOName}</strong> to{" "}
                    {`${adminDetails?.admin?.name} `} ?
                  </p>
                  <button
                    type="button"
                    onClick={handleUnlinkITO}
                    className="btn btn-primary mr-3 link_unlink1"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm "></span>
                    )}
                    OK
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary link_unlink2"
                    onClick={() => setShowModal(false)}
                  >
                    CANCEL
                  </button>
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0"></Modal.Footer>
            </Modal>
          ) : null}
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mpaStateToProps = (state) => ({
  adminDetails: state.admin.adminDetails,
  adminITO: state.admin.adminITOList,
});

export default connect(mpaStateToProps, {
  getAdminsById,
  adminLinkITO,
  adminUnLinkITO,
  getAvailableITO,
})(AdminDetails);
