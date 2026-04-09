// 타입 정의
interface Product {
  id: number;
  name: string;
  price: number;
}

interface AddProduct {
  type: "addProduct";
  payload: Omit<Product, "id">;
}

interface DeleteProduct {
  type: "deleteProduct";
  payload: Omit<Product, "name" | "price">;
}

interface UpdateProduct {
  type: "updateProduct";
  payload: Omit<Product, "name">;
}

type ButtonEvent = AddProduct | DeleteProduct | UpdateProduct;

const events: ButtonEvent[] = [
  { type: "addProduct", payload: { name: "New Product", price: 100 } },
  { type: "addProduct", payload: { name: "New Product2", price: 100 } },
  { type: "addProduct", payload: { name: "New Product3", price: 100 } },
  { type: "deleteProduct", payload: { id: 1 } },
  { type: "updateProduct", payload: { id: 2, price: 150 } },
];

// TODO: 여기에 구현하세요
type EventHandler = (event: ButtonEvent) => void;
let products: Product[] = [];
let nextId = 1;

function handleEvent(event: ButtonEvent) {
  const { type, payload } = event;

  switch (type) {
    case "addProduct":
      products.push({ ...payload, id: nextId++ });
      // 템플릿 리터럴로 console에 출력하면 자바스크립트는 객체를 강제로 문자열로 변환해서 자신의 타입을 보여줌
      console.log("상품 추가:", products);
      break;
    case "deleteProduct":
      products = products.filter((p) => p.id !== payload.id);
      console.log("상품 제거:", products);
      break;
    case "updateProduct":
      // map을 사용해서 치환
      products = products.map((p) =>
        p.id === payload.id ? { ...p, price: payload.price } : p,
      );
      console.log("상품 업데이트:", products);
      break;
  }
}

events.forEach((e) => handleEvent(e));
