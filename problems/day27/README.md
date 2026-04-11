# [Day27] ⚡ ⚡ JavaScript 클로저를 활용한 유틸 함수

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 특정 제품의 재고를 관리하는 함수를 작성하세요. 이 함수는 클로저를 활용하여 제품의 재고를 추적하고, 재고를 추가하거나 감소시킬 수 있어야 합니다.

## 코드

```typescript
function createInventoryManager(initialStock) {
  let stock = initialStock;
  
  return {
    addStock: function(amount) {
      // TODO: 여기에 구현하세요
    },
    removeStock: function(amount) {
      // TODO: 여기에 구현하세요
    },
    getStock: function() {
      // TODO: 여기에 구현하세요
    }
  };
}

// 사용 예시
const laptopInventory = createInventoryManager(10);
laptopInventory.addStock(5);
laptopInventory.removeStock(3);
console.log(laptopInventory.getStock()); // 예상 출력: 12
```

## 요구사항

1. 초기 재고를 설정할 수 있어야 한다.
2. 재고를 추가하는 기능을 제공해야 한다.
3. 재고를 감소시키는 기능을 제공해야 한다.
4. 현재 재고를 반환하는 기능을 제공해야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

클로저를 사용하여 함수 내부에서 상태를 유지하세요.

</details>
