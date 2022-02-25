import React, { useEffect } from "react";
import userImage from "../../../App/Assets/images/avatar.png";
import { getUserProfile } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import browserRoute from "../../../Constants/browserRoutes";

const UserProfileInfo = ({
  id,
  userManagement: { userProfile },
  getUserProfile,
}) => {
  useEffect(() => {
    getUserProfile(id);
  }, []);

  return (
    <div className="card bg-cr-1 pu-rel text-white p-5 mb-3">
      <img
        src={
          userProfile && userProfile.personal_photo
            ? `${browserRoute.HOST}/${userProfile.personal_photo}`
            : userImage
        }
        alt="User..."
        className="profile-img"
      />
      {/* <img className="profile-img" src="../assets/images/user-img.png" alt="User..." /> */}
      <div className="row">
        <div className="col-12 col-md-12">
          <ul className="row profile-detail">
            <li className="col-12 col-md-6">
              <span>Full name :</span>
              <span>
                {userProfile && `${userProfile.fname} ${userProfile.lname}`}
              </span>
            </li>

            <li className="col-12 col-md-6">
              <span>Email : </span>
              <span>{userProfile && userProfile.email}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Contact No : </span>
              <span>{userProfile && userProfile.contact_no}</span>
            </li>
            <li className="col-12 col-md-6">
              <span> Country :</span>
              <span>{userProfile && userProfile.country}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>State :</span>
              <span>{userProfile && userProfile.state_or_province}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Address :</span>
              <span>{userProfile && userProfile.permanent_address}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>KYC Name : </span>
              <span>{userProfile && userProfile.full_name}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>KYC Status : </span>
              <span>{userProfile && userProfile.kyc_status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userManagement: state.userManagement,
});

export default connect(mapStateToProps, { getUserProfile })(UserProfileInfo);
