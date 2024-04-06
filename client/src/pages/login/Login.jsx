import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    setError('')
    const formData = new FormData(e.target)

    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await apiRequest.post('/auth/login', {
        username, password,
      });

      updateUser(response.data);

      navigate('/')

    } catch (e) {
      console.log('There was an error:', e)
      setError(e.response.data.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required minLength={6} type="password" placeholder="Password" />
          <button disabled={loading} type='submit'>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login