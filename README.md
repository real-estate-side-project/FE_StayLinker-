## 🩵 Commit Rules 🩵

-   feat: 새로운 기능 추가
-   fix: 버그 수정
-   docs: 문서 변경
-   style: 코드 스타일 변경(코드 변경 없음)
-   refactor: 코드 리팩토링(버그 수정이나 기능 추가 없음)
-   test: 테스트 추가 또는 수정
-   chore: 기타 변경사항(빌드 태스크, 패키지 매니저 등)

## 🧡 Branch Rules 🧡

-   `main`, `dev`
    -   `main`: 라이브 배포 페이지
    -   `dev`: 개발용 브랜치
    -   `deploy`: 테스트 배포 페이지 브랜치
-   브랜치명: feat/기능 , feat/signup, style/article, hotfix/login 형식으로 사용
-   기능별로 브랜치파고 머지하고 사용하지 않는 브랜치 바로 삭제하기
-   PR 사용 필수 (2명) 코드 리뷰 간단히라도 하기

## 💛 Code Rules 💛

-   변수명: 축약하지말고 시멘틱하게(btn X → button) ,카멜케이스
    -   복수형 예시: diaries, users
-   함수명 : 동사로 , 이벤트핸들러 함수는 handle로 시작
    -   화살표 함수
-   컴포넌트 : 화살표함수(기본) , rafce
-   주석: 필수적인 것만 설명한 필요할 경우 사용
-   console.log 다 지우셈

## 💚 폴더구조 간단설명 💚

-공용컴포넌트는 components에 만들기

-페이지별 컴포넌트는 페이지 안에 \_components 폴더 안에 만들기
