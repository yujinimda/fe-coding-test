const productData = {
  id: 101,
  name: "Wireless Headphones",
  price: 150,
  available: true,
};

function fetchProductData(productId) {
  // 이 함수는 실제로는 비동기 API 호출을 통해 데이터를 가져온다고 가정합니다.
  // 여기서는 간단히 데이터를 반환합니다.
  if (productId === 101) {
    return productData;
  } else if (productId === 404) {
    throw new Error("Product not found");
  } else {
    throw new Error("Unknown error");
  }
}

function renderProductPage(productId) {
  console.log("로딩 중");
  try {
    const data = fetchProductData(productId);
    console.log(`제품명: ${data.name}, 가격: ${data.price}`);
  } catch (error) {
    if (error.message === "Product not found") {
      console.error("제품을 찾을 수 없습니다.");
    } else {
      console.error("알 수 없는 에러가 발생했습니다.");
    }
  }
}

renderProductPage(101);
renderProductPage(404);
