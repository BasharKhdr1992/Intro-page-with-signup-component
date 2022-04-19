import React, { useState } from 'react';
import ErrorIcon from './assets/icon-error.svg';

const SignupComponent = () => {
  const [firstName, setFirstName] = useState({
    value: '',
    error: null,
  });
  const [lastName, setLastName] = useState({
    value: '',
    error: null,
  });
  const [email, setEmail] = useState({
    value: '',
    error: null,
  });
  const [password, setPassword] = useState({
    value: '',
    error: null,
  });

  const isPresent = (value) => value.length > 0;
  const isValidEmail = (value) => {
    const pattern = /^([a-zA-Z]|[0-9]|[._])+@[a-z]+[.][a-z]{2,3}$/;
    return pattern.test(value);
  };

  const handleFormSubmission = () => {
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    if (
      isPresent(formData.firstName) &&
      isPresent(formData.lastName) &&
      isPresent(formData.email) &&
      isPresent(formData.password) &&
      isValidEmail(formData.email)
    ) {
      console.log('All form data are valid!');
    } else {
      if (!isPresent(formData.firstName)) {
        setFirstName((prev) => ({
          ...prev,
          error: 'First Name cannot be empty',
        }));
      }

      if (!isPresent(formData.lastName)) {
        setLastName((prev) => ({
          ...prev,
          error: 'Last Name cannot be empty',
        }));
      }

      if (!isPresent(formData.email)) {
        setEmail((prev) => ({
          ...prev,
          error: 'Email cannot be empty',
        }));
      }

      if (!isValidEmail(formData.email)) {
        setEmail((prev) => ({
          ...prev,
          error: 'Looks like this is not an email',
        }));
      }

      if (!isPresent(formData.password)) {
        setPassword((prev) => ({
          ...prev,
          error: 'Password cannot be empty',
        }));
      }
    }
  };

  const onFormSubmission = (e) => {
    e.preventDefault();
    handleFormSubmission();
  };

  const onFNameChange = (e) =>
    setFirstName((prev) => ({
      ...prev,
      value: e.target.value,
      error: null,
    }));
  const onLNameChange = (e) =>
    setLastName((prev) => ({
      ...prev,
      value: e.target.value,
      error: null,
    }));
  const onEmailChange = (e) =>
    setEmail((prev) => ({
      ...prev,
      value: e.target.value,
      error: null,
    }));
  const onPasswordChange = (e) =>
    setPassword((prev) => ({
      ...prev,
      value: e.target.value,
      error: null,
    }));

  const errorStyle = {
    border: '2px solid hsl(0, 100%, 74%)',
    backgroundImage: `url(${ErrorIcon})`,
    paddingRight: '40px',
    backgroundPosition: '90% 20px',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="signup-form">
      <div className="signup-form-title">
        Try it free 7 days{' '}
        <span className="grayish-blue">then $20/mo, thereafter</span>
      </div>
      <div className="signup-form-inner">
        <form onSubmit={onFormSubmission}>
          <input
            type="text"
            style={firstName.error && errorStyle}
            value={firstName.value}
            placeholder="First Name"
            onChange={onFNameChange}
          />
          {firstName.error && (
            <div className="error-container">{firstName.error}</div>
          )}
          <input
            type="text"
            style={lastName.error && errorStyle}
            value={lastName.value}
            placeholder="Last Name"
            onChange={onLNameChange}
          />
          {lastName.error && (
            <div className="error-container">{lastName.error}</div>
          )}
          <input
            type="text"
            style={email.error && errorStyle}
            value={email.value}
            placeholder="Email Address"
            onChange={onEmailChange}
          />
          {email.error && <div className="error-container">{email.error}</div>}
          <input
            type="password"
            style={password.error && errorStyle}
            value={password.value}
            placeholder="Password"
            onChange={onPasswordChange}
          />
          {password.error && (
            <div className="error-container">{password.error}</div>
          )}
          <div className="btn-container">
            <button type="submit" className="signup-btn">
              claim your free trial
            </button>
          </div>
          <div className="agreement">
            By clicking the button you are agreeing to our{' '}
            <span className="terms-and-services">Terms and Services</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
