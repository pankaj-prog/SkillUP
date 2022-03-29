import {
  validateName,
  validateEmail,
  validatePassword,
} from "./formInputUtils";

import axios from "axios";

// validate input fields before signup request

export const signUpHandler = async (
  formState,
  setFormState,
  setUser,
  setEncodedToken,
  navigate
) => {
  // update form validation states
  if (!validateName(formState.name)) {
    setFormState((formState) => ({ ...formState, isNameValid: false }));
  }
  if (!validateEmail(formState.email)) {
    setFormState((formState) => ({ ...formState, isEmailValid: false }));
  }
  if (!validatePassword(formState.password)) {
    setFormState((formState) => ({ ...formState, isPasswordValid: false }));
  }

  // post signup request only if form states are valid
  if (
    validateName(formState.name) &&
    validateEmail(formState.email) &&
    validatePassword(formState.password)
  ) {
    const response = await axios.post(`/api/auth/signup`, {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    });
    if (response.status == 201) {
      console.log(response);
      setUser(response.data.createdUser);
      setEncodedToken(response.data.encodedTokern);
      localStorage.setItem("encodedToken", response.data.encodedToken);
      navigate("/");
    }
  }
};

export const signInHandler = async (
  formState,
  setFormState,
  setUser,
  setEncodedToken,
  navigate
) => {
  // update form validation states
  if (!validateEmail(formState.email)) {
    setFormState((formState) => ({ ...formState, isEmailValid: false }));
  }
  if (!validatePassword(formState.password)) {
    setFormState((formState) => ({ ...formState, isPasswordValid: false }));
  }

  // post singin request only if form states are valid

  if (validateEmail(formState.email) && validatePassword(formState.password)) {
    const response = await axios.post(`/api/auth/login`, {
      email: formState.email,
      password: formState.password,
    });
    if (response.status == 200) {
      setUser(response.data.foundUser);
      setEncodedToken(response.data.encodedToken);
      localStorage.setItem("encodedToken", response.data.encodedToken);
      navigate("/");
    }
  }
};
