import ModalSample from './_component/ModalSample';
import ToastSample from './_component/ToastSample';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-2">
            <ToastSample />
            <ModalSample />
        </div>
    );
};

export default page;
