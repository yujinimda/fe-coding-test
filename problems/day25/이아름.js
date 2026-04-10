const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Headphones", price: 100 },
  { id: 5, name: "Smartwatch", price: 200 },
];

// TODO: 여기에 구현하세요
function findProductCombinations(products, budget) {
  const result = [];
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  function backtrack(시작, 현재_조합, 합계) {
    if (현재_조합.length > 0 && 합계 <= budget) {
      result.push([...현재_조합]);
    }

    // i++ > 다음 물건을 기준으로 조합을 찾기
    for (let i = 시작; i < sortedProducts.length; i++) {
      const product = sortedProducts[i];

      // 현재 합계 + 이후 물건의 가격이 budget을 넘기면 바로 break
      if (합계 + product.price > budget) {
        break;
      }

      현재_조합.push(product); // 선택
      // 현재 조합에서 어떤 걸 더 추가할 지 파악
      backtrack(i + 1, 현재_조합, 합계 + product.price);
      현재_조합.pop(); // 선택 해제 (백트래킹)
    }
  }

  backtrack(0, [], 0);

  return result;
}

console.log(findProductCombinations(products, 1000));
