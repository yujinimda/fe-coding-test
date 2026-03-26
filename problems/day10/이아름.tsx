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

interface Params {
  id: string;
}

// TODO: 여기에 구현하세요
function getProductById(params: Params) {
  const { id } = params;

  return products.find((v) => v.id === id) ?? null;
}

console.log(getProductById({ id: "1" })); // 출력: { id: '1', name: 'Laptop', price: 1500 }
console.log(getProductById({ id: "999" })); // 출력: null

// Next.js app 라우터에서 함수를 사용한다면
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // next 15부터 params가 비동기로 변경됨
  const { id } = await params;
  const product = getProductById({ id });

  if (!product) {
    return <div>해당하는 상품이 없습니다.</div>;
  }

  return (
    <div>
      <span>{product.id}</span>
      <span>{product.name}</span>
      <span>{product.price}</span>
    </div>
  );
}
