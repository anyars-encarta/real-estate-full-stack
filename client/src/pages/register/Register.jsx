import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import apiRequest from '../../lib/apiRequest';

import './register.scss';

const Register = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError('')
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await apiRequest.post('/auth/register', {
                username, email, password
            })

            navigate('/login');

        } catch (e) {
            console.log('There was an error', e)
            setError(e.response.data.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
                    <input name="email" required type="text" placeholder="Email" />
                    <input name="password" required minLength={6} type="password" placeholder="Password" />
                    <button type='submit' disabled={loading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register