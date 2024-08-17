'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
        <div>
            <div>{children}</div>
        </div>
    );
}
