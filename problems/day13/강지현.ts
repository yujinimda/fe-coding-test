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

type OrderDetails<T extends OrderStatus> = {
  pending: Omit<Order, "status">;
  shipped: Pick<Order, "id" | "product"> & { trackingNumber: string };
  delivered: Pick<Order, "id" | "product"> & { deliveredAt: string };
}[T];

function getOrderDetails<T extends OrderStatus>(
  orders: Order[],
  status: T,
): OrderDetails<T>[] {
  return orders
    .filter((order) => order.status === status)
    .map((order) => {
      // status에 따라 다른 속성 반환
      if (status === "pending") {
        const { status: _, ...rest } = order;
        return rest as OrderDetails<T>;
      }
      if (status === "shipped")
        return {
          id: order.id,
          product: order.product,
          trackingNumber: "TRACK-123",
        } as OrderDetails<T>;
      return {
        id: order.id,
        product: order.product,
        deliveredAt: new Date().toISOString(),
      } as OrderDetails<T>;
    });
}

// pending 주문 조회
console.log(getOrderDetails(orders, "pending"));

// shipped 주문 조회
console.log(getOrderDetails(orders, "shipped"));

// delivered 주문 조회
console.log(getOrderDetails(orders, "delivered"));
