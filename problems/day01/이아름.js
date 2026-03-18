const products = [
  { id: 1, name: "Apple", price: 100, quantity: 3 },
  { id: 2, name: "Banana", price: 200, quantity: 2 },
  { id: 3, name: "Cherry", price: 300, quantity: 1 },
];

/**
 * 커스텀 배열 메서드 구현하기
 * 요구사항
 * 1. map 메서드를 사용하여 각 상품의 총 가격(totalPrice = price * quantity)을 계산하는 배열을 반환하세요.
 * products.map((item) => item.price * item.quantity) 새 배열 생성
 * 2. filter 메서드를 사용하여 가격이 150 이상인 상품만 포함하는 배열을 반환하세요.
 * products.filter((item) => item.price >= 150) 새 배열 생성
 * 3. reduce 메서드를 사용하여 전체 장바구니의 총합을 계산하세요.
 * products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
 * 4. flat 메서드를 사용하여 여러 카테고리로 나누어진 상품 배열을 한 단계 평탄화하세요.
 * products.flat()
 */

// 요구사항 1
Array.prototype.customMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const transformed = callback(this[i], i, this);
    result.push(transformed);
  }

  return result;
};

const totalPrices = products.customMap((item) => item.price * item.quantity);
console.log(totalPrices); // 출력 > [300, 400, 300]

// 요구사항 2
Array.prototype.customFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const filterArray = products.customFilter((item) => item.price >= 150);
console.log(filterArray);
/* 출력
[
  { id: 2, name: 'Banana', price: 200, quantity: 2 },
  { id: 3, name: 'Cherry', price: 300, quantity: 1 }
]
*/

// 요구사항 3
Array.prototype.customReduce = function (callback, initialValue) {
  let result = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
};

const totalSum = products.customReduce(
  (acc, curr) => acc + curr.price * curr.quantity,
  0,
);
console.log(totalSum); // 출력 > 1000

// 요구사항 4
Array.prototype.customFlat = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result.push(...this[i]);
    } else {
      result.push(this[i]);
    }
  }

  return result;
};

// 이미 평탄화가 되어있어서 테스트 예제를 변경했습니다!
const categories = [[{ id: 1 }], [{ id: 2 }], [{ id: 3 }]];
console.log(categories.customFlat()); // 출력 > [ { id: 1 }, { id: 2 }, { id: 3 } ]
