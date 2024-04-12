import React, { useContext, useState } from 'react';
import './chat.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const Chat = ({ chats }) => {
    const [chat, setChat] = useState(null);
    const { currentUser } = useContext(AuthContext)

    console.log(chats)

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
                            <div className="chatMessage own" key={message.id}>
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <div className="chatText">
                                    <p>{message.text}</p>
                                    <span>1 hour ago</span>
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