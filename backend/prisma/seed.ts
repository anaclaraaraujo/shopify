import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
    data: [
      {
        name: "Tênis Nike Air Max",
        description: "Conforto e estilo para o dia a dia esportivo.",
        price: 599.9,
        image: "https://imgcentauro-a.akamaihd.net/1200x1200/98840051A9.jpg",
      },
      {
        name: "Bola de Futebol Adidas",
        description: "Bola oficial para jogos profissionais.",
        price: 199.9,
        image: "https://imgcentauro-a.akamaihd.net/1200x1200/9936590IA2.jpg",
      },
      {
        name: "Regata Esportiva Dry Fit",
        description: "Ideal para treinos com tecido respirável.",
        price: 79.9,
        image: "https://imgcentauro-a.akamaihd.net/1200x1200/M16J1W01A1.jpg",
      },
      {
        name: "Mochila Nike Training",
        description: "Mochila espaçosa para treinos e academia.",
        price: 249.9,
        image: "https://imgcentauro-a.akamaihd.net/1200x1200/M0VHPY03A10.jpg",
      },
      {
        name: "Luvas de Boxe Everlast",
        description: "Alta durabilidade para treinos intensos.",
        price: 349.9,
        image: "https://imgcentauro-a.akamaihd.net/1200x1200/M0I3R203A7.jpg",
      },
    ],
  });

  console.log("✅ Produtos esportivos adicionados com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
