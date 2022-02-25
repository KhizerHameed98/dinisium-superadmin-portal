import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Route from "../../Constants/browserRoutes";

const ContentManagement = () => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="card bg-lit-gr  mb-3">
                    <div className="card-body py-2 px-3">
                      <p className="font-14 mb-0 text-justify">
                        Home{" "}
                        <Link
                          className="view-mor-gr-link float-right"
                          to={Route.EDIT_HOME}
                        >
                          Edit
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card bg-lit-gr  mb-3">
                    <div className="card-body py-2 px-3">
                      <p className="font-14 mb-0 text-justify">
                        About{" "}
                        <Link
                          className="view-mor-gr-link float-right"
                          to={Route.EDIT_ABOUT}
                        >
                          Edit
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-sm-6">
                  <div className="card bg-lit-gr  mb-3">
                    <div className="card-body py-2 px-3">
                      <p className="font-14 mb-0 text-justify">
                        Crypto{" "}
                        <a className="view-mor-gr-link float-right" href="#">
                          Edit
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-12 col-sm-6">
                  <div className="card bg-lit-gr  mb-3">
                    <div className="card-body py-2 px-3">
                      <p className="font-14 mb-0 text-justify">
                        Contact{" "}
                        <Link
                          className="view-mor-gr-link float-right"
                          to={Route.EDIT_CONTACT}
                        >
                          Edit
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-sm-6">
                  <div className="card bg-lit-gr  mb-3">
                    <div className="card-body py-2 px-3">
                      <p className="font-14 mb-0 text-justify">
                        Services{" "}
                        <a className="view-mor-gr-link float-right" href="#">
                          Edit
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default ContentManagement;
