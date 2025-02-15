'use client';

import { useState } from 'react';
import AgentLogInForm from './AgentLogInForm';
import CustomerLogInForm from './CustomerLogInForm';
import Button from '@/components/Buttons/Button';

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
            {activeForm === 'customer' && (
                <div className="flex gap-10 mb-10 w-114">
                    <Button priority="primary" size="md" onClick={activeCustomer} halfWidth>
                        Customer
                    </Button>

                    <Button priority="secondary" size="md" onClick={activeAgent} halfWidth>
                        Agent
                    </Button>
                </div>
            )}
            {activeForm === 'agent' && (
                <div className="flex gap-10 mb-10 w-114">
                    <Button priority="primary" size="md" onClick={activeCustomer} halfWidth>
                        Customer
                    </Button>

                    <Button priority="secondary" size="md" onClick={activeAgent} halfWidth>
                        Agent
                    </Button>
                </div>
            )}

            {/* 활성화된 폼에 따라 조건부 렌더링 */}
            {activeForm === 'customer' && <CustomerLogInForm />}
            {activeForm === 'agent' && <AgentLogInForm />}
        </>
    );
};

export default LogInContainer;
