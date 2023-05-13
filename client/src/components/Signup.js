import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../utils/auth';

const Signup = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, errors } = await signup(formData);

    if (!success) {
      setFormErrors(errors);
      return;
    }

    history.push('/profile');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {formErrors.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
};

export default Signup;
