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
            <p className="font-bold text-[28px] mb-[40px]">LogIn</p>
            {activeForm === 'customer' && (
                <div className="flex gap-[40px] mb-[40px]">
                    <Button priority="primary" size="md" onClick={activeCustomer} width="207px" height="43px">
                        Customer
                    </Button>

                    <Button priority="secondary" size="md" onClick={activeAgent} width="207px" height="43px">
                        Agent
                    </Button>
                </div>
            )}
            {activeForm === 'agent' && (
                <div className="flex gap-[40px] mb-[40px]">
                    <Button priority="secondary" size="md" onClick={activeCustomer} width="207px" height="43px">
                        Customer
                    </Button>
                    <Button priority="primary" size="md" onClick={activeAgent} width="207px" height="43px">
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
