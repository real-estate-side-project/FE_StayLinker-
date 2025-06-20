// app/api/mock/check/nickname/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const nickname = searchParams.get('nickname');

    if (!nickname) {
        return NextResponse.json({ msg: '닉네임이 누락되었습니다.' }, { status: 400 });
    }

    const isDuplicated = false;

    console.log(`닉네임 중복 검사: ${nickname} => ${isDuplicated}`);

    return NextResponse.json({ isDuplicated }, { status: 200 });
}
