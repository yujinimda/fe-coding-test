const orders = [
  { id: 1, product: "Laptop", price: 1200, quantity: 2, status: "delivered" },
  { id: 2, product: "Mouse", price: 25, quantity: 5, status: "pending" },
  { id: 3, product: "Keyboard", price: 75, quantity: 3, status: "delivered" },
  { id: 4, product: "Monitor", price: 300, quantity: 1, status: "delivered" },
  { id: 5, product: "USB Cable", price: 10, quantity: 10, status: "pending" },
];

/**
 * 배송 완료된 주문의 총 금액을 계산
 * @param {Array<object>} orders - 주문 객체
 * @returns {number} 배송 완료된 주문의 총 금액
 */
function calculateTotalDeliveredRevenue(orders) {
  return orders
    .filter((order) => order.status === "delivered")
    .reduce((acc, order) => acc + order.price * order.quantity, 0);
}

// Test
console.log(calculateTotalDeliveredRevenue(orders).toLocaleString());
