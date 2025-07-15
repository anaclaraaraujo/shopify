import { Request, Response } from "express";
import { ListProductsService } from "@/services/list-products-service";
import { z } from "zod";
import { ShowProductService } from "@/services/show-product-service";

export class ProductsController {
  async index(request: Request, response: Response) {
    const service = new ListProductsService();
    const products = await service.execute();

    return response.json(products);
  }

  async show(request: Request, response: Response) {
    const bodySchema = z.object({ id: z.string().uuid() });

    const { id } = bodySchema.parse(request.params);

    const service = new ShowProductService();
    const product = await service.execute(id);

    return response.json(product);
  }
}
