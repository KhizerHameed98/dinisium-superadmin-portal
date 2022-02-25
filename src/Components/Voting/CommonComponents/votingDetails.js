import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import Countdown from "react-countdown";
import { connect } from "react-redux";
import {
  getVoteDetailById,
  getVoteStatus,
} from "../../../Redux/actions/actions";

const CompletionList = () => <span>Ended</span>;

const CompletionListUpcoming = () => <span>Started</span>;

const VotingDetails = ({
  match,
  getVoteDetailById,
  getVoteStatus,
  voting: { votingDetail, voteStatus },
  location,
}) => {
  const [ongoingShowTime, setOngoingShowTime] = useState(false);
  const [upcomingShowTime, setUpcomingShowTime] = useState(false);
  const [showSupply, setShowSupply] = useState(false);
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);

  let CurrentTime = new Date().getTime();

  useEffect(() => {
    const id = match.params.id;
    getVoteDetailById(id, setStartTime, setEndTime);
    getVoteStatus({ id });

    if (location && location.state && location.state.status === "ongoing") {
      setOngoingShowTime(true);
      setShowSupply(false);
    } else if (
      location &&
      location.state &&
      location.state.status === "upcoming"
    ) {
      setOngoingShowTime(false);
      setUpcomingShowTime(true);
      setShowSupply(false);
    } else {
      setOngoingShowTime(false);
      setUpcomingShowTime(false);
    }
  }, []);

  useEffect(() => {
    if (CurrentTime >= endTime) {
      setShowSupply(true);
    }
  }, [endTime]);

  return (
    <>
      <div className="row" style={{ width: "-webkit-fill-available" }}>
        <div className="col-12 col-md-8 offset-md-2">
          {/* <!-- inner row --> */}
          <div className="row" style={{ width: "-webkit-fill-available" }}>
            <div className="col-sm-12">
              <div className="card p-5">
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="pro-heading-b">
                          {(votingDetail && votingDetail.name) || " "}
                        </span>
                      </div>

                      {ongoingShowTime &&
                        endTime !== undefined &&
                        CurrentTime !== undefined && (
                          <div>
                            <div className="countdown-style mb-2">
                              <Countdown
                                date={Date.now() + (endTime - CurrentTime)}
                              >
                                <CompletionList />
                              </Countdown>
                            </div>
                          </div>
                        )}

                      {upcomingShowTime &&
                        startTime !== undefined &&
                        CurrentTime !== undefined && (
                          <div>
                            <div className="countdown-style mb-2">
                              <Countdown
                                date={Date.now() + (startTime - CurrentTime)}
                              >
                                <CompletionListUpcoming />
                              </Countdown>
                            </div>
                          </div>
                        )}

                      <p>
                        <span className="pro-date mb-0">
                          <i className="far fa-calendar"></i>{" "}
                          <Moment format="D MMM YYYY" withTitle>
                            {(votingDetail && votingDetail.start_date) || " "}
                          </Moment>{" "}
                          -{" "}
                          <Moment format="D MMM YYYY" withTitle>
                            {(votingDetail && votingDetail.end_date) || " "}
                          </Moment>
                        </span>
                      </p>
                    </div>

                    <div className="col-md-6 mb-2">
                      {showSupply && (
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="card bg-cr-1 text-white ">
                              <div className="d-inline-block m-1">
                                <span className="dashboard-cd-blc m-2">
                                  Results :{" "}
                                  {voteStatus &&
                                    voteStatus.result &&
                                    voteStatus.result.toFixed(2)}
                                  %
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="card bg-cr-1 text-white ">
                              <div className="d-inline-block m-1">
                                <span className="dashboard-cd-blc m-2">
                                  Participant :{" "}
                                  {voteStatus && voteStatus.total_participants}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body bg-lit-gr">
                      <h4 className="font-18">Description</h4>
                      <p className="font-14 text-justify">
                        {(votingDetail && votingDetail.description) || ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end inner row --> */}
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade bd-example-modal-sm"
        id="exampleModalCentered"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenteredLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-sm-cu modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
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
                You Agree with this <b>Voting</b>
              </p>
              <button type="button" className="btn btn-primary w-25 btn-md">
                Ok
              </button>
            </div>
            <div className="modal-footer border-0"></div>
          </div>
        </div>
      </div>
      {/* <!--end Modal --> */}
    </>
  );
};

const mpaStateToProps = (state) => {
  return {
    voting: state.voting,
  };
};

export default connect(mpaStateToProps, {
  getVoteDetailById,
  getVoteStatus,
})(VotingDetails);
