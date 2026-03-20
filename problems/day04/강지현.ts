type Customer = {
  name: string;
  email: string;
};

type Item = {
  name: string;
  price: number;
};

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
