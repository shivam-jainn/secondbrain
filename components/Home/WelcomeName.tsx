import React from 'react'
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function WelcomeName() {
  
  const name = "Shivam";

  return (
    <div className="flex justify-between items-center p-4">
  <div className="text-4xl">Welcome, {name}</div>
  <Button
    onClick={() => signOut({ callbackUrl: "/" })}
    className="bg-[#636363] hover:bg-[#222222]"
  >
    Sign Out
  </Button>
</div>

  )
}
