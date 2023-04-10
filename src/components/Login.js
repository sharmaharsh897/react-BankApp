import React, { useState, useEffect } from "react";
import logoImg from "../images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [icon, setIcon] = useState(<FaEye size={24} />);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    setIcon(show ? <FaEye size={22} /> : <FaEyeSlash size={22} />);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);
  console.log(formValues);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = alert("Email is required");
    }
    if (!values.password) {
      errors.password = alert("Password is required");
    } else if (values.password.length < 4) {
      errors.password = alert("Password must be of more than 4 characters");
    }
    return errors;
  };

  return (
    <>
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logoImg} className="image1" alt="logo" />
          <h4 className="heading1">Sign In</h4>
          <h5 className="heading2">Please sign in to your account</h5>

          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            type="email"
            placeholder="xyz@xyz.com"
            id="email"
          />
          <p>{formErrors.email}</p>

          <label htmlFor="password">Enter Password</label>
          <div className="password-input">
            <input
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
              type={show ? "text" : "password"}
              placeholder="********"
              id="password"
              name="password"
            />
            <button className="password-toggle" onClick={handleShow}>
              {icon}
            </button>
          </div>
          <p>{formErrors.password}</p>

          <button className="btn btn-primary" type="submit">
            <Link to="/"> Log In</Link>
          </button>

          <button type="button" class="btn btn-link">
            Forgot your password?
          </button>
          <button type="button" class="btn btn-link">
            <Link className="linking" to="/register">
              {" "}
              Need an account?
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};
