import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="block w-full max-w-sm rounded-xl border-[2px] border-gray-400 bg-gray-600 transition-colors hover:border-blue-400"
    >
      {/* Imagem */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col justify-between h-full">
        <h2 className="text-heading-sm text-white truncate">{name}</h2>

        w        <p className="text-gray-300 text-sm line-clamp-3 mt-2">{description}</p>

        <div className="border-t border-gray-400 mt-4 pt-4">
          <span className="text-blue-300 font-bold text-base">R$ {price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
