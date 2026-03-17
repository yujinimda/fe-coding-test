# [Day01] ⚡ 커스텀 배열 메서드 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 장바구니에서 상품 리스트를 관리하는 기능을 구현해보세요. 주어진 상품 배열에 대해 각각의 메서드(map, filter, reduce, flat)를 직접 구현하여 특정 작업을 수행합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Apple', price: 100, quantity: 3 },
  { id: 2, name: 'Banana', price: 200, quantity: 2 },
  { id: 3, name: 'Cherry', price: 300, quantity: 1 }
];

// 직접 map(), filter(), reduce(), flat() 함수 구현하기
```

## 요구사항

1. map 메서드를 사용하여 각 상품의 총 가격(totalPrice = price * quantity)을 계산하는 배열을 반환하세요.
2. filter 메서드를 사용하여 가격이 150 이상인 상품만 포함하는 배열을 반환하세요.
3. reduce 메서드를 사용하여 전체 장바구니의 총합을 계산하세요.
4. flat 메서드를 사용하여 여러 카테고리로 나누어진 상품 배열을 한 단계 평탄화하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

각 메서드를 구현할 때, 배열의 내장을 활용하여 반복문과 조건문을 사용해주세요.

</details>
