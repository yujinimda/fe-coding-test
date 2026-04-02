import { Metadata } from "next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export function generateProductMetadata(product: Product): Metadata {
  return {
    title: product.name,
    description: product.description,
  };
}
