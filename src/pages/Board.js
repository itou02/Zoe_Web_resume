import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageBoard = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [editMessageId, setEditMessageId] = useState(null);
    const [editedMessage, setEditedMessage] = useState('');

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
            setEditMessageId(null);
            setEditedMessage('');
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

    const startEditingMessage = (id, content) => {
        setEditMessageId(id);
        setEditedMessage(content);
    };

    const cancelEditingMessage = () => {
        setEditMessageId(null);
        setEditedMessage('');
    };

    const saveEditedMessage = () => {
        updateMessage(editMessageId, editedMessage);
    };

    return (
        <div className="flex items-center justify-center h-[70vh] mt-[3%] bg-gray-100 shadow">
            <div className="bg-white rounded-lg shadow-md p-6 max-h-[75%] overflow-auto">
                <h2 className="text-2xl font-bold mb-4">留言給我吧</h2>
                <div className="flex">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
                    />
                    <button
                        onClick={createMessage}
                        className="bg-[#b09379] text-white px-4 py-2 rounded-md"
                    >
                        留言
                    </button>
                </div>
                <ul className="mt-4">
                    {messages.map((message) => (
                        <li key={message.id} className="flex items-center mb-2">
                            {editMessageId === message.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedMessage}
                                        onChange={(e) => setEditedMessage(e.target.value)}
                                        className=" border border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
                                    />
                                    <button
                                        onClick={saveEditedMessage}
                                        className="bg-[#ce8f50] text-white px-2 py-1 rounded-md mr-2"
                                    >
                                        儲存
                                    </button>
                                    <button
                                        onClick={cancelEditingMessage}
                                        className="bg-[#a79889] text-white px-2 py-1 rounded-md">
                                        取消
                                    </button>
                                </>
                            ) : (
                                <><span className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center text-gray-500 text-sm font-semibold mr-2">
                                    {message.id}
                                </span>
                                    <span className="flex-grow">{message.content}</span>
                                    <button
                                        onClick={() => startEditingMessage(message.id, message.content)}
                                        className="bg-[#878686] text-white px-2 py-1 rounded-md ml-2"
                                    >
                                        編輯
                                    </button>
                                    <button
                                        onClick={() => deleteMessage(message.id)}
                                        className="bg-[#ce6030] text-white px-2 py-1 rounded-md ml-2"
                                    >
                                        刪除
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MessageBoard;