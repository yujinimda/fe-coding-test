type Order = {
  id: number;
  product: string;
  quantity: number;
  price: number;
};

const orders: Order[] = [
  { id: 1, product: "Laptop", quantity: 1, price: 1500 },
  { id: 2, product: "Mouse", quantity: 2, price: 25 },
  { id: 3, product: "Keyboard", quantity: 1, price: 50 },
];

function updateOrder<T extends keyof Order>(
  orders: Order[],
  orderId: number,
  key: T,
  value: Order[T],
): Order[] {
  return orders.map((order) => {
    if (order.id === orderId) {
      return { ...order, [key]: value };
    }
    return order;
  });
}

function runTests() {
  const testProduct = "speaker";
  const testQuantity = 5;
  const testPrice = 5000;

  const result1 = updateOrder(orders, 1, "product", testProduct);
  const result2 = updateOrder(orders, 2, "quantity", testQuantity);
  const result3 = updateOrder(orders, 3, "price", testPrice);

  console.log(result1);
  console.log(result2);
  console.log(result3);
}

runTests();
