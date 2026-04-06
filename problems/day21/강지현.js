const orderStatus = ["pending", "shipped", "delivered"];

/**
 * 주문 상태 업데이트 실행 순서를 콘솔에 출력
 * @returns {void}
 */
function updateOrderStatus() {
  // 1. 동기
  console.log("Order update started");

  setTimeout(() => {
    // 3. 매크로태스크
    console.log("Order status:", orderStatus[1]);
  }, 1000);

  Promise.resolve().then(() => {
    // 2. 마이크로태스크
    console.log("Order status:", orderStatus[2]);
  });

  // 1. 동기
  console.log("Order update finished");
}

/**
 * updateOrderStatus 함수의 console.log 실행 순서를 문자열 배열로 반환
 * @returns {Array<string>} updateOrderStatus 함수의 console.log 실행 순서
 */
function predictExecutionOrder() {
  return [
    "Order update started",
    "Order update finished",
    `Order status: ${orderStatus[2]}`,
    `Order status: ${orderStatus[1]}`,
  ];
}

// TEST
console.log("=== predictExecutionOrder ===");
console.log(predictExecutionOrder());

console.log("---");

console.log("=== updateOrderStatus ===");
updateOrderStatus();
