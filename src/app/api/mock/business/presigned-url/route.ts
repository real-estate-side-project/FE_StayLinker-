// app/api/mock/business/presigned-url/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { filename, contentType } = body;

        if (!filename || !contentType) {
            return NextResponse.json({ msg: 'filename 또는 contentType이 필요합니다.' }, { status: 400 });
        }

        // 📌 presignedUrl mock — 실제는 S3에서 발급된 URL이 들어가야 함
        const mockPresignedUrl = `https://mock-s3-url.com/${filename}?signature=mock_signature_123`;
        const mockKey = `uploads/${filename}`;

        console.log(`🪪 presigned-url 발급 완료 [mock]:`, mockPresignedUrl);

        return NextResponse.json(
            {
                presignedUrl: mockPresignedUrl,
                key: mockKey
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ msg: 'presigned-url 발급 실패', error: (error as Error).message }, { status: 500 });
    }
}
