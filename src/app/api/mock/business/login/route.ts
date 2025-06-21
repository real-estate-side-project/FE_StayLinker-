// app/api/mock/business/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, businessCode, password } = body;
        console.log('Business login request body:', body);
        if (!type || !businessCode || !password) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 고정 테스트 계정
        const TEST_BUSINESS_CODE = '123-45-67890';
        const TEST_PASSWORD = 'staylinker';

        if (businessCode !== TEST_BUSINESS_CODE || password !== TEST_PASSWORD) {
            return NextResponse.json({ message: 'Invalid businessCode or password' }, { status: 401 });
        }

        // 성공 시 mock accessToken 리턴
        return NextResponse.json(
            {
                accessToken: 'mock_business_access_token_987654321'
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Business login failed', error: (error as Error).message },
            { status: 500 }
        );
    }
}
