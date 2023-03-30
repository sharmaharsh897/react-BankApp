import React, { useState } from "react";

import logoImg from "../images/logo.png";

export const Register = (props) => {
  


  return (
    <div className="auth-form-container">
      <form className="register-form" >
        <img src={logoImg} className="image1" alt="logo" />
        <label htmlFor="username">Full Name:</label>
        <input
          className="form-control"
          
          type="text"
          placeholder="Enter Name"
          id="username"
          name="username"
        />
        <label htmlFor="email">E-mail</label>
        <input
          className="form-control"
          
          type="email"
          placeholder="xyz@xyz.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="password">Re-enter password</label>
        <input
          className="form-control"
          
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button class="btn btn-primary" type="submit">
          Create Account
        </button>
        <button
          type="button"
          onClick={() => props.onFormSwitch("login")}
          class="btn btn-link"
        >
          Already have an accout? Login here
        </button>{" "}
      </form>
    </div>
  );
};
