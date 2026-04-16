# [Day32] 🔷 🔷 TypeScript 쇼핑몰 사용자 정보 타입 설계

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 사용자 정보를 관리하기 위한 타입을 설계하세요. 사용자는 이름, 이메일, 주소, 전화번호를 포함한 정보를 가지고 있습니다. 이 정보를 기반으로 타입을 정의하고, 사용자 목록에서 특정 사용자의 이메일을 검색하는 함수를 작성하세요.

## 코드

```typescript
type User = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

const users: User[] = [
  { name: 'Alice', email: 'alice@example.com', address: '123 Main St', phone: '123-456-7890' },
  { name: 'Bob', email: 'bob@example.com', address: '456 Elm St', phone: '987-654-3210' },
  { name: 'Charlie', email: 'charlie@example.com', address: '789 Maple St', phone: '555-555-5555' },
];

// TODO: 여기에 구현하세요
function findUserByEmail(users: User[], email: string): User | undefined {
}
```

## 요구사항

1. User 타입을 정의해야 합니다.
2. 사용자 목록에서 이메일을 기반으로 사용자를 검색하는 함수를 작성하세요.
3. 함수는 이메일이 일치하는 사용자를 반환하거나, 없으면 undefined를 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

배열의 find 메서드를 사용하여 이메일이 일치하는 사용자를 찾을 수 있습니다.

</details>
