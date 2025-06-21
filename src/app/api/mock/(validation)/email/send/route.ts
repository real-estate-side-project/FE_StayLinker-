// app/api/mock/email/send/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    const { email, role } = body;

    if (!email || !role) {
        return NextResponse.json({ msg: '이메일 또는 role이 누락되었습니다.' }, { status: 400 });
    }

    // 인증 코드 생성
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6자리 코드

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: '(테스트)이메일 인증 코드입니다.',
            html: `<div style="font-size:16px; line-height:1.6; padding:16px;">
                  <p style="margin-bottom:16px;">(테스트) 인증 코드: <strong>${verificationCode}</strong></p>
                  <p style="color:#888;">메일 일 300개 이상 유료</p>
                  </div>`
        });

        console.log('이메일 전송 성공:', data);

        console.log(`📧 이메일(${email}) 로 인증코드 발송 완료! code=${verificationCode}`);

        return NextResponse.json({ msg: '인증코드가 이메일로 발송되었습니다.' }, { status: 200 });
    } catch (error) {
        console.error('이메일 전송 실패', error);

        return NextResponse.json({ msg: '이메일 전송 실패', error: 'something bad happend' }, { status: 500 });
    }
}
