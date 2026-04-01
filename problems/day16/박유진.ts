
// 실무에서는 상품 상세 페이지의 동적 라우트에서 params.id로 상품을 조회한 뒤, 그 응답값으로 generateMetadata에서 title, description, open graph, canonical 정보를 생성합니다. 페이지 렌더링과 메타데이터 생성이 같은 상품 조회 함수를 재사용하도록 분리하는 방식이 일반적입니다.

// ## 문제

// 쇼핑몰 상품 페이지에서 상품의 이름과 설명을 기반으로 SEO 메타데이터를 동적으로 생성하는 함수를 작성하세요. 이 함수는 Next.js의 generateMetadata 기능을 활용하여 상품 페이지의 메타데이터를 설정합니다.

// ## 코드

const product = {
  id: 101,
  name: 'Wireless Headphones',
  description: 'High quality wireless headphones with noise cancellation',
  price: 299.99
};

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// TODO: 여기에 구현하세요
function generateProductMetadata(product: ProductType): { title: string; description: string } {
  return {
    title: product.name,
    description: product.description,
  };
}


// ## 요구사항

// 1. 상품의 이름을 메타데이터의 title로 설정해야 합니다.
// 2. 상품의 설명을 메타데이터의 description으로 설정해야 합니다.
// 3. 메타데이터는 객체 형태로 반환되어야 합니다.


