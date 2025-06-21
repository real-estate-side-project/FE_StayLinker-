// app/api/mock/role/route.ts

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader) {
        return NextResponse.json({ message: 'Unauthorized - No token provided' }, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '').trim();

    const TEST_CONSUMER_TOKEN = 'mock_access_token_123456789';
    const TEST_BUSINESS_TOKEN = 'mock_business_access_token_987654321';

    let mockUser;

    if (token === TEST_CONSUMER_TOKEN) {
        mockUser = {
            id: 123,
            role: 'CONSUMER',
            nickname: '소비자유저'
        };
    } else if (token === TEST_BUSINESS_TOKEN) {
        mockUser = {
            id: 456,
            role: 'BUSINESS',
            nickname: '사업자유저'
        };
    } else {
        return NextResponse.json({ message: 'Unauthorized - Invalid token' }, { status: 403 });
    }

    console.log('🛡️ 토큰 권한 확인 성공! [mock]', mockUser);

    return NextResponse.json(mockUser, { status: 200 });
}
