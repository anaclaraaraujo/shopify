export async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");

  if (!response) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}

export async function fetchProductById(id: string) {
  const response = await fetch(`http://localhost:3333/products/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar produto");
  }

  return response.json();
}
