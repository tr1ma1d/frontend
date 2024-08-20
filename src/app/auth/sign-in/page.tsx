
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import AuthApi from '@/api/auth-api';

export default function SignInPage() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleLogin called");
        try {
            console.log("Calling loginUser");
            // await AuthApi.loginUser(username, password);
            router.push('/auth/sign-up');
        } catch (err) {
            setError('Login failed');
            alert('Login failed');
        }
    };





    return (
        <div className="form">

            <h1 className="title">Sign-In</h1>
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
                <button type="submit">Login</button>
            </form>
        </div>

    );
}
// {error && <p>{error}</p>}
