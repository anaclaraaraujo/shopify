import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";

export class ShowProductService {
  async execute(id: string) {
    const product = await prisma.produto.findUnique({ where: { id } });

    if (!product) {
      throw new AppError("Produto não encontrado", 404);
    }

    return product;
  }
}
