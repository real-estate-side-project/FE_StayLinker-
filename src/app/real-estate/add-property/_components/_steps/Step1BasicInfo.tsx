import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { useFormContext } from 'react-hook-form';

const Step1BasicInfo = () => {
    const { register } = useFormContext();

    return (
        <div className="space-y-8">
            {/* 매물 종류 */}
            <section>
                <h2 className="text-xl font-semibold mb-2">매물 종류</h2>
                <div className="grid grid-cols-4 gap-2">
                    {['아파트', '빌라(투룸이상)', '원룸(스튜디오)', '주택', '오피스텔', '쉐어하우스', '고시원'].map(
                        (type) => (
                            <label
                                key={type}
                                className="border rounded px-4 py-2 text-center cursor-pointer hover:bg-gray-100"
                            >
                                <input type="radio" value={type} {...register('propertyType')} className="hidden" />
                                {type}
                            </label>
                        )
                    )}
                </div>
            </section>

            {/* 주소 입력 */}
            <section>
                <h2 className="text-xl font-semibold mb-2">주소 입력</h2>
                <div className="space-y-2">
                    <Input
                        name="postalCode"
                        label="우편번호"
                        placeholder="우편번호"
                        buttonSlot={<Button size="sm">검색</Button>}
                    />
                    <Input name="baseAddress" placeholder="기본 주소" state="default" />
                    <Input name="detailAddress" placeholder="상세 주소를 입력해주세요. (선택)" state="default" />
                </div>
            </section>

            {/* 전용 면적 */}
            <section>
                <h2 className="text-xl font-semibold mb-2">전용 면적</h2>
                <div className="flex gap-3 items-center">
                    <div className="flex-1">
                        <Input
                            name="areaPy"
                            placeholder="필수 입력"
                            type="number"
                            rightSlot={<span className="text-gray-600">평</span>}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            name="areaM2"
                            placeholder="세제곱미터 입력"
                            type="number"
                            rightSlot={<span className="text-gray-600">m²</span>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Step1BasicInfo;
