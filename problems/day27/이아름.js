function createInventoryManager(initialStock) {
  let stock = initialStock;

  return {
    addStock: function (amount) {
      stock += amount;
    },
    removeStock: function (amount) {
      stock -= amount;
    },
    getStock: function () {
      return stock;
    },
  };
}

// 사용 예시
const laptopInventory = createInventoryManager(10);
laptopInventory.addStock(5);
laptopInventory.removeStock(3);
console.log(laptopInventory.getStock()); // 예상 출력: 12
