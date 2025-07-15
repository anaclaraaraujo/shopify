import { prisma } from "@/database/prisma";

interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  image: string;
}

export class CreateProductService {
  async execute(data: CreateProductDTO) {
    const product = await prisma.produto.create({ data });

    return product;
  }
}
