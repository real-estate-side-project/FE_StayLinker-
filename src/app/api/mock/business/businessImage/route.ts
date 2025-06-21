// app/api/mock/business/businessImage/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const imageUrl = searchParams.get('imageUrl');

        if (!imageUrl) {
            return NextResponse.json({ msg: 'imageUrl 파라미터가 필요합니다.' }, { status: 400 });
        }

        console.log(`📸 사업자 등록증 이미지 URL 저장됨 [mock]: ${imageUrl}`);

        return NextResponse.json({ msg: '이미지가 성공적으로 저장되었습니다.' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: '이미지 저장 실패', error: (error as Error).message }, { status: 500 });
    }
}
