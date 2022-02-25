import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import CreateItoModal from "./CreateItoModal";
import { createIto } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getUnAssignedAdminsToItos } from "../../../Redux/actions/actions";
import { useHistory } from "react-router";

const CreateNewIto = ({
  createIto,
  ito: { unAssignedAdmins },
  getUnAssignedAdminsToItos,
}) => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    adminId: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const { name, adminId, startDate, endDate, description } = formData;

  let history = useHistory();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateIto = () => {
    setLoading(true);
    createIto({ formData, setFormData, setLoading, history });
    setShow(false);
  };

  useEffect(() => {
    getUnAssignedAdminsToItos();
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Name</label>

                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Admins</label>
                      <select
                        name="adminId"
                        className="form-control"
                        defaultValue={adminId}
                        onChange={onChange}
                        placeholder="Select Admin"
                      >
                        <option value="">Select Admin</option>
                        {unAssignedAdmins &&
                          unAssignedAdmins.map((admin) => (
                            <option
                              key={admin.id}
                              value={admin.id}
                            >{`${admin.fname} ${admin.lname}`}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Start Date</label>

                    <input
                      type="date"
                      placeholder="Start Date"
                      className="form-control"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>

                      <input
                        type="date"
                        placeholder="End Date"
                        className="form-control"
                        name="endDate"
                        value={endDate}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label>Description</label>

                    <textarea
                      placeholder="Description"
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => onChange(e)}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  CREATE NEW ITO
                </button>
              </form>

              {/* <!-- Modal --> */}
              {/* <CreateItoModal show={show} setShow={setShow} /> */}

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
                    Are you sure, you want to <strong>create an ITO?</strong>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary w-25 btn-md"
                    onClick={handleCreateIto}
                  >
                    Ok
                  </button>
                </Modal.Body>
                <Modal.Footer className="border-0"></Modal.Footer>
              </Modal>
              {/* <!--end Modal --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
});

export default connect(mapStateToProps, {
  createIto,
  getUnAssignedAdminsToItos,
})(CreateNewIto);
