// TODO: 여기에 구현하세요
function createCart() {
  // 외부에서 직접 접근할 수 없는 상품 목록
  let items = [];

  return {
    // 상품 추가
    addItem(product) {
      const isDuplicate = items.some((item) => item.id === product.id);
      if (isDuplicate) {
        console.log("이미 등록된 제품입니다.");
        return;
      }
      items.push(product);
    },
    // 상품 제거
    removeItem(productId) {
      items = items.filter((p) => p.id !== productId);
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
cart.addItem({ id: 1, name: "Laptop", price: 1200 });
cart.addItem({ id: 2, name: "Mouse", price: 25 });
console.log(cart.getItems());
// [{ id: 1, name: 'Laptop', price: 1200 }, { id: 2, name: 'Mouse', price: 25 }]

cart.removeItem(1);
console.log(cart.getItems());
// [{ id: 2, name: 'Mouse', price: 25 }]

console.log(cart.items); // undefined (외부에서 직접 접근 불가)
