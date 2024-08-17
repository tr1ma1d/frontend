
'use client'


import { useRouter } from "next/router";
import React, { useEffect } from "react";


export default function Home() {
  const {push} = useRouter();
  useEffect(() => {
    push('/auth/sign-in');
  }, [push]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
