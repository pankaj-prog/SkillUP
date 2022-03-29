import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import { signUpHandler } from "./utils/authHandlers";

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
  });

  const navigate = useNavigate();

  const { setUser, setEncodedToken } = useAuth();

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Sign up and start learning</h1>
        <form action="" className="auth-form">
          <div
            className={
              formState.isNameValid
                ? "input-container"
                : "input-container input-container-error"
            }
          >
            <label htmlFor="input-name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              id="input-name"
              placeholder="Full Name"
              onChange={(e) => handleInputChange(e)}
              value={formState.name}
            />
          </div>
          {!formState.isNameValid && (
            <p className="error-message">
              Name should be minimum 2 char and max 30 char long{" "}
            </p>
          )}

          <div
            className={
              formState.isEmailValid
                ? "input-container"
                : "input-container input-container-error"
            }
          >
            <label htmlFor="input-email">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
              value={formState.email}
            />
          </div>
          {!formState.isEmailValid && (
            <p className="error-message">Enter valid email address</p>
          )}
          <div
            className={
              formState.isPasswordValid
                ? "input-container"
                : "input-container input-container-error"
            }
          >
            <label htmlFor="input-password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="input-password"
              placeholder="Password"
              onChange={(e) => handleInputChange(e)}
              value={formState.password}
            />
          </div>
          {!formState.isPasswordValid && (
            <p className="error-message">
              {formState.password.length >= 6
                ? "Password must containe one uppercase letter, one smallcase letter and a number"
                : "Password should be minimum 6 char long"}
            </p>
          )}
          <div className="checkbox-input-container">
            <input type="checkbox" className="checkbox" name="" id="checkbox" />{" "}
            <label htmlFor="checkbox">
              I’m in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>
          <button
            type="button"
            className="auth-btn form-btn"
            onClick={() =>
              signUpHandler(
                formState,
                setFormState,
                setUser,
                setEncodedToken,
                navigate
              )
            }
          >
            Sign up
          </button>
          <p className="text-muted text-sm form-alert text-center">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
        <footer className="auth-box-footer">
          Already have an account ?
          <button className="btn btn-link-primary">
            <Link className="link" to="/signin">
              {" "}
              Log in
            </Link>
          </button>
        </footer>
      </section>
    </main>
  );
};

export default SignUp;
