import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.scss';

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleRegister: ');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleRegister(e)}>
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
          <input className="form-input" type="email" id="email" placeholder="Email" />
          <label htmlFor="email" className="form-label">
            Email:
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
