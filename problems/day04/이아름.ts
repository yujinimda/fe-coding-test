interface Customer {
  name: string;
  email: string;
}

interface Item {
  name: string;
  price: number;
}

interface OrderFormType {
  customer: Customer;
  items: Item[];
}

const orderForm: OrderFormType = {
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
  ],
};
