import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function create() {
  await prisma.user.create({
    data: {
      email: `test@gmail.com`,
    },
  });
}

create()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
