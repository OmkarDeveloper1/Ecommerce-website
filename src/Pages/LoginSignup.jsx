import React from "react";
import '../Pages/Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name"></input>
          <input type="Email" placeholder="Email Address" ></input>
          <input type="password" placeholder="Enter Password" ></input>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login" >Already have an Account? <span>Login-Here</span></p>
        <div className="loginsignup-agree" > 
          <input type="checkbox" name="" id=""/>
          <p>By Continuing, I Agree to the terms of use & Privacy Policy.</p>

        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
