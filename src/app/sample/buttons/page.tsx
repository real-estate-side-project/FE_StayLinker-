import Button from '@/components/Buttons/Button';
import SingleIconButton from '@/components/Buttons/SingleIconButton';
import TextButton from '@/components/Buttons/TextButton';
import { IoAdd } from 'react-icons/io5';
import { MdOutlineGridView } from 'react-icons/md';

const page = () => {
    return (
        <div className="p-20 flex flex-col items-start justify-start gap-20">
            <div className="flex flex-row border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1">Button</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} />
                        <Button />
                        <Button size={'lg'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} isDisabled />
                        <Button isDisabled />
                        <Button size={'lg'} isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline />
                        <Button outline />
                        <Button size={'lg'} outline />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline isDisabled />
                        <Button outline isDisabled />
                        <Button size={'lg'} outline isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} halfWidth />
                        <Button size={'sm'} halfWidth isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline halfWidth />
                        <Button size={'sm'} outline halfWidth isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button halfWidth />
                        <Button halfWidth isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button outline halfWidth />
                        <Button outline halfWidth isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} halfWidth />
                        <Button size={'lg'} halfWidth isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} outline halfWidth />
                        <Button size={'lg'} outline halfWidth isDisabled />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Button size={'sm'} fullWidth />
                        <Button size={'sm'} fullWidth isDisabled />
                        <Button size={'sm'} outline fullWidth />
                        <Button size={'sm'} outline fullWidth isDisabled />
                        <Button fullWidth />
                        <Button fullWidth isDisabled />
                        <Button outline fullWidth />
                        <Button outline fullWidth isDisabled />
                        <Button size={'lg'} fullWidth />
                        <Button size={'lg'} fullWidth isDisabled />
                        <Button size={'lg'} outline fullWidth />
                        <Button size={'lg'} outline fullWidth isDisabled />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1 text-white">Left Icon</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} icon={<IoAdd />} />
                        <Button icon={<IoAdd />} />
                        <Button size={'lg'} icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} isDisabled icon={<IoAdd />} />
                        <Button isDisabled icon={<IoAdd />} />
                        <Button size={'lg'} isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline icon={<IoAdd />} />
                        <Button outline icon={<IoAdd />} />
                        <Button size={'lg'} outline icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline isDisabled icon={<IoAdd />} />
                        <Button outline isDisabled icon={<IoAdd />} />
                        <Button size={'lg'} outline isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} halfWidth icon={<IoAdd />} />
                        <Button size={'sm'} halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline halfWidth icon={<IoAdd />} />
                        <Button size={'sm'} outline halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button halfWidth icon={<IoAdd />} />
                        <Button halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button outline halfWidth icon={<IoAdd />} />
                        <Button outline halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} halfWidth icon={<IoAdd />} />
                        <Button size={'lg'} halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} outline halfWidth icon={<IoAdd />} />
                        <Button size={'lg'} outline halfWidth isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Button size={'sm'} fullWidth icon={<IoAdd />} />
                        <Button size={'sm'} fullWidth isDisabled icon={<IoAdd />} />
                        <Button size={'sm'} outline fullWidth icon={<IoAdd />} />
                        <Button size={'sm'} outline fullWidth isDisabled icon={<IoAdd />} />
                        <Button fullWidth icon={<IoAdd />} />
                        <Button fullWidth isDisabled icon={<IoAdd />} />
                        <Button outline fullWidth icon={<IoAdd />} />
                        <Button outline fullWidth isDisabled icon={<IoAdd />} />
                        <Button size={'lg'} fullWidth icon={<IoAdd />} />
                        <Button size={'lg'} fullWidth isDisabled icon={<IoAdd />} />
                        <Button size={'lg'} outline fullWidth icon={<IoAdd />} />
                        <Button size={'lg'} outline fullWidth isDisabled icon={<IoAdd />} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1 text-white">Right Icon</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} icon={<IoAdd />} iconPosition="right" />
                        <Button icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline icon={<IoAdd />} iconPosition="right" />
                        <Button outline icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} outline icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button outline isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} outline isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'sm'} halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'sm'} outline halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'sm'} outline halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button outline halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button outline halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <Button size={'lg'} outline halfWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} outline halfWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <Button size={'sm'} fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'sm'} fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button size={'sm'} outline fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'sm'} outline fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button outline fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button outline fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} outline fullWidth icon={<IoAdd />} iconPosition="right" />
                        <Button size={'lg'} outline fullWidth isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-1">Text Button</h1>
                    <div className="flex gap-2 items-center pb-2">
                        <TextButton size={'sm'} />
                        <TextButton />
                        <TextButton size={'lg'} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <TextButton size={'sm'} isDisabled />
                        <TextButton isDisabled />
                        <TextButton size={'lg'} isDisabled />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <TextButton size={'sm'} icon={<IoAdd />} />
                        <TextButton icon={<IoAdd />} />
                        <TextButton size={'lg'} icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <TextButton size={'sm'} isDisabled icon={<IoAdd />} />
                        <TextButton isDisabled icon={<IoAdd />} />
                        <TextButton size={'lg'} isDisabled icon={<IoAdd />} />
                    </div>
                    <div className="flex gap-2 items-center pb-2">
                        <TextButton size={'sm'} icon={<IoAdd />} iconPosition="right" />
                        <TextButton icon={<IoAdd />} iconPosition="right" />
                        <TextButton size={'lg'} icon={<IoAdd />} iconPosition="right" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <TextButton size={'sm'} isDisabled icon={<IoAdd />} iconPosition="right" />
                        <TextButton isDisabled icon={<IoAdd />} iconPosition="right" />
                        <TextButton size={'lg'} isDisabled icon={<IoAdd />} iconPosition="right" />
                    </div>
                </div>
            </div>
            <div className="flex border-2 p-6 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold pb-3">Single Icon Button</h1>
                    <div className="flex gap-10">
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton icon={<MdOutlineGridView />} />
                                <SingleIconButton size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton size={'sm'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton size={'lg'} isDisabled icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton priority={'secondary'} size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'secondary'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'secondary'} size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton
                                    priority={'secondary'}
                                    size={'sm'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                                <SingleIconButton priority={'secondary'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton
                                    priority={'secondary'}
                                    size={'lg'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                            </div>
                            <div className="flex gap-2 items-center pb-2">
                                <SingleIconButton priority={'tertiary'} size={'sm'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'tertiary'} icon={<MdOutlineGridView />} />
                                <SingleIconButton priority={'tertiary'} size={'lg'} icon={<MdOutlineGridView />} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <SingleIconButton
                                    priority={'tertiary'}
                                    size={'sm'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                                <SingleIconButton priority={'tertiary'} isDisabled icon={<MdOutlineGridView />} />
                                <SingleIconButton
                                    priority={'tertiary'}
                                    size={'lg'}
                                    isDisabled
                                    icon={<MdOutlineGridView />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
