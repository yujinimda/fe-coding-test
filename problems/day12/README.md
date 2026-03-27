# [Day12] ▲ Next.js 미들웨어로 인증 라우트 보호

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

Next.js 프로젝트에서 특정 페이지를 인증된 사용자만 접근할 수 있도록 미들웨어를 작성하세요. 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트해야 합니다.

## 코드

```typescript
// 사용자 인증 상태를 나타내는 객체
const user = {
  isAuthenticated: false, // 사용자가 인증되었는지 여부
};

// 미들웨어 함수 시그니처
function authMiddleware(req, res, next) {
  // TODO: 여기에 구현하세요
}

// 예시 요청 객체
const req = {};

// 예시 응답 객체
const res = {
  redirect: (url) => {
    console.log(`Redirecting to ${url}`);
  }
};

// 예시 next 함수
function next() {
  console.log('Access granted to protected route');
}

// 미들웨어 테스트
authMiddleware(req, res, next);
```

## 요구사항

1. 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트해야 합니다.
2. 사용자가 인증된 경우 보호된 라우트에 접근할 수 있어야 합니다.
3. 미들웨어 함수는 req, res, next 인자를 받아야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

사용자의 인증 상태를 확인하고, 인증되지 않은 경우 res.redirect를 사용하세요.

</details>
