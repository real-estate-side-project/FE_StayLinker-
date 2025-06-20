// app/api/mock/business/business-info-search/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get('type');
    const pageNumber = searchParams.get('pageNumber') ?? '1';
    const keyword = searchParams.get('keyword');

    // 👉 mock 데이터
    const mockData = [
        {
            businessName: '김민정공인중개사사무소',
            address: '서울특별시 강동구 명덕로111길 39(서울특별시 강동구 길동 415-6)',
            businessCertificate: '11740-2025-00075',
            agentName: '김민정'
        },
        {
            businessName: '현대공인중개사사무소',
            address: '부산광역시 부산진구 당감서로89번길 19(부산광역시 부산진구 부암동 500)',
            businessCertificate: '가-05-3325',
            agentName: '김민정'
        },
        {
            businessName: '청운공인중개사사무소',
            address: '부산광역시 부산진구 백양대로238번길 47(부산광역시 부산진구 개금동 381)',
            businessCertificate: '가-05-3546',
            agentName: '김민정'
        },
        {
            businessName: '가산공인중개사사무소',
            address: '부산광역시 동래구 시실로 48(부산광역시 동래구 명륜동 16-12)',
            businessCertificate: '26260-2021-00163',
            agentName: '김민정'
        }
    ];

    console.log('🏢 사업자 정보 리스트 검색 [mock]', { type, pageNumber, keyword });

    return NextResponse.json(
        {
            totalPages: 5,
            list: mockData
        },
        { status: 200 }
    );
}
