import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './profileUpdatePage.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const ProfileUpdatePage = () => {
    const { currentUser, updateUser} = useContext(AuthContext);
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

        // const { username, email, password } = Object.fromEnteries(formData);
        
        try {
            const response = await apiRequest.put(`/users/${currentUser.id}`, {
                username, email, password
            })
            updateUser(response.data);
            navigate('/profile');

        } catch (e) {
            console.log('There was an error', e)
            setError(e.response.data.message)
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='profileUpdatePage'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={currentUser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={currentUser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <button type='submit' disabled={loading}>Update</button>
                    {error && <span>{error}</span>}
                </form>
            </div>
            <div className="sideContainer">
                <img src={currentUser.avatar || '/noavatar.jpg'} alt="" className="avatar" />
            </div>
        </div>
    )
}

export default ProfileUpdatePage