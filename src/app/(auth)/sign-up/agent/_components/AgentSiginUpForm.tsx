'use client';

import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useModal } from '@/providers/ModalProvider';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';
import { MdKeyboardArrowRight } from 'react-icons/md';

const AgentSiginUpForm = () => {
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });
    const onSubmit = (data: any) => {
        console.log('Form submitted:', JSON.stringify(data, null, 2));
    };
    const modal = useModal();
    const handleOpenAgencySearchModal = () => {
        modal.open({
            message: 'Modal message...',
            onConfirm: () => modal.close(),
            hasCancel: false,
            confirmButtonContent: { children: '검색' }
        });
    };

    return (
        <main className="flex flex-col items-center justify-center mt-3 py-16">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="w-[700px]">
                    <div className="flex flex-col w-full mb-4 gap-12">
                        <section>
                            <p className="pc-title-l-700 mb-10 text-center">Agent Join</p>
                            <p className="pc-body-s-500 text-center text-information200">
                                • 국가공간정보포털의 부동산중개업 정보에 등록된 대표 공인중개사만 회원가입이 가능합니다.
                            </p>
                            <p className="pc-body-s-500 text-center text-information200">
                                • 스테이링커는 중개사무소를 개설 등록한 대표자(개업공인중개사)가 회원가입 가능합니다.
                            </p>
                        </section>

                        <section className="flex  justify-between ">
                            <div className="flex flex-col gap-3">
                                <p className="pc-title-s-700">중개사무소 조회</p>
                                <p className="pc-body-m-500  text-information200">
                                    조회하기 버튼 클릭 후, 중개사무소를 검색하면 관련 정보가 자동입력 됩니다.
                                </p>
                            </div>
                            <div className="w-[100px] h-[43px] mt-3">
                                <Button priority="secondary" onClick={handleOpenAgencySearchModal}>
                                    조회하기
                                </Button>
                            </div>
                        </section>
                        <Input
                            name="phoneNumber"
                            label="중개사무소 전화번호"
                            placeholder="‘-’ 없이 입력해주세요."
                            maxLength={30}
                        />
                        <Input
                            name="registrationCode"
                            label="부동산 사무실 등록번호"
                            placeholder="‘-’ 를 반드시 포함해주세요."
                            maxLength={30}
                        />
                        <Input
                            name="businessCode"
                            label="사업자 등록번호"
                            placeholder="‘-’ 없이 입력해주세요."
                            maxLength={30}
                        />
                        <p className="pc-title-s-700">서류제출</p>
                        <div className="flex flex-col w-full items-center justify-center gap-4 mt-8">
                            <Button priority="primary" size="md" halfWidth>
                                <p className="flex items-center justify-center gap-2 pc-body-l-500">
                                    다음
                                    <MdKeyboardArrowRight />
                                </p>
                            </Button>
                            <div className="flex w-full justify-center text-gray-500 text-[16px]">
                                <p>
                                    Already have an account?
                                    <Link href={`/log-in/agent`}>
                                        <span className="text-sub500 underline"> Login</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </main>
    );
};

export default AgentSiginUpForm;
