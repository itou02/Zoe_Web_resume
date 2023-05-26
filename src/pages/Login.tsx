import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Access Token:', data);
                if(data.user!=null)
                    navigate('/');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[70vh] mt-[3%]  bg-gray-100 shadow">
            <div className="bg-white rounded-lg p-8 shadow-md">
                <h1 className="text-2xl font-bold mb-4">登入</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">
                            電子信箱:
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="border border-gray-300 px-4 py-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            密碼:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-gray-300 px-4 py-2 rounded w-full"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-[#826b56] text-white px-4 py-2 rounded hover:bg-[#9c7e61]"
                    >
                        登入
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;