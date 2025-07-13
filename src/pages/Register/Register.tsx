import React from 'react';
import './Register.scss';

export const Register: React.FC = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <div className="form-group">
          <input className="form-input" type="text" id="first_name" placeholder="First Name" />
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
        </div>
        <div className="form-group">
          <input className="form-input" type="text" id="last_name" placeholder="Last Name" />
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
        </div>
        <div className="form-group">
          <input className="form-input" type="tel" id="phone_number" placeholder="Phone Number" />
          <label htmlFor="phone_number" className="form-label">
            Phone Number:
          </label>
        </div>
        <div className="form-group">
          <input className="form-input" type="email" id="phone_number" placeholder="Email" />
          <label htmlFor="phone_number" className="form-label">
            Phone Number:
          </label>
        </div>
        <div className="form-group">
          <input className="form-input" type="text" id="username" placeholder="Username" />
          <label htmlFor="username" className="form-label">
            Username:
          </label>
        </div>
        <div className="form-group">
          <input className="form-input" type="password" id="password" placeholder="Password" />
          <label htmlFor="password" className="form-label">
            Password:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="password"
            id="password_confirmation"
            placeholder="Password Confirmation"
          />
          <label htmlFor="password_confirmation" className="form-label">
            Password Confirmation:
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="register-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
