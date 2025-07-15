import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";

interface UpdateProductDTO {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

export class UpdateProductService {
  async execute(data: UpdateProductDTO) {
    const { id, ...updateData } = data;

    const productExists = await prisma.produto.findUnique({ where: { id } });

    if (!productExists) {
      throw new AppError("Produto não encontrado", 404);
    }

    const updated = await prisma.produto.update({
      where: { id },
      data: updateData,
    });

    return updated;
  }
}
