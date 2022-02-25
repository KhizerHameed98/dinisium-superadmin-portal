import React, { useState } from "react";

const SignupForm = ({ setCodeVerificationPage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    country: "",
    password: "",
  });
  const { firstName, lastName, email, contactNo, country, password } = formData;

  const onChange = (e) => {
    setFormData({ ...setFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCodeVerificationPage(true);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="h3">Sign up</h3>
      <div className="form-group">
        <label>First Name</label>

        <input
          type="text"
          placeholder="First Name"
          className="form-control"
          name="firstName"
          value={firstName}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Last Name</label>

        <input
          type="text"
          placeholder="Last Name"
          className="form-control"
          name="lastName"
          value={lastName}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label>Enter Email</label>

        <input
          type="text"
          placeholder="Email*"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Contact No</label>

        <input
          type="text"
          placeholder="Contact No"
          className="form-control"
          name="contactNo"
          value={contactNo}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label>Country</label>

        <input
          type="text"
          placeholder="Country"
          className="form-control"
          name="country"
          value={country}
          onChange={(e) => onChange(e)}
          required
        />
        <label>Password</label>

        <input
          type="text"
          placeholder="Password"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button
        style={{ marginBottom: "20px" }}
        type="submit"
        className="btn btn-outline-primary"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default SignupForm;
