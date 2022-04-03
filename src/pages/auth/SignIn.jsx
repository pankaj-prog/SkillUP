import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import { signInHandler } from "./utils/authHandlers";

import "./auth.css";

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
  });

  // below two states are only to show error messages on signin
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isUserFound, setIsUserFound] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { user, encodedToken, setUser, setEncodedToken } = useAuth();

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const inputTestUser = () => {
    setFormState({
      email: "adarshbalik@gmail.com",
      password: "Adarshbalik123",
      isEmailValid: true,
      isPasswordValid: true,
    });
  };

  return (
    <main className="gutter-bottom-32 auth-main-wrapper">
      <section className="auth-box">
        <h1 className="auth-box-heading h4">Log in to your account</h1>
        <form action="" className="auth-form">
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
              value={formState.email}
              onChange={(e) => handleInputChange(e)}
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
              type={showPassword ? "text" : "password"}
              name="password"
              id="input-password"
              placeholder="Password"
              value={formState.password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="checkbox-input-container">
            <input
              type="checkbox"
              className="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            <label htmlFor="show-password">Show password</label>
          </div>
          {!formState.isPasswordValid && (
            <p className="error-message">
              {formState.password.length >= 6
                ? "Password must containe one uppercase letter, one smallcase letter and a number"
                : "Password should be minimum 6 char long"}
            </p>
          )}
          {!isPasswordCorrect && (
            <span className="error-message">
              The email or passowrd you have entered is incorrect. Please try
              again
            </span>
          )}
          {!isUserFound && (
            <span className="error-message">
              Email is not valid, either try again or signup.
            </span>
          )}
          <button
            onClick={() =>
              signInHandler(
                formState,
                setFormState,
                setUser,
                setEncodedToken,
                setIsPasswordCorrect,
                setIsUserFound,
                navigate
              )
            }
            type="button"
            className="btn auth-btn form-btn"
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-link-primary btn-forgot-password"
          >
            Forgot password
          </button>
          <p className="form-guide text-muted text-center">
            Or sign in with test user
          </p>
          <button
            onClick={() => inputTestUser()}
            type="button"
            className="text-center form-btn"
          >
            <i className="fas fa-user"></i>
            {""} Test User
          </button>
          <footer className="auth-box-footer">
            Don't have an account ?
            <button className="btn btn-link-primary">
              <Link className="link" to="/signup">
                {" "}
                Sign-up
              </Link>
            </button>
          </footer>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
