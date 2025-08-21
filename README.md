# BookStore

BookStore는 **도서 쇼핑몰 웹 서비스**로, 회원 인증부터 도서 목록·상세·장바구니·주문까지 전 과정을 구현한 프로젝트입니다.  
신입 프론트엔드 개발자로서 **상태 관리, 인증, UI 패턴, 데이터 흐름**을 실제 서비스 형태로 구현하며 학습한 결과물입니다.

---

## 기술 스택
- **Frontend**: React, TypeScript, styled-components, react-router-dom
- **상태 관리**: Zustand, React Query
- **Form 관리**: react-hook-form
- **유틸리티**: dayjs, sanitize.css
- **테스트/모킹**: MSW(Mock Service Worker), faker.js
- **기타**: Axios, Vite

---

## 폴더 구조
``
src
┣ api/ # API 연동 모듈 (axios client, fetcher 등)
┣ assets/ # 정적 자원 (images 등)
┃ ┗ images/
┣ components/ # 공통 및 페이지 단위 컴포넌트
┣ constants/ # 상수 값 정의 (쿼리스트링 키 등)
┣ context/ # 전역 Context (예: ThemeContext 등)
┣ hooks/ # 커스텀 훅
┣ mock/ # Mock Service Worker (MSW) 핸들러
┣ models/ # 데이터 타입 정의 (interface, type)
┣ pages/ # 라우트 페이지 컴포넌트
┣ store/ # 전역 상태 관리 (Zustand store)
┣ style/ # 전역 스타일, 테마
┣ utils/ # 공통 유틸 함수
┗ App.tsx / main.tsx (엔트리 포인트)
``
---

## 백엔드 연동
- 강의에서 제공된 **Node.js + DB 기반 백엔드 서버**와 REST API 연동  
- 회원 인증(JWT), 도서, 장바구니, 주문 등 주요 도메인 데이터 처리  
- 일부 기능(리뷰, 베스트셀러)은 **MSW(Mock Service Worker)**로 모킹하여 개발 및 테스트  

---

## 주요 기능
- **회원 인증**
  - 로그인, 회원가입, 비밀번호 초기화
  - JWT 토큰 기반 인증, Zustand 전역 상태 관리
- **도서**
  - 도서 목록 (필터, 정렬, 페이지네이션, 무한 스크롤)
  - 도서 상세 (좋아요, 리뷰, 장바구니 담기)
- **장바구니 & 주문**
  - 수량 조절, 합계 계산, 선택 삭제
  - 주문서 작성 (주소, 수령인, 결제)
  - 주문 내역 조회
- **UI 패턴**
  - 모달, 드롭다운, 탭, 토스트, 슬라이드, 무한 스크롤
- **스타일링**
  - 다크/라이트 테마 지원
  - 반응형(모바일 대응)

---

## 📈 학습/적용한 것
- **전역 스타일 관리**: styled-components + sanitize.css  
- **테마 시스템**: ThemeContext로 라이트/다크 모드 전환  
- **데이터 흐름 관리**: API → hooks → 컴포넌트 props  
- **낙관적 업데이트**: 좋아요/언라이크 반영  
- **쿼리스트링 기반 상태**: `useSearchParams`로 URL과 상태 동기화  
- **리팩토링 경험**: alias, 중복 코드 제거, 커스텀 훅 추출  
- **백엔드 연동 경험**: Node.js + DB 서버와 REST API 연동, MSW로 일부 API 모킹  

---

## 프로젝트 회고
**Keep**
- 인증~주문까지 전 과정 구현 경험  
- 데이터 흐름에 맞춘 설계 및 상태 관리  
- 다양한 UI 패턴 실습  

**Problem**
- 중복 코드와 경로(alias) 아쉬움  
- 테마 스위처 미적용  
- CSS 스타일 정리 부족  

**Try**
- alias 적극 도입  
- 공통 훅(useAuth 등) 추가  
- 다양한 UI 패턴 확장  

---

## 실행 방법
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
