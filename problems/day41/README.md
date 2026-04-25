# [Day41] ▲ Next.js 미들웨어로 관리자 페이지 인증 보호

**카테고리:** ▲ Next.js
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

Next.js 프로젝트에서 관리자 페이지에 접근하기 위해 인증 미들웨어를 구현하세요. 이 미들웨어는 사용자가 관리자 권한을 가지고 있는지 확인하고, 권한이 없으면 접근을 차단합니다.

## 코드

```typescript
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' }
];

function isAdmin(user) {
  // TODO: 여기에 구현하세요
}

function adminMiddleware(req, res, next) {
  const userId = req.userId; // 가정: req 객체에 userId가 포함되어 있음
  const user = users.find(u => u.id === userId);
  
  if (user && isAdmin(user)) {
    next();
  } else {
    res.status(403).send('Access denied');
  }
}
```

## 요구사항

1. isAdmin 함수는 사용자의 역할이 'admin'인지 확인해야 한다.
2. adminMiddleware 함수는 사용자 ID를 기반으로 사용자를 찾아야 한다.
3. 사용자가 관리자일 경우 요청을 계속 진행시켜야 한다.
4. 사용자가 관리자가 아닐 경우 403 상태 코드와 함께 'Access denied' 메시지를 반환해야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

isAdmin 함수에서 사용자의 역할을 확인하세요.

</details>
