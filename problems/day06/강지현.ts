const CATEGORIES = ["electronics", "clothing", "home appliances"] as const;

type ProductCategories = (typeof CATEGORIES)[number];

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

// Page Router
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category: categoryInit } = req.query;
  const category = Array.isArray(categoryInit) ? categoryInit[0] : categoryInit;

  if (category) {
    if (!CATEGORIES.some((c) => c === category)) {
      return res.status(400).json({ error: "존재하지 않는 카테고리입니다." });
    }

    const filter = products.filter((p) => p.category === category);
    return res.status(200).json(filter);
  }

  return res.status(200).json(products);
}

// App Router
import { NextResponse } from "next/server";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (category) {
    if (!CATEGORIES.some((c) => c === category)) {
      return NextResponse.json(
        { error: "존재하지 않는 카테고리입니다." },
        {
          status: 400,
        },
      );
    }

    const filter = products.filter((p) => p.category === category);
    return NextResponse.json(filter);
  }

  return NextResponse.json(products);
}
