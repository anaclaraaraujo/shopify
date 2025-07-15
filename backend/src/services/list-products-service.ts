import { prisma } from "@/database/prisma";

export class ListProductsService {
  async execute() {
    const products = await prisma.produto.findMany({
      orderBy: { createdAt: "desc" },
    });
    return products;
  }
}
