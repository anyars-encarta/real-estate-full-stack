import React, { useContext, useState, useEffect, useRef } from 'react';
import { format } from 'timeago.js';

import './chat.scss';
import { AuthContext } from '../../context/AuthContext';
import { SocketContext } from '../../context/SocketContext';
import apiRequest from '../../lib/apiRequest';

const Chat = ({ chats }) => {
    const [chat, setChat] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const { socket } = useContext(SocketContext);

    const messageEndRef = useRef();

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior: "smooth"})
    }, [chat]);
    
    const handleOpenChat = async (id, receiver) => {
        try {
            const response = await apiRequest('/chats/' + id);
            setChat({ ...response.data, receiver });
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const text = formData.get('message');

        if (!text) return;
        try {
            const response = await apiRequest.post('/messages/' + chat.id, { text });
            setChat(prev => ({ ...prev, messages: [...prev.messages, response.data] }));
            e.target.reset();
            socket.emit("sendMessage", {
                receiverId: chat.receiver.id,
                data: response.data,
            })
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const read = async () => {
            try {
                await apiRequest.put('/chats/read/' + chat.id)
            } catch (err) {
                console.log(err)
            }
        };

        if (chat && socket) {
            socket.on("getMessage", (data) => {
                if (chat.id === data.chatId) {
                    setChat(prev => ({ ...prev, messages: [...prev.messages, data] }));
                    read();
                }
            })
        }
    }, [socket, chat])

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                {chats?.map((c) => (
                    <div
                        className="message"
                        key={c.id}
                        style={{ backgroundColor: c.seenBy.includes(currentUser.id) || chat?.id === c.id ? 'white' : '#fecd514e' }}
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

                        <div ref={messageEndRef} ></div>
                    </div>
                    <form onSubmit={handleSubmit} className="chatBottom">
                        <textarea name="message" id="message" cols="30" rows="10" />
                        <button type='subnit'>Send</button>
                    </form>
                </div>
            ) : (
                <div className='startChat'>Click on a chat to Start Chatting</div>
            )}
        </div>
    )
}

export default Chat