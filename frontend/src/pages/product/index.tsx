import { fetchProducts } from "@/services/api";
import { ProductCard } from "@/components/product-card/product-card";
import Head from "next/head";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductProps {
  products: Product[];
}

export default function Product({ products }: ProductProps) {
  return (
    <>
      <Head>
        <title>Loja Esportiva | Produtos</title>
        <meta
          name="description"
          content="Confira nossos produtos esportivos com qualidade, performance e preço justo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col py-24 flex-grow h-full">
        <header>
          <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
            <div className="flex flex-col gap-4 md:px-0">
              <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
                PRODUTOS
              </span>
              <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
                Produtos esportivos para impulsionar seu treino
              </h1>
            </div>
          </div>
        </header>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="text-center text-gray-300">Nenhum produto disponível</p>
          ) : (
            products.map((product) => (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return { props: { products: [] } };
  }
}
