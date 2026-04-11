interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Headphones", price: 100 },
  { id: 5, name: "Smartwatch", price: 200 },
];

function findProductCombinations(
  products: Product[],
  budget: number,
): Product[][] {
  const result: Product[][] = [];
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  function backtrack(
    startIndex: number,
    currentCombination: Product[],
    currentTotal: number,
  ) {
    if (currentCombination.length > 0) {
      result.push([...currentCombination]);
    }

    for (let i = startIndex; i < sortedProducts.length; i++) {
      const nextTotal = currentTotal + sortedProducts[i].price;

      if (nextTotal > budget) break;

      currentCombination.push(sortedProducts[i]);
      backtrack(i + 1, currentCombination, nextTotal);
      currentCombination.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}

// 테스트 실행 (예산 400)
const budget = 400;
const combinations = findProductCombinations(products, budget);
console.log(combinations);
