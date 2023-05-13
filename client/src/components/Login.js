import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../utils/auth';

const Login = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const data = await login({ email, password });

      localStorage.setItem('token', data.token);
      setAuth(true);
      history.push('/profile');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
