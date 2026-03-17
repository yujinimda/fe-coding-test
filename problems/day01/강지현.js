/**
 * 개별 상품의 총 가격을 계산합니다. (상품의 가격 * 상품의 수량)
 * @param {object} product 상품 객체
 * @param {number} product.price 상품의 가격
 * @param {number} product.quantity 상품의 수량
 * @returns {number} 해당 상품의 총 가격
 */
const getProductTotalPrice = (product) => {
  return product.price * product.quantity;
};

/**
 * 모든 상품에 totalPrice(상품의 총 가격)을 추가한 새 배열을 반환합니다.
 * @param {Array<object>} products 원본 상품 배열
 * @returns {Array<object>} totalPrice가 포함된 상품 배열
 */
const getProductsWithTotalPrice = (products) => {
  return products.map((item) => ({
    ...item,
    totalPrice: getProductTotalPrice(item),
  }));
};

/**
 * 기준 가격 이상의 상품만 포함하는 새 배열을 반환합니다.
 * @param {Array<object>} products 원본 상품 배열
 * @param {number} minPrice 기준 가격 (기본값 150)
 * @returns {Array<object>} 기준 가격 이상의 상품 배열
 */
const getProductsOverPrice = (products, minPrice = 150) => {
  return products.filter((item) => item.price >= minPrice);
};

/**
 * 전체 장바구니의 총합을 계산합니다.
 * @param {Array<object>} products 원본 상품 배열
 * @returns {number} 전체 상품의 총합
 */
const getTotalCartPrice = (products) => {
  return products.reduce((acc, item) => acc + getProductTotalPrice(item), 0);
};

/**
 * 여러 카테고리로 나눠진 상품 배열을 한 단계 평탄화합니다.
 * @param {Array<Array<object>>} categories 여러 카테고리로 나눠진 원본 상품 배열
 * @returns {Array<object>} 평탄화된 상품 배열
 */
const getFlattenedProducts = (categories) => {
  return categories.flat();
};

/**
 * 실행 테스트용 함수
 */
const runTests = () => {
  const products = [
    { id: 1, name: "Apple", price: 200, quantity: 3 },
    { id: 2, name: "Banana", price: 100, quantity: 2 },
    { id: 3, name: "Cherry", price: 300, quantity: 1 },
  ];

  const categories = [
    [
      { id: 1, name: "Apple", price: 200, quantity: 3 },
      { id: 2, name: "Banana", price: 100, quantity: 2 },
      { id: 3, name: "Cherry", price: 300, quantity: 1 },
    ],
    [
      { id: 11, name: "Carrot", price: 150, quantity: 3 },
      { id: 12, name: "Potato", price: 250, quantity: 2 },
      { id: 13, name: "Onion", price: 350, quantity: 1 },
    ],
  ];

  console.log("1. \n", getProductsWithTotalPrice(products));
  console.log("============================================");
  console.log("2. ", getProductsOverPrice(products));
  console.log("============================================");
  console.log("3. \n", getTotalCartPrice(products));
  console.log("============================================");
  console.log("4. \n", getFlattenedProducts(categories));
};

runTests();
