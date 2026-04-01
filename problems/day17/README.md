# [Day17] ⚡ ⚡ JavaScript 사용자 프로필 깊은 복사 함수 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

사용자 프로필 데이터를 깊은 복사하는 함수를 작성하세요. 이 함수는 객체와 배열을 포함한 모든 중첩 구조를 복사할 수 있어야 합니다. 깊은 복사를 통해 원본 데이터가 변경되지 않도록 보장하세요.

## 코드

```typescript
const userProfile = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'traveling'],
  preferences: {
    notifications: true,
    theme: 'dark'
  }
};

// TODO: 여기에 구현하세요
function deepClone(obj) {
}
```

## 요구사항

1. 객체의 모든 중첩된 속성을 깊은 복사해야 합니다.
2. 배열도 깊은 복사되어야 하며, 원본 배열과 독립적으로 동작해야 합니다.
3. 복사된 객체를 수정해도 원본 객체에 영향을 주지 않아야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀를 사용하여 객체와 배열의 모든 속성을 순회하며 복사하세요.

</details>
