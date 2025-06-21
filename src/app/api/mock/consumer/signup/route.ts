// app/api/mock/consumer/signup/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const requiredFields = [
        'email',
        'password',
        'confirmPassword',
        'nickname',
        'address',
        'phoneNumber',
        'languages',
        'country',
        'birthDay',
        'name'
    ];

    const missingFields = requiredFields.filter((field) => !(field in body));

    if (missingFields.length > 0) {
        return NextResponse.json(
            {
                msg: `다음 필드가 누락되었습니다: ${missingFields.join(', ')}`
            },
            { status: 400 }
        );
    }

    console.log('📝 소비자 회원가입 요청:', body);

    // 실제라면 DB 저장
    return NextResponse.json({ msg: '회원가입이 성공적으로 완료되었습니다.' }, { status: 200 });
}
