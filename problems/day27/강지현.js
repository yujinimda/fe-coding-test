/**
 * 재고 관리를 위한 매니저 객체를 생성합니다.
 * 클로저를 사용하여 내부 재고 수량을 안전하게 보호합니다.
 *
 * @param {number} initialStock - 초기 재고 수량
 * @returns {InventoryManager} 재고 관리 메서드를 포함한 객체
 */
function createInventoryManager(initialStock) {
  let stock = initialStock;

  /**
   * @typedef {Object} InventoryManager
   * @property {function(number): void} addStock - 재고를 추가하는 메서드
   * @property {function(number): void} removeStock - 재고를 차감하는 메서드
   * @property {function(): number} getStock - 현재 재고 수량을 반환하는 메서드
   */
  return {
    /**
     * 지정된 수량만큼 재고를 추가
     * @param {number} amount - 추가할 수량
     */
    addStock: function (amount) {
      stock += amount;
    },

    /**
     * 지정된 수량만큼 재고를 차감
     * @param {number} amount - 차감할 수량
     */
    removeStock: function (amount) {
      stock -= amount;
    },

    /**
     * 현재 남은 재고 수량을 확인
     * @returns {number} 현재 재고 수량
     */
    getStock: function () {
      return stock;
    },
  };
}

// TEST
const laptopInventory = createInventoryManager(10);
laptopInventory.addStock(5);
laptopInventory.removeStock(3);
console.log(laptopInventory.getStock()); // 예상 출력: 12
