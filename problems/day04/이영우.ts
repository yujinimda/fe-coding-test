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
  items: Item[];
};

const orderForm: OrderForm = {
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
  ],
};
