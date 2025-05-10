import LogInLayout from '../_components/LogInLayout';
import ConsumerLogInForm from './_components/ConsumerLogInForm';

const CustomerLogInPage = () => {
    return (
        <main className="flex flex-col items-center  h-screen overflow-y-scroll">
            <LogInLayout>
                <ConsumerLogInForm />
            </LogInLayout>
        </main>
    );
};

export default CustomerLogInPage;
