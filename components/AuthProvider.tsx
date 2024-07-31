
import React, { createContext, useContext, useEffect, useState } from 'react';
import { isLoggedIn, logout } from '@/lib/auth';
import { redirect } from 'next/navigation';


export default function AuthProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  
  
    redirect("/login");
    return <div>{children}</div>
};

