type Order =
  | { status: "pending"; orderId: string }
  | { status: "shipped"; orderId: string; trackingNumber: string }
  | { status: "delivered"; orderId: string; deliveryDate: Date }
  | { status: "cancelled"; orderId: string; reason: string };

const orders: Order[] = [
  { status: "pending", orderId: "123" },
  { status: "shipped", orderId: "124", trackingNumber: "TRACK123" },
  { status: "delivered", orderId: "125", deliveryDate: new Date("2023-10-01") },
  { status: "cancelled", orderId: "126", reason: "Customer request" },
];

function getOrderDetails(order: Order): string {
  const { status } = order;

  switch (status) {
    case "pending":
      return "Order is pending.";
    case "shipped":
      return `Order shipped with tracking number: [${order.trackingNumber}].`;
    case "delivered":
      return `Order delivered on [${order.deliveryDate.toLocaleDateString(
        "ko-KR",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      )}].`;
    case "cancelled":
      return `Order cancelled due to: [${order.reason}].`;
    default:
      const _exhaustiveCheck: never = order;
      throw new Error(`알 수 없는 주문 상태: ${status}`);
  }
}

console.log("=== 주문 상태 정보 확인 테스트 ===");
orders.forEach((order) => {
  console.log(
    `[주문 번호] : ${order.orderId} | [주문 상태] : ${getOrderDetails(order)}`,
  );
});
