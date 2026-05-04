# [Day50] 🔷 TypeScript 상수 타입 추론과 활용

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 상품의 상태를 관리하는 기능을 구현하세요. 상품 상태는 '판매 중', '품절', '판매 중지' 세 가지로 제한됩니다. 이 상태를 상수로 정의하고, 이를 활용하여 상품의 상태를 변경하는 함수를 작성하세요.

## 코드

```typescript
const productStatuses = ['판매 중', '품절', '판매 중지'] as const;

type ProductStatus = typeof productStatuses[number];

interface Product {
  id: number;
  name: string;
  status: ProductStatus;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', status: '판매 중' },
  { id: 2, name: 'Mouse', status: '품절' },
  { id: 3, name: 'Keyboard', status: '판매 중지' },
];

// TODO: 여기에 구현하세요
function updateProductStatus(productId: number, newStatus: ProductStatus): void {
}
```

## 요구사항

1. 상품 상태는 '판매 중', '품절', '판매 중지' 중 하나여야 한다.
2. 상품의 상태를 변경하는 함수는 상품 ID와 새로운 상태를 인자로 받아야 한다.
3. 상품 ID에 해당하는 상품이 존재하지 않으면 아무 작업도 하지 않아야 한다.
4. 상품 상태가 변경되면 해당 상품 객체의 상태가 업데이트되어야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

상수 타입을 활용하여 상태를 제한하고, 배열의 find 메서드를 사용하여 상품을 검색하세요.

</details>
