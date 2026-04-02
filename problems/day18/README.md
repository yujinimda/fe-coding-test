# [Day18] ⚛️ React 복합 컴포넌트 패턴 구현: 탭 컴포넌트

**카테고리:** ⚛️ React
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 여러 카테고리의 상품 정보를 탭으로 전환하여 볼 수 있는 컴포넌트를 구현하세요. 각 탭은 카테고리 이름을 표시하며, 클릭 시 해당 카테고리의 상품 목록을 보여줍니다.

## 코드

```typescript
const categories = [
  { id: 1, name: 'Electronics', products: ['Laptop', 'Smartphone', 'Camera'] },
  { id: 2, name: 'Clothing', products: ['T-shirt', 'Jeans', 'Jacket'] },
  { id: 3, name: 'Home Appliances', products: ['Refrigerator', 'Microwave', 'Washing Machine'] }
];

function TabComponent() {
  // TODO: 여기에 구현하세요
  return null;
}

export default TabComponent;
```

## 요구사항

1. 각 카테고리는 탭으로 표시되어야 합니다.
2. 탭을 클릭하면 해당 카테고리의 상품 목록이 화면에 표시되어야 합니다.
3. 초기 상태에서는 첫 번째 카테고리의 상품 목록이 표시되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

useState를 사용하여 현재 선택된 탭의 상태를 관리하세요.

</details>
