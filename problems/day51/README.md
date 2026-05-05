# [Day51] 🔷 🔷 TypeScript 조건부 타입을 활용한 사용자 권한 체크

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 사용자 권한에 따라 접근 가능한 페이지를 결정하는 조건부 타입을 작성하세요. 각 사용자는 'admin', 'editor', 'viewer' 중 하나의 역할을 가집니다. 조건부 타입을 사용하여 각 역할에 맞는 페이지 접근 권한을 정의하세요.

## 코드

```typescript
type UserRole = 'admin' | 'editor' | 'viewer';

interface User {
  name: string;
  role: UserRole;
}

const users: User[] = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'editor' },
  { name: 'Charlie', role: 'viewer' },
];

// TODO: 여기에 구현하세요
type AccessiblePages<T extends UserRole> = any;

function getAccessiblePages(user: User): string[] {
  // TODO: 여기에 구현하세요
}
```

## 요구사항

1. 조건부 타입을 사용하여 각 사용자 역할에 따른 접근 가능한 페이지를 정의하세요.
2. 'admin' 역할은 모든 페이지에 접근할 수 있어야 합니다.
3. 'editor' 역할은 'edit', 'view' 페이지에 접근할 수 있어야 합니다.
4. 'viewer' 역할은 'view' 페이지에만 접근할 수 있어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

조건부 타입을 사용하여 각 역할에 맞는 페이지 배열을 반환하도록 하세요.

</details>
