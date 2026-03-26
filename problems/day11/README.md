# [Day11] ⚡ 깊은 복사 함수 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

주어진 객체를 깊은 복사하는 함수를 작성하세요. 이 함수는 객체의 중첩된 구조까지 모두 복사해야 합니다. 객체의 중첩된 배열이나 객체가 변경되더라도 원본 객체에는 영향을 미치지 않아야 합니다.

## 코드

```typescript
const sampleData = {
  user: {
    name: 'Alice',
    age: 30,
    preferences: {
      theme: 'dark',
      notifications: true
    }
  },
  items: [
    { id: 1, name: 'Book', price: 10 },
    { id: 2, name: 'Pen', price: 2 }
  ]
};

// TODO: 여기에 구현하세요
function deepClone(obj) {
}
```

## 요구사항

1. 객체의 모든 속성을 깊은 복사해야 합니다.
2. 중첩된 객체와 배열도 모두 복사해야 합니다.
3. 복사된 객체의 속성을 변경해도 원본 객체에는 영향을 미치지 않아야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀를 사용하여 객체의 각 속성을 복사하세요.

</details>
