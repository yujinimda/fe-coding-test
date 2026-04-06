# [Day22] 🧩 🧩 알고리즘: 다중 조건 정렬을 통한 사용자 목록 정렬

**카테고리:** 🧩 알고리즘
**난이도:** 🟡 Medium
**제한 시간:** 20분

---

## 문제

사용자 목록을 다중 조건으로 정렬하는 함수를 작성하세요. 사용자는 이름, 나이, 가입일을 속성으로 가집니다. 이름은 알파벳 순으로, 나이는 오름차순으로, 가입일은 최신 순으로 정렬합니다.

## 코드

```typescript
const users = [
  { name: 'Alice', age: 30, joined: '2023-01-15' },
  { name: 'Bob', age: 25, joined: '2023-03-10' },
  { name: 'Charlie', age: 35, joined: '2022-12-20' },
  { name: 'David', age: 30, joined: '2023-02-05' },
  { name: 'Eve', age: 25, joined: '2023-01-25' }
];

// TODO: 여기에 구현하세요
function sortUsers(users) {
}
```

## 요구사항

1. 사용자 이름을 알파벳 순으로 정렬하세요.
2. 같은 이름을 가진 사용자는 나이를 오름차순으로 정렬하세요.
3. 이름과 나이가 같은 경우, 가입일을 최신 순으로 정렬하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Array.prototype.sort()를 사용하여 다중 조건을 처리할 수 있습니다.

</details>
