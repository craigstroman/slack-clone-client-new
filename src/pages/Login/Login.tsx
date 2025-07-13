import React from 'react';
import './Login.scss';

export const Login: React.FC = () => {
  return (
    <div className="login-container">
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
        <button type="submit" className="form-button">
          Login
        </button>
      </div>
    </div>
  );
};
