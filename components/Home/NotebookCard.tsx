import React, { ReactNode } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import { BsThreeDots } from "react-icons/bs";

export default function NotebookCard({icon}:{
    icon:ReactNode
}) {
  return (
    <Card>
        <CardHeader>
            {icon}

            <Button>
                <BsThreeDots />
            </Button>
        </CardHeader>
    </Card>
  )
}
