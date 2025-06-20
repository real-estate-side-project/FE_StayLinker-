// app/api/mock/forgot/password/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const { email, role, verificationCode, newPassword, retypeNewPassword } = body;

    // 필수값 체크
    if (!email || !role || !verificationCode || !newPassword || !retypeNewPassword) {
        return NextResponse.json({ msg: '필수 항목이 누락되었습니다.' }, { status: 400 });
    }

    // 비밀번호 일치 체크
    if (newPassword !== retypeNewPassword) {
        return NextResponse.json({ msg: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' }, { status: 400 });
    }

    // 실제로는 인증코드 검증 후 비밀번호 변경
    console.log(
        `🔑 비밀번호 변경 요청: email=${email}, role=${role}, code=${verificationCode}, newPassword=${newPassword}`
    );

    return NextResponse.json({ msg: '비밀번호가 성공적으로 변경되었습니다.' }, { status: 200 });
}
