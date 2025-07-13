import React, { ChangeEvent, useState, useEffect } from 'react';
import './Register.scss';

export const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleRegister:');
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);
    console.log('phone number: ', phoneNumber);
    console.log('email: ', email);
    console.log('username:', username);
    console.log('password: ', password);
    console.log('password confirmation: ', passwordConfirmation);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={(e) => handleRegister(e)}>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="first_name"
            placeholder="First Name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="tel"
            id="phone_number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="phone_number" className="form-label">
            Phone Number:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <label htmlFor="username" className="form-label">
            Username:
          </label>
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
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
            value={passwordConfirmation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
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
