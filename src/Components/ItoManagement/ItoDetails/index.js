import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getItoById } from "../../../Redux/actions/actions";
import Moment from "react-moment";
import BlockUnblockModal from "./BlockUnblockModal";
import { blockUnblockIto } from "../../../Redux/actions/actions";

const ItoDetails = ({
  match,
  ito: { data },
  getItoById,
  blockUnblockIto,
  location,
}) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const unblockIto = (e) => {
    e.preventDefault();
    blockUnblockIto(setShow, setStatus, "Unblocked", match.params.id, false);
  };
  const blockIto = (e) => {
    e.preventDefault();
    blockUnblockIto(setShow, setStatus, "Blocked", match.params.id, true);
  };

  useEffect(() => {
    getItoById({ itoId: match.params.id });
  }, []);
  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card p-5">
              <p>
                {/* <span className="pro-heading-b mb-2 mr-3">
                  ITO Seriess Name
                </span>{" "} */}
                <span className="pro-heading-b">{data && data.name}</span>
              </p>
              <p>
                <span className="pro-date mb-0">
                  <i className="far fa-calendar"></i>{" "}
                  <Moment format="D MMM YYYY" withTitle>
                    {data && data.start_date}
                  </Moment>
                  -{" "}
                  <Moment format="D MMM YYYY" withTitle>
                    {data && data.end_date}
                  </Moment>
                </span>
              </p>
              <div className="card mb-4">
                <div className="card-body bg-lit-gr">
                  <h4 className="font-18">Description</h4>
                  <p className="font-14 text-justify">
                    {data && data.description}
                  </p>
                </div>
              </div>
              {location &&
                location.state &&
                location.state === "ongoing" &&
                (data && data.onhold ? (
                  <div className="mt-4">
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCentered"
                      className="btn btn-primary w-25 btn-lg mr-3"
                      onClick={unblockIto}
                    >
                      Un Hold
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCentered"
                      className="btn btn-primary w-25 btn-lg mr-3"
                      onClick={blockIto}
                    >
                      On Hold
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
      {/* <!-- Modal --> */}
      <BlockUnblockModal show={show} setShow={setShow} status={status} />
      {/* <!--end Modal --> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
});

export default connect(mapStateToProps, { getItoById, blockUnblockIto })(
  ItoDetails
);
