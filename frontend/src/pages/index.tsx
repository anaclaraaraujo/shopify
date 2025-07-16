import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/api";
import { ProductCard } from "@/components/product-card/product-card";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error("Erro ao buscar produtos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              PRODUTOS
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Produtos esportivos para impulsionar seu treino
            </h1>
          </div>
        </div>
      </header>

      {/* Search */}

      {/* Listagem dos produtos */}
      {loading ? (
        <p className="text-center">Carregando produtos...</p>
      ) : (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard
                {...product} />
            </li>
          ))}
        </div>
      )}
    </div>
  );
}