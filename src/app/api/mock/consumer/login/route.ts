// app/api/mock/consumer/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
        }

        // 고정된 테스트 계정
        const TEST_EMAIL = 'staylinker@naver.com';
        const TEST_PASSWORD = 'staylinker';

        if (email !== TEST_EMAIL || password !== TEST_PASSWORD) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        // 성공 시 mock accessToken 리턴
        return NextResponse.json(
            {
                accessToken: 'mock_access_token_123456789'
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: 'Login failed', error: (error as Error).message }, { status: 500 });
    }
}
