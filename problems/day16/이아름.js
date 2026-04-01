const product = {
  id: 101,
  name: "Wireless Headphones",
  description: "High quality wireless headphones with noise cancellation",
  price: 299.99,
};

// TODO: 여기에 구현하세요
function generateProductMetadata(product) {
  return {
    title: product.name,
    description: product.description,
  };
}

console.log(generateProductMetadata(product));

// 실제로 Next.js에서 구현할 때는 데이터를 가져와서 동적으로 metadata를 만듬
/**
 * import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
 
  // fetch post information
  const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    res.json()
  )
 
  return {
    title: post.title,
    description: post.description,
  }
}
 
export default function Page({ params, searchParams }: Props) {}
 */
