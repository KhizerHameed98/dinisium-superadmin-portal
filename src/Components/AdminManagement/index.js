import React, { useState, useEffect } from "react";

import AllUsersData from "./AllUsersData/index";
import { Link } from "react-router-dom";

import Route from "../../Constants/browserRoutes";

import { connect } from "react-redux";
import { getAvailableITO, getAllItos } from "../../Redux/actions/actions";

const AdminManagement = ({
  getAvailableITO,
  getAllItos,
  adminITOList,
  allItos,
}) => {
  const [selectedItoId, setSelectedItoId] = useState("");
  const handleSelectITO = (e) => {
    setSelectedItoId(e.target.value);
  };

  useEffect(() => {
    // getAvailableITO();
    getAllItos();
  }, []);
  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12 mb-2">
            <Link
              className="exp-mr-link text-dr-green"
              to={Route.ADD_NEW_ADMIN}
            >
              ADD NEW ADMIN
              <i className="fa fa-plus-circle ml-1 font-24"></i>
            </Link>
          </div>
          {/* <div className="col-sm-12">
            <div className="selct-drop d-block  ">
              <select
                className="custom-select d-inline mb-2 float-right w-50"
                onChange={handleSelectITO}
              >
                <option defaultChecked value="">
                  Select ITO to Filter
                </option>
                {allItos &&
                  allItos.length > 0 &&
                  allItos.map((ito, index) => (
                    <option value={ito.id} key={ito.id}>
                      {ito.name}
                    </option>
                  ))}
              </select>
            </div>
          </div> */}
          <div className="col-md-12">
            <AllUsersData selectedItoId={selectedItoId} />
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mpaStateToProps = (state) => ({
  adminITOList: state.admin.adminITOList,
  allItos: state.admin.allItos,
});

export default connect(mpaStateToProps, { getAvailableITO, getAllItos })(
  AdminManagement
);
