'use client';

import Checkbox from '@/components/Inputs/Checkbox';
import { useFormContext, useWatch } from 'react-hook-form';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const TermsSection = () => {
    const { setValue, getValues, control } = useFormContext();
    const allAgree = useWatch({ control, name: 'allAgree' });

    const handleAllAgreeChange = (nextState: any) => {
        const newValue = nextState === 'on' ? 'on' : 'off';

        // 전체 약관 이름 배열
        const terms = [
            'age',
            'termsOfUse',
            'privacyPolicy',
            'thirdPartyConsent',
            'locationConsent',
            'marketingConsent'
        ];

        terms.forEach((term) => {
            setValue(term, newValue); // 각 항목 업데이트
        });
    };

    return (
        <div className="w-[700px] inline-flex flex-col justify-start items-start gap-3">
            {/* 전체 동의 */}
            <div className=" h-[55px] w-full bg-bg50 flex items-center justify-start pl-4">
                <Checkbox name="allAgree" mode="on-off" handleChangeState={handleAllAgreeChange}>
                    회원가입 약관 전체 동의하기
                </Checkbox>
            </div>

            {/* 필수 약관 */}
            <div className="px-4 inline-flex flex-col justify-start items-start gap-3 w-full">
                <Checkbox name="age" mode="on-off">
                    <div className="flex items-center justify-around gap-2">[필수] 만 14세 이상입니다.</div>
                </Checkbox>
                <Checkbox name="termsOfUse" mode="on-off">
                    <div className="flex items-center justify-around gap-2">
                        [필수] 이용약관 동의
                        <MdOutlineArrowForwardIos
                            onClick={() => window.open('/terms', '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </Checkbox>
                <Checkbox name="privacyPolicy" mode="on-off">
                    <div className="flex items-center justify-around gap-2">
                        [필수] 개인정보 수집 및 이용 동의
                        <MdOutlineArrowForwardIos
                            onClick={() => window.open('/privacy', '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </Checkbox>
                <Checkbox name="thirdPartyConsent" mode="on-off">
                    <div className="flex items-center justify-around gap-2">
                        [필수] 개인정보 제3자 제공 동의
                        <MdOutlineArrowForwardIos
                            onClick={() => window.open('/thirdparty', '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </Checkbox>
                <Checkbox name="locationConsent" mode="on-off">
                    <div className="flex items-center justify-around gap-2">
                        [필수] 위치정보 이용약관 동의
                        <MdOutlineArrowForwardIos
                            onClick={() => window.open('/location', '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </Checkbox>
                <Checkbox name="marketingConsent" mode="on-off">
                    <div className="flex items-center justify-around gap-2">
                        [선택] 마케팅 수신 동의
                        <MdOutlineArrowForwardIos
                            onClick={() => window.open('/marketing', '_blank')}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </Checkbox>
            </div>
        </div>
    );
};

export default TermsSection;
