import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.scss';

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('onSubmit: ');
    console.log(data);
  };

  console.log('errors: ', errors);

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className={errors.first_name ? 'form-input errors' : 'form-input'}
            type="text"
            id="first_name"
            placeholder="First Name"
            {...register('first_name', { required: true })}
          />
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
          {errors.first_name && <div className="error">First name is required.</div>}
        </div>
        <div className="form-group">
          <input
            className={errors.last_name ? 'form-input errors' : 'form-input'}
            type="text"
            id="last_name"
            placeholder="Last Name"
            {...register('last_name', { required: true })}
          />
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
          {errors.last_name && <div className="error">Last name is required.</div>}
        </div>
        <div className="form-group">
          <input
            className={errors.phone_number ? 'form-input errors' : 'form-input'}
            type="tel"
            id="phone_number"
            placeholder="Phone Number"
            {...register('phone_number', {
              required: true,
              pattern: /^(\+?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
            })}
          />
          <label htmlFor="phone_number" className="form-label">
            Phone Number:
          </label>
          {errors.phone_number && (
            <div className="error">
              {' '}
              {errors.phone_number.type === 'required'
                ? 'Phone number is required.'
                : 'Please enter a valid phone number.'}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            className={errors.email ? 'form-input errors' : 'form-input'}
            type="email"
            id="email"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          {errors.email && (
            <div className="error">
              {' '}
              {errors.email.type === 'required'
                ? 'Email is required.'
                : 'Please enter a valid email address.'}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            className={errors.username ? 'form-input errors' : 'form-input'}
            type="text"
            id="username"
            placeholder="Username"
            {...register('username', { required: true })}
          />
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          {errors.username && <div className="error">Username is required.</div>}
        </div>
        <div className="form-group">
          <input
            className={errors.password ? 'form-input errors' : 'form-input'}
            type="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true, minLength: 12 })}
          />
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          {errors.password && (
            <div className="error">
              {errors.password && errors.password.type === 'required' && (
                <div className="error">Password is required</div>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <div className="error">Password must be at least 12 characters.</div>
              )}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            className={errors.password_confirmation ? 'form-input errors' : 'form-input'}
            type="password"
            id="password_confirmation"
            placeholder="Password"
            {...register('password_confirmation', { required: true, minLength: 12 })}
          />
          <label htmlFor="password_confirmation" className="form-label">
            Password Confirmation:
          </label>
          {errors.password_confirmation && (
            <div className="error">
              {errors.password_confirmation && errors.password_confirmation.type === 'required' && (
                <div className="error">Password is required</div>
              )}
              {errors.password_confirmation && errors.password_confirmation.type === 'minLength' && (
                <div className="error">Password must be at least 12 characters.</div>
              )}
            </div>
          )}
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
