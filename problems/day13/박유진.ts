
// 잘 몰랐던 부분이라 ai 쓰면서했습니다..!
// 쇼핑몰 주문 데이터를 기반으로 주문 상태에 따라 타입을 변환하는 mapped type을 작성하세요. 각 주문은 상태에 따라 다른 속성을 가질 수 있습니다.
// ## 코드


type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: 1, product: 'Laptop', price: 1200, quantity: 2, status: 'delivered' },
  { id: 2, product: 'Mouse', price: 25, quantity: 5, status: 'pending' },
  { id: 3, product: 'Keyboard', price: 75, quantity: 3, status: 'shipped' }
];

// 상태별 추가 속성을 mapped type으로 정의
// [K in OrderStatus] 각 상태를 순회
type StatusDetailsMap = {
  [K in OrderStatus]: K extends 'pending'
  ? { estimatedShipDate: string }  // 아직 안 보냈으니까 → 출발 예정일
  : K extends 'shipped'
      ? { trackingNumber: string; carrier: string } // 보냈으니까 → 운송장, 택배사
      : { deliveredDate: string; signature: string }; // 도착했으니까 → 도착일, 서명
}

// 공통 필드(Order) + 상태별 필드를 합침
type OrderDetails<T extends OrderStatus> = Order & StatusDetailsMap[T];

function getOrderDetails<T extends OrderStatus>(
  orders: Order[],
  status: T
): OrderDetails<T>[] {
  return orders
    .filter((order): order is Order & { status: T } => order.status === status)
    .map((order) => {
      const base = { ...order };

      switch (status) {
        case 'pending':
          return { ...base, estimatedShipDate: '2025-04-05' } as unknown as OrderDetails<T>;
        case 'shipped':
          return { ...base, trackingNumber: 'TRK-12345', carrier: 'FedEx' } as unknown as OrderDetails<T>;
        case 'delivered':
          return { ...base, deliveredDate: '2025-03-28', signature: 'John' } as unknown as OrderDetails<T>;
        default:
          return base as unknown as OrderDetails<T>;
      }
    });
}

// ## 요구사항

// 1. OrderStatus 타입은 'pending', 'shipped', 'delivered' 중 하나여야 합니다.
// 2. OrderDetails 타입은 주문 상태에 따라 다른 속성을 가져야 합니다.
// 3. getOrderDetails 함수는 주어진 상태에 맞는 주문의 상세 정보를 반환해야 합니다.
// 4. mapped type을 사용하여 OrderDetails 타입을 정의하세요.

