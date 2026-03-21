// 쇼핑몰에서 주문 폼 데이터를 관리하기 위한 타입을 설계하세요.
// 주문에는 고객 정보와 주문 상품 목록이 포함됩니다.
// 각 상품은 이름과 가격을 가지고 있습니다.

// 1.주문 폼 데이터 타입을 정의하세요.
// 2.주문 폼 데이터는 고객 정보와 상품 목록을 포함해야 합니다.
// 3.고객 정보는 이름과 이메일을 포함해야 합니다.
// 4.상품 목록의 각 상품은 이름과 가격을 포함해야 합니다.

type Customer = {
  name: string;
  email: string;
};

type Item = {
  name: string;
  price: number;
};

// TODO: 주문 폼 데이터를 위한 타입을 정의하세요.
type OrderForm = {
  customer: Customer;
  items: Item[]; // 배열안했어서 ai 검증받고 수정
}

const orderForm = {
  customer: {
    name: "John Doe",
    email: "john.doe@example.com"
  },
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 }
  ]
};

