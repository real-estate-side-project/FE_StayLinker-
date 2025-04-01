'use client';

import { useState } from 'react';
import AgentLogInForm from './AgentLogInForm';
import Button from '@/components/Buttons/Button';
import ConsumerLogInForm from './ConsumerLogInForm';

const LogInContainer = () => {
    const [activeForm, setActiveForm] = useState('customer');

    const activeCustomer = () => {
        setActiveForm('customer');
    };
    const activeAgent = () => {
        setActiveForm('agent');
    };

    return (
        <>
            <p className="font-bold text-[28px] mb-10">LogIn</p>
            <div className="flex gap-10 mb-10 w-114">
                <Button
                    priority={activeForm === 'customer' ? 'primary' : 'secondary'}
                    size="md"
                    onClick={activeCustomer}
                    halfWidth
                >
                    Customer
                </Button>
                <Button
                    priority={activeForm === 'agent' ? 'primary' : 'secondary'}
                    size="md"
                    onClick={activeAgent}
                    halfWidth
                >
                    Agent
                </Button>
            </div>

            {activeForm === 'customer' && <ConsumerLogInForm />}
            {activeForm === 'agent' && <AgentLogInForm />}
        </>
    );
};

export default LogInContainer;
