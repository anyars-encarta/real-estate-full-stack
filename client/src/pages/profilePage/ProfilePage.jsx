import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    const handleLogOut = async () => {
        try {
            const response = apiRequest.post('/auth/logout');
            localStorage.removeItem('user')
            navigate('/');
        } catch(e) {
            console.log(e)
        }
    };

    return (
        <div className='profilePage'>
            <div className="userDetails">
                <div className="wrapper">
                    <div className="userTitle">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="userInfo">
                        <span>Avatar: <img src={currentUser.avatar || '/noavatar.jpg'} alt="user" /></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>E-mail: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogOut}>Logout</button>
                    </div>
                    <div className="userTitle">
                        <h1>My List</h1>
                        <button>Add New Post</button>
                    </div>
                    <List />
                    <div className="userTitle">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>

            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage