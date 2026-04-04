const orders = [
  { id: 1, product: "Laptop", price: 1200, quantity: 2, status: "delivered" },
  { id: 2, product: "Mouse", price: 25, quantity: 5, status: "pending" },
  { id: 3, product: "Keyboard", price: 75, quantity: 3, status: "delivered" },
  { id: 4, product: "Monitor", price: 300, quantity: 1, status: "delivered" },
  { id: 5, product: "USB Cable", price: 10, quantity: 10, status: "pending" },
];

// TODO: 여기에 구현하세요
function calculateTotalDeliveredRevenue(orders) {
  const delivered = orders.filter((o) => o.status === "delivered");
  return delivered.reduce((acc, curr) => acc + curr.price, 0);
}

const result = calculateTotalDeliveredRevenue(orders);
console.log(result); // 1575
