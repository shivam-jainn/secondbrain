import React from 'react';
import { Button } from '../ui/button';
import NotebookCard from './NotebookCard';

export default function NotebookGrids() {
  const nbarray = [
    {
      icon: '📒',
      name: 'Untitled 1',
      date_of_creation: new Date('2024-12-18'),
    },
    // Add more items to test the grid layout
    {
      icon: '📘',
      name: 'Notebook 2',
      date_of_creation: new Date('2024-11-15'),
    },
    {
      icon: '📙',
      name: 'Notebook 3',
      date_of_creation: new Date('2024-10-10'),
    },
    {
      icon: '📕',
      name: 'Notebook 4',
      date_of_creation: new Date('2024-09-05'),
    },
    {
      icon: '📒',
      name: 'Untitled 1',
      date_of_creation: new Date('2024-12-18'),
    },
    // Add more items to test the grid layout
    {
      icon: '📘',
      name: 'Notebook 2',
      date_of_creation: new Date('2024-11-15'),
    },
    {
      icon: '📙',
      name: 'Notebook 3',
      date_of_creation: new Date('2024-10-10'),
    },
    {
      icon: '📕',
      name: 'Notebook 4',
      date_of_creation: new Date('2024-09-05'),
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-4  p-4">
        <h3 className="text-4xl">Your Notebooks</h3>
        <Button>New +</Button>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4">
        {nbarray.map((notebook, index) => (
          <NotebookCard
            key={index}
            icon={notebook.icon}
            name={notebook.name}
            createdon={notebook.date_of_creation}
          />
        ))}
      </div>
    </div>
  );
}
