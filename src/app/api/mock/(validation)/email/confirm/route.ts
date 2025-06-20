// app/api/mock/email/confirm/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const { email, role, code } = body;

    if (!email || !role || !code) {
        return NextResponse.json({ msg: 'email, role, code 값이 모두 필요합니다.' }, { status: 400 });
    }

    // 실제라면: 서버에 저장된 인증 코드와 비교
    // mock이니까 그냥 무조건 통과 시켜줄게

    console.log(`✅ 이메일 인증 확인: email=${email}, role=${role}, code=${code}`);

    return NextResponse.json({ msg: '인증이 성공적으로 완료되었습니다.' }, { status: 200 });
}
