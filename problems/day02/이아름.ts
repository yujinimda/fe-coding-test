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

// 여기서 GenericTypes를 사용하여 특정 키의 값을 변경하는 함수를 정의하세요.
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

/**
 * 커스텀 배열 메서드 구현하기
 * 요구사항
 * 1. 주어진 orders 배열에서 특정 주문(주문 ID) 의 product 값을 변경할 수 있어야 합니다.
 * 2. 주어진 orders 배열에서 특정 주문의 quantity 값을 변경할 수 있어야 합니다.
 * 3. 주어진 orders 배열에서 특정 주문의 price 값을 변경할 수 있어야 합니다.
 */

const ORDER_ID = 1;

// 요구사항 1
const updatedProductName = updateOrder(orders, ORDER_ID, "product", "Monitor");
console.log("--- 요구사항 1 ---");
console.log(updatedProductName);

// 요구사항 2
const updatedQuantity = updateOrder(orders, ORDER_ID, "quantity", 3);
console.log("--- 요구사항 2 ---");
console.log(updatedQuantity);

// 요구사항 3
const updatedPrice = updateOrder(orders, ORDER_ID, "price", 500);
console.log("--- 요구사항 3 ---");
console.log(updatedPrice);
