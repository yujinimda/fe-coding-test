import { Request, Response, NextFunction } from "express";

// 사용자 인증 상태를 나타내는 객체
const user = {
  isAuthenticated: false, // 사용자가 인증되었는지 여부
};

// 미들웨어 함수 시그니처
function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (user.isAuthenticated) {
    next();
  } else {
    res.redirect("/login");
  }
}

// 예시 요청 객체
const req = {};

// 예시 응답 객체
const res = {
  redirect: (url: string) => {
    console.log(`Redirecting to ${url}`);
  },
};

// 예시 next 함수
function next() {
  console.log("Access granted to protected route");
}

// 미들웨어 테스트
authMiddleware(req, res, next);
