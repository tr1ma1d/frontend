'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Montserrat } from "next/font/google";



import './Auth.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        // Здесь можно настроить логику перенаправления
        const isLoggedIn = false; // Замените на логику проверки аутентификации

        if (!isLoggedIn) {
            router.push('/auth/sign-in');
        }
    }, [router]);

    return (
        <div className ="auth-container">
            {children}
        </div>
    );
}
