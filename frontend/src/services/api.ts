export async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");

  if (!response) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
