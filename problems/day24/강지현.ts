interface Product {
  id: number;
  name: string;
  price: number;
}

type ButtonEvent =
  | { type: "addProduct"; payload: { name: string; price: number } }
  | { type: "deleteProduct"; payload: { id: number } }
  | { type: "updateProduct"; payload: { id: number; price: number } };

type EventHandler = (event: ButtonEvent) => void;

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
];

const events: ButtonEvent[] = [
  { type: "addProduct", payload: { name: "New Product", price: 100 } },
  { type: "deleteProduct", payload: { id: 1 } },
  { type: "updateProduct", payload: { id: 2, price: 150 } },
];

function handleEvent(event: ButtonEvent) {
  const { type, payload } = event;
  switch (type) {
    case "addProduct":
      products.push({ id: products.length + 1, ...payload });
      console.log(`상품 추가: ${payload.name}, 가격: ${payload.price}`);
      break;
    case "deleteProduct":
      const idx = products.findIndex((p) => p.id === payload.id);
      products.splice(idx, 1);
      console.log(`상품 제거: ${payload.id}`);
      break;
    case "updateProduct":
      const product = products.find((p) => p.id === payload.id);
      if (product) {
        product.price = payload.price;
      }
      console.log(`상품 업데이트: ${payload.id}, 가격: ${payload.price}`);
      break;
  }
}

// TEST
events.forEach((event) => handleEvent(event));
console.log(products);
