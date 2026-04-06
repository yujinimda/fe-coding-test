const orderStatus = ["pending", "shipped", "delivered"];

function updateOrderStatus() {
  console.log("Order update started");
  setTimeout(() => {
    console.log("Order status:", orderStatus[1]);
  }, 1000);

  Promise.resolve().then(() => {
    console.log("Order status:", orderStatus[2]);
  });

  console.log("Order update finished");
}

// TODO: 여기에 구현하세요
function predictExecutionOrder() {
  // 이 함수는 updateOrderStatus 함수의 console.log 실행 순서를 문자열 배열로 반환해야 합니다.
  return [
    "Order update started",
    "Order update finished",
    `Order status: ${orderStatus[2]}`,
    `Order status: ${orderStatus[1]}`,
  ];
}

// 실제 실행 확인
updateOrderStatus();

// 실행
console.log(predictExecutionOrder());
