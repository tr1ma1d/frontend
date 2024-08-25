'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthApi from '@/api/auth-api';

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);  // Corrected to boolean
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleLogin called");
        try {
            console.log("Calling loginUser");
            await AuthApi.loginUser(username, password);
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
            <h1 className="title">Sign-In</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"  // Corrected to 'text' instead of 'username'
                    placeholder="Username"
                    value={username}
                    className="textbox"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    className="textbox"
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

                <div className="links-container">
                    <Link href='#'>Forget password?</Link>
                    <Link href='/auth/sign-up'>Sign Up</Link>
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}
