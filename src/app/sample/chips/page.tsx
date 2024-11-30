import ChipSample from './_components/ChipSample';
import DeletableChipSample from './_components/DeletableChipSample';

const page = () => {
    return (
        <div className="p-20 flex items-start justify-start gap-10">
            <ChipSample />
            <DeletableChipSample />
        </div>
    );
};

export default page;
