# [Day05] ⚡ Promise.all 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

여러 개의 비동기 작업을 병렬로 처리하고, 모든 작업이 완료되면 결과를 반환하는 함수를 작성하세요. 이 함수는 Promise.all과 유사하게 동작해야 합니다.

## 코드

```typescript
function customPromiseAll(promises) {
  // 여기에 코드를 작성하세요
}

// 테스트를 위한 비동기 함수들
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Result 2'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Result 3'), 1500));

// customPromiseAll을 사용하여 모든 결과를 출력하세요
customPromiseAll([promise1, promise2, promise3]).then((results) => {
  console.log(results); // ['Result 1', 'Result 2', 'Result 3']
});
```

## 요구사항

1. customPromiseAll 함수는 Promise.all과 유사하게 동작해야 합니다.
2. 모든 입력된 Promise가 완료되면 결과 배열을 반환해야 합니다.
3. 입력된 Promise 중 하나라도 실패하면 customPromiseAll은 즉시 실패해야 합니다.
4. Promise가 아닌 값이 입력되면 해당 값을 그대로 결과 배열에 포함해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Promise.all의 동작 방식을 참고하여, 모든 Promise가 완료될 때까지 기다리는 로직을 구현하세요.

</details>
