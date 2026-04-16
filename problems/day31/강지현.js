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
 * @param {number} productId - 계산할 제품의 고유 ID
 * @param {Object.<number, number>} [memo={}] - 이미 계산된 결과를 저장하는 메모 객체
 * @param {number} [index=0] - 현재 탐색 중인 제품 배열의 인덱스
 * @returns {number} 할인율이 적용된 최종 가격
 */
function calculateDiscountedPrice(productId, memo = {}, index = 0) {
  // 1. 메모리에 이미 있는지 확인 (탈출 조건)
  if (productId in memo) return memo[productId];

  // 2. 재귀 탈출 조건: 모든 제품을 확인한 경우
  if (index >= products.length) return 0;

  // 3. 현재 인덱스의 제품 확인
  const product = products[index];
  if (product.id === productId) {
    const discountInfo = discounts.find((d) => d.productId === productId);
    const rate = discountInfo ? discountInfo.discount : 0;
    const finalPrice = product.price * (1 - rate);
    memo[productId] = finalPrice;
    return finalPrice;
  }

  // 4. 다음 제품 확인을 위한 재귀 호출
  return calculateDiscountedPrice(productId, memo, index + 1);
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
