# [Day03] ⚡ Promise.all 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 여러 API 호출을 병렬로 처리하고, 모든 호출이 완료된 후 데이터를 처리해야 합니다. Promise.all과 유사한 기능을 하는 함수를 구현하세요.

## 코드

```typescript
function customPromiseAll(promises) {
  // 여기에 구현하세요
}

// 예제 사용법
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

customPromiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // 예상 출력: [3, 42, 'foo']
}).catch((error) => {
  console.error('하나 이상의 프로미스가 실패했습니다:', error);
});
```

## 요구사항

1. customPromiseAll 함수는 Promise.all과 동일하게 작동해야 합니다.
2. 모든 프로미스가 성공하면 결과 배열을 반환해야 합니다.
3. 하나의 프로미스라도 실패하면 전체가 실패로 간주되어야 합니다.
4. 입력으로 받은 배열의 각 요소는 프로미스 또는 값일 수 있습니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Promise.all의 동작 방식을 생각해보고, 모든 프로미스가 완료될 때까지 기다리는 방법을 고민해보세요.

</details>
