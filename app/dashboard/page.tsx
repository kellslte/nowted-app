"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

type Props = {}

const Dashboard = (props: Props) => {

  return (
    <div className="min-h-screen h-full w-full px-8 flex flex-1 flex-grow max-w-screen">
      Dashboard
    </div>
  );
}

export default Dashboard;