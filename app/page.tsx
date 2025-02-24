'use client';
import Landing from "@/components/Landing/Landing";
import { useRouter } from 'next/navigation';
import HomePage from "@/components/Home/Home";
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session, status} = useSession();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (status=='unauthenticated'){
        setIsLoggedIn(false);
    }else if(status == 'authenticated'){
        setIsLoggedIn(true);
    }
}, [status,router])
  
  
  return (
    isLoggedIn ? <HomePage /> : <Landing />
  );
}
