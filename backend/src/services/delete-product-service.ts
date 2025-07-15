import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";

export class DeleteProductService {
  async execute(id: string) {
    const productExists = await prisma.produto.findUnique({ where: { id } });

    if (!productExists) {
      throw new AppError("Produto não encontrado", 404);
    }

    await prisma.produto.delete({ where: { id } });
  }
}
