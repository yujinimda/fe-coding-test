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
  const { category } = req.query;

  if (category && !VALID_CATEGORIES.includes(category)) {
    return res.status(400).json("존재하지 않는 카테고리입니다.");
  }

  if (category) {
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
  const category = searchParams.get("category") as ProductCategories | null;

  if (category && !VALID_CATEGORIES.includes(category)) {
    return NextResponse.json("존재하지 않는 카테고리입니다.", { status: 400 });
  }

  if (category) {
    const filter = products.filter((p) => p.category === category);
    return NextResponse.json(filter);
  }

  return NextResponse.json(products);
}
