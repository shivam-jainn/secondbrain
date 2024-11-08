import React, { ReactNode } from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { BsThreeDots } from 'react-icons/bs';

export default function NotebookCard({
  icon,
  name,
  createdon,
}: {
  icon: ReactNode;
  name: String;
  createdon: Date;
}) {
  return (
    <Card className="max-w-sm min-h-[320px] p-4 flex flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row items-center justify-between p-0">
          <p className="text-3xl">{icon}</p>

          <Button variant="ghost">
            <BsThreeDots />
          </Button>
        </CardHeader>

        <CardTitle className="text-5xl py-2">{name}</CardTitle>
      </div>

      <CardFooter className="p-0">
        <p>{createdon.toDateString()}</p>
      </CardFooter>
    </Card>
  );
}
