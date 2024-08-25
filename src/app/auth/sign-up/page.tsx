
'use client'

import AuthApi from '@/api/auth-api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleLogin called");
        try {
            console.log("Calling loginUser");
            await AuthApi.registerUser(username, password, email);
            router.push('/messanger/users');
        } catch (err) {
            setError('Login failed');
            alert('Login failed');
        }
    };
    const showPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordVisible(e.target.checked);
    }


    return (
        <div className="form">

            <h1 className="title">Sign-Up</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="username"
                    placeholder="Username"
                    className='textbox'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type={passwordVisible ? 'password' : 'text'}
                    placeholder="Password"
                    className='textbox'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="show-password">
                    <input
                        type="checkbox"
                        className="password-check"  // Corrected className
                        id="show-password"
                        onChange={showPassword}  // Changed to onChange
                    />
                    <span>Show Password</span>
                </label>
                <input 
                    type="email" 
                    placeholder="Email"
                    className='textbox'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}