import { Request, Response } from "express";
import { ListProductsService } from "@/services/list-products-service";
import { ShowProductService } from "@/services/show-product-service";
import { CreateProductService } from "@/services/create-product-service";
import { UpdateProductService } from "@/services/update-product-service";
import { DeleteProductService } from "@/services/delete-product-service";
import { z } from "zod";

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

  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().min(5),
      description: z.string().min(5),
      price: z.number().positive(),
      image: z.string(),
    });

    const data = bodySchema.parse(request.body);

    const service = new CreateProductService();
    const product = await service.execute(data);

    return response.status(201).json(product);
  }

  async update(request: Request, response: Response) {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const bodySchema = z.object({
      name: z.string().min(2).optional(),
      description: z.string().min(5).optional(),
      price: z.number().positive().optional(),
      image: z.string().url().optional(),
    });

    const { id } = paramsSchema.parse(request.params);
    const data = bodySchema.parse(request.body);

    const service = new UpdateProductService();
    const product = await service.execute({ id, ...data });

    return response.json(product);
  }

  async delete(request: Request, response: Response) {
    const paramsSchema = z.object({ id: z.string().uuid() });

    const { id } = paramsSchema.parse(request.params);

    const service = new DeleteProductService();
    await service.execute(id);

    return response.status(204).send();
  }
}
