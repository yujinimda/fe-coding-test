import { Metadata } from "next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const product: Product = {
  id: 101,
  name: "Wireless Headphones",
  description: "High quality wireless headphones with noise cancellation",
  price: 299.99,
};

function generateProductMetadata(product: Product): Metadata {
  return {
    title: product.name,
    description: product.description,
  };
}
