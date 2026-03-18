const products = [
  { id: 1, name: "Apple", price: 100, quantity: 3 },
  { id: 2, name: "Banana", price: 200, quantity: 2 },
  { id: 3, name: "Cherry", price: 300, quantity: 1 },
];

// 1. map 메서드를 사용하여 각 상품의 총 가격(totalPrice = price * quantity)을 계산하는 배열을 반환하세요.
const totalPrice = products.map((prd) => prd.price * prd.quantity);
console.log(totalPrice);

// 2. filter 메서드를 사용하여 가격이 150 이상인 상품만 포함하는 배열을 반환하세요.
const filtered150 = products.filter((prd) => prd.price > 150);
console.log(filtered150);

// 3. reduce 메서드를 사용하여 전체 장바구니의 총합을 계산하세요.
const totalPrice2 = products.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);
console.log(totalPrice2);

// 4. flat 메서드를 사용하여 여러 카테고리로 나누어진 상품 배열을 한 단계 평탄화하세요.
console.log(products.flat());
