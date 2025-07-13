import React from 'react';
import './Login.scss';

export const Login: React.FC = () => {
  return (
    <div className="login-container">
      <form className="login-form">
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
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
      <div className="page-text">
        Not a registered user?&nbsp;
        <a href="/register">Sign Up</a>
      </div>
    </div>
  );
};
