import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['info'],
});

async function main() {
  const habit = await prisma.habit.findMany();

  console.log(habit);
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
