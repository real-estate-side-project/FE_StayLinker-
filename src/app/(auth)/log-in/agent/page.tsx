import LogInLayout from '../_components/LogInLayout';
import AgentLogInForm from './_components/AgentLogInForm';

const AgentLogInPage = () => {
    return (
        <main className="flex flex-col items-center h-screen overflow-y-scroll">
            <LogInLayout>
                <AgentLogInForm />
            </LogInLayout>
        </main>
    );
};

export default AgentLogInPage;
