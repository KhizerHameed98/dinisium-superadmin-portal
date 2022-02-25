import React from "react";
import ApprovedRequest from "./ApprovedRequests";
import PendigRequest from "./PendingRequests/index";
import RejectedRequest from "./RejectedRequests/index";
import SelectITO from "./SelectITO/index";
import SingleApprovedRequests from "./SingleApprovedRequests";

const KycManagement = () => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}

      <div className="row">
        {/* SelectITO compo */}
        {/* <SelectITO /> */}

        <div className="col-md-12">
          {/* PendigRequests compo */}
          <PendigRequest />
        </div>
        <div className="col-md-12">
          {/* SingleApprovedRequests compo */}
          <SingleApprovedRequests />
        </div>

        <div className="col-md-12">
          {/* ApprovedRequest compo */}
          <ApprovedRequest />
        </div>

        <div className="col-md-12">
          {/* RejectedRequest compo */}
          <RejectedRequest />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default KycManagement;
