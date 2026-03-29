type OrderStatus = "pending" | "shipped" | "delivered";

interface Order {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: 1, product: "Laptop", price: 1200, quantity: 2, status: "delivered" },
  { id: 2, product: "Mouse", price: 25, quantity: 5, status: "pending" },
  { id: 3, product: "Keyboard", price: 75, quantity: 3, status: "shipped" },
];

// Mapped Type을 활용한 정의
// Mapped Type은 타입 전용 for ... in 루프
// (기존에 존재하는 key의 집합을 가지고 그 키를 하나씩 순회하면서 새로운 객체 형태의 타입을 만듬)
// { [ K in T ] : Type }
// T > 내가 순회하고 싶은 키들의 목록, K > 루프를 돌 때 선택된 하나의 키, Type > 각 키에 부여하고 싶은 값의 타입
type OrderDetails<T extends OrderStatus> = {
  [K in T]: Order;
}[T]; // 그 중 T 키의 밸류(Order)만 추출

function getOrderDetails<T extends OrderStatus>(
  orders: Order[],
  status: T,
): OrderDetails<T>[] {
  return orders.filter((o) => o.status === status) as OrderDetails<T>[];
}

console.log("--- 결과 1 ---");
const result1 = getOrderDetails(orders, "pending");
console.log(result1);

console.log("--- 결과 2 ---");
const result2 = getOrderDetails(orders, "delivered");
console.log(result2);
