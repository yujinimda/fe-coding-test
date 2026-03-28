// 사용자 인증 상태를 나타내는 객체
const user = {
  isAuthenticated: false, // 사용자가 인증되었는지 여부
};

// 미들웨어 함수 시그니처
function authMiddleware(req, res, next) {
  const target = req.url;

  if (target === "/mypage") {
    if (!user.isAuthenticated) {
      res.redirect("/login");
    }
  }

  next();
}

// 예시 요청 객체
const req1 = {
  url: "/",
};

const req2 = {
  url: "/mypage",
};

// 예시 응답 객체
const res = {
  redirect: (url) => {
    console.log(`Redirecting to ${url}`);
  },
};

// 예시 next 함수
function next() {
  console.log("Access granted to protected route");
}

// 미들웨어 테스트
console.log("--- Test1 ---");
authMiddleware(req1, res, next);
console.log("--- Test2 ---");
authMiddleware(req2, res, next);

// Next.js 16 + TS 처리 방식
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // 실제로는 쿠키에서 가져오거나 별도 함수로 처리
  const isAuthenticated = false;

  if (!isAuthenticated) {
    // 절대 경로 생성을 위해 request.url을 두 번째 인자로 전달한다고 함 > 프록시는 네트워크 경계에서 동작하기 때문에 엄격하게 처리
    // request.url > 현재 사용자가 접속 중인 전체 주소 ex) https://co.com/mypage
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// proxy가 실행될 특정 경로
export const config = {
  matcher: "/mypage",
};
