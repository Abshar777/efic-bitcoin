"use client"
import React, { useState } from 'react';
import { CircleDot, CircleDotDashed, MessageCircle, Wallet } from 'lucide-react';
import RegistrationInEfic from '@/components/page-section/presale/registration';
import Information from '@/components/page-section/presale/information';

function App() {
  const [upline, setUpline] = useState('');
  
  const steps = [
    { id: 'wallet', label: 'Wallet not detected', icon: Wallet, status: 'error' },
    { id: 'network', label: 'Network', icon: CircleDot, status: 'success' },
    { id: 'registration', label: 'Registration', icon: CircleDot, status: 'success' },
    { id: 'balance', label: 'Balance', icon: CircleDotDashed, status: 'pending' },
    { id: 'approve', label: 'Approve BUSD', icon: CircleDotDashed, status: 'pending' },
  ];

  return (
    <div className='gridAnim w-full'>
        <RegistrationInEfic/>
        <Information/>
    </div>
  );
}

export default App;