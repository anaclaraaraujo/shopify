import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchProductById } from "@/services/api";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductDetailProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  if (!product) {
    return <p className="text-center mt-32 text-red-500">Produto não encontrado.</p>;
  }

  return (
    <main className="mt-32 container text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/">Produto</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{product.name}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12 mt-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </figure>
        </article>
        <div className="flex flex-col gap-6">
          <h1 className="text-heading-xl text-white">{product.name}</h1>
          <p className="text-gray-300 text-lg">{product.description}</p>
          <span className="text-blue-300 font-bold text-2xl">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: { params: { id: string } }) {
  try {
    const product = await fetchProductById(context.params.id);
    return { props: { product } };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return { props: { product: null } };
  }
}
