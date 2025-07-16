import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("ProductsController", () => {
  let createdProductId: string;

  afterAll(async () => {
    await prisma.produto.deleteMany();
    await prisma.$disconnect();
  });

  it("should create a new product", async () => {
    const response = await request(app).post("/products").send({
      name: "Tênis Esportivo",
      description: "Confortável e moderno",
      price: 199.99,
      image: "https://example.com/tenis.png",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");

    createdProductId = response.body.id;
  });

  it("should list all products", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should show a single product by ID", async () => {
    const response = await request(app).get(`/products/${createdProductId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", createdProductId);
  });

  it("should update a product", async () => {
    const response = await request(app)
      .patch(`/products/${createdProductId}`)
      .send({
        name: "Tênis Atualizado",
        price: 149.99,
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Tênis Atualizado");
    expect(response.body.price).toBe(149.99);
  });

  it("should delete a product", async () => {
    const response = await request(app).delete(`/products/${createdProductId}`);

    expect(response.status).toBe(204);

    const verify = await request(app).get(`/products/${createdProductId}`);
    expect(verify.status).toBe(404);
  });
});
