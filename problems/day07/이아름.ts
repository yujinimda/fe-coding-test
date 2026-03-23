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
      return `Order shipped with tracking number: ${order.trackingNumber}.`;
    case "delivered":
      // 가독성을 위해 toDateString으로 변환
      // Sun Oct 01 2023 09:00:00 GMT+0900 (한국 표준시) < new Date()그대로 출력 시
      // Sun Oct 01 2023 < toDateString 사용 시
      return `Order delivered on ${order.deliveryDate.toDateString()}.`;
    case "cancelled":
      return `Order cancelled due to: ${order.reason}.`;
    default:
      // 새로운 status가 추가되었는데 switch문의 case에서 그 상태를 처리하지 않을 때를 잡아내는 용도
      // 예를 들어 refund라는 status가 타입에 추가되었는데 아직 case로 refund를 처리하지 않음
      // case 문을 다 통과하면서 default에 도달 -> 이 시점에서 order는 never여야 하는데
      // 실제 들어온 건 refund라는 값이기 때문에 타입 불일치로 경고를 줌
      const _exhaustiveCheck: never = order;
      return _exhaustiveCheck;
  }
}

console.log("주문 상태 상세 정보 테스트");

orders.forEach((order) => {
  const details = getOrderDetails(order);
  console.log(`[ID: ${order.orderId}] ${details}`);
});
