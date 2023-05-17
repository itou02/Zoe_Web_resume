import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Board = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const createMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/messages', { content: newMessage });
            setMessages([...messages, response.data]);
            setNewMessage('');
        } catch (error) {
            console.error('Error creating message:', error);
        }
    };

    const updateMessage = async (id, content) => {
        try {
            await axios.put(`http://localhost:8000/api/messages/${id}`, { content });
            fetchMessages();
        } catch (error) {
            console.error('Error updating message:', error);
        }
    };

    const deleteMessage = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/messages/${id}`);
            fetchMessages();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        <div>
            <h2>Message Board</h2>
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button onClick={createMessage}>Add Message</button>
            </div>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <input
                            type="text"
                            value={message.content}
                            onChange={(e) => updateMessage(message.id, e.target.value)}
                        />
                        <button onClick={() => deleteMessage(message.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Board;