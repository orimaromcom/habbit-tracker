import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const testPost = await prisma.post.create({
    data: {
      id: 1,
      title: "first test",
      content: "another field",
      published: true,
    },
  });
  console.log(testPost);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;
