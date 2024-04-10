import React, { Suspense, useContext } from 'react';
import { useNavigate, Link, Await } from 'react-router-dom';

import './profilePage.scss';
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';
import { useLoaderData } from 'react-router';

const ProfilePage = () => {
    const data = useLoaderData();
    const { updateUser, currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await apiRequest.post('/auth/logout');
            updateUser(null);
            navigate('/');
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className='profilePage'>
            <div className="userDetails">
                <div className="wrapper">
                    <div className="userTitle">
                        <h1>User Information</h1>
                        <Link to={'/profile/update'}>
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="userInfo">
                        <span>Avatar: <img src={currentUser.avatar || '/noavatar.jpg'} alt="user" /></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>E-mail: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogOut}>Logout</button>
                    </div>
                    <div className="userTitle">
                        <h1>My List</h1>
                        <Link to={'/add'}>
                            <button>Add New Post</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >

                            {(postResponse) => <List posts={postResponse.data.userPosts} />}
                        </Await>
                    </Suspense>
                    <div className="userTitle">
                        <h1>Saved List</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >

                            {(postResponse) => <List posts={postResponse.data.savedPosts} />}
                        </Await>
                    </Suspense>
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