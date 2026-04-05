# [Day21] ⚡ ⚡ JavaScript 비동기 코드 실행 순서 예측

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

주어진 비동기 코드에서 console.log의 실행 순서를 예측하는 함수를 작성하세요. 이 코드는 쇼핑몰의 주문 상태를 업데이트하는 시나리오입니다.

## 코드

```typescript
const orderStatus = ['pending', 'shipped', 'delivered'];

function updateOrderStatus() {
  console.log('Order update started');
  setTimeout(() => {
    console.log('Order status:', orderStatus[1]);
  }, 1000);
  
  Promise.resolve().then(() => {
    console.log('Order status:', orderStatus[2]);
  });

  console.log('Order update finished');
}

// TODO: 여기에 구현하세요
function predictExecutionOrder() {
  // 이 함수는 updateOrderStatus 함수의 console.log 실행 순서를 문자열 배열로 반환해야 합니다.
}
```

## 요구사항

1. predictExecutionOrder 함수는 updateOrderStatus 함수의 console.log 실행 순서를 문자열 배열로 반환해야 합니다.
2. setTimeout에 의해 지연된 로그는 가장 마지막에 실행되어야 합니다.
3. Promise의 then 블록은 동기 코드가 실행된 후에 실행되어야 합니다.
4. 동기 코드의 로그는 가장 먼저 실행되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

이벤트 루프의 동작 방식을 이해하고, 동기 코드, 마이크로태스크, 태스크의 실행 순서를 고려하세요.

</details>
