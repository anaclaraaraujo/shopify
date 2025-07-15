import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);
productsRoutes.get("/:id", productsController.show);

export { productsRoutes };
