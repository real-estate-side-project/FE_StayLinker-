import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 정적 파일 요청 제외
    const isStaticFile =
        pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/svg/');
    if (isStaticFile) {
        return NextResponse.next(); // 정적 파일은 리디렉션하지 않음
    }

    // 조건에 맞지 않으면 요청을 그대로 진행
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
