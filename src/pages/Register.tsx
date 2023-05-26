import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import axios from 'axios';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };
    const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : '';
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleRegister = async () => {

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    // 添加 Sanctum CSRF 欄位
                    'X-CSRF-TOKEN': csrfToken ?? '',
                    // 'X-CSRF-TOKEN': csrfToken,
                    // "X-CSRF-TOKEN": document.querySelector('meta[name="csrftoken"]'),
                    // 'X-XSRF-TOKEN': document.querySelector('meta[name="csrf-token"]'),
                },
                body: JSON.stringify({ name, email, password, password_confirmation: confirmPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful,',data);
                localStorage.setItem('token',data.access_token);
                if(data.message==="Registration successful")
                navigate('/login');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };
    // const handleRegister = async () => {
    //     try {
    //         const response = await fetch('/api/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, password, password_confirmation: confirmPassword }),
    //         });

    //         if (response.ok) {
    //             // 註冊成功的處理
    //             console.log('Registration successful');
    //         } else {
    //             // 註冊失敗的處理
    //             console.error('Registration failed');
    //         }
    //     } catch (error) {
    //         // 請求失敗的處理
    //         console.error('Request failed:', error);
    //     }
    // };

    return (
        <div className="flex items-center justify-center h-[70vh] mt-[3%] bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded">
                <h1 className="text-2xl font-bold mb-4">註冊</h1>
                <div className='grid grid-cols-2 gap-x-4'>
                    <div className="mb-4">
                        <label className="block mb-2">名稱：</label>
                        <input type="text" value={name} onChange={handleNameChange} className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">電子信箱：</label>
                        <input type="email" value={email} onChange={handleEmailChange} className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">密碼：</label>
                        <input type="password" value={password} onChange={handlePasswordChange} className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">確認密碼：</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="w-full border border-gray-300 px-3 py-2 rounded" />
                    </div>
                </div>
                <button onClick={handleRegister} className="bg-[#826b56] text-white px-4 py-2 rounded hover:bg-[#9c7e61]">
                    註冊
                </button>
                <a href='/login' className=' mt-1 w-full flex justify-end'>已有帳號？</a>
            </div>
        </div>
    );
};


export default Register;