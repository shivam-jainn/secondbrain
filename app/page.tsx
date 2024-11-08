"use client";
import Landing from "@/components/Landing/Landing";
import HomePage from "@/components/Home/Home";

export default function Home() {
  const isLoggedIn = true;
  return (
    isLoggedIn ? <HomePage /> : <Landing />
  );
}
