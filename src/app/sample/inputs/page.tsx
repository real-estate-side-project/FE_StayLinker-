import InputSample from './_components/InputSample';
import SearchBarSample from './_components/SearchBarSample';
import TextareaSample from './_components/TextareaSample';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-10">
            <SearchBarSample />
            <InputSample />
            <TextareaSample />
        </div>
    );
};

export default page;
