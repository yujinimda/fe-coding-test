interface Product {
  id: string;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: "1", name: "Laptop", price: 1500 },
  { id: "2", name: "Smartphone", price: 800 },
  { id: "3", name: "Tablet", price: 600 },
];

type Params = {
  id: string;
};

function getProductById(params: Params): Product | null {
  const { id } = params;
  const product = products.find((p) => p.id === id);
  return product ?? null;
}
