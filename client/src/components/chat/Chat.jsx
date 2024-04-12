import React, { useContext, useState } from 'react';
import { format } from 'timeago.js';

import './chat.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const Chat = ({ chats }) => {
    const [chat, setChat] = useState(null);
    const { currentUser } = useContext(AuthContext);

    const handleOpenChat = async (id, receiver) => {
        try {
            const response = await apiRequest('/chats/' + id);
            setChat({ ...response.data, receiver });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                {chats?.map((c) => (
                    <div
                        className="message"
                        key={c.id}
                        style={{ backgroundColor: c.seenBy.includes(currentUser.id) ? 'white' : '#fecd514e' }}
                        onClick={() => handleOpenChat(c.id, c.receiver)}
                    >
                        <img src={c.receiver.avatar || '/noavatar.jpg'} alt={c.receiver.username} />
                        <span>{c.receiver.username}</span>
                        <p>{c.lastMessage}</p>
                    </div>
                ))}
            </div>

            {chat ? (
                <div className="chatBox">
                    <div className="chatTop">
                        <div className="chatUser">
                            <img src={chat.receiver.avatar || '/noavatar.jpg'} alt="" />
                            {chat.receiver.username}
                        </div>
                        <div className="chatClose" onClick={() => setChat(false)}>
                            <img src="/close.png" alt="" />
                        </div>
                    </div>
                    <div className="chatCenter">
                        {chat.messages.map(message => (
                            <div className={message.userId === currentUser.id ? "chatMessage own" : "chatMessage"}
                                // style={{
                                //     alignSelf: message.userId === currentUser.id ? 'flex-end' : 'flex-start',
                                //     textAlign: message.userId === currentUser.id ? 'right' : 'left'
                                // }}
                                key={message.id}>
                                <img src={message.userId === currentUser.id ? chat.receiver.avatar || '/noavatar.jpg' : '/noavatar.jpg'} alt="" />
                                <div className="chatText">
                                    <p>{message.text}</p>
                                    <span>{format(message.createdAt)}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="chatBottom">
                        <textarea name="message" id="message" cols="30" rows="10" />
                        <button>Send</button>
                    </div>
                </div>
            ) : (
                <div className='startChat'>Click on a chat to Start Chatting</div>
            )}
        </div>
    )
}

export default Chat