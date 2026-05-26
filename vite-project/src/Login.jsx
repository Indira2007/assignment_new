import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [agency, setAgency] = useState("yes"); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Page');
  }

  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Create your<br />PopX account</h1>

        <form className="form">
          {/* Full Name */}
          <div className="input-group">
            <input type="text" id="fullName" placeholder="Marry Doe" required />
            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
          </div>

          {/* Phone Number */}
          <div className="input-group">
            <input type="tel" id="phone" placeholder="Marry Doe" required />
            <label htmlFor="phone">Phone number<span className="required">*</span></label>
          </div>

          {/* Email Address */}
          <div className="input-group">
            <input type="email" id="email" placeholder="Marry Doe" required />
            <label htmlFor="email">Email address<span className="required">*</span></label>
          </div>

          {/* Password */}
          <div className="input-group">
            <input type="password" id="password" placeholder="Marry Doe" required />
            <label htmlFor="password">Password<span className="required">*</span></label>
          </div>

          {/* Company Name */}
          <div className="input-group">
            <input type="text" id="company" placeholder="Marry Doe" />
            <label htmlFor="company">Company name</label>
          </div>

          {/* Radio Group */}
          <div className="radio-container">
            <p className="radio-title">Are you an Agency?<span className="required">*</span></p>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="agency" 
                  value="yes" 
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  required 
                />
                <span className="custom-radio"></span>
                Yes
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="agency" 
                  value="no" 
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  required 
                />
                <span className="custom-radio"></span>
                No
              </label>
            </div>
          </div>

          
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;