
'use client'

import AuthApi from '@/api/auth-api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleLogin called");
        try {
            console.log("Calling loginUser");
            await AuthApi.registerUser(username, password, email);
            router.push('/auth/sign-up');
        } catch (err) {
            setError('Login failed');
            alert('Login failed');
        }
    };
    


    return (
        <div className="form">

            <h1 className="title">Sign-Up</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}