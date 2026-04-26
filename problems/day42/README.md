# [Day42] ⚡ ⚡ JavaScript 커링(curry) 함수 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰의 할인 정책을 적용하기 위해 커링(curry) 함수를 구현하세요. 이 함수는 여러 단계로 인자를 받아 최종적으로 할인된 가격을 계산합니다.

## 코드

```typescript
// TODO: 여기에 구현하세요
function curry(fn) {
  // TODO: 여기에 구현하세요
}

const calculateDiscount = (discountRate, price) => price - (price * discountRate);

const curriedCalculateDiscount = curry(calculateDiscount);

// 예시 사용법
const tenPercentDiscount = curriedCalculateDiscount(0.1);
console.log(tenPercentDiscount(100)); // 90
console.log(tenPercentDiscount(200)); // 180
```

## 요구사항

1. curry 함수는 주어진 함수를 커링된 형태로 변환해야 한다.
2. curry 함수는 여러 단계로 인자를 받아 최종 결과를 반환해야 한다.
3. curriedCalculateDiscount 함수는 할인율을 먼저 설정하고, 이후 가격을 입력받아 할인된 가격을 계산해야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

커링은 함수를 부분적으로 적용할 수 있게 해주는 기술입니다. 인자를 하나씩 받아 최종적으로 결과를 반환하도록 구현하세요.

</details>
