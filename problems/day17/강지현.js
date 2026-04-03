/**
 * 장바구니를 생성
 * @returns {{ addItem: Function, removeItem: Function, getItems: Function }}
 */
function createCart() {
  // 외부에서 직접 접근할 수 없는 상품 목록
  const items = [];

  return {
    // 상품 추가
    addItem(product) {
      items.push(product);
    },
    // 상품 제거
    removeItem(productId) {
      // filter로 남길 항목 찾기
      const filtered = items.filter((item) => item.id !== productId);
      // 원본 배열을 직접 수정
      items.splice(0, items.length, ...filtered);
    },
    // 장바구니 조회
    getItems() {
      return items;
    },
  };
}

// 테스트
const cart = createCart();
cart.addItem({ id: 1, name: "Laptop", price: 1200 });
cart.addItem({ id: 2, name: "Mouse", price: 25 });
console.log(cart.getItems());
// [{ id: 1, name: 'Laptop', price: 1200 }, { id: 2, name: 'Mouse', price: 25 }]

console.log("=========================================");

cart.removeItem(1);
console.log(cart.getItems());
// [{ id: 2, name: 'Mouse', price: 25 }]

console.log("=========================================");

console.log(cart.items); // undefined (외부에서 직접 접근 불가)
