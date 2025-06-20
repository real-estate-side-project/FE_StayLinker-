// app/api/mock/business/apply/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            businessCode,
            businessName,
            agentName,
            registrationCode,
            phoneNumber,
            email,
            password,
            address,
            businessCertificate,
            nickName,
            openingDate
        } = body;

        // 필수값 검사
        if (
            !businessCode ||
            !businessName ||
            !agentName ||
            !registrationCode ||
            !phoneNumber ||
            !email ||
            !password ||
            !address ||
            !businessCertificate ||
            !nickName ||
            !openingDate
        ) {
            return NextResponse.json({ msg: '필수 입력값 누락' }, { status: 400 });
        }

        // 👉 성공 응답
        return NextResponse.json({ msg: '사업자 신청이 완료되었습니다.' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: '사업자 신청 실패', error: (error as Error).message }, { status: 500 });
    }
}
