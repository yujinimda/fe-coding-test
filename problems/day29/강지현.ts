interface Order {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status: "delivered" | "pending" | "cancelled";
}

const orderList: Order[] = [
  { id: 1, product: "Laptop", price: 1200, quantity: 2, status: "delivered" },
  { id: 2, product: "Mouse", price: 25, quantity: 5, status: "pending" },
  { id: 3, product: "Keyboard", price: 75, quantity: 3, status: "delivered" },
  { id: 4, product: "Monitor", price: 300, quantity: 1, status: "cancelled" },
];

function calculateDeliveredOrdersTotal(orders: Order[]): number {
  return orders.reduce(
    (acc, order) =>
      order.status === "delivered" ? acc + order.price * order.quantity : acc,
    0,
  );
}

// TEST
console.log(calculateDeliveredOrdersTotal(orderList));
