import React, { useState } from "react";
import logoImg from "../images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
  /////////////////
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  //strong password validation
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  let isFormValid = true;
//////////////
  const sendDataToBackend = async () => {
    try {
      if (isFormValid) {
        const response = await axios.post(
          "http://localhost:8080/api/register",
          formInput
        );
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
////////////////
  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        username: "Enter valid full name",
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: alert("Password does not match"),
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: alert("Password should not be empty"),
      });
      return;
    }
    if (!validatePassword(formInput.password)) {
      setFormError({
        ...inputError,
        password: alert(
          "Password should contain at least one uppercase, one lowercase, one digit and one special character and should be alteast 8 characters long"
        ),
      });
      return;
    }
    setFormError(inputError);

    // //SEND DATA TO BACKEND
    // fetch("/api/register",{
    //   method:"POST",
    //   headers:{
    //     "Content- Type":"application/json",
    //   },
    //   body:JSON.stringify({
    //     username:formInput.username,
    //     email:formInput.email,
    //     password:formInput.password,
    //     confirmPassword:formInput.confirmPassword,
    //   }),
    // })
    // .then((response) => {
    //   if(!response.ok){
    //     throw new Error("failed to register user");
    //   }
    //   return response.json();
    // })
    // .then((data)=>{
    //   console.log(data);
    // })
    // .catch((error)=>{
    //   console.error(error);

    // });
    if (isFormValid) {
      sendDataToBackend();
      console.log("form data submitted");
    }

    ///////
    ///////
  };

  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(<FaEye size={22} />);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleShow = () => {
    if (!show && document.activeElement.id === "password") {
      document.getElementById("password").blur();
    }
    setShow(!show);
    setIcon(show ? <FaEye size={22} /> : <FaEyeSlash size={22} />);
  };

  return (
    <>
      <div className="auth-form-container">
        <form className="register-form" onSubmit={validateFormInput}>
          <img src={logoImg} className="image1" alt="logo" />
          <label htmlFor="username">Full Name:</label>
          <input
            className="form-control"
            value={formInput.username}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="text"
            placeholder="Enter Name"
            id="username"
            name="username"
          />
          <p className="error-message">{formError.username}</p>

          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            value={formInput.email}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="email"
            placeholder="xyz@xyz.com"
            id="email"
            name="email"
          />
          <p className="error-message">{formError.email}</p>

          <label htmlFor="password">Enter Password </label>
          <div className="password-input">
            <input
              className="form-control"
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              type={show ? "text" : "password"}
              placeholder="********"
              id="password"
              name="password"
              onKeyDown={handleKeyDown}
            />
            <i className="password-toggle" onClick={handleShow}>
              {icon}
            </i>
          </div>
          <p className="error-message">{formError.password}</p>

          <label htmlFor="password">Re-enter password</label>
          <div className="confirm-password-input">
            <input
              className="form-control"
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              type={show ? "text" : "password"}
              placeholder="********"
              id="confirmPassword"
              name="confirmPassword"
              onKeyDown={handleKeyDown}
            />
          </div>
          <p className="error-message">{formError.confirmPassword}</p>

          <button class="btn btn-primary" type="submit">
            Create Account
          </button>
          <button type="button" className="btn btn-link">
            <Link className="linking" to="/login">
              {" "}
              Already have an accout? Login here{" "}
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};
