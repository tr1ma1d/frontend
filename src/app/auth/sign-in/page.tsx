
'use client'

import React, { useState } from 'react'


export default function SignInPage() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        AuthApi.loginUser(username, password);
    }

    return (
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
            {error && <p>{error}</p>}
        </form>
    );
}
