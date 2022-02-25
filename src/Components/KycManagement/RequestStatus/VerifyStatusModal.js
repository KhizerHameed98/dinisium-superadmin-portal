import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const VerifyStatusModal = ({
  showVerifyModal,
  setShowVerifyModal,
  setShow,
  setStatus,
  data,
  updateKycStatus,
}) => {
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShowVerifyModal(false);
  // const handleShow = () => setShowVerifyModal(true);

  const [rejectionModal, setRejectionModal] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState("");

  const onChange = (e) => {
    setRejectionMessage(e.target.value);
  };

  let adminId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).id
    : null;

  const clickApproved = (e) => {
    e.preventDefault();
    setLoading(true);
    updateKycStatus({
      userId: data.user_id,
      adminId: null,
      status: "approved",
      isSuperAdmin: true,
      setShow,
      setStatus,
      setLoading,
    });
    handleClose();
  };
  const clickRejected = (e) => {
    e.preventDefault();
    setLoading(true);
    updateKycStatus({
      userId: data.user_id,
      adminId: null,
      rejectionMessage: rejectionMessage,
      status: "rejected",
      isSuperAdmin: true,
      setShow,
      setStatus,
      setLoading,
    });
    handleClose();
  };

  const rejectionModalHandler = (e) => {
    e.preventDefault();
    setRejectionModal(true);
  };
  return (
    <Modal
      size="sm"
      show={showVerifyModal}
      onHide={handleClose}
      style={{ opacity: 1 }}
      centered
    >
      <div className="modal-header border-0">
        <button type="button" className="close" onClick={handleClose}>
          <span className="font-18">&times;</span>
        </button>
      </div>
      <Modal.Body className="text-center">
        {rejectionModal ? (
          <div>
            <p>Give a Reason For Rejection</p>
            <input
              type="text"
              placeholder="Rejection Message*"
              className="form-control"
              name="rejection_message"
              value={rejectionMessage}
              onChange={onChange}
              required
            />
            <br />
            <button
              type="button"
              className="btn btn-danger w-30 btn-md mr-2"
              onClick={clickRejected}
            >
              Reject
            </button>
          </div>
        ) : (
          <div>
            <p>Are you sure you wanna verify KYC?</p>

            <button
              type="button"
              className="btn btn-success btn-green w-30 btn-md mr-2"
              onClick={clickApproved}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-danger w-30 btn-md mr-2"
              onClick={rejectionModalHandler}
            >
              Reject
            </button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default VerifyStatusModal;
