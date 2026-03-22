// --- data, type --- //
const VALID_CATEGORIES = [
  "electronics",
  "clothing",
  "home appliances",
] as const;
type ProductCategories = (typeof VALID_CATEGORIES)[number];

interface Product {
  id: number;
  name: string;
  category: ProductCategories;
}

const products: Product[] = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Shirt", category: "clothing" },
  { id: 3, name: "Coffee Maker", category: "home appliances" },
  { id: 4, name: "Headphones", category: "electronics" },
  { id: 5, name: "Jacket", category: "clothing" },
];

// --- page router 버전 --- //
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category: raw } = req.query;
  // req.query의 category는 string[] 타입일 수 있음
  // case -> ?category=a&category=b
  const category = Array.isArray(raw) ? raw[0] : raw;

  if (category) {
    if (!VALID_CATEGORIES.includes(category)) {
      return res.status(400).json("존재하지 않는 카테고리입니다.");
    }

    const filter = products.filter((p) => p.category === category);
    return res.status(200).json(filter);
  }

  return res.status(200).json(products);
}

// --- app router 버전 --- //
import { NextResponse } from "next/server";

export function GET(req: Request) {
  // app router는 req.url로 접근해야 함
  const { searchParams } = new URL(req.url);
  // 여기서 타입 단언을 하는 것보다
  const category = searchParams.get("category");

  if (category) {
    // 이 단계에서 타입을 맞추는게 좋음
    // searchParams로 가져온 게 string | null이기 때문에 string[]로 잠시 타입을 변경
    // readonly string[]은 읽기 전용 문자열 배열 (원본 성질 유지)
    if (!(VALID_CATEGORIES as readonly string[]).includes(category)) {
      return NextResponse.json("존재하지 않는 카테고리입니다.", {
        status: 400,
      });
    }

    const filter = products.filter((p) => p.category === category);
    return NextResponse.json(filter);
  }

  return NextResponse.json(products);
}
