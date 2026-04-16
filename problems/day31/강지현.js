const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const discounts = [
  { productId: 1, discount: 0.1 }, // 10% 할인
  { productId: 2, discount: 0.2 }, // 20% 할인
  { productId: 3, discount: 0.15 }, // 15% 할인
];

/**
 * 제품 ID를 기반으로 할인된 가격을 계산
 * * @param {number} productId - 계산할 제품의 고유 ID
 * @param {Object.<number, number>} [memo={}] - 이미 계산된 결과를 저장하는 메모 객체 (기본값: 빈 객체)
 * @returns {number} 할인율이 적용된 최종 가격 (할인 정보가 없으면 원가 반환)
 */
function calculateDiscountedPrice(productId, memo = {}) {
  // 1. 메모리에 이미 있는지 확인 (탈출 조건)
  if (productId in memo) return memo[productId];

  // 2. 제품 찾기 (find 사용)
  const product = products.find((p) => p.id === productId);
  if (!product) return 0; // 제품이 없으면 0이나 에러 처리

  // 3. 할인율 찾기
  const discountInfo = discounts.find((d) => d.productId === productId);
  const rate = discountInfo ? discountInfo.discount : 0;

  // 4. 결과 계산 및 메모리에 저장
  const finalPrice = product.price * (1 - rate);
  memo[productId] = finalPrice;

  // 5. 결과 반환
  return memo[productId];
}

// TEST
const testMemo = {};
console.log(
  "Test 1 (Laptop):",
  calculateDiscountedPrice(1, testMemo) === 900 ? "PASS" : "FAIL",
);
console.log("Test 2 (Memo Check):", testMemo[1] === 900 ? "PASS" : "FAIL");
console.log(
  "Test 3 (Non-existent):",
  calculateDiscountedPrice(99, testMemo) === 0 ? "PASS" : "FAIL",
);
