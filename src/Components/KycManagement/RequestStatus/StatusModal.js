import React from "react";
import { Button, Modal } from "react-bootstrap";

const StatusModal = ({ show, setShow, status }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      size="sm"
      show={show}
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
        <p>
          You have {status} <strong>data</strong> request
        </p>
        <button
          type="button"
          className="btn btn-primary w-25 btn-md"
          onClick={handleClose}
        >
          Ok
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
    // <div
    //   className="modal fade bd-example-modal-sm"
    //   id="exampleModalCentered"
    //   tabIndex="-1"
    //   role="dialog"
    //   aria-labelledby="exampleModalCenteredLabel"
    //   aria-hidden="true"
    // >
    //   <div
    //     className="modal-dialog modal-sm modal-sm-cu modal-dialog-centered"
    //     role="document"
    //   >
    //     <div className="modal-content">
    //       <div className="modal-header border-0">
    //         <button
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span className="font-18" aria-hidden="true">
    //             &times;
    //           </span>
    //         </button>
    //       </div>
    //       <div className="modal-body text-center ">
    //         <p>
    //           You have approved <strong>data</strong> request
    //         </p>
    //         <button type="button" className="btn btn-primary w-25 btn-md">
    //           Ok
    //         </button>
    //       </div>
    //       <div className="modal-footer border-0"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StatusModal;
