# [Day33] ⚡ ⚡ JavaScript ⚡ Promise.race 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

여러 비동기 작업 중 가장 먼저 완료되는 작업의 결과를 반환하는 `Promise.race` 함수를 구현하세요. 이 함수는 쇼핑몰에서 여러 API 요청 중 가장 빠르게 응답하는 것을 처리하는 데 사용될 수 있습니다.

## 코드

```typescript
const apiCalls = [
  new Promise((resolve) => setTimeout(() => resolve('API 1 응답'), 300)),
  new Promise((resolve) => setTimeout(() => resolve('API 2 응답'), 200)),
  new Promise((resolve) => setTimeout(() => resolve('API 3 응답'), 100)),
];

// TODO: 여기에 구현하세요
function customPromiseRace(promises) {
}
```

## 요구사항

1. customPromiseRace 함수는 Promise.race와 동일하게 동작해야 합니다.
2. 가장 먼저 완료되는 Promise의 결과를 반환해야 합니다.
3. Promise 배열을 인자로 받아야 합니다.
4. Promise가 아닌 값이 포함된 경우, 해당 값을 즉시 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Promise.race의 동작을 이해하고, 가장 먼저 완료되는 Promise의 결과를 반환하도록 구현하세요.

</details>
