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

  function backtrack(
    index: number,
    currentCombination: Product[],
    currentTotal: number,
  ) {
    // 예산을 초과하면 더 이상 탐색할 필요 없음 (가지치기)
    if (currentTotal > budget) {
      return;
    }

    // 모든 상품을 검사했다면 결과에 추가 (빈 조합 제외를 원하면 조건 추가 가능)
    if (index === products.length) {
      if (currentCombination.length > 0) {
        result.push([...currentCombination]);
      }
      return;
    }

    // 1. 현재 상품을 포함하는 경우
    currentCombination.push(products[index]);
    backtrack(
      index + 1,
      currentCombination,
      currentTotal + products[index].price,
    );

    // 2. 현재 상품을 포함하지 않는 경우 (백트래킹: 넣었던 걸 다시 뺌)
    currentCombination.pop();
    backtrack(index + 1, currentCombination, currentTotal);
  }

  backtrack(0, [], 0);
  return result;
}

// 테스트 실행 (예산 400)
const budget = 400;
const combinations = findProductCombinations(products, budget);
console.log(combinations);
